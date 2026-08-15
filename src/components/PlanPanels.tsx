import { WEEK_SETS, CATS, HIRING_WINDOWS } from "../data";
import { useNexus, todayKey, DAY_MS } from "../store";
import { Icon, Reveal } from "./ui";

const catOf = (id: string) => CATS.find((c) => c.id === id) ?? CATS[0];
const fmt = (d: Date) => d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

/* ── weekly rotation calendar ──────────────────────────────────────── */
export function WeekView() {
  const { state } = useNexus();
  const today = todayKey();
  const dow = (new Date(today + "T12:00:00").getDay() + 6) % 7; /* 0 = Mon */
  const monday = new Date(Date.now() - dow * DAY_MS);

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday.getTime() + i * DAY_MS);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const realDow = d.getDay();
    const cats = WEEK_SETS[realDow];
    const plan = state.plans[key];
    const done = plan?.filter((t) => t.done).length ?? null;
    const carried = plan?.filter((t) => t.carriedFrom && !t.done).length ?? 0;
    return { key, d, cats, done, total: plan?.length ?? null, carried, isToday: key === today, past: key < today };
  });

  return (
    <Reveal className="mb-6">
      <div className="panel p-5">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Icon name="calendar" size={14} className="text-ember" />
          <span className="kicker text-ember">The Week · 7-day skill rotation</span>
          <span className="h-px flex-1 bg-edge" />
          <span className="mono text-[10px] text-fog">{fmt(monday)} → {fmt(days[6].d)}</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {days.map((day) => (
            <div
              key={day.key}
              className={`rounded-md border p-2.5 transition-all ${day.isToday ? "border-ember/60 bg-ember/[0.07] shadow-[0_0_18px_-6px_rgba(255,120,73,0.5)]" : "border-edge bg-deep/40"} ${day.past ? "opacity-75" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className={`kicker text-[8.5px] ${day.isToday ? "text-ember" : "text-fog"}`}>{day.d.toLocaleDateString("en-US", { weekday: "short" })}</span>
                {day.isToday && <span className="kicker text-[7.5px] text-ember border border-ember/50 rounded-full px-1.5 py-px">now</span>}
              </div>
              <div className="mono text-[9px] text-fog/80 mt-0.5">{day.d.getDate()}/{day.d.getMonth() + 1}</div>
              <div className="flex flex-wrap gap-1 mt-2">
                {day.cats.map((c) => {
                  const cat = catOf(c);
                  return <span key={c} title={cat.label} className="w-2 h-2 rounded-full" style={{ background: cat.color }} />;
                })}
              </div>
              <div className="mt-2 min-h-[14px]">
                {day.total !== null ? (
                  <span className="mono text-[9px]" style={{ color: day.done === day.total && day.total > 0 ? "#6fdd8b" : day.past && (day.done ?? 0) < (day.total ?? 0) ? "#ff5c7a" : "#8e9cc0" }}>
                    {day.done}/{day.total}{day.carried > 0 ? ` · ⇡${day.carried}` : ""}
                  </span>
                ) : (
                  <span className="mono text-[8.5px] text-fog/50">{day.past ? "—" : "pending"}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-edge/60">
          <span className="kicker text-[8.5px] text-fog">legend</span>
          {CATS.map((c) => (
            <span key={c.id} className="flex items-center gap-1.5 mono text-[9px] text-mist">
              <span className="w-2 h-2 rounded-full" style={{ background: c.color }} /> {c.label}
            </span>
          ))}
          <span className="mono text-[9px] text-fog ml-auto">missed tasks roll to the next day their skill runs</span>
        </div>
      </div>
    </Reveal>
  );
}

/* ── hiring-window radar ───────────────────────────────────────────── */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function daysToWindow(months: number[]): number {
  const now = new Date();
  for (let add = 0; add <= 366; add++) {
    const d = new Date(now.getTime() + add * DAY_MS);
    if (months.includes(d.getMonth())) return add;
  }
  return 0;
}

export function HiringRadar() {
  const { state } = useNexus();
  const nowMonth = new Date().getMonth();
  const qi = state.startDate ? Math.floor(Math.max(0, (Date.now() - new Date(state.startDate + "T00:00:00").getTime()) / DAY_MS) / 91.3125) : 0;
  const hftReady = state.cp.rating >= 1800;

  return (
    <Reveal className="mb-6">
      <div className="panel p-5" style={{ borderColor: "rgba(255,92,122,0.25)" }}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Icon name="radar" size={14} className="text-rose" />
          <span className="kicker text-rose">Hiring-Window Radar</span>
          <span className="h-px flex-1 bg-edge" />
          <span className={`mono text-[9.5px] px-2 py-1 rounded-full border ${hftReady ? "border-mint/50 text-mint bg-mint/10" : "border-edge text-fog"}`}>
            HFT gate: CF {state.cp.rating}/1800 {hftReady ? "· cleared ✓" : "· apply at 1800+"}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {HIRING_WINDOWS.map((w) => {
            const inWindow = w.months.includes(nowMonth);
            const t = daysToWindow(w.months);
            return (
              <div key={w.id} className="rounded-md border border-edge bg-deep/50 p-3.5 flex flex-col group hover:border-edge2 transition-colors" title={w.note}>
                <div className="flex items-center justify-between">
                  <span className="display font-semibold text-[13px] text-snow">{w.label}</span>
                  <span
                    className={`mono text-[9px] px-1.5 py-0.5 rounded-full border ${inWindow ? "text-ink font-bold" : ""}`}
                    style={inWindow ? { background: w.color, borderColor: w.color } : { color: w.color, borderColor: `${w.color}55` }}
                  >
                    {inWindow ? "OPEN NOW" : `T–${t}d`}
                  </span>
                </div>
                <span className="kicker text-[8px] text-fog mt-1">{w.tier}</span>
                <div className="flex gap-[3px] mt-2.5">
                  {MONTHS.map((m, i) => (
                    <span
                      key={m}
                      className="flex-1 h-[7px] rounded-[2px] transition-transform group-hover:scale-y-125"
                      style={{
                        background: w.months.includes(i) ? w.color : "rgba(142,156,192,0.12)",
                        outline: i === nowMonth ? "1px solid #eaf0fc" : "none",
                        outlineOffset: 1,
                      }}
                      title={`${m}${w.months.includes(i) ? " — hiring" : ""}${i === nowMonth ? " (now)" : ""}`}
                    />
                  ))}
                </div>
                <p className="mono text-[9px] text-fog/80 leading-relaxed mt-2.5">{w.note}</p>
              </div>
            );
          })}
        </div>
        <p className="mono text-[9.5px] text-fog/70 mt-3.5">
          quarter {Math.min(16, qi + 1)}/16 of the arc · align the Y4 Q4 application push with the Sep–Oct and Feb–Mar waves · never cold-apply Tier 1 without a signal first
        </p>
      </div>
    </Reveal>
  );
}
