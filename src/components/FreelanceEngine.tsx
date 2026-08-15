import { useState } from "react";
import { FREELANCE_SKILLS, GIG_SOURCES, SKILL_HINTS, INCOME_MONTHS, type Gig } from "../data";
import { useNexus, quarterIndex, todayKey, bumpActivity } from "../store";
import { Icon, Reveal, Meter, useToast } from "./ui";

/* month math helpers */
const monthKey = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
const monthIdxFrom = (startISO: string, key: string) => {
  const [sy, sm] = startISO.split("-").map(Number);
  const [y, m] = key.split("-").map(Number);
  return (y - sy) * 12 + (m - sm);
};
const addMonths = (startISO: string, i: number) => {
  const [sy, sm] = startISO.split("-").map(Number);
  const d = new Date(sy, sm - 1 + i, 1);
  return d;
};

/* skill auto-unlock from plan progress */
const unlockAt: Record<string, number> = {
  "py-auto": 0, scraper: 0, fastapi: 1, "cpp-review": 5, docker: 6,
  "db-opt": 10, "ml-deploy": 12, cuda: 13, "compiler-niche": 14, "due-diligence": 16,
};

const STATUS_META: Record<Gig["status"], { label: string; c: string }> = {
  applied: { label: "applied", c: "#8e9cc0" },
  talk: { label: "in talks", c: "#ffb224" },
  won: { label: "won", c: "#6fdd8b" },
  lost: { label: "lost", c: "#ff5c7a" },
};

export default function FreelanceEngine() {
  const { state, set } = useNexus();
  const { show, node } = useToast();
  const qi = quarterIndex(state.startDate);
  const [extra, setExtra] = useState("");
  const [g, setG] = useState({ title: "", source: "Upwork", skill: FREELANCE_SKILLS[0].label, amount: 100 });

  const f = state.freelance;
  const isUnlocked = (id: string) => (state.startDate ? qi >= (unlockAt[id] ?? 0) : false);
  const activeCount = Object.values(f.active).filter(Boolean).length;
  const won = f.gigs.filter((x) => x.status === "won");
  const wonSum = won.reduce((a, x) => a + x.amount, 0);
  const linksFilled = [f.links.github, f.links.resume, f.links.portfolio].filter((x) => x.trim()).length;
  const visibility = Math.min(100, linksFilled * 12 + activeCount * 6 + Math.min(40, won.length * 8));

  const toggleActive = (id: string) =>
    set((s) => ({ ...s, freelance: { ...s.freelance, active: { ...s.freelance.active, [id]: !s.freelance.active[id] } } }));
  const addExtra = () => {
    const v = extra.trim();
    if (!v) return;
    if (f.extra.some((x) => x.toLowerCase() === v.toLowerCase())) return show("That skill is already listed.", "#ff5c7a");
    set((s) => ({ ...s, freelance: { ...s.freelance, extra: [...s.freelance.extra, v] } }));
    setExtra("");
    show("Skill added — matched against gig demand.", "#45c8e8");
  };
  const match = (skill: string) => SKILL_HINTS.find((h) => h.re.test(skill)) ?? { re: /./, angle: "General consulting — package it as a fixed-scope, fixed-price offer", pay: "varies" };
  const setLink = (k: keyof typeof f.links, v: string) =>
    set((s) => ({ ...s, freelance: { ...s.freelance, links: { ...s.freelance.links, [k]: v } } }));
  const moveGig = (id: string, status: Gig["status"]) => {
    set((s) => bumpActivity({ ...s, freelance: { ...s.freelance, gigs: s.freelance.gigs.map((x) => (x.id === id ? { ...x, status } : x)) } }, status === "won" ? 2 : 0));
    if (status === "won") show("Gig won — log the income below to feed the runway chart.", "#6fdd8b");
  };
  const addGig = () => {
    if (!g.title.trim()) return show("Name the gig first.", "#ff5c7a");
    const gig: Gig = { id: `gig-${Date.now()}`, title: g.title.trim(), source: g.source, skill: g.skill, amount: Math.max(0, g.amount), status: "applied", date: todayKey() };
    set((s) => ({ ...s, freelance: { ...s.freelance, gigs: [gig, ...s.freelance.gigs] } }));
    setG({ ...g, title: "" });
    show("Gig added to the pipeline.", "#ffb224");
  };
  const removeGig = (id: string) => set((s) => ({ ...s, freelance: { ...s.freelance, gigs: s.freelance.gigs.filter((x) => x.id !== id) } }));

  /* income logging */
  const [inc, setInc] = useState({ m: monthKey(new Date()), v: 100 });
  const logIncome = () => {
    if (!inc.m) return;
    set((s) => {
      const rest = s.incomeActual.filter((x) => x.m !== inc.m);
      return { ...s, incomeActual: [...rest, { m: inc.m, v: Math.max(0, inc.v) }].sort((a, b) => a.m.localeCompare(b.m)) };
    });
    show(`Income logged for ${inc.m}.`, "#6fdd8b");
  };

  /* overlay chart geometry */
  const W = 640, H = 210, maxV = 10000;
  const start = state.startDate ?? "2026-07-01";
  const xs = (i: number) => 44 + (i / 47) * (W - 64);
  const ys = (v: number) => H - 26 - (Math.min(v, maxV) / maxV) * (H - 52);
  const projLine = INCOME_MONTHS.map((p, i) => `${xs(i).toFixed(1)},${ys(p.v).toFixed(1)}`).join(" ");
  const actualPts = f.gigs.length || state.incomeActual.length
    ? state.incomeActual.map((a) => ({ i: monthIdxFrom(start, a.m), ...a })).filter((a) => a.i >= 0 && a.i <= 47)
    : [];
  const cliffIdx = monthIdxFrom(start, "2027-05");

  return (
    <div className="mt-14">
      {node}
      <Reveal className="mb-6">
        <div className="flex items-center gap-3">
          <span className="kicker text-mint">Income Engine</span>
          <span className="h-px flex-1 bg-edge" />
          <span className="kicker text-fog">won: <span className="text-mint">${wonSum.toLocaleString()}</span> · {won.length} gig{won.length === 1 ? "" : "s"}</span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-3 mt-3">
          <h3 className="display text-2xl md:text-3xl font-bold text-snow">Freelance &amp; Consulting Engine</h3>
          <p className="mono text-[10px] text-fog max-w-md leading-relaxed">
            Depth is what makes income resistant to AI-driven market erosion. Track which skills unlock which streams — inside and outside the plan — and run the gig pipeline like a sales board.
          </p>
        </div>
      </Reveal>

      {/* row 1: skills map + extra skills + visibility */}
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-4">
        <Reveal>
          <div className="panel p-5 h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="kicker text-mint">Skill → income map · {activeCount} active</span>
              <span className="mono text-[9px] text-fog">unlocks track your quarter · Q{Math.min(16, qi + 1)}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {FREELANCE_SKILLS.map((s) => {
                const unlocked = isUnlocked(s.id);
                const on = !!f.active[s.id];
                return (
                  <button
                    key={s.id}
                    onClick={() => toggleActive(s.id)}
                    className={`text-left rounded-md border p-3 transition-all cursor-pointer group ${on ? "border-mint/60 bg-mint/[0.06]" : "border-edge bg-deep/40 hover:border-edge2"}`}
                    title={s.gate}
                  >
                    <div className="flex items-center gap-2">
                      <Icon name={s.icon} size={13} style={{ color: on ? "#6fdd8b" : "#8e9cc0" }} />
                      <span className={`display font-semibold text-[12.5px] flex-1 leading-tight ${on ? "text-snow" : "text-mist"}`}>{s.label}</span>
                      <span
                        className={`mono text-[8px] px-1.5 py-0.5 rounded-full border ${unlocked ? "text-mint border-mint/50" : "text-fog border-edge"}`}
                        title={unlocked ? "Unlocked by your plan progress" : `Unlocks: ${s.gate}`}
                      >
                        {unlocked ? "unlocked" : "locked"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="mono text-[10px] text-mint">{s.income}</span>
                      <span className="flex gap-[3px]" title={`demand ${s.demand}/5`}>
                        {[1, 2, 3, 4, 5].map((k) => (
                          <span key={k} className="w-[5px] h-[9px] rounded-[1.5px]" style={{ background: k <= s.demand ? (on ? "#6fdd8b" : "#4b5878") : "rgba(142,156,192,0.15)" }} />
                        ))}
                      </span>
                    </div>
                    <span className="mono text-[8.5px] text-fog/70 block mt-1.5 leading-snug">{s.gate}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          <Reveal delay={90}>
            <div className="panel p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="kicker text-sky">Outside-plan skills → consulting</span>
                <span className="mono text-[9px] text-fog">{f.extra.length} tracked</span>
              </div>
              <div className="flex gap-2">
                <input className="flex-1" value={extra} onChange={(e) => setExtra(e.target.value)} placeholder="e.g. React, video editing, Arabic…" onKeyDown={(e) => e.key === "Enter" && addExtra()} aria-label="extra skill" />
                <button className="btn btn-amber" style={{ background: "#45c8e8", borderColor: "#45c8e8" }} onClick={addExtra}><Icon name="plus" size={12} /></button>
              </div>
              <div className="mt-3 space-y-2 max-h-40 overflow-y-auto pr-1">
                {f.extra.length === 0 && <p className="mono text-[9.5px] text-fog/60">add a skill you already have — it gets matched to a freelance angle</p>}
                {f.extra.map((s) => {
                  const m = match(s);
                  return (
                    <div key={s} className="rounded-md border border-edge bg-deep/40 p-2.5 group">
                      <div className="flex items-center gap-2">
                        <span className="display font-semibold text-[12px] text-snow flex-1">{s}</span>
                        <span className="mono text-[9px] text-sky">{m.pay}</span>
                        <button className="opacity-0 group-hover:opacity-100 btn !p-1 hover:!border-rose/60 hover:!text-rose transition-opacity" onClick={() => set((st) => ({ ...st, freelance: { ...st.freelance, extra: st.freelance.extra.filter((x) => x !== s) } }))} title="remove">
                          <Icon name="x" size={9} />
                        </button>
                      </div>
                      <p className="mono text-[9px] text-mist/80 mt-1 leading-snug">↳ {m.angle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="panel p-5">
              <div className="flex items-center justify-between mb-2.5">
                <span className="kicker text-amber">Visibility score · application fuel</span>
                <span className="mono text-[11px] font-semibold text-amber tabular-nums">{Math.round(visibility)}%</span>
              </div>
              <Meter pct={visibility} color="#ffb224" h={6} />
              <div className="grid grid-cols-3 gap-2 mt-3">
                {(["github", "resume", "portfolio"] as const).map((k) => (
                  <div key={k}>
                    <label className="kicker text-[8px] text-fog block mb-1">{k}</label>
                    <input className="!py-1.5 !text-[10px]" placeholder={k === "github" ? "github.com/…" : k === "resume" ? "resume link" : "site link"} value={f.links[k]} onChange={(e) => setLink(k, e.target.value)} aria-label={`${k} link`} />
                  </div>
                ))}
              </div>
              <p className="mono text-[8.5px] text-fog/70 mt-2.5 leading-relaxed">direct recruiter contact + referrals + public work bypass the resume screen. A filled GitHub is the resume before the resume exists.</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* row 2: gig pipeline */}
      <Reveal className="mt-4">
        <div className="panel p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="kicker text-ember">Gig pipeline</span>
            <div className="flex flex-wrap gap-2 items-center">
              <input className="!py-1.5 !text-[11px] w-44" value={g.title} onChange={(e) => setG({ ...g, title: e.target.value })} placeholder="gig title" aria-label="gig title" />
              <select className="!py-1.5 !text-[11px]" value={g.source} onChange={(e) => setG({ ...g, source: e.target.value })} aria-label="gig source">
                {GIG_SOURCES.map((s) => <option key={s}>{s}</option>)}
              </select>
              <select className="!py-1.5 !text-[11px] max-w-44" value={g.skill} onChange={(e) => setG({ ...g, skill: e.target.value })} aria-label="gig skill">
                {[...FREELANCE_SKILLS.map((s) => s.label), ...f.extra].map((s) => <option key={s}>{s}</option>)}
              </select>
              <input type="number" className="!py-1.5 !text-[11px] w-20" value={g.amount} onChange={(e) => setG({ ...g, amount: Number(e.target.value) })} min={0} aria-label="gig amount" />
              <button className="btn btn-amber" onClick={addGig}><Icon name="plus" size={11} /> ADD GIG</button>
            </div>
          </div>

          {(["applied", "talk", "won", "lost"] as const).map((st) => {
            const list = f.gigs.filter((x) => x.status === st);
            const meta = STATUS_META[st];
            return (
              <div key={st} className="flex items-start gap-3 py-2.5 border-b border-edge/50 last:border-0">
                <span className="mono text-[9px] w-16 flex-none pt-1" style={{ color: meta.c }}>{meta.label} · {list.length}</span>
                <div className="flex-1 flex flex-wrap gap-2">
                  {list.length === 0 && <span className="mono text-[9px] text-fog/40 pt-1">—</span>}
                  {list.map((gig) => (
                    <div key={gig.id} className={`rounded-md border px-3 py-2 group flex items-center gap-2 ${st === "lost" ? "opacity-50" : ""}`} style={{ borderColor: `${meta.c}44`, background: `${meta.c}0a` }}>
                      <div>
                        <div className="display font-semibold text-[12px] text-snow leading-tight">{gig.title}</div>
                        <div className="mono text-[8.5px] text-fog mt-0.5">{gig.source} · {gig.skill} · ${gig.amount} · {gig.date}</div>
                      </div>
                      <div className="flex flex-col gap-1 ml-1">
                        {st === "applied" && <button className="btn !p-1 !text-[8px]" onClick={() => moveGig(gig.id, "talk")} title="move to talks">→talk</button>}
                        {st === "talk" && <button className="btn !p-1 !text-[8px] !text-mint" onClick={() => moveGig(gig.id, "won")} title="mark won">won ✓</button>}
                        {(st === "applied" || st === "talk") && <button className="btn !p-1 !text-[8px] !text-rose" onClick={() => moveGig(gig.id, "lost")} title="mark lost">✕</button>}
                        <button className="btn !p-1 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => removeGig(gig.id)} title="delete"><Icon name="trash" size={8} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* row 3: actual vs projected income */}
      <Reveal className="mt-4">
        <div className="panel p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="kicker text-mint">Income — actual vs projected</span>
            <div className="flex gap-2 items-center">
              <input type="month" className="!py-1.5 !text-[11px]" value={inc.m} onChange={(e) => setInc({ ...inc, m: e.target.value })} aria-label="income month" />
              <input type="number" className="!py-1.5 !text-[11px] w-24" value={inc.v} onChange={(e) => setInc({ ...inc, v: Number(e.target.value) })} min={0} aria-label="income amount" />
              <button className="btn btn-amber" onClick={logIncome}>LOG</button>
            </div>
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
            {[0, 2500, 5000, 7500, 10000].map((v) => (
              <g key={v}>
                <line x1={44} x2={W - 20} y1={ys(v)} y2={ys(v)} stroke="rgba(142,156,192,0.1)" />
                <text x={40} y={ys(v) + 3} textAnchor="end" fontSize="8" fill="#8e9cc0" fontFamily="JetBrains Mono, monospace">${(v / 1000)}k</text>
              </g>
            ))}
            {cliffIdx >= 0 && cliffIdx <= 47 && (
              <g>
                <line x1={xs(cliffIdx)} x2={xs(cliffIdx)} y1={20} y2={H - 26} stroke="#ff5c7a" strokeDasharray="4 4" />
                <text x={xs(cliffIdx) + 4} y={28} fontSize="8" fill="#ff5c7a" fontFamily="JetBrains Mono, monospace">family support ends</text>
              </g>
            )}
            <polyline points={projLine} fill="none" stroke="rgba(111,221,139,0.55)" strokeWidth="2" strokeDasharray="6 4" />
            {actualPts.map((a) => (
              <g key={a.m}>
                <circle cx={xs(a.i)} cy={ys(a.v)} r={4.5} fill="#6fdd8b" stroke="#0b101e" strokeWidth="1.5">
                  <title>{`${a.m} — $${a.v} actual`}</title>
                </circle>
              </g>
            ))}
            <text x={44} y={H - 8} fontSize="8" fill="#8e9cc0" fontFamily="JetBrains Mono, monospace">{start}</text>
            <text x={W - 20} y={H - 8} textAnchor="end" fontSize="8" fill="#8e9cc0" fontFamily="JetBrains Mono, monospace">+4y</text>
          </svg>
          <div className="flex items-center gap-4 mt-2">
            <span className="flex items-center gap-2 mono text-[9px] text-fog"><span className="w-4 h-[2px] bg-mint/60" style={{ borderTop: "2px dashed #6fdd8b", height: 0 }} /> projected curve</span>
            <span className="flex items-center gap-2 mono text-[9px] text-fog"><span className="w-2 h-2 rounded-full bg-mint inline-block" /> actual (logged)</span>
            <span className="mono text-[9px] text-mist ml-auto">buffer target: $600–900 before May 2027</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
