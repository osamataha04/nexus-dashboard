import { useRef, useState } from "react";
import { INCOME_MONTHS, EXPENSES, NEGOTIATIONS } from "../data";
import { useNexus, dayNumber, fmtMoney } from "../store";
import { SectionHead, Reveal, Meter, Icon, Check, useToast } from "./ui";

const W = 740, H = 210, PAD = 8;
const MAX = 9500;
const pt = (i: number) => ({
  x: PAD + (i / (INCOME_MONTHS.length - 1)) * (W - PAD * 2),
  y: H - PAD - (INCOME_MONTHS[i].v / MAX) * (H - PAD * 2 - 18),
});
const LINE = INCOME_MONTHS.map((_, i) => pt(i));
const PATH = LINE.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
const AREA = `${PATH} L${LINE[LINE.length - 1].x},${H - PAD} L${LINE[0].x},${H - PAD} Z`;

const MILESTONES = [
  { i: 10, label: "CLIFF · May 2027", color: "#ff5c7a", above: true },
  { i: 14, label: "REMOTE JOB · Sep 2027", color: "#5fb0ff", above: false },
  { i: 47, label: "GIANT OFFER · Jun 2030", color: "#ffb224", above: true },
];

export default function Finance() {
  const { state, set } = useNexus();
  const { show, node } = useToast();
  const [hover, setHover] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const mIdx = state.startDate ? Math.max(0, Math.min(47, Math.floor((dayNumber(state.startDate) - 1) / 30.44))) : null;
  const cur = mIdx !== null ? INCOME_MONTHS[mIdx] : null;

  const onMove = (e: React.MouseEvent) => {
    const r = svgRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * W;
    const i = Math.round(((x - PAD) / (W - PAD * 2)) * (INCOME_MONTHS.length - 1));
    setHover(Math.max(0, Math.min(47, i)));
  };

  const expLow = EXPENSES.reduce((a, e) => a + e.low, 0);
  const expHigh = EXPENSES.reduce((a, e) => a + e.high, 0);
  const bufferPct = Math.min(100, (state.savings / 750) * 100);

  return (
    <section id="finance" className="py-16 scroll-mt-24">
      {node}
      <SectionHead
        index="06"
        kicker="Financial Spine"
        color="#6fdd8b"
        title="Income Timeline"
        desc="Month-by-month. The cliff: May 2027. Buffer target: $600–900. Remote job: Sep 2027. Giant offer: Jun–Dec 2030."
        right={
          <Reveal>
            <div className="panel px-5 py-3">
              <div className="kicker text-[9px] text-fog">current month</div>
              <div className="display font-bold text-xl text-mint">
                {cur ? `${cur.m} · ${fmtMoney(cur.v)}` : "— set start date"}
              </div>
            </div>
          </Reveal>
        }
      />

      {/* trajectory chart */}
      <Reveal>
        <div className="panel p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="kicker text-mint">Income Trajectory</span>
            <span className="mono text-[10px] text-fog">$0 → $9,500/mo · 48 months · hover to inspect</span>
          </div>
          <div className="relative">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              className="w-full h-auto select-none"
              onMouseMove={onMove}
              onMouseLeave={() => setHover(null)}
            >
              <defs>
                <linearGradient id="incArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6fdd8b" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#6fdd8b" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0.25, 0.5, 0.75, 1].map((f) => (
                <line key={f} x1={PAD} x2={W - PAD} y1={H - PAD - f * (H - PAD * 2 - 18)} y2={H - PAD - f * (H - PAD * 2 - 18)} stroke="rgba(142,156,192,0.09)" strokeDasharray="3 5" />
              ))}
              <path d={AREA} fill="url(#incArea)" />
              <path d={PATH} fill="none" stroke="#6fdd8b" strokeWidth="2.2" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 6px rgba(111,221,139,0.5))" }} />

              {MILESTONES.map((m) => (
                <g key={m.i}>
                  <line x1={LINE[m.i].x} x2={LINE[m.i].x} y1={H - PAD} y2={LINE[m.i].y} stroke={m.color} strokeOpacity="0.45" strokeDasharray="3 4" />
                  <circle cx={LINE[m.i].x} cy={LINE[m.i].y} r="4.5" fill={m.color} stroke="#0b101e" strokeWidth="2" />
                  <text x={Math.min(LINE[m.i].x + 6, W - 150)} y={m.above ? 16 : LINE[m.i].y - 12} fill={m.color} fontSize="9.5" fontFamily="JetBrains Mono" letterSpacing="1">
                    {m.label}
                  </text>
                </g>
              ))}

              {mIdx !== null && (
                <g>
                  <line x1={LINE[mIdx].x} x2={LINE[mIdx].x} y1={PAD} y2={H - PAD} stroke="#eaf0fc" strokeOpacity="0.35" />
                  <circle cx={LINE[mIdx].x} cy={LINE[mIdx].y} r="5.5" fill="#eaf0fc" stroke="#0b101e" strokeWidth="2" />
                </g>
              )}

              {hover !== null && hover !== mIdx && (
                <g>
                  <line x1={LINE[hover].x} x2={LINE[hover].x} y1={PAD} y2={H - PAD} stroke="#5fb0ff" strokeOpacity="0.5" />
                  <circle cx={LINE[hover].x} cy={LINE[hover].y} r="4" fill="#5fb0ff" stroke="#0b101e" strokeWidth="2" />
                </g>
              )}
            </svg>
            {hover !== null && (
              <div
                className="absolute pointer-events-none panel !bg-deep px-3 py-2 z-10"
                style={{
                  left: `${(LINE[hover].x / W) * 100}%`,
                  top: 0,
                  transform: `translateX(${hover > 40 ? "-105%" : "10px"})`,
                }}
              >
                <div className="mono text-[10px] text-fog">{INCOME_MONTHS[hover].m}{hover === mIdx ? " · now" : ""}</div>
                <div className="mono text-[13px] font-bold text-mint">{fmtMoney(INCOME_MONTHS[hover].v)}/mo</div>
              </div>
            )}
          </div>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        {/* buffer */}
        <Reveal>
          <div className="panel p-5 h-full" style={{ borderColor: "rgba(111,221,139,0.3)" }}>
            <div className="flex items-center justify-between">
              <span className="kicker text-mint">Buffer Tracker</span>
              <span className="mono text-[10px] text-fog">target $600–900 by Mar 2027</span>
            </div>
            <div className="display font-bold text-4xl text-snow mt-4 tabular-nums">{fmtMoney(state.savings)}</div>
            <div className="kicker text-[9px] text-fog mt-1">saved · $750 midpoint target</div>
            <div className="mt-3"><Meter pct={bufferPct} color="#6fdd8b" h={8} striped={bufferPct < 100} /></div>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="number"
                className="flex-1 min-w-0"
                placeholder="current savings ($)"
                value={state.savings || ""}
                onChange={(e) => set((s) => ({ ...s, savings: Math.max(0, Number(e.target.value) || 0) }))}
                min={0}
                aria-label="current savings"
              />
              <button
                className="btn btn-amber"
                onClick={() => show(state.savings >= 750 ? "Buffer funded. Breathe." : "Savings logged.", "#6fdd8b")}
              >
                LOG
              </button>
            </div>
            <p className="text-[11px] text-fog mt-3.5 leading-relaxed">
              Survival minimum: <span className="text-mist font-semibold">${expLow}–{expHigh}/mo</span> in Asyut. Everything above $500/mo income goes here until the remote job is stable.
            </p>
          </div>
        </Reveal>

        {/* expenses */}
        <Reveal delay={90}>
          <div className="panel p-5 h-full">
            <div className="flex items-center justify-between">
              <span className="kicker text-sky">Expense Baseline</span>
              <span className="mono text-[10px] text-fog">Asyut, Egypt</span>
            </div>
            <div className="mt-4 space-y-2.5">
              {EXPENSES.map((e) => (
                <div key={e.item} className="flex items-center justify-between gap-3 text-[12.5px]">
                  <span className="text-mist">{e.item}</span>
                  <span className="flex-1 h-px bg-edge/70" />
                  <span className="mono text-[11px] text-fog tabular-nums">${e.low}–{e.high}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-edge flex items-center justify-between">
              <span className="display font-semibold text-snow text-[14px]">Monthly burn</span>
              <span className="mono text-[13px] font-bold text-sky tabular-nums">${expLow}–${expHigh}</span>
            </div>
            <p className="text-[11px] text-fog mt-3 leading-relaxed">Comfortable: $400–500/mo. The gap between burn and income is the whole game until Sep 2027.</p>
          </div>
        </Reveal>

        {/* negotiation teaser */}
        <Reveal delay={180}>
          <div className="panel p-5 h-full flex flex-col">
            <div className="flex items-center justify-between">
              <span className="kicker text-amber">Income Acceleration</span>
              <span className="mono text-[10px] text-fog">{Object.values(state.negotiations).filter((n) => n.done).length}/4 executed</span>
            </div>
            <p className="text-[12px] text-fog mt-2 leading-relaxed">
              4 scheduled rate negotiations. Each has specific technical triggers — mark ready only when all triggers are met, then negotiate immediately.
            </p>
            <div className="mt-4 space-y-2.5 flex-1">
              {NEGOTIATIONS.map((n) => {
                const st = state.negotiations[n.id];
                const ready = st.triggers.every(Boolean);
                return (
                  <div key={n.id} className="flex items-center gap-3 rounded-md border border-edge bg-deep/50 px-3 py-2.5">
                    <span className="mono text-[11px] font-bold" style={{ color: n.color }}>{n.from} → {n.to}</span>
                    <span className="text-[11.5px] text-mist flex-1 truncate">{n.title}</span>
                    {st.done ? (
                      <Icon name="trophy" size={13} style={{ color: n.color }} />
                    ) : ready ? (
                      <span className="kicker text-[8px] text-mint border border-mint/40 bg-mint/10 rounded-full px-2 py-0.5">ready</span>
                    ) : (
                      <span className="mono text-[9px] text-fog">{st.triggers.filter(Boolean).length}/{st.triggers.length}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>

      {/* negotiations detail */}
      <div className="mt-4 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {NEGOTIATIONS.map((n, i) => {
          const st = state.negotiations[n.id];
          const ready = st.triggers.every(Boolean);
          return (
            <Reveal key={n.id} delay={i * 70}>
              <div className="panel panel-hover p-5 h-full flex flex-col" style={{ ["--edge-hi" as string]: `${n.color}55`, borderColor: st.done ? `${n.color}55` : undefined, opacity: st.done ? 0.75 : 1 }}>
                <div className="flex items-center justify-between">
                  <span className="kicker text-[9px]" style={{ color: n.color }}>{n.when}</span>
                  {st.done && <Icon name="check" size={14} style={{ color: n.color }} />}
                </div>
                <div className="display font-semibold text-[15px] text-snow mt-2">{n.title}</div>
                <div className="mono text-[13px] mt-1" style={{ color: n.color }}>{n.from} → {n.to}</div>
                <div className="mt-3.5 space-y-2 flex-1">
                  {n.triggers.map((t, j) => (
                    <label key={t} className="flex items-start gap-2.5 cursor-pointer group">
                      <Check
                        on={st.triggers[j]}
                        color={n.color}
                        size={16}
                        onToggle={() =>
                          set((s) => ({
                            ...s,
                            negotiations: {
                              ...s.negotiations,
                              [n.id]: { ...st, triggers: st.triggers.map((v, k) => (k === j ? !v : v)) },
                            },
                          }))
                        }
                      />
                      <span className={`text-[12px] leading-snug ${st.triggers[j] ? "text-snow" : "text-fog"} group-hover:text-mist transition-colors`}>{t}</span>
                    </label>
                  ))}
                </div>
                <button
                  className={`btn mt-4 w-full flex items-center justify-center gap-2 ${st.done ? "" : ready ? "btn-amber" : "opacity-40 cursor-not-allowed"}`}
                  onClick={() => {
                    if (st.done) return;
                    if (!ready) return show("All triggers must be met first.", "#ff5c7a");
                    set((s) => ({ ...s, negotiations: { ...s.negotiations, [n.id]: { ...st, done: true } } }));
                    show(`${n.title} — executed. New rate locked.`, n.color);
                  }}
                >
                  <Icon name={st.done ? "trophy" : "dollar"} size={13} />
                  {st.done ? "EXECUTED" : "MARK EXECUTED"}
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
