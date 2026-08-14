import { useState } from "react";
import { PARSED_PREVIEW, EXPENSES, COMPANIES, QUARTERS, CATS } from "../data";
import { useNexus, quarterIndex, phaseFor, dayNumber, habitStreak, todayKey, DAY_MS, ensurePlan, type PlanTask } from "../store";
import { Icon, Modal, Check, Reveal, useToast, Chip } from "./ui";

const TICKER = COMPANIES.map((c) => c.name);

const pulseColor = (v: number) =>
  v <= 0 ? "rgba(142,156,192,0.14)" : v <= 2 ? "#2fd6b5" : v <= 5 ? "#ffb224" : "#ff7849";

export default function CommandCenter() {
  const { state, set, reset } = useNexus();
  const { show, node } = useToast();
  const [parseOpen, setParseOpen] = useState(false);
  const [parsed, setParsed] = useState(PARSED_PREVIEW);
  const [picked, setPicked] = useState<boolean[]>(PARSED_PREVIEW.map(() => true));
  const [wipeArmed, setWipeArmed] = useState(false);

  const qi = quarterIndex(state.startDate);
  const phase = state.startDate ? phaseFor(qi) : "—";
  const day = dayNumber(state.startDate);
  const q = QUARTERS[qi];
  const streaks = state.startDate
    ? ["archaeology", "godbolt", "zetamac"].map((id) => habitStreak(state.habitLog, id))
    : [0, 0, 0];
  const bestStreak = Math.max(...streaks, 0);

  const expLow = EXPENSES.reduce((a, e) => a + e.low, 0);
  const expHigh = EXPENSES.reduce((a, e) => a + e.high, 0);

  const pulse = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(Date.now() - (13 - i) * DAY_MS);
    const k = todayKey(d);
    return { k, v: state.activity[k] ?? 0, lbl: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }) };
  });
  const pulseTotal = pulse.reduce((a, d) => a + d.v, 0);

  const saveStart = (v: string) => {
    if (!v) return;
    set((s) => ({ ...s, startDate: v }));
    show("Start date locked. The clock is yours.", "#2fd6b5");
  };

  const activate = () => {
    const chosen = parsed.filter((_, i) => picked[i]);
    const key = todayKey();
    set((s) => {
      const base = ensurePlan({ ...s, activated: true }, key);
      const parsedTasks: PlanTask[] = chosen.map((p, i) => {
        const bankId = `parsed-${Date.now()}-${i}`;
        const cat = CATS.find((c) => c.label === p.track)?.id ?? "tools";
        return {
          id: `${key}:${bankId}`,
          bankId,
          cat,
          title: p.task,
          detail: `Parsed from the quarter brief · priority ${p.priority}. Execute it inside today's ${cat} block: decide the first physical step, timebox 90 minutes, and define what evidence proves it done before you start.`,
          done: false,
          adhoc: true,
        };
      });
      return { ...base, plans: { ...base.plans, [key]: [...(base.plans[key] ?? []), ...parsedTasks] } };
    });
    setParseOpen(false);
    show(`${chosen.length} tasks injected into today's plan`, "#ffb224");
  };

  const reparse = () => {
    setParsed((p) => [...p].sort(() => Math.random() - 0.5));
    show("Document re-parsed — order reshuffled", "#5fb0ff");
  };

  return (
    <section id="command" className="pt-6 lg:pt-2 pb-20 scroll-mt-24">
      {node}
      {/* ── masthead ─────────────────────────────────────────────── */}
      <div className="grid lg:grid-cols-[1.35fr_1fr] gap-6 items-stretch">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="kicker text-amber">Command Center</span>
              <span className="h-px flex-1 bg-edge" />
              <span className="kicker text-fog">op: hired-by-a-giant</span>
            </div>
            <h1 className="display font-bold tracking-tight text-snow mt-5 text-[44px] leading-[1.02] sm:text-6xl xl:text-7xl">
              NEXUS<span className="text-amber">.</span>
              <span className="block text-[22px] sm:text-3xl xl:text-4xl font-medium text-mist mt-3 caret">
                Engineer&rsquo;s Dashboard
              </span>
            </h1>
            <p className="mt-5 text-fog text-[15px] leading-relaxed max-w-lg">
              Single goal: <span className="text-snow font-semibold">get hired by a giant.</span>{" "}
              <span className="mono text-mist">4 years · 44 target companies · 5 domains · 9 projects.</span>{" "}
              Every track below traces to a named company&rsquo;s interview screen.
            </p>
          </Reveal>

          {/* readouts */}
          <Reveal delay={120} className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { k: "CURRENT PHASE", v: phase, c: "#ffb224", icon: "flag" },
              { k: "DAY OF ARC", v: state.startDate ? `D${day}` : "—", c: "#2fd6b5", icon: "calendar" },
              { k: "QUARTER", v: state.startDate ? q.label : "—", c: "#5fb0ff", icon: "radar" },
              { k: "HR BUDGET · Y1", v: "51h/wk", c: "#b48cff", icon: "clock" },
            ].map((s) => (
              <div key={s.k} className="panel panel-hover px-4 py-3.5" style={{ ["--edge-hi" as string]: `${s.c}55` }}>
                <div className="flex items-center gap-2 text-fog">
                  <Icon name={s.icon} size={13} style={{ color: s.c }} />
                  <span className="kicker text-[9px]">{s.k}</span>
                </div>
                <div className="display font-bold text-xl text-snow mt-1.5 truncate">{s.v}</div>
              </div>
            ))}
          </Reveal>

          {/* 4-year arc strip */}
          <Reveal delay={200} className="mt-6 panel p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="kicker text-fog">4-Year Engineering Arc</span>
              <span className="mono text-[11px] text-mist">Jul 2026 → Jun 2030</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((yr) => (
                <div key={yr}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="mono text-[10px] text-fog">Y{yr + 1}</span>
                    <span className="mono text-[9px] text-fog/60">{yr === 0 ? "'26–27" : yr === 1 ? "'27–28" : yr === 2 ? "'28–29" : "'29–30"}</span>
                  </div>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map((qq) => {
                      const idx = yr * 4 + qq;
                      const isCur = state.startDate !== null && idx === qi;
                      const past = state.startDate !== null && idx < qi;
                      return (
                        <div
                          key={qq}
                          title={`${QUARTERS[idx].label} — ${QUARTERS[idx].theme}`}
                          className="h-8 flex-1 rounded-sm border transition-all duration-300 cursor-default"
                          style={{
                            borderColor: isCur ? "#ffb224" : past ? "#ffb22444" : "var(--color-edge)",
                            background: isCur
                              ? "linear-gradient(135deg,#ffb224,#ff7849)"
                              : past
                              ? "rgba(255,178,36,0.16)"
                              : "rgba(142,156,192,0.05)",
                            boxShadow: isCur ? "0 0 16px rgba(255,178,36,0.4)" : "none",
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[12px] text-fog">
              {state.startDate ? (
                <>Now in <span className="text-amber font-semibold">{q.label} — {q.theme}</span>. Milestone: <span className="text-mist">{q.milestone}</span></>
              ) : (
                "Set a start date below to arm the arc — the current quarter lights up automatically."
              )}
            </p>
          </Reveal>
        </div>

        {/* ── operator console ───────────────────────────────────── */}
        <Reveal delay={150}>
          <div className="panel p-6 h-full flex flex-col" style={{ borderColor: "rgba(255,178,36,0.25)" }}>
            <div className="flex items-center justify-between">
              <span className="kicker text-amber">Operator Console</span>
              <span className={`flex items-center gap-2 ${state.activated ? "text-mint" : "text-fog"}`}>
                <span className="livedot" style={state.activated ? {} : { background: "#8e9cc0" }} />
                <span className="kicker text-[9px]">{state.activated ? "quarter active" : "standby"}</span>
              </span>
            </div>

            <div className="mt-5">
              <label className="kicker text-fog text-[9px] flex items-center gap-2">
                <Icon name="edit" size={12} /> Your start date
              </label>
              <div className="flex gap-2 mt-2">
                <input
                  type="date"
                  value={state.startDate ?? "2026-07-01"}
                  onChange={(e) => set((s) => ({ ...s, startDate: e.target.value || s.startDate }))}
                  className="flex-1 min-w-0"
                  aria-label="start date"
                />
                <button
                  className="btn btn-amber"
                  onClick={() => saveStart(state.startDate ?? "2026-07-01")}
                >
                  LOCK
                </button>
              </div>
              <p className="text-[11px] text-fog mt-2 leading-relaxed">
                All scheduling, quarter positions and progress are calculated from this date. Set it once.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-5">
              {[
                { k: "BEST STREAK", v: `${bestStreak}d`, c: "#ff7849" },
                { k: "EXPENSES", v: `$${expLow}–${expHigh}`, c: "#6fdd8b" },
                { k: "COMPANIES", v: "44", c: "#45c8e8" },
              ].map((s) => (
                <div key={s.k} className="rounded-md border border-edge bg-deep/60 px-3 py-2.5 text-center">
                  <div className="display font-bold text-lg" style={{ color: s.c }}>{s.v}</div>
                  <div className="kicker text-[8px] text-fog mt-0.5">{s.k}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-md border border-dashed border-edge2 p-4 bg-deep/40">
              <div className="flex items-center gap-2 text-mist">
                <Icon name="upload" size={15} className="text-sky" />
                <span className="text-[13px] font-medium">Quarter brief (PDF) ready</span>
              </div>
              <p className="text-[11px] text-fog mt-1.5 leading-relaxed">
                Run the AI parse to extract this quarter&rsquo;s tasks, review them, then activate.
              </p>
              <button className="btn w-full mt-3 flex items-center justify-center gap-2" onClick={() => setParseOpen(true)}>
                <Icon name="spark" size={13} className="text-sky" /> AI PARSE PREVIEW
              </button>
            </div>

            <div className="mt-auto pt-5 flex items-center justify-between">
              <span className="mono text-[10px] text-fog/60">state persists locally</span>
              <button
                className={`btn ${wipeArmed ? "!border-rose !text-rose" : ""}`}
                onClick={() => {
                  if (!wipeArmed) return setWipeArmed(true);
                  reset();
                  setWipeArmed(false);
                  show("NEXUS wiped. Fresh arc.", "#ff5c7a");
                }}
                onMouseLeave={() => setWipeArmed(false)}
              >
                {wipeArmed ? "CONFIRM WIPE?" : "RESET DATA"}
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── mission pulse ─────────────────────────────────────────── */}
      <Reveal delay={220} className="mt-8">
        <div className="panel panel-hover px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4" style={{ ["--edge-hi" as string]: "#2fd6b555" }}>
          <div className="flex items-center gap-3 flex-none">
            <Icon name="radar" size={16} className="text-teal" />
            <div>
              <span className="kicker text-teal block">Mission Pulse</span>
              <span className="mono text-[10px] text-fog">last 14 days · {pulseTotal} action{pulseTotal === 1 ? "" : "s"} logged</span>
            </div>
          </div>
          <div className="flex-1 flex items-end gap-1.5 sm:justify-end min-h-[36px]">
            {pulse.map((d) => (
              <div key={d.k} title={`${d.lbl} — ${d.v} action${d.v === 1 ? "" : "s"}`} className="group flex-1 max-w-[26px] flex items-end justify-center">
                <div
                  className="w-full rounded-[3px] transition-all duration-300 group-hover:brightness-150"
                  style={{
                    height: d.v <= 0 ? 7 : Math.min(34, 11 + d.v * 5),
                    background: pulseColor(d.v),
                    boxShadow: d.v > 0 ? `0 0 10px ${pulseColor(d.v)}55` : "none",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── company ticker ───────────────────────────────────────── */}
      <Reveal delay={250} className="mt-8">
        <div className="relative overflow-hidden border-y border-edge py-3" style={{ maskImage: "linear-gradient(90deg,transparent,black 8%,black 92%,transparent)" }}>
          <div className="ticker-track">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="flex items-center gap-3 flex-none">
                <Icon name="target" size={11} className="text-amber/70" />
                <span className="display font-semibold text-[15px] text-mist whitespace-nowrap">{t}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="kicker text-[9px] text-fog/60">44 target companies · 5 domains — every pipeline mapped</span>
          <span className="kicker text-[9px] text-fog/60">apply window: jun 2030</span>
        </div>
      </Reveal>

      {/* ── AI parse modal ───────────────────────────────────────── */}
      <Modal open={parseOpen} onClose={() => setParseOpen(false)} wide>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sky">
              <Icon name="spark" size={15} />
              <span className="kicker">AI Parse Preview</span>
            </div>
            <h3 className="display font-bold text-2xl text-snow mt-2">Review extracted tasks</h3>
            <p className="text-[12px] text-fog mt-1.5">
              Review the extracted tasks before activating this quarter. If anything looks wrong, re-parse the document.
            </p>
          </div>
          <button className="btn !p-2" onClick={() => setParseOpen(false)} aria-label="close">
            <Icon name="x" size={14} />
          </button>
        </div>

        <div className="mt-5 space-y-2">
          {parsed.map((p, i) => (
            <div
              key={p.task}
              className="flex items-center gap-3 rounded-md border border-edge bg-deep/60 px-3.5 py-3 transition-opacity"
              style={{ opacity: picked[i] ? 1 : 0.4 }}
            >
              <Check on={picked[i]} color="#5fb0ff" onToggle={() => setPicked((pk) => pk.map((v, j) => (j === i ? !v : v)))} />
              <div className="flex-1 min-w-0">
                <div className="text-[13px] text-snow truncate">{p.task}</div>
                <div className="kicker text-[9px] text-fog mt-0.5">track: {p.track}</div>
              </div>
              <Chip color={p.priority === "High" ? "#ff5c7a" : p.priority === "Medium" ? "#ffb224" : "#6fdd8b"}>{p.priority}</Chip>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-6">
          <button className="btn" onClick={() => setParseOpen(false)}>✕ Cancel</button>
          <button className="btn flex items-center gap-2" onClick={reparse}>
            <Icon name="refresh" size={12} className="text-sky" /> Re-parse
          </button>
          <button className="btn btn-amber ml-auto flex items-center gap-2" onClick={activate}>
            <Icon name="check" size={13} /> Save &amp; Activate Quarter
          </button>
        </div>
      </Modal>
    </section>
  );
}
