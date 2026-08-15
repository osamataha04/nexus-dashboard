import { useState } from "react";
import { MOCK_PHASES, type MockSession } from "../data";
import { useNexus, todayKey } from "../store";
import { Icon, Reveal, Meter, useToast } from "./ui";

/* ── CF climb chart — trajectory toward 2000 ───────────────────────── */
const BANDS = [
  { at: 1200, label: "Pupil" },
  { at: 1400, label: "Specialist" },
  { at: 1600, label: "Expert" },
  { at: 1900, label: "Candidate Master" },
];
const TARGET = 2000;

export function CFChart() {
  const { state } = useNexus();
  const contests = [...state.cp.contests].reverse(); // chronological
  const W = 640;
  const H = 190;
  const maxR = Math.max(2100, state.cp.rating + 200);
  const y = (r: number) => H - 22 - (r / maxR) * (H - 46);

  /* rebuild the trajectory: current rating minus trailing deltas */
  const pts: { x: number; r: number; name: string; date: string }[] = [];
  let cursor = state.cp.rating;
  const stack: { r: number; name: string; date: string }[] = [{ r: cursor, name: "now", date: todayKey() }];
  for (let i = contests.length - 1; i >= 0; i--) {
    cursor -= contests[i].delta;
    stack.unshift({ r: Math.max(0, cursor), name: contests[i].name, date: contests[i].date });
  }
  const n = stack.length;
  const x = (i: number) => 46 + (i / Math.max(1, n - 1)) * (W - 70);
  stack.forEach((p, i) => pts.push({ x: x(i), r: p.r, name: p.name, date: p.date }));
  const line = pts.map((p) => `${p.x.toFixed(1)},${y(p.r).toFixed(1)}`).join(" ");
  const lastPct = Math.min(100, (state.cp.rating / TARGET) * 100);

  return (
    <Reveal>
      <div className="panel p-6 h-full flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="kicker text-rose">CF Climb · toward 2000</span>
          <span className="mono text-[10px] text-fog">{contests.length} rated round{contests.length === 1 ? "" : "s"} logged</span>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="display font-bold text-4xl text-snow tabular-nums">{state.cp.rating}</span>
          <span className="mono text-[11px] text-fog">/ {TARGET} confirmed ceiling</span>
          <span className="mono text-[11px] font-semibold ml-auto" style={{ color: lastPct >= 100 ? "#6fdd8b" : "#ff5c7a" }}>
            {Math.round(lastPct)}% of target
          </span>
        </div>
        <div className="mt-3"><Meter pct={lastPct} color="#ff5c7a" h={5} /></div>

        {pts.length < 2 ? (
          <div className="rounded-md border border-dashed border-edge2 py-8 text-center mt-4">
            <Icon name="chart" size={17} className="text-fog mx-auto" />
            <p className="text-[12px] text-mist mt-2">Log your first rated round in the Contest Record</p>
            <p className="mono text-[9.5px] text-fog mt-1">every delta you enter draws the climb</p>
          </div>
        ) : (
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto mt-3">
            {BANDS.map((b) => (
              <g key={b.at}>
                <line x1={46} x2={W - 24} y1={y(b.at)} y2={y(b.at)} stroke="rgba(142,156,192,0.14)" strokeDasharray="3 5" />
                <text x={W - 24} y={y(b.at) - 4} textAnchor="end" fontSize="8.5" fill="#8e9cc0" fontFamily="JetBrains Mono, monospace">
                  {b.label} {b.at}
                </text>
              </g>
            ))}
            <line x1={46} x2={W - 24} y1={y(TARGET)} y2={y(TARGET)} stroke="#6fdd8b" strokeDasharray="6 4" strokeWidth="1.4" />
            <text x={46} y={y(TARGET) - 5} fontSize="9" fill="#6fdd8b" fontFamily="JetBrains Mono, monospace" fontWeight="700">
              🏁 2000 — covers HRT / Citadel / Two Sigma OAs
            </text>
            <polyline points={line} fill="none" stroke="#ff5c7a" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
            {pts.map((p, i) => (
              <circle key={i} cx={p.x} cy={y(p.r)} r={i === pts.length - 1 ? 5 : 3} fill={i === pts.length - 1 ? "#ff5c7a" : "#0b101e"} stroke="#ff5c7a" strokeWidth="1.6">
                <title>{`${p.name} — ${p.r} · ${p.date}`}</title>
              </circle>
            ))}
          </svg>
        )}
        <p className="mono text-[9.5px] text-fog/70 mt-auto pt-3">
          HFT window rule: apply once the line crosses 1800 · Y4 target is maintenance, not new topics
        </p>
      </div>
    </Reveal>
  );
}

/* ── mock interview log — section 10 cadence ───────────────────────── */
export function MockLog() {
  const { state, set } = useNexus();
  const { show, node } = useToast();
  const [m, setM] = useState({ phase: "self", partner: "", topic: "", verdict: "okay" as MockSession["verdict"], note: "" });

  const add = () => {
    if (!m.topic.trim()) return show("What did you drill? Add a topic first.", "#ff5c7a");
    const s: MockSession = { id: `mk-${Date.now()}`, date: todayKey(), phase: m.phase, partner: m.partner.trim(), topic: m.topic.trim(), verdict: m.verdict, note: m.note.trim() };
    set((s2) => ({ ...s2, mocks: [s, ...s2.mocks] }));
    setM({ phase: m.phase, partner: "", topic: "", verdict: "okay", note: "" });
    show("Mock session logged.", "#b48cff");
  };
  const remove = (id: string) => set((s) => ({ ...s, mocks: s.mocks.filter((x) => x.id !== id) }));
  const verdictColor = (v: MockSession["verdict"]) => (v === "strong" ? "#6fdd8b" : v === "okay" ? "#ffb224" : "#ff5c7a");
  const done = state.mocks.length;

  return (
    <Reveal delay={90}>
      <div className="panel p-6 h-full flex flex-col">
        {node}
        <div className="flex items-center justify-between mb-4">
          <span className="kicker text-lav">Mock Interview Log</span>
          <span className="mono text-[10px] text-fog">{done} session{done === 1 ? "" : "s"} · {done >= 12 ? "on cadence ✓" : "cadence: 12+ by Y4"}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <select value={m.phase} onChange={(e) => setM({ ...m, phase: e.target.value })} aria-label="mock phase">
            {MOCK_PHASES.map((p) => <option key={p.id} value={p.id}>{p.label.split("—")[0]}</option>)}
          </select>
          <select value={m.verdict} onChange={(e) => setM({ ...m, verdict: e.target.value as MockSession["verdict"] })} aria-label="verdict">
            <option value="strong">strong</option>
            <option value="okay">okay</option>
            <option value="rough">rough</option>
          </select>
          <input value={m.partner} onChange={(e) => setM({ ...m, partner: e.target.value })} placeholder="partner / platform" aria-label="partner" />
          <input value={m.topic} onChange={(e) => setM({ ...m, topic: e.target.value })} placeholder="topic — e.g. xv6 scheduler, CF 1500 DP" aria-label="topic" />
        </div>
        <div className="flex gap-2 mt-2">
          <input className="flex-1" value={m.note} onChange={(e) => setM({ ...m, note: e.target.value })} placeholder="one-line lesson (feeds STAR stories)" aria-label="note" />
          <button className="btn btn-amber flex-none" onClick={add} style={{ background: "#b48cff", borderColor: "#b48cff" }}>LOG</button>
        </div>

        <div className="mt-4 space-y-2 flex-1 overflow-y-auto max-h-56 pr-1">
          {state.mocks.length === 0 && (
            <p className="mono text-[10px] text-fog/60 pt-2">no sessions yet — self-mocks start Y2 Q3 at 2×/week</p>
          )}
          {state.mocks.map((s) => {
            const ph = MOCK_PHASES.find((p) => p.id === s.phase);
            return (
              <div key={s.id} className="rounded-md border border-edge bg-deep/50 px-3 py-2.5 group">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full flex-none" style={{ background: verdictColor(s.verdict) }} />
                  <span className="display font-semibold text-[13px] text-snow flex-1 truncate">{s.topic}</span>
                  <span className="mono text-[9px] text-fog">{s.date}</span>
                  <button className="opacity-0 group-hover:opacity-100 btn !p-1 hover:!border-rose/60 hover:!text-rose transition-opacity" onClick={() => remove(s.id)} title="remove session">
                    <Icon name="x" size={9} />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="mono text-[9px] text-lav">{ph?.label.split("—")[0] ?? s.phase}</span>
                  {s.partner && <span className="mono text-[9px] text-fog">· {s.partner}</span>}
                  {s.note && <span className="mono text-[9px] text-mist truncate">— {s.note}</span>}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-1.5 mt-4 pt-4 border-t border-edge/60">
          {MOCK_PHASES.map((p) => (
            <div key={p.id} className="flex items-center gap-2" title={p.label}>
              <span className="kicker text-[8px] text-fog w-24 flex-none truncate">{p.when}</span>
              <span className="mono text-[9px] text-mist truncate">{p.freq} · {p.platform}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
