import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { COMPANIES, MATH_SUBJECTS, NEGOTIATIONS, PROJECTS, TRACKS, WEEK_SETS, TASK_BANK, type MockSession, type Gig, type JobPosting } from "./data";

/* ── types ────────────────────────────────────────────────────────── */
export type PlanTask = {
  id: string;
  bankId: string;
  cat: string;
  title: string;
  detail: string;
  done: boolean;
  carriedFrom?: string;
  adhoc?: boolean;
};
export type Contest = { id: string; name: string; date: string; delta: number; rank: number };

export type NexusState = {
  startDate: string | null;
  activated: boolean;
  trackDone: Record<string, number>;
  habitLog: Record<string, string[]>;
  projects: Record<string, number>;
  cp: { rating: number; cf: number; lc: number; contests: Contest[]; topics: Record<string, boolean> };
  math: Record<string, { lectures: number; problems: number }>;
  checklists: Record<string, boolean[]>;
  savings: number;
  bufferTarget: number;
  negotiations: Record<string, { triggers: boolean[]; done: boolean }>;
  jobs: {
    postings: JobPosting[];
  };
  review: Record<string, boolean>;
  activity: Record<string, number>;
  snapshots: { d: string; v: number }[];
  plans: Record<string, PlanTask[]>;
  planIssued: string[];
  quarterChecks: Record<string, boolean[]>;
  mocks: MockSession[];
  designDocs: Record<string, { status: number; link: string }>;
  incomeActual: { m: string; v: number }[];
  freelance: {
    active: Record<string, boolean>;
    gigs: Gig[];
    extra: string[];
    links: { github: string; resume: string; portfolio: string };
    pipeline: Record<string, number>;
    tasks: { id: string; platform: string; hours: number; rate: number; date: string }[];
  };
};

const defaults = (): NexusState => ({
  startDate: null,
  activated: false,
  trackDone: Object.fromEntries(TRACKS.map((t) => [t.id, 0])),
  habitLog: {},
  projects: Object.fromEntries(PROJECTS.map((p) => [p.id, 0])),
  cp: { rating: 0, cf: 0, lc: 0, contests: [], topics: {} },
  math: Object.fromEntries(MATH_SUBJECTS.map((s) => [s.id, { lectures: 0, problems: 0 }])),
  checklists: Object.fromEntries(COMPANIES.map((c) => [c.id, c.checklist.map(() => false)])),
  savings: 0,
  negotiations: Object.fromEntries(NEGOTIATIONS.map((n) => [n.id, { triggers: n.triggers.map(() => false), done: false }])),
  review: {},
  activity: {},
  snapshots: [],
  plans: {},
  planIssued: [],
  quarterChecks: {},
  mocks: [],
  designDocs: {},
  incomeActual: [],
  freelance: { active: {}, gigs: [], extra: [], links: { github: "", resume: "", portfolio: "" }, pipeline: {}, tasks: [] },
  bufferTarget: 750,
  jobs: { postings: [] },
});

/* ── operator profiles (multi-user) ────────────────────────────────── */
export type Profile = { id: string; name: string; startDate: string };
const PKEY = "nexus-profiles-v1";
const AKEY = "nexus-active-v1";
/* v3 generation: deliberately orphans every earlier saved state so polluted
   test data (the infamous 56%) can never resurface — all operators start clean */
const stateKey = (id: string) => `nexus-state-v3::${id}`;

export function loadProfiles(): Profile[] {
  try { return JSON.parse(localStorage.getItem(PKEY) ?? "[]") as Profile[]; } catch { return []; }
}
export function saveProfiles(p: Profile[]) { try { localStorage.setItem(PKEY, JSON.stringify(p)); } catch { /* noop */ } }
export function loadActive(): string | null { return localStorage.getItem(AKEY); }
export function saveActive(id: string | null) {
  try { id ? localStorage.setItem(AKEY, id) : localStorage.removeItem(AKEY); } catch { /* noop */ }
}

const merge = (raw: unknown): NexusState => {
  const d = defaults();
  if (!raw || typeof raw !== "object") return d;
  const saved = raw as Partial<NexusState>;
  return {
    ...d,
    ...saved,
    trackDone: { ...d.trackDone, ...(saved.trackDone ?? {}) },
    projects: { ...d.projects, ...(saved.projects ?? {}) },
    math: { ...d.math, ...(saved.math ?? {}) },
    checklists: { ...d.checklists, ...(saved.checklists ?? {}) },
    negotiations: { ...d.negotiations, ...(saved.negotiations ?? {}) },
    cp: { ...d.cp, ...(saved.cp ?? {}), topics: { ...d.cp.topics, ...(saved.cp?.topics ?? {}) } },
    habitLog: saved.habitLog ?? {},
    review: saved.review ?? {},
    activity: saved.activity ?? {},
    snapshots: Array.isArray(saved.snapshots) ? saved.snapshots : [],
    plans: saved.plans ?? {},
    planIssued: Array.isArray(saved.planIssued) ? saved.planIssued : [],
    quarterChecks: saved.quarterChecks ?? {},
    mocks: Array.isArray(saved.mocks) ? saved.mocks : [],
    designDocs: saved.designDocs ?? {},
    incomeActual: Array.isArray(saved.incomeActual) ? saved.incomeActual : [],
    freelance: { ...d.freelance, ...(saved.freelance ?? {}), links: { ...d.freelance.links, ...(saved.freelance?.links ?? {}) }, gigs: saved.freelance?.gigs ?? [], extra: saved.freelance?.extra ?? [], active: saved.freelance?.active ?? {}, pipeline: saved.freelance?.pipeline ?? {}, tasks: saved.freelance?.tasks ?? [] },
    bufferTarget: saved.bufferTarget ?? 750,
    jobs: { postings: saved.jobs?.postings ?? [] },
  };
};

const loadFor = (id: string): NexusState => {
  try {
    return merge(JSON.parse(localStorage.getItem(stateKey(id)) ?? "null"));
  } catch {
    return defaults();
  }
};

/* ── context ──────────────────────────────────────────────────────── */
type Ctx = {
  state: NexusState;
  set: (fn: (s: NexusState) => NexusState) => void;
  restore: (raw: unknown) => boolean;
  reset: () => void;
  profile: Profile;
  profiles: Profile[];
  patchProfile: (patch: Partial<Profile>) => void;
  switchProfile: (id: string) => void;
  createProfile: (name: string, startDate: string) => void;
  deleteProfile: (id: string) => void;
};

const NexusCtx = createContext<Ctx | null>(null);

type ProviderProps = {
  profile: Profile;
  profiles: Profile[];
  patchProfile: (patch: Partial<Profile>) => void;
  switchProfile: (id: string) => void;
  createProfile: (name: string, startDate: string) => void;
  deleteProfile: (id: string) => void;
  children: ReactNode;
};

export function NexusProvider({ profile, profiles, patchProfile, switchProfile, createProfile, deleteProfile, children }: ProviderProps) {
  const [state, setState] = useState<NexusState>(() => loadFor(profile.id));

  /* per-operator persistence */
  useEffect(() => {
    try {
      localStorage.setItem(stateKey(profile.id), JSON.stringify(state));
    } catch {
      /* storage full / private mode — run in-memory */
    }
  }, [state, profile.id]);

  /* seed the arc start from the operator profile */
  useEffect(() => {
    setState((s) => (s.startDate ? s : { ...s, startDate: profile.startDate }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile.id]);

  /* console edits to the start date flow back into the profile */
  useEffect(() => {
    if (state.startDate && state.startDate !== profile.startDate) patchProfile({ startDate: state.startDate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.startDate]);

  /* daily progress snapshot — one entry per day, updated in place */
  useEffect(() => {
    const today = todayKey();
    const v = Math.round(sectionProgress(state).overall * 10) / 10;
    setState((s) => {
      const last = s.snapshots[s.snapshots.length - 1];
      if (last?.d === today) {
        return last.v === v ? s : { ...s, snapshots: [...s.snapshots.slice(0, -1), { d: today, v }] };
      }
      return { ...s, snapshots: [...s.snapshots, { d: today, v }].slice(-1500) };
    });
  }, [state]);

  const value = useMemo<Ctx>(
    () => ({
      state,
      set: (fn) => setState((s) => fn(s)),
      restore: (raw) => {
        if (!raw || typeof raw !== "object") return false;
        setState(merge(raw));
        return true;
      },
      reset: () => {
        localStorage.removeItem(stateKey(profile.id));
        setState({ ...defaults(), startDate: state.startDate });
      },
      profile,
      profiles,
      patchProfile,
      switchProfile,
      createProfile,
      deleteProfile,
    }),
    [state, profile, profiles, patchProfile, switchProfile, createProfile, deleteProfile]
  );
  return <NexusCtx.Provider value={value}>{children}</NexusCtx.Provider>;
}

export function useNexus() {
  const ctx = useContext(NexusCtx);
  if (!ctx) throw new Error("useNexus outside provider");
  return ctx;
}

/* ── date & derived helpers ───────────────────────────────────────── */
export const DAY_MS = 86_400_000;
const QUARTER_DAYS = 91.3125;

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function dayNumber(startDate: string | null, d = new Date()): number {
  if (!startDate) return 0;
  const start = new Date(startDate + "T00:00:00");
  return Math.max(0, Math.floor((d.getTime() - start.getTime()) / DAY_MS) + 1);
}

export function quarterIndex(startDate: string | null): number {
  const d = dayNumber(startDate) - 1;
  if (d < 0) return 0;
  return Math.min(15, Math.floor(d / QUARTER_DAYS));
}

export function habitStreak(log: Record<string, string[]>, id: string): number {
  let streak = 0;
  const cursor = new Date();
  const todayDone = (log[todayKey(cursor)] ?? []).includes(id);
  if (!todayDone) cursor.setDate(cursor.getDate() - 1); // streak survives an unfinished today
  for (;;) {
    if ((log[todayKey(cursor)] ?? []).includes(id)) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else break;
  }
  return streak;
}

export function phaseFor(qi: number): string {
  if (qi <= 3) return "FOUNDATION";
  if (qi <= 7) return "STABILIZATION";
  if (qi <= 11) return "SPECIALIZATION";
  return "THE PUSH";
}

export function clamp(n: number, lo = 0, hi = 100) {
  return Math.min(hi, Math.max(lo, n));
}

/* per-section progress 0..100 */
export function sectionProgress(s: NexusState) {
  const trackPct =
    TRACKS.reduce((a, t) => a + (s.trackDone[t.id] ?? 0) / t.tasks.length, 0) / TRACKS.length;
  const projPct =
    PROJECTS.reduce((a, p) => a + (s.projects[p.id] ?? 0), 0) / PROJECTS.length;
  const cpPct = clamp((s.cp.rating / 2000) * 100);
  const mathPct =
    MATH_SUBJECTS.reduce((a, m) => {
      const r = s.math[m.id] ?? { lectures: 0, problems: 0 };
      return a + (r.lectures / m.lectures + r.problems / m.problems) / 2;
    }, 0) / MATH_SUBJECTS.length;
  const ready = COMPANIES.filter((c) => (s.checklists[c.id] ?? []).every(Boolean)).length;
  const coPct = (ready / COMPANIES.length) * 100;
  const timePct = ((quarterIndex(s.startDate) + 1) / 16) * 100;
  const planTasks = Object.values(s.plans).flat();
  const planDone = planTasks.filter((t) => t.done).length;
  const todoPct = planTasks.length ? (planDone / planTasks.length) * 100 : 0;
  const overall = clamp(trackPct * 13 + projPct * 23 + cpPct * 18 + mathPct * 13 + coPct * 12 + todoPct * 12 + timePct * 9);
  return { trackPct: trackPct * 100, projPct, cpPct, mathPct: mathPct * 100, coPct, timePct, todoPct, planDone, planTotal: planTasks.length, overall, ready };
}

export const bumpActivity = (s: NexusState, delta = 1): NexusState => {
  const k = todayKey();
  return { ...s, activity: { ...s.activity, [k]: Math.max(0, (s.activity[k] ?? 0) + delta) } };
};

/* ── daily plan generator ─────────────────────────────────────────── */
const PLAN_CAP = 7;

export function ensurePlan(s: NexusState, dayKey: string): NexusState {
  /* regenerate when absent OR when a poisoned empty plan was persisted */
  if ((s.plans[dayKey] ?? []).length > 0) return s;
  const dow = new Date(dayKey + "T12:00:00").getDay();
  const cats = WEEK_SETS[dow];

  /* bank tasks completed on any day — these never carry again */
  const doneBank = new Set<string>();
  Object.values(s.plans).forEach((arr) => arr.filter((t) => t.done).forEach((t) => doneBank.add(t.bankId)));

  /* carry forward: missed tasks whose skill is addressed today (earliest miss wins) */
  const carried: PlanTask[] = [];
  const seen = new Set<string>();
  Object.keys(s.plans)
    .filter((d) => d < dayKey)
    .sort()
    .forEach((d) => {
      (s.plans[d] ?? []).forEach((t) => {
        if (!t.done && !seen.has(t.bankId) && !doneBank.has(t.bankId) && cats.includes(t.cat)) {
          seen.add(t.bankId);
          carried.push({ ...t, id: `${dayKey}:${t.bankId}`, done: false, carriedFrom: d });
        }
      });
    });

  /* fresh tasks, alternating across today's skill set */
  const issued = new Set(s.planIssued);
  const freshIssued: string[] = [];
  const fresh: PlanTask[] = [];
  const inPlan = (bankId: string) =>
    carried.some((c) => c.bankId === bankId) || fresh.some((f) => f.bankId === bankId);

  let guard = 0;
  while (carried.length + fresh.length < PLAN_CAP && guard++ < 40) {
    let added = false;
    for (const cat of cats) {
      if (carried.length + fresh.length >= PLAN_CAP) break;
      const pool = TASK_BANK.filter((t) => t.cat === cat);
      if (pool.length === 0) continue;
      let pick = pool.find((t) => !issued.has(t.id) && !inPlan(t.id));
      if (!pick) pick = pool.find((t) => !inPlan(t.id));
      if (!pick) continue;
      issued.add(pick.id);
      freshIssued.push(pick.id);
      fresh.push({ id: `${dayKey}:${pick.id}`, bankId: pick.id, cat: pick.cat, title: pick.title, detail: pick.detail, done: false });
      added = true;
    }
    if (!added) break;
  }

  return {
    ...s,
    plans: { ...s.plans, [dayKey]: [...carried, ...fresh] },
    planIssued: [...s.planIssued, ...freshIssued],
  };
}

export const fmtMoney = (n: number) =>
  "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
