import { useState } from "react";
import { COMPANIES, OBJECTIVES, QUARTERS } from "../data";
import { useNexus, sectionProgress, quarterIndex } from "../store";
import { SectionHead, Reveal, Meter, Ring, Icon, CountUp, useToast } from "./ui";
import { QuarterFocus, Heatmap } from "./FocusPanels";

export default function Analytics() {
  const { state, reset } = useNexus();
  const { show, node } = useToast();
  const [armWipe, setArmWipe] = useState(false);
  const p = sectionProgress(state);
  const qi = quarterIndex(state.startDate);

  const systems = [
    { label: "Daily Queue", pct: p.trackPct, color: "#2fd6b5", note: "blocking tasks cleared" },
    { label: "Project Build", pct: p.projPct, color: "#ffb224", note: "9 systems shipped" },
    { label: "CP Rating", pct: p.cpPct, color: "#ff5c7a", note: "toward 2000" },
    { label: "Math Spine", pct: p.mathPct, color: "#b48cff", note: "lectures + problem sets" },
    { label: "Dossiers", pct: p.coPct, color: "#45c8e8", note: `${p.ready}/${COMPANIES.length} application-ready` },
    { label: "Plan Execution", pct: p.todoPct, color: "#ff7849", note: `${p.planDone}/${p.planTotal} daily tasks cleared` },
    { label: "Arc Elapsed", pct: p.timePct, color: "#6fdd8b", note: QUARTERS[qi].label },
  ];

  const totalItems = COMPANIES.reduce((a, c) => a + c.checklist.length, 0);
  const doneItems = COMPANIES.reduce((a, c) => a + (state.checklists[c.id] ?? []).filter(Boolean).length, 0);

  const objectives = [
    { ...OBJECTIVES[0], pct: p.cpPct, val: `${state.cp.rating} / 2000` },
    { ...OBJECTIVES[1], pct: p.projPct, val: `${Object.values(state.projects).filter((v) => v >= 100).length} / 9 shipped` },
    { ...OBJECTIVES[2], pct: p.mathPct, val: `${Math.round(p.mathPct)}% covered` },
    { ...OBJECTIVES[3], pct: (doneItems / totalItems) * 100, val: `${doneItems}/${totalItems} items` },
    { ...OBJECTIVES[4], pct: Math.min(100, ((qi + 1) / 5) * 100), val: qi >= 4 ? "window open" : `target Q5 · ${QUARTERS[4].range}` },
  ];

  return (
    <section id="analytics" className="py-16 scroll-mt-24">
      {node}
      <SectionHead
        index="03"
        kicker="Analytics"
        color="#5fb0ff"
        title="Progress Tracker"
        desc="Percentage completion at every level — per system, per quarter, per major objective, and the whole plan."
        right={
          <Reveal>
            <div className="panel px-5 py-3.5 flex flex-col gap-3">
              <div className="flex items-center gap-6">
                <div>
                  <div className="kicker text-[9px] text-fog">overall plan</div>
                  <div className="display font-bold text-2xl text-sky"><CountUp value={Math.round(p.overall)} suffix="%" /></div>
                </div>
                <div className="w-px h-8 bg-edge" />
                <div>
                  <div className="kicker text-[9px] text-fog">quarter</div>
                  <div className="display font-bold text-2xl text-snow">{qi + 1}<span className="text-fog text-sm">/16</span></div>
                </div>
              </div>
              {armWipe ? (
                <div className="flex items-center gap-2">
                  <button
                    className="btn !py-1.5 !px-3 !text-[9px] !border-rose/60 !text-rose flex-1 flex items-center justify-center gap-1.5"
                    onClick={() => {
                      reset();
                      setArmWipe(false);
                      show("All progress wiped — sliders, checks, streaks, history. Arc start kept.", "#ff5c7a");
                    }}
                  >
                    <Icon name="trash" size={10} /> YES — WIPE EVERYTHING
                  </button>
                  <button className="btn !py-1.5 !px-2.5 !text-[9px]" onClick={() => setArmWipe(false)}>KEEP</button>
                </div>
              ) : (
                <button
                  className="btn !py-1.5 !px-3 !text-[9px] w-full flex items-center justify-center gap-1.5"
                  title="Zeros every tracker. Your arc start date and profile stay."
                  onClick={() => setArmWipe(true)}
                >
                  <Icon name="refresh" size={10} /> RESET ALL PROGRESS
                </button>
              )}
            </div>
          </Reveal>
        }
      />

      <div className="grid lg:grid-cols-[auto_1fr] gap-5">
        <Reveal>
          <div className="panel p-7 flex flex-col items-center justify-center text-center">
            <span className="kicker text-fog mb-4">Overall Plan Progress</span>
            <Ring pct={p.overall} color="#5fb0ff" size={172} sub="4y · 44 co" />
            <p className="text-[11px] text-fog mt-5 max-w-[190px] leading-relaxed">
              Weighted: build 23 · CP 18 · queue 13 · math 13 · dossiers 12 · plan 12 · time 9
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="panel p-6">
            <div className="flex items-center justify-between mb-5">
              <span className="kicker text-sky">System Telemetry</span>
              <span className="mono text-[10px] text-fog">live from local state</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {systems.map((s) => (
                <div key={s.label}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-[13px] font-medium text-snow">{s.label}</span>
                    <span className="mono text-[11px] tabular-nums" style={{ color: s.color }}>{Math.round(s.pct)}%</span>
                  </div>
                  <Meter pct={s.pct} color={s.color} />
                  <div className="kicker text-[8.5px] text-fog mt-1">{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* major objectives */}
      <div className="mt-5 grid sm:grid-cols-2 xl:grid-cols-5 gap-3">
        {objectives.map((o, i) => (
          <Reveal key={o.id} delay={i * 70}>
            <div className="panel panel-hover p-4 h-full" style={{ ["--edge-hi" as string]: `${o.color}55` }}>
              <div className="flex items-center justify-between">
                <span className="kicker text-[9px]" style={{ color: o.color }}>objective</span>
                {o.pct >= 100 ? (
                  <Icon name="trophy" size={14} style={{ color: o.color }} />
                ) : (
                  <span className="mono text-[10px] text-fog tabular-nums">{Math.round(o.pct)}%</span>
                )}
              </div>
              <div className="display font-semibold text-[15px] text-snow mt-2 leading-tight">{o.label}</div>
              <div className="mono text-[10px] text-fog mt-1">{o.val}</div>
              <div className="mt-3">
                <Meter pct={o.pct} color={o.color} h={4} />
              </div>
              <div className="text-[10.5px] text-fog/80 mt-2.5 leading-snug">{o.detail}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* quarterly focus + heatmap */}
      <div className="grid md:grid-cols-3 gap-5 mt-5">
        <QuarterFocus />
        <Heatmap />
      </div>

      {/* progress memory */}
      <Reveal delay={140} className="mt-5">
        <div className="panel p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <span className="kicker text-mint">Progress Memory</span>
            <span className="mono text-[10px] text-fog">auto-snapshotted daily · overall %</span>
          </div>
          {state.snapshots.length < 2 ? (
            <div className="rounded-md border border-dashed border-edge2 py-9 text-center">
              <Icon name="clock" size={18} className="text-fog mx-auto" />
              <p className="text-[12.5px] text-mist mt-2.5">First snapshot logged today.</p>
              <p className="mono text-[10px] text-fog mt-1">the line starts drawing itself tomorrow — every active day adds a point</p>
            </div>
          ) : (
            (() => {
              const snaps = state.snapshots;
              const maxV = Math.max(5, ...snaps.map((s) => s.v));
              const W = 640;
              const H = 130;
              const px = (i: number) => (i / (snaps.length - 1)) * (W - 16) + 8;
              const py = (v: number) => H - 16 - (v / maxV) * (H - 40);
              const pts = snaps.map((s, i) => `${px(i).toFixed(1)},${py(s.v).toFixed(1)}`).join(" ");
              const delta = Math.round((snaps[snaps.length - 1].v - snaps[0].v) * 10) / 10;
              return (
                <>
                  <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
                    <defs>
                      <linearGradient id="pmFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6fdd8b" stopOpacity="0.26" />
                        <stop offset="100%" stopColor="#6fdd8b" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon points={`8,${H - 16} ${pts} ${W - 8},${H - 16}`} fill="url(#pmFill)" />
                    <polyline points={pts} fill="none" stroke="#6fdd8b" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                    {snaps.map((s, i) => (
                      <circle key={s.d} cx={px(i)} cy={py(s.v)} r={i === snaps.length - 1 ? 4.5 : 2.5} fill="#6fdd8b">
                        <title>{`${s.d} — ${s.v}%`}</title>
                      </circle>
                    ))}
                  </svg>
                  <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
                    <span className="mono text-[10px] text-fog">{snaps[0].d}</span>
                    <span className="mono text-[11px] font-semibold" style={{ color: delta >= 0 ? "#6fdd8b" : "#ff5c7a" }}>
                      {delta >= 0 ? "▲" : "▼"} {Math.abs(delta)} pts across {snaps.length} snapshot{snaps.length === 1 ? "" : "s"}
                    </span>
                    <span className="mono text-[10px] text-fog">
                      {snaps[snaps.length - 1].d} · <span className="text-mint">{snaps[snaps.length - 1].v}%</span>
                    </span>
                  </div>
                </>
              );
            })()
          )}
        </div>
      </Reveal>
    </section>
  );
}
