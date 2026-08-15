import { useState } from "react";
import confetti from "canvas-confetti";
import { PROJECTS, QUARTERS, resForQuarter } from "../data";
import DesignDocs from "./DesignDocs";
import { useNexus, quarterIndex, DAY_MS } from "../store";
import { SectionHead, Reveal, Meter, Icon, Chip, Modal } from "./ui";

const daysTo = (iso: string) => Math.round((new Date(iso + "T23:59:59").getTime() - Date.now()) / DAY_MS);

export default function BuildTrack() {
  const { state, set } = useNexus();
  const qi = quarterIndex(state.startDate);
  const [openQ, setOpenQ] = useState<number | null>(qi);
  const [boardOpen, setBoardOpen] = useState(false);

  const setProgress = (id: string, v: number) => {
    const prev = state.projects[id] ?? 0;
    set((s) => ({ ...s, projects: { ...s.projects, [id]: v } }));
    if (prev < 100 && v >= 100) {
      const p = PROJECTS.find((x) => x.id === id)!;
      confetti({ particleCount: 110, spread: 80, origin: { y: 0.5 }, colors: [p.color, "#ffb224", "#eaf0fc"], disableForReducedMotion: true });
    }
  };

  const shipped = PROJECTS.filter((p) => (state.projects[p.id] ?? 0) >= 100).length;

  return (
    <section id="build" className="py-16 scroll-mt-24">
      <SectionHead
        index="04"
        kicker="Build"
        color="#ffb224"
        title="Core Project Tracker"
        desc="9 projects, each tracing to named company requirements. Drag the slider to update progress — 100% means shipped with a public write-up."
        right={
          <Reveal>
            <button
              className="panel panel-hover px-5 py-3 text-left group cursor-pointer"
              style={{ ["--edge-hi" as string]: "#ffb22466" }}
              onClick={() => setBoardOpen(true)}
              title="Open the full project board"
            >
              <div className="flex items-center gap-2">
                <div className="kicker text-[9px] text-fog">projects completed</div>
                <Icon name="chevR" size={11} className="text-amber group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="display font-bold text-2xl text-amber">{shipped}<span className="text-fog text-sm">/9</span></div>
              <div className="kicker text-[8px] text-fog mt-0.5 group-hover:text-amber transition-colors">click → full board + deadlines</div>
            </button>
          </Reveal>
        }
      />

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {PROJECTS.map((p, i) => {
          const v = state.projects[p.id] ?? 0;
          const done = v >= 100;
          return (
            <Reveal key={p.id} delay={(i % 3) * 70}>
              <div className="panel panel-hover p-5 h-full flex flex-col" style={{ ["--edge-hi" as string]: `${p.color}55`, borderColor: done ? `${p.color}55` : undefined }}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="display font-bold text-lg tracking-tight" style={{ color: done ? p.color : "#eaf0fc" }}>{p.name}</div>
                    <p className="text-[12px] text-fog leading-snug mt-1">{p.desc}</p>
                  </div>
                  {done && <Icon name="check" size={16} style={{ color: p.color }} />}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.traces.map((t) => <Chip key={t} color={p.color}>→ {t}</Chip>)}
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <Icon name="flag" size={11} style={{ color: !done && daysTo(p.deadlineISO) < 0 ? "#ff5c7a" : "#8e9cc0" }} />
                  <span className="mono text-[10px]" style={{ color: !done && daysTo(p.deadlineISO) < 0 ? "#ff5c7a" : "#8e9cc0" }}>
                    {p.deadline}
                    {!done && daysTo(p.deadlineISO) < 0 && " · OVERDUE"}
                  </span>
                </div>

                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="kicker text-[9px] text-fog">{done ? "shipped" : "build progress"}</span>
                    <span className="mono text-[12px] font-semibold tabular-nums" style={{ color: p.color }}>{v}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={v}
                    onChange={(e) => setProgress(p.id, Number(e.target.value))}
                    className="w-full"
                    style={{ ["--rng" as string]: p.color }}
                    aria-label={`${p.name} progress`}
                  />
                  <div className="mt-2.5"><Meter pct={v} color={p.color} h={4} /></div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* roadmap */}
      <div className="mt-14">
        <Reveal className="mb-6">
          <div className="flex items-center gap-3">
            <span className="kicker text-amber">4-Year Arc</span>
            <span className="h-px flex-1 bg-edge" />
            <span className="kicker text-fog">quarter-by-quarter roadmap</span>
          </div>
          <h3 className="display text-2xl md:text-3xl font-bold text-snow mt-3">Every quarter. Every deliverable.</h3>
        </Reveal>

        <div className="space-y-2">
          {QUARTERS.map((q) => {
            const status = state.startDate === null ? "standby" : q.id - 1 < qi ? "done" : q.id - 1 === qi ? "current" : "next";
            const open = openQ === q.id;
            const color = status === "current" ? "#ffb224" : status === "done" ? "#6fdd8b" : "#8e9cc0";
            return (
              <Reveal key={q.id} delay={Math.min(q.id * 20, 200)}>
                <div className="panel overflow-hidden transition-colors" style={{ borderColor: status === "current" ? "rgba(255,178,36,0.4)" : undefined }}>
                  <button
                    className="w-full flex items-center gap-4 px-5 py-3.5 text-left group"
                    onClick={() => setOpenQ(open ? null : q.id)}
                    aria-expanded={open}
                  >
                    <span className="mono text-[11px] w-14 flex-none" style={{ color }}>{q.label}</span>
                    <span className="mono text-[10px] text-fog w-28 flex-none hidden sm:block">{q.range}</span>
                    <span className={`display font-semibold text-[15px] flex-1 ${status === "current" ? "text-amber" : status === "done" ? "text-mint" : "text-mist"}`}>
                      {q.theme}
                    </span>
                    {status === "current" && (
                      <span className="kicker text-[8px] text-amber border border-amber/40 bg-amber/10 rounded-full px-2 py-0.5 flex-none">you are here</span>
                    )}
                    {status === "done" && <Icon name="check" size={14} className="text-mint flex-none" />}
                    <Icon name="chevD" size={15} className={`text-fog transition-transform duration-300 flex-none ${open ? "rotate-180" : ""}`} />
                  </button>
                  <div className="grid transition-all duration-400" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 grid md:grid-cols-[1fr_auto] gap-5 border-t border-edge/60">
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pt-4">
                          {q.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2.5 text-[13px] text-mist">
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-none" style={{ background: color }} />
                              {d}
                            </li>
                          ))}
                        </ul>
                        <div className="rounded-md border border-edge bg-deep/60 px-4 py-3 md:w-64 h-fit">
                          <div className="flex items-center gap-2 text-amber">
                            <Icon name="flag" size={12} />
                            <span className="kicker text-[9px]">milestone</span>
                          </div>
                          <p className="text-[12.5px] text-snow mt-1.5 leading-snug">{q.milestone}</p>
                        </div>
                        {resForQuarter(q.id).length > 0 && (
                          <div className="md:col-span-2 flex flex-wrap items-center gap-1.5 pt-3.5 mt-4 border-t border-edge/50">
                            <span className="kicker text-[8px] text-sky/80 mr-1">csdiy complements</span>
                            {resForQuarter(q.id).map((r) => (
                              <a
                                key={r.code}
                                href={r.url}
                                target="_blank"
                                rel="noreferrer"
                                title={`${r.code} · ${r.topic}`}
                                className="mono text-[9.5px] px-2 py-0.5 rounded-full border border-sky/35 text-sky/90 bg-sky/[0.06] hover:bg-sky/15 hover:border-sky/60 transition-colors"
                              >
                                ↗ {r.code}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <DesignDocs />

      {/* ── full project board ─────────────────────────────────────── */}
      <Modal open={boardOpen} onClose={() => setBoardOpen(false)} wide>
        <div className="flex items-start justify-between gap-4 mb-1">
          <div>
            <div className="flex items-center gap-2 text-amber">
              <Icon name="cube" size={15} />
              <span className="kicker">Project Board</span>
            </div>
            <h3 className="display font-bold text-2xl text-snow mt-2">All 9 systems — deadlines &amp; deliverables</h3>
            <p className="text-[12px] text-fog mt-1.5">
              Shipped <span className="text-amber font-semibold">{shipped}/9</span> ·{" "}
              {PROJECTS.filter((p) => (state.projects[p.id] ?? 0) < 100 && daysTo(p.deadlineISO) < 0).length > 0 ? (
                <span className="text-rose">{PROJECTS.filter((p) => (state.projects[p.id] ?? 0) < 100 && daysTo(p.deadlineISO) < 0).length} overdue</span>
              ) : (
                <span className="text-mint">nothing overdue</span>
              )}
            </p>
          </div>
          <button className="btn !p-2" onClick={() => setBoardOpen(false)} aria-label="close board">
            <Icon name="x" size={14} />
          </button>
        </div>

        <div className="space-y-3 mt-4">
          {PROJECTS.map((p) => {
            const v = state.projects[p.id] ?? 0;
            const shippedNow = v >= 100;
            const days = daysTo(p.deadlineISO);
            const overdue = !shippedNow && days < 0;
            const status = shippedNow
              ? { label: "SHIPPED", c: "#6fdd8b" }
              : overdue
              ? { label: "OVERDUE", c: "#ff5c7a" }
              : v > 0
              ? { label: "IN PROGRESS", c: "#ffb224" }
              : { label: "QUEUED", c: "#8e9cc0" };
            return (
              <div key={p.id} className="rounded-lg border p-4" style={{ borderColor: shippedNow ? `${p.color}55` : overdue ? "rgba(255,92,122,0.4)" : "var(--color-edge)", background: "rgba(13,20,36,0.5)" }}>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="display font-bold text-[16px]" style={{ color: shippedNow ? p.color : "#eaf0fc" }}>{p.name}</span>
                  <span className="mono text-[9px] px-2 py-0.5 rounded-full border" style={{ color: status.c, borderColor: `${status.c}55`, background: `${status.c}10` }}>
                    {status.label}
                  </span>
                  <span className="mono text-[10px] text-fog flex items-center gap-1.5">
                    <Icon name="flag" size={10} style={{ color: overdue ? "#ff5c7a" : "#8e9cc0" }} />
                    {p.deadline}
                    {!shippedNow && (
                      <span style={{ color: overdue ? "#ff5c7a" : "#6fdd8b" }}>
                        · {overdue ? `${-days}d overdue` : `${days}d left`}
                      </span>
                    )}
                  </span>
                  <span className="mono text-[11px] font-semibold ml-auto tabular-nums" style={{ color: p.color }}>{v}%</span>
                </div>
                <p className="text-[12px] text-fog mt-1.5">{p.desc}</p>
                <ul className="grid sm:grid-cols-3 gap-x-4 gap-y-1.5 mt-2.5">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-[11.5px] text-mist leading-snug">
                      <span className="mt-[6px] w-1 h-1 rounded-full flex-none" style={{ background: p.color }} />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex-1"><Meter pct={v} color={p.color} h={5} /></div>
                  <input type="range" min={0} max={100} step={5} value={v} onChange={(e) => setProgress(p.id, Number(e.target.value))} className="w-32 flex-none" style={{ ["--rng" as string]: p.color }} aria-label={`${p.name} progress`} />
                  <span className="flex-none flex gap-1.5">{p.traces.map((t) => <Chip key={t} color={p.color}>→ {t}</Chip>)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </section>
  );
}
