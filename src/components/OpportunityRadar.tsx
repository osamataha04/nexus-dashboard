import { useMemo, useState } from "react";
import {
  JOB_PLATFORMS,
  FREELANCE_PLATFORMS,
  SEARCH_PRESETS,
  type JobPosting,
} from "../data";
import { useNexus, sectionProgress, todayKey, type NexusState } from "../store";
import { Icon, Meter, Reveal, useToast } from "./ui";

/* ── match scoring against the operator's live capability profile ─── */
function scoreFor(kind: JobPosting["kind"], s: NexusState): number {
  const p = sectionProgress(s);
  const streamsOn = Object.values(s.freelance.active).filter(Boolean).length;
  const wins = s.freelance.gigs.filter((g) => g.status === "won").length;
  if (kind === "Full-time" || kind === "Internship") {
    return Math.round(
      Math.min(100, p.timePct * 0.35 + p.cpPct * 0.3 + p.projPct * 0.2 + p.coPct * 0.15)
    );
  }
  return Math.round(
    Math.min(100, 25 + streamsOn * 7 + wins * 5 + p.trackPct * 0.2 + p.projPct * 0.15)
  );
}
const scoreColor = (v: number) => (v < 40 ? "#ff5c7a" : v < 70 ? "#ffb224" : "#6fdd8b");

const POST_STATUS: { id: JobPosting["status"]; label: string; c: string }[] = [
  { id: "radar", label: "RADAR", c: "#8e9cc0" },
  { id: "applied", label: "APPLIED", c: "#45c8e8" },
  { id: "interview", label: "INTERVIEW", c: "#ffb224" },
  { id: "offer", label: "OFFER", c: "#6fdd8b" },
  { id: "rejected", label: "REJECTED", c: "#ff5c7a" },
];
const nextStatus = (s: JobPosting["status"]): JobPosting["status"] =>
  s === "radar" ? "applied" : s === "applied" ? "interview" : s === "interview" ? "offer" : "offer";

export default function OpportunityRadar() {
  const { state, set } = useNexus();
  const { show, node } = useToast();
  const [preset, setPreset] = useState(SEARCH_PRESETS[0].id);
  const [form, setForm] = useState({ title: "", company: "", url: "", platform: JOB_PLATFORMS[0].name, kind: "Full-time" as JobPosting["kind"] });

  const q = (SEARCH_PRESETS.find((p) => p.id === preset) ?? SEARCH_PRESETS[0]).q;
  const postings = state.jobs.postings;
  const tasks = state.freelance.tasks;

  const earningsByPlatform = useMemo(() => {
    const map = new Map<string, number>();
    tasks.forEach((t) => map.set(t.platform, (map.get(t.platform) ?? 0) + t.hours * t.rate));
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, [tasks]);
  const totalEarned = tasks.reduce((a, t) => a + t.hours * t.rate, 0);

  const addPosting = () => {
    if (!form.title.trim() || !form.company.trim()) return show("Title and company are required.", "#ff5c7a");
    const posting: JobPosting = {
      id: `job-${Date.now()}`,
      title: form.title.trim(),
      company: form.company.trim(),
      url: form.url.trim(),
      platform: form.platform,
      kind: form.kind,
      status: "radar",
      score: scoreFor(form.kind, state),
      added: todayKey(),
    };
    set((s) => ({ ...s, jobs: { postings: [posting, ...s.jobs.postings] } }));
    setForm({ ...form, title: "", company: "", url: "" });
    show(`Added — match score ${posting.score}% against your current profile.`, scoreColor(posting.score));
  };

  const movePosting = (id: string, status: JobPosting["status"]) =>
    set((s) => ({ ...s, jobs: { postings: s.jobs.postings.map((p) => (p.id === id ? { ...p, status } : p)) } }));
  const removePosting = (id: string) =>
    set((s) => ({ ...s, jobs: { postings: s.jobs.postings.filter((p) => p.id !== id) } }));

  const sweep = () => {
    JOB_PLATFORMS.forEach((p) => window.open(p.url(q), "_blank", "noopener"));
    show("12 sweeps launched — if your browser blocked popups, allow them for this site once.", "#45c8e8");
  };

  return (
    <div className="mt-8">
      {node}

      {/* header */}
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-md border border-cyan/50 bg-cyan/10 text-cyan">
            <Icon name="radar" size={17} />
          </span>
          <div className="flex-1 min-w-[240px]">
            <h3 className="display font-bold text-2xl text-snow leading-tight">Opportunity Radar</h3>
            <p className="text-[12px] text-fog mt-0.5">
              Every reliable board, one sweep. Log every posting you touch — each gets a live match score against your skills, projects and rating.
            </p>
          </div>
          <button className="btn btn-amber flex items-center gap-2" onClick={sweep}>
            <Icon name="upload" size={12} /> OPEN ALL 12 SWEEPS
          </button>
        </div>
      </Reveal>

      {/* search preset */}
      <Reveal delay={60} className="mt-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="kicker text-[9px] text-fog mr-1">search lens</span>
          {SEARCH_PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => setPreset(p.id)}
              className={`mono text-[10px] px-3 py-1.5 rounded-full border transition-all cursor-pointer ${preset === p.id ? "border-cyan text-cyan bg-cyan/10" : "border-edge text-fog hover:text-mist hover:border-edge2"}`}
            >
              {p.label}
            </button>
          ))}
          <span className="mono text-[10px] text-fog/70 ml-auto">links pre-built for: “{q}” · past week</span>
        </div>
      </Reveal>

      {/* job boards */}
      <Reveal delay={110} className="mt-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {JOB_PLATFORMS.map((p) => (
            <a
              key={p.id}
              href={p.url(q)}
              target="_blank"
              rel="noreferrer"
              className="panel panel-hover p-4 group flex flex-col"
              style={{ ["--edge-hi" as string]: `${p.color}55` }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full flex-none" style={{ background: p.color }} />
                <span className="display font-semibold text-[14px] text-snow group-hover:text-mist transition-colors">{p.name}</span>
                <Icon name="chevR" size={12} className="text-fog/40 group-hover:text-snow group-hover:translate-x-0.5 transition-all ml-auto" />
              </div>
              <p className="text-[11px] text-fog leading-snug mt-2">{p.note}</p>
              <span className="kicker text-[8px] mt-3" style={{ color: p.color }}>open “{q}” sweep ↗</span>
            </a>
          ))}
        </div>
      </Reveal>

      {/* posting inbox */}
      <Reveal delay={140} className="mt-5">
        <div className="panel p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="kicker text-cyan">Opportunity Inbox</span>
            <span className="mono text-[10px] text-fog">
              {postings.length} logged · {postings.filter((p) => p.status === "interview" || p.status === "offer").length} in play
            </span>
          </div>

          {/* add form */}
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_0.9fr_0.8fr_auto] gap-2">
            <input type="text" placeholder="role title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <input type="text" placeholder="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            <input type="text" placeholder="link (optional)" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} />
            <select value={form.platform} onChange={(e) => setForm({ ...form, platform: e.target.value })}>
              {[...JOB_PLATFORMS.map((p) => p.name), "Direct", "Referral", "Other"].map((n) => <option key={n}>{n}</option>)}
            </select>
            <select value={form.kind} onChange={(e) => setForm({ ...form, kind: e.target.value as JobPosting["kind"] })}>
              {(["Full-time", "Part-time", "Freelance", "Internship", "Contract"] as const).map((k) => <option key={k}>{k}</option>)}
            </select>
            <button className="btn btn-amber flex items-center justify-center gap-1.5" onClick={addPosting}>
              <Icon name="plus" size={11} /> LOG
            </button>
          </div>

          {/* pipeline */}
          <div className="mt-4">
            {POST_STATUS.map((st) => {
              const list = postings.filter((p) => p.status === st.id);
              return (
                <div key={st.id} className="flex items-start gap-3 py-2.5 border-b border-edge/50 last:border-0">
                  <span className="mono text-[9px] w-20 flex-none pt-1.5" style={{ color: st.c }}>{st.label} · {list.length}</span>
                  <div className="flex-1 flex flex-wrap gap-2">
                    {list.length === 0 && <span className="mono text-[9px] text-fog/40 pt-1.5">—</span>}
                    {list.map((p) => (
                      <div key={p.id} className={`rounded-md border px-3 py-2 group flex items-center gap-2.5 ${p.status === "rejected" ? "opacity-50" : ""}`} style={{ borderColor: `${st.c}44`, background: `${st.c}0a` }}>
                        <div>
                          <div className="display font-semibold text-[12.5px] text-snow leading-tight">{p.title}</div>
                          <div className="mono text-[8.5px] text-fog mt-0.5">
                            {p.company} · {p.platform} · {p.kind} · {p.added}
                            {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="text-cyan hover:underline ml-1.5">link ↗</a>}
                          </div>
                        </div>
                        <span className="mono text-[10px] font-bold px-1.5 py-0.5 rounded flex-none" style={{ color: scoreColor(p.score), background: `${scoreColor(p.score)}15` }} title="match score vs your profile">
                          {p.score}%
                        </span>
                        <div className="flex flex-col gap-1 ml-1">
                          {p.status !== "offer" && p.status !== "rejected" && (
                            <button className="btn !p-1 !text-[8px]" onClick={() => movePosting(p.id, nextStatus(p.status))}>
                              → {nextStatus(p.status) === "applied" ? "apply" : nextStatus(p.status) === "interview" ? "interview" : "offer"}
                            </button>
                          )}
                          {p.status !== "rejected" && p.status !== "offer" && (
                            <button className="btn !p-1 !text-[8px] !text-rose" onClick={() => movePosting(p.id, "rejected")}>✕</button>
                          )}
                          <button className="btn !p-1 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => removePosting(p.id)} title="delete">
                            <Icon name="trash" size={8} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="kicker text-[8.5px] text-fog/70 mt-3">
            match score = phase readiness × CP rating × shipped projects × dossier completeness (full-time) or active income streams × gig wins (freelance) — it climbs as you do
          </p>
        </div>
      </Reveal>

      {/* freelance ops */}
      <Reveal delay={170} className="mt-5">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-4">
          {/* platform pipelines */}
          <div className="panel p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="kicker text-mint">Freelance Pipelines</span>
              <span className="mono text-[10px] text-fog">{FREELANCE_PLATFORMS.filter((p) => (state.freelance.pipeline[p.id] ?? 0) > 0).length}/{FREELANCE_PLATFORMS.length} active</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {FREELANCE_PLATFORMS.map((fp) => {
                const stage = Math.min(fp.stages.length - 1, state.freelance.pipeline[fp.id] ?? 0);
                const active = stage > 0;
                return (
                  <div key={fp.id} className={`rounded-md border p-3 transition-all ${active ? "" : "opacity-70"}`} style={{ borderColor: active ? `${fp.color}55` : "var(--color-edge)", background: "rgba(13,20,36,0.5)" }}>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-none" style={{ background: fp.color }} />
                      <span className="display font-semibold text-[13px] text-snow">{fp.name}</span>
                      <a href={fp.url(q)} target="_blank" rel="noreferrer" className="ml-auto mono text-[8.5px] text-fog hover:text-cyan transition-colors" title="open board">open ↗</a>
                    </div>
                    <div className="flex items-center gap-1 mt-2.5">
                      {fp.stages.map((_, i) => (
                        <span key={i} className="h-1 flex-1 rounded-full transition-colors" style={{ background: i <= stage ? fp.color : "rgba(142,156,192,0.15)" }} />
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="mono text-[8.5px]" style={{ color: active ? fp.color : "#8e9cc0" }}>{fp.stages[stage]}</span>
                      {stage < fp.stages.length - 1 && (
                        <button
                          className="btn !p-1 !text-[8px]"
                          onClick={() => set((s) => ({ ...s, freelance: { ...s.freelance, pipeline: { ...s.freelance.pipeline, [fp.id]: stage + 1 } } }))}
                        >
                          advance →
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RLHF / task ledger */}
          <div className="panel p-5 flex flex-col">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="kicker text-amber">Paid Task Ledger</span>
              <span className="display font-bold text-xl text-amber tabular-nums">${Math.round(totalEarned)}</span>
            </div>
            <TaskLogger onLog={(platform, hours, rate) => {
              set((s) => ({ ...s, freelance: { ...s.freelance, tasks: [{ id: `t-${Date.now()}`, platform, hours, rate, date: todayKey() }, ...s.freelance.tasks] } }));
              show(`$${Math.round(hours * rate)} logged for ${platform}.`, "#ffb224");
            }} />
            <div className="mt-4 flex-1">
              {earningsByPlatform.length === 0 ? (
                <p className="text-[11.5px] text-fog leading-relaxed">
                  Log your first paid task — platform, hours, rate. Earnings per platform chart themselves, and every dollar counts toward the emergency fund.
                </p>
              ) : (
                <div className="space-y-2.5">
                  {earningsByPlatform.map(([pl, v]) => (
                    <div key={pl} className="flex items-center gap-3">
                      <span className="mono text-[10px] text-mist w-28 flex-none truncate">{pl}</span>
                      <div className="flex-1"><Meter pct={(v / (earningsByPlatform[0][1] || 1)) * 100} color="#ffb224" h={5} /></div>
                      <span className="mono text-[10.5px] text-amber tabular-nums w-14 text-right">${Math.round(v)}</span>
                    </div>
                  ))}
                  <div className="pt-2 mt-1 border-t border-edge/60 max-h-40 overflow-y-auto space-y-1">
                    {tasks.slice(0, 8).map((t) => (
                      <div key={t.id} className="flex items-center justify-between mono text-[9px] text-fog">
                        <span>{t.date} · {t.platform}</span>
                        <span>{t.hours}h × ${t.rate} = <span className="text-mist">${Math.round(t.hours * t.rate)}</span></span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function TaskLogger({ onLog }: { onLog: (platform: string, hours: number, rate: number) => void }) {
  const [platform, setPlatform] = useState("Outlier (Scale)");
  const [hours, setHours] = useState(2);
  const [rate, setRate] = useState(20);
  return (
    <div className="grid grid-cols-[1.3fr_0.7fr_0.7fr_auto] gap-2">
      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        {FREELANCE_PLATFORMS.filter((p) => p.kind === "rlhf" || p.kind === "marketplace").map((p) => <option key={p.id}>{p.name}</option>)}
        <option>Direct client</option>
        <option>Bounty</option>
        <option>Other</option>
      </select>
      <input type="number" min={0.25} step={0.25} value={hours} onChange={(e) => setHours(Number(e.target.value))} aria-label="hours" />
      <input type="number" min={1} step={1} value={rate} onChange={(e) => setRate(Number(e.target.value))} aria-label="hourly rate" />
      <button className="btn flex items-center justify-center gap-1.5" onClick={() => onLog(platform, hours, rate)}>
        <Icon name="plus" size={11} /> LOG
      </button>
    </div>
  );
}
