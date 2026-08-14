import { useState } from "react";
import { CP_TOPICS, MATH_SUBJECTS } from "../data";
import { useNexus, clamp, todayKey } from "../store";
import { SectionHead, Reveal, Meter, Icon, Stepper, Check, Chip } from "./ui";

function cfTitle(r: number) {
  if (r >= 2400) return { t: "Grandmaster", c: "#ff5c7a" };
  if (r >= 2100) return { t: "Master", c: "#ff7849" };
  if (r >= 1900) return { t: "Candidate Master", c: "#b48cff" };
  if (r >= 1600) return { t: "Expert", c: "#5fb0ff" };
  if (r >= 1400) return { t: "Specialist", c: "#45c8e8" };
  if (r >= 1200) return { t: "Pupil", c: "#6fdd8b" };
  return { t: "Unrated", c: "#8e9cc0" };
}

export default function SkillTrack() {
  const { state, set } = useNexus();
  const [cName, setCName] = useState("");
  const [cDelta, setCDelta] = useState("50");
  const [cRank, setCRank] = useState("500");

  const rating = state.cp.rating;
  const title = cfTitle(rating);
  const topicsDone = CP_TOPICS.filter((t) => state.cp.topics[t]).length;
  const mathAvg =
    MATH_SUBJECTS.reduce((a, m) => {
      const r = state.math[m.id] ?? { lectures: 0, problems: 0 };
      return a + (r.lectures / m.lectures + r.problems / m.problems) / 2;
    }, 0) / MATH_SUBJECTS.length;

  const logContest = () => {
    if (!cName.trim()) return;
    const delta = Number(cDelta) || 0;
    set((s) => ({
      ...s,
      cp: {
        ...s.cp,
        rating: clamp(s.cp.rating + delta, 0, 4000),
        contests: [
          { id: `c${Date.now()}`, name: cName.trim(), date: todayKey(), delta, rank: Number(cRank) || 0 },
          ...s.cp.contests,
        ],
      },
    }));
    setCName("");
  };

  return (
    <section id="skill" className="py-16 scroll-mt-24">
      <SectionHead
        index="05"
        kicker="Competitive Programming"
        color="#ff5c7a"
        title="CP Tracker"
        desc="CF target: 2000 — sufficient for every company including HRT. Track your rating, problems solved, and topic coverage."
      />

      <div className="grid lg:grid-cols-3 gap-4">
        {/* rating */}
        <Reveal>
          <div className="panel p-5 h-full">
            <div className="flex items-center justify-between">
              <span className="kicker text-rose">Codeforces Rating</span>
              <Chip color={title.c}>{title.t}</Chip>
            </div>
            <div className="flex items-end gap-3 mt-4">
              <span className="display font-bold text-6xl tabular-nums leading-none" style={{ color: title.c }}>{rating}</span>
              <span className="mono text-[11px] text-fog pb-1.5">/ 2000</span>
            </div>
            <div className="mt-4">
              <Meter pct={(rating / 2000) * 100} color={title.c} h={8} striped />
              <div className="flex justify-between mt-1.5">
                <span className="kicker text-[8.5px] text-fog">{Math.round((rating / 2000) * 100)}% to 2000</span>
                <span className="kicker text-[8.5px] text-fog">{Math.max(0, 2000 - rating)} to go</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="kicker text-[9px] text-fog flex-1">adjust after contest</span>
              <Stepper value={rating} onChange={(n) => set((s) => ({ ...s, cp: { ...s.cp, rating: n } }))} step={25} min={0} max={4000} color="#ff5c7a" />
            </div>
            <p className="text-[11px] text-fog mt-4 leading-relaxed border-t border-edge pt-3">
              1900 (CM) unlocks quant phones. 2000 is the stated bar for HRT &amp; Jane Street fast-track screens.
            </p>
          </div>
        </Reveal>

        {/* problems + contests */}
        <Reveal delay={90}>
          <div className="panel p-5 h-full flex flex-col">
            <span className="kicker text-ember">Contest Record · Codeforces</span>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="rounded-md border border-edge bg-deep/60 p-3">
                <div className="kicker text-[8.5px] text-fog">CF solved (all time)</div>
                <div className="flex items-center justify-between mt-2">
                  <span className="display font-bold text-2xl text-snow tabular-nums">{state.cp.cf}</span>
                  <Stepper value={state.cp.cf} onChange={(n) => set((s) => ({ ...s, cp: { ...s.cp, cf: n } }))} step={5} color="#ff7849" />
                </div>
              </div>
              <div className="rounded-md border border-edge bg-deep/60 p-3">
                <div className="kicker text-[8.5px] text-fog">LeetCode solved</div>
                <div className="flex items-center justify-between mt-2">
                  <span className="display font-bold text-2xl text-snow tabular-nums">{state.cp.lc}</span>
                  <Stepper value={state.cp.lc} onChange={(n) => set((s) => ({ ...s, cp: { ...s.cp, lc: n } }))} step={5} color="#6fdd8b" />
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <input className="flex-1 min-w-0 !text-[12px]" placeholder="Contest name (Div.2 #9xx)" value={cName} onChange={(e) => setCName(e.target.value)} />
              <input className="w-[74px] !text-[12px]" placeholder="±delta" value={cDelta} onChange={(e) => setCDelta(e.target.value)} inputMode="numeric" />
              <input className="w-[70px] !text-[12px]" placeholder="rank" value={cRank} onChange={(e) => setCRank(e.target.value)} inputMode="numeric" />
            </div>
            <button className="btn btn-amber w-full mt-2 flex items-center justify-center gap-2" onClick={logContest}>
              <Icon name="plus" size={12} /> LOG CONTEST
            </button>

            <div className="mt-3 flex-1 overflow-y-auto max-h-40 space-y-1.5 pr-1">
              {state.cp.contests.length === 0 && (
                <p className="mono text-[10px] text-fog/60 pt-2">no contests logged — first live round is Y1·Q2</p>
              )}
              {state.cp.contests.map((c) => (
                <div key={c.id} className="flex items-center gap-3 rounded-md border border-edge/70 bg-deep/40 px-3 py-2">
                  <span className={`mono text-[11px] font-bold w-12 ${c.delta >= 0 ? "text-mint" : "text-rose"}`}>
                    {c.delta >= 0 ? `+${c.delta}` : c.delta}
                  </span>
                  <span className="text-[12px] text-mist flex-1 truncate">{c.name}</span>
                  <span className="mono text-[9.5px] text-fog">rk {c.rank}</span>
                  <span className="mono text-[9.5px] text-fog hidden sm:block">{c.date}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* topics */}
        <Reveal delay={180}>
          <div className="panel p-5 h-full">
            <div className="flex items-center justify-between">
              <span className="kicker text-sky">Topic Coverage</span>
              <span className="mono text-[11px] text-snow tabular-nums">{topicsDone}/{CP_TOPICS.length}</span>
            </div>
            <div className="mt-2"><Meter pct={(topicsDone / CP_TOPICS.length) * 100} color="#5fb0ff" h={4} /></div>
            <div className="grid grid-cols-2 gap-1.5 mt-4">
              {CP_TOPICS.map((t) => {
                const on = !!state.cp.topics[t];
                return (
                  <button
                    key={t}
                    onClick={() => set((s) => ({ ...s, cp: { ...s.cp, topics: { ...s.cp.topics, [t]: !s.cp.topics[t] } } }))}
                    className="flex items-center gap-2 rounded-md border px-2.5 py-2 text-left transition-colors"
                    style={{ borderColor: on ? "rgba(95,176,255,0.5)" : "var(--color-edge)", background: on ? "rgba(95,176,255,0.08)" : "transparent" }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-none ${on ? "bg-sky" : "bg-edge2"}`} />
                    <span className={`text-[11.5px] ${on ? "text-snow" : "text-fog"}`}>{t}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-fog mt-4">Tick a topic when you can solve a 1600+ problem in it cold, timed.</p>
          </div>
        </Reveal>
      </div>

      {/* ── math spine ───────────────────────────────────────────── */}
      <div className="mt-14">
        <Reveal className="mb-6">
          <div className="flex items-center gap-3">
            <span className="kicker text-lav">Hiring-Scope Only</span>
            <span className="h-px flex-1 bg-edge" />
            <span className="mono text-[11px] text-mist tabular-nums">{Math.round(mathAvg * 100)}% complete</span>
          </div>
          <h3 className="display text-2xl md:text-3xl font-bold text-snow mt-3">Math Spine Tracker</h3>
          <p className="text-fog text-sm mt-2 max-w-xl">
            Every subject traces to a specific company&rsquo;s hiring requirement. Track lecture progress and problem sets done.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {MATH_SUBJECTS.map((m, i) => {
            const r = state.math[m.id] ?? { lectures: 0, problems: 0 };
            const pct = ((r.lectures / m.lectures + r.problems / m.problems) / 2) * 100;
            return (
              <Reveal key={m.id} delay={(i % 3) * 70}>
                <div className="panel panel-hover p-5" style={{ ["--edge-hi" as string]: `${m.color}55` }}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="display font-semibold text-[15px] text-snow">{m.name}</span>
                    <span className="mono text-[12px] font-semibold tabular-nums" style={{ color: m.color }}>{Math.round(pct)}%</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {m.traces.map((t) => <Chip key={t} color={m.color}>→ {t}</Chip>)}
                  </div>
                  <div className="mt-4"><Meter pct={pct} color={m.color} h={5} /></div>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <div className="kicker text-[8.5px] text-fog mb-1">lectures</div>
                      <Stepper value={r.lectures} max={m.lectures} color={m.color} suffix={`/${m.lectures}`}
                        onChange={(n) => set((s) => ({ ...s, math: { ...s.math, [m.id]: { ...r, lectures: n } } }))} />
                    </div>
                    <div>
                      <div className="kicker text-[8.5px] text-fog mb-1">problems</div>
                      <Stepper value={r.problems} max={m.problems} step={4} color={m.color} suffix={`/${m.problems}`}
                        onChange={(n) => set((s) => ({ ...s, math: { ...s.math, [m.id]: { ...r, problems: n } } }))} />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
