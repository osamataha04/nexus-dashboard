import { useState } from "react";
import confetti from "canvas-confetti";
import { TRACKS, HABITS } from "../data";
import { useNexus, todayKey, habitStreak, DAY_MS, bumpActivity } from "../store";
import { Icon, SectionHead, Reveal, Check, Meter } from "./ui";

const fire = (color: string) =>
  confetti({ particleCount: 70, spread: 64, origin: { y: 0.6 }, colors: [color, "#ffb224", "#eaf0fc"], disableForReducedMotion: true });

export default function DailyQueue() {
  const { state, set } = useNexus();
  const [offset, setOffset] = useState(0);
  const date = new Date(Date.now() + offset * DAY_MS);
  const label =
    offset === 0 ? "Today" : offset === -1 ? "Yesterday" : offset === 1 ? "Tomorrow" : date.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const key = todayKey(date);
  const isToday = offset === 0;

  const complete = (trackId: string) => {
    const t = TRACKS.find((x) => x.id === trackId)!;
    const done = state.trackDone[trackId] ?? 0;
    if (done >= t.tasks.length) return;
    set((s) => bumpActivity({ ...s, trackDone: { ...s.trackDone, [trackId]: done + 1 } }));
    if (done + 1 === t.tasks.length) fire(t.color);
  };

  const toggleHabit = (id: string) => {
    const wasOn = (state.habitLog[todayKey()] ?? []).includes(id);
    set((s) => {
      const today = todayKey();
      const cur = s.habitLog[today] ?? [];
      const next = cur.includes(id) ? cur.filter((h) => h !== id) : [...cur, id];
      return bumpActivity({ ...s, habitLog: { ...s.habitLog, [today]: next } }, wasOn ? -1 : 1);
    });
    if (!wasOn) fire("#ffb224");
  };

  const todayDone = state.habitLog[todayKey()] ?? [];

  return (
    <section id="daily" className="py-16 scroll-mt-24">
      <SectionHead
        index="02"
        kicker="Today"
        color="#2fd6b5"
        title="Daily Track Queue"
        desc="Each track shows your current blocking task. Finish it to unlock the next. Missed tasks don't disappear — they stay at the front of their track."
        right={
          <Reveal className="flex items-center gap-2">
            <button className="btn !p-2.5" onClick={() => setOffset((o) => o - 1)} aria-label="previous day">
              <Icon name="arrowL" size={14} />
            </button>
            <div className="btn !cursor-default text-center min-w-[128px]">
              <span className="text-snow font-semibold">{label}</span>
              <span className="block text-[9px] text-fog mt-0.5">{dateStr}</span>
            </div>
            <button className="btn !p-2.5" onClick={() => setOffset((o) => o + 1)} aria-label="next day">
              <Icon name="arrowR" size={14} />
            </button>
          </Reveal>
        }
      />

      <div className="grid xl:grid-cols-[1.9fr_1fr] gap-5">
        {/* tracks */}
        <div className="grid sm:grid-cols-2 gap-4">
          {TRACKS.map((t, ti) => {
            const done = state.trackDone[t.id] ?? 0;
            const current = t.tasks[done];
            const cleared = done >= t.tasks.length;
            return (
              <Reveal key={t.id} delay={ti * 60}>
                <div className="panel panel-hover p-4.5 h-full flex flex-col" style={{ ["--edge-hi" as string]: `${t.color}55`, padding: "18px" }}>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full flex-none" style={{ background: t.color, boxShadow: `0 0 8px ${t.color}` }} />
                      <span className="display font-semibold text-[14px] text-snow truncate">{t.name}</span>
                    </div>
                    <span className="mono text-[9px] px-2 py-0.5 rounded-full border flex-none" style={{ color: t.color, borderColor: `${t.color}44`, background: `${t.color}0f` }}>
                      {t.tag}
                    </span>
                  </div>

                  <div className="mt-3 flex-1">
                    {cleared ? (
                      <div className="rounded-md border border-mint/40 bg-mint/8 px-3.5 py-3.5 flex items-center gap-2.5" style={{ background: "rgba(111,221,139,0.07)" }}>
                        <Icon name="trophy" size={16} className="text-mint" />
                        <span className="mono text-[11px] text-mint tracking-wide">TRACK CLEARED — {t.tasks.length}/{t.tasks.length}</span>
                      </div>
                    ) : (
                      <>
                        <div className="kicker text-[9px] text-fog">blocking task · {done + 1} of {t.tasks.length}</div>
                        <p className="text-[13.5px] text-mist leading-snug mt-1.5 min-h-[38px]">{current}</p>
                      </>
                    )}
                  </div>

                  <div className="mt-3.5">
                    <Meter pct={(done / t.tasks.length) * 100} color={t.color} h={5} />
                    <div className="flex items-center justify-between mt-3">
                      <span className="mono text-[10px] text-fog">{Math.round((done / t.tasks.length) * 100)}% cleared</span>
                      <button
                        className="btn !py-1.5 !px-3 !text-[10px] flex items-center gap-1.5 disabled:opacity-35 disabled:cursor-not-allowed"
                        disabled={!isToday || cleared}
                        onClick={() => complete(t.id)}
                        style={isToday && !cleared ? { borderColor: `${t.color}66`, color: t.color } : {}}
                      >
                        <Icon name="check" size={11} /> MARK DONE
                      </button>
                    </div>
                    {!isToday && (
                      <p className="mono text-[9px] text-fog/60 mt-2">
                        {offset < 0 ? "◂ history — the queue carries forward" : "preview — unlocks on the day"}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* micro-habits */}
        <Reveal delay={120}>
          <div className="panel p-5 sticky top-28">
            <div className="flex items-center gap-2">
              <Icon name="flame" size={15} className="text-ember" />
              <span className="kicker text-ember">Daily Micro-Habits</span>
            </div>
            <p className="kicker text-[9px] text-fog mt-1">non-negotiable</p>

            <div className="mt-4 space-y-3">
              {HABITS.map((h) => {
                const on = todayDone.includes(h.id);
                const streak = habitStreak(state.habitLog, h.id);
                return (
                  <div key={h.id} className="rounded-md border border-edge bg-deep/60 p-3.5 transition-colors" style={on ? { borderColor: `${h.color}66` } : {}}>
                    <div className="flex items-center gap-3">
                      <Check on={on} color={h.color} onToggle={() => toggleHabit(h.id)} size={20} />
                      <div className="flex-1 min-w-0">
                        <div className={`text-[13px] font-medium ${on ? "text-snow" : "text-mist"}`}>{h.label}</div>
                        <div className="kicker text-[8.5px] text-fog mt-0.5">traces → {h.trace}</div>
                      </div>
                      <div className="text-right flex-none">
                        <div className="display font-bold text-xl tabular-nums" style={{ color: streak > 0 ? h.color : "#4b5878" }}>
                          {streak}<span className="text-[11px] text-fog">d</span>
                        </div>
                        {streak > 0 && <Icon name="flame" size={11} className="text-ember inline-block" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 rounded-md border border-edge bg-deep/50 p-3.5">
              <div className="flex items-center justify-between">
                <span className="kicker text-[9px] text-fog">today {todayKey()}</span>
                <span className="mono text-[11px] text-mist">{todayDone.length}/3 done</span>
              </div>
              <div className="flex gap-1.5 mt-2.5">
                {HABITS.map((h) => (
                  <div key={h.id} className="h-1.5 flex-1 rounded-full" style={{ background: todayDone.includes(h.id) ? h.color : "rgba(142,156,192,0.15)" }} />
                ))}
              </div>
              <p className="text-[11px] text-fog mt-3 leading-relaxed">
                3 habits. Each traces to a specific company&rsquo;s interview screen. Streaks count back from today — an unfinished today doesn&rsquo;t break them, a missed yesterday does.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
