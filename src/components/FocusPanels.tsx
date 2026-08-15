import { QUARTERS, WEEK_SETS, CATS, TRACKS } from "../data";
import { useNexus, quarterIndex, DAY_MS } from "../store";
import { Icon, Reveal, Meter, Check } from "./ui";

/* ── quarterly focus board ─────────────────────────────────────────── */
export function QuarterFocus() {
  const { state, set } = useNexus();
  const qi = quarterIndex(state.startDate);
  const q = QUARTERS[qi];
  const key = String(q.id);
  const checks = state.quarterChecks[key] ?? q.deliverables.map(() => false);
  const done = checks.filter(Boolean).length;
  const pct = (done / q.deliverables.length) * 100;

  /* days left in the quarter */
  let daysLeft: number | null = null;
  if (state.startDate) {
    const qStart = new Date(state.startDate + "T00:00:00").getTime() + qi * 91.3125 * DAY_MS;
    daysLeft = Math.max(0, Math.ceil((qStart + 91.3125 * DAY_MS - Date.now()) / DAY_MS));
  }

  const toggle = (i: number) =>
    set((s) => ({
      ...s,
      quarterChecks: { ...s.quarterChecks, [key]: checks.map((v, k) => (k === i ? !v : v)) },
    }));

  return (
    <Reveal className="md:col-span-2">
      <div className="panel p-6 h-full" style={{ borderColor: done === q.deliverables.length ? "rgba(111,221,139,0.4)" : undefined }}>
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="kicker text-amber">Quarter Focus Board</span>
          <span className="h-px flex-1 bg-edge" />
          {daysLeft !== null && (
            <span className="mono text-[10px] px-2.5 py-1 rounded-full border border-amber/40 bg-amber/10 text-amber">
              {daysLeft} day{daysLeft === 1 ? "" : "s"} left in {q.label}
            </span>
          )}
        </div>

        <div className="grid md:grid-cols-[1fr_270px] gap-6">
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="display font-bold text-2xl text-snow">{q.label}</span>
              <span className="mono text-[11px] text-fog">{q.range}</span>
            </div>
            <p className="display font-medium text-lg text-amber mt-1">{q.theme}</p>

            <div className="mt-5 space-y-2.5">
              {q.deliverables.map((d, i) => (
                <div key={d} className="flex items-start gap-3 group">
                  <div className="pt-0.5"><Check on={checks[i]} onToggle={() => toggle(i)} color="#ffb224" size={18} /></div>
                  <span className={`text-[13px] leading-snug ${checks[i] ? "text-fog line-through" : "text-mist"} group-hover:text-snow transition-colors`}>{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-md border border-amber/35 bg-amber/[0.05] p-4">
              <div className="flex items-center gap-2 text-amber">
                <Icon name="flag" size={12} />
                <span className="kicker text-[9px]">quarter milestone</span>
              </div>
              <p className="text-[12.5px] text-snow mt-2 leading-snug">{q.milestone}</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="kicker text-[9px] text-fog">deliverables cleared</span>
                <span className="mono text-[11px] font-semibold text-amber tabular-nums">{done}/{q.deliverables.length}</span>
              </div>
              <Meter pct={pct} color="#ffb224" h={6} />
            </div>
            <p className="mono text-[9.5px] text-fog/70 leading-relaxed">
              if any deliverable stalls → first week of {QUARTERS[qi + 1]?.label ?? "next quarter"} fixes it. an unstable foundation is worse than a late start.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ── 12-week activity heatmap (github-style) ───────────────────────── */
const heatColor = (v: number) =>
  v <= 0 ? "rgba(142,156,192,0.10)" : v <= 2 ? "rgba(47,214,181,0.35)" : v <= 4 ? "rgba(47,214,181,0.75)" : v <= 6 ? "rgba(255,178,36,0.8)" : "#ff7849";

export function Heatmap() {
  const { state } = useNexus();
  const days = 84; /* 12 weeks */
  const today = new Date();
  const cells: { key: string; v: number; lbl: string }[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today.getTime() - i * DAY_MS);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    cells.push({
      key,
      v: state.activity[key] ?? 0,
      lbl: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
    });
  }
  /* pad the first week so columns align to weekdays (Mon top) */
  const firstDow = (new Date(cells[0].key + "T12:00:00").getDay() + 6) % 7; /* 0 = Mon */
  const padded = [...Array.from({ length: firstDow }, () => null), ...cells];
  const weeks: (typeof cells[number] | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));

  const total = cells.reduce((a, c) => a + c.v, 0);
  const activeDays = cells.filter((c) => c.v > 0).length;
  const best = cells.reduce((a, c) => Math.max(a, c.v), 0);

  return (
    <Reveal delay={100}>
      <div className="panel p-6 h-full flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="kicker text-teal">Mission Heatmap · 12 weeks</span>
          <span className="mono text-[10px] text-fog">{total} actions · {activeDays} active days</span>
        </div>

        <div className="flex gap-[3px] overflow-x-auto pb-1">
          {weeks.map((w, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {w.map((c, di) =>
                c ? (
                  <div
                    key={c.key}
                    className="w-[13px] h-[13px] rounded-[3px] transition-all hover:scale-125 hover:ring-1 hover:ring-snow/60 cursor-default"
                    style={{ background: heatColor(c.v) }}
                    title={`${c.lbl} — ${c.v} action${c.v === 1 ? "" : "s"}`}
                  />
                ) : (
                  <div key={`pad-${di}`} className="w-[13px] h-[13px]" />
                )
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4">
          <span className="mono text-[9px] text-fog">less</span>
          {[0, 1, 3, 5, 7].map((v) => (
            <span key={v} className="w-[11px] h-[11px] rounded-[3px]" style={{ background: heatColor(v) }} />
          ))}
          <span className="mono text-[9px] text-fog">more</span>
          <span className="mono text-[9.5px] text-mist ml-auto">best day: {best} action{best === 1 ? "" : "s"}</span>
        </div>
        <p className="mono text-[9.5px] text-fog/70 mt-3 pt-3 border-t border-edge/60">
          every ticked task + habit check-in paints a cell · consistency beats intensity
        </p>
      </div>
    </Reveal>
  );
}

/* re-export guard for tree-shaking safety */
export const _focusDeps = { WEEK_SETS, CATS, TRACKS };
