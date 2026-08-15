import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { CATS, WEEK_SETS, SUNDAY_REVIEW } from "../data";
import { useNexus, ensurePlan, todayKey, bumpActivity, type PlanTask } from "../store";
import { Icon, SectionHead, Reveal, Check, Meter, useToast } from "./ui";
import { WeekView } from "./PlanPanels";

const catOf = (id: string) => CATS.find((c) => c.id === id) ?? CATS[CATS.length - 1];
const dayLabel = (key: string) =>
  new Date(key + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
const DOW_ORDER = [1, 2, 3, 4, 5, 6, 0];
const DOW_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function TodoList() {
  const { state, set } = useNexus();
  const { show, node } = useToast();
  const [composerOpen, setComposerOpen] = useState(false);
  const [nt, setNt] = useState({ title: "", detail: "", cat: CATS[0]?.id ?? "python" });

  const today = todayKey();
  const dow = new Date(today + "T12:00:00").getDay();
  const todayCats = WEEK_SETS[dow];
  const tomorrowCats = WEEK_SETS[(dow + 1) % 7];

  /* build today's plan on open — carried tasks first, then fresh bank tasks */
  useEffect(() => {
    set((s) => ensurePlan(s, today));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [today]);

  const plan = state.plans[today] ?? [];
  const doneCount = plan.filter((t) => t.done).length;

  const toggle = (task: PlanTask) => {
    if (!task.done && doneCount + 1 === plan.length && plan.length > 0) {
      confetti({ particleCount: 130, spread: 90, origin: { y: 0.6 }, colors: ["#ff7849", "#ffb224", "#eaf0fc"], disableForReducedMotion: true });
      window.setTimeout(() => show("Daily plan cleared — tracker synced.", "#6fdd8b"), 150);
    } else if (!task.done && task.carriedFrom) {
      show("Carried task cleared — debt paid.", "#ffb224");
    }
    set((s) => {
      const cur = s.plans[today] ?? [];
      const wasDone = cur.find((t) => t.id === task.id)?.done ?? false;
      return bumpActivity(
        { ...s, plans: { ...s.plans, [today]: cur.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)) } },
        wasDone ? -1 : 1
      );
    });
  };

  const addAdhoc = () => {
    const title = nt.title.trim();
    if (!title) {
      show("Give the task a title first.", "#ff5c7a");
      return;
    }
    const bankId = `adhoc-${Date.now()}`;
    set((s) => {
      const base = ensurePlan(s, today);
      const task: PlanTask = {
        id: `${today}:${bankId}`,
        bankId,
        cat: nt.cat,
        title,
        detail: nt.detail.trim() || "Ad-hoc task — define done-criteria in your head before starting. If you can't, it's not ready to execute.",
        done: false,
        adhoc: true,
      };
      return { ...base, plans: { ...base.plans, [today]: [...(base.plans[today] ?? []), task] } };
    });
    setNt({ title: "", detail: "", cat: nt.cat });
    setComposerOpen(false);
    show("Task injected into today's plan.", "#ffb224");
  };

  /* past days, newest first */
  const history = Object.keys(state.plans)
    .filter((d) => d < today)
    .sort()
    .reverse()
    .slice(0, 6)
    .map((d) => {
      const arr = state.plans[d];
      const dn = arr.filter((t) => t.done).length;
      return { d, total: arr.length, done: dn, missed: arr.filter((t) => !t.done).map((t) => t.title) };
    });

  return (
    <section id="todo" className="py-16 scroll-mt-24">
      {node}
      <SectionHead
        index="08"
        kicker="Execution"
        color="#ff7849"
        title="Daily To-Do Plan"
        desc={`Built fresh each day from the skills today addresses — ${DOW_NAMES[dow]} runs ${todayCats.join(" + ")}. Finished tasks feed the progress tracker automatically. Anything missed rolls to the next day its skill is scheduled.`}
        right={
          <Reveal>
            <div className="panel px-5 py-3 min-w-[190px]" style={{ borderColor: "rgba(255,120,73,0.35)" }}>
              <div className="flex items-center justify-between gap-4">
                <span className="kicker text-[9px] text-fog">today</span>
                <span className="display font-bold text-2xl text-ember tabular-nums">
                  {doneCount}<span className="text-fog text-sm">/{plan.length}</span>
                </span>
              </div>
              <div className="mt-2"><Meter pct={plan.length ? (doneCount / plan.length) * 100 : 0} color="#ff7849" h={5} /></div>
              <div className="kicker text-[8px] text-fog mt-1.5">auto-syncs → progress tracker</div>
            </div>
          </Reveal>
        }
      />

      <WeekView />

      <div className="grid lg:grid-cols-[1fr_300px] gap-5 items-start">
        {/* ── today's plan ─────────────────────────────────────────── */}
        <div>
          <Reveal className="flex flex-wrap items-center gap-2 mb-4">
            <span className="kicker text-[10px] text-fog">today addresses</span>
            {todayCats.map((c) => {
              const cat = catOf(c);
              return (
                <span key={c} className="mono text-[10px] px-2.5 py-1 rounded-full border flex items-center gap-1.5" style={{ color: cat.color, borderColor: `${cat.color}55`, background: `${cat.color}10` }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: cat.color }} />
                  {cat.label}
                </span>
              );
            })}
            <span className="mono text-[10px] text-fog/70 ml-auto">tomorrow: {tomorrowCats.join(" + ")}</span>
          </Reveal>

          <div className="space-y-3">
            {plan.length === 0 && (
              <Reveal>
                <div className="panel p-10 text-center border-dashed">
                  <Icon name="check" size={20} className="text-mint mx-auto" />
                  <p className="display font-semibold text-lg text-snow mt-3">Nothing scheduled today</p>
                  <p className="text-[12px] text-fog mt-1">Either every skill bank is clear, or it's a rest day. Use it to review the roadmap.</p>
                </div>
              </Reveal>
            )}
            {plan.map((t, i) => {
              const cat = catOf(t.cat);
              return (
                <Reveal key={t.id} delay={Math.min(i * 50, 250)}>
                  <div
                    className="panel panel-hover p-4 flex gap-3.5 transition-opacity"
                    style={{ ["--edge-hi" as string]: `${cat.color}55`, opacity: t.done ? 0.55 : 1, borderColor: t.carriedFrom && !t.done ? "rgba(255,178,36,0.35)" : undefined }}
                  >
                    <div className="pt-0.5">
                      <Check on={t.done} onToggle={() => toggle(t)} color={cat.color} size={21} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`display font-semibold text-[15px] ${t.done ? "line-through text-fog" : "text-snow"}`}>{t.title}</span>
                        <span className="mono text-[9px] px-2 py-0.5 rounded-full border" style={{ color: cat.color, borderColor: `${cat.color}44`, background: `${cat.color}0f` }}>
                          {cat.label}
                        </span>
                        {t.carriedFrom && !t.done && (
                          <span className="mono text-[9px] px-2 py-0.5 rounded-full border border-amber/50 bg-amber/10 text-amber flex items-center gap-1">
                            <Icon name="clock" size={9} /> carried from {dayLabel(t.carriedFrom)}
                          </span>
                        )}
                        {t.adhoc && !t.done && (
                          <span className="mono text-[9px] px-2 py-0.5 rounded-full border border-sky/40 bg-sky/10 text-sky">ad-hoc</span>
                        )}
                        {t.adhoc && (
                          <button
                            className="ml-auto btn !p-1.5 hover:!border-rose/60 hover:!text-rose"
                            title="Delete this ad-hoc task"
                            onClick={() => {
                              set((s) => bumpActivity(
                                { ...s, plans: { ...s.plans, [today]: (s.plans[today] ?? []).filter((x) => x.id !== t.id) } },
                                t.done ? -1 : 0
                              ));
                              show("Ad-hoc task deleted.", "#ff5c7a");
                            }}
                          >
                            <Icon name="trash" size={11} />
                          </button>
                        )}
                      </div>
                      <p className="text-[12.5px] text-fog leading-relaxed mt-1.5">{t.detail}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* ad-hoc composer */}
          <div className="mt-4">
            {!composerOpen ? (
              <button className="btn flex items-center gap-2" onClick={() => setComposerOpen(true)}>
                <Icon name="plus" size={13} /> INJECT AD-HOC TASK
              </button>
            ) : (
              <div className="panel p-4" style={{ borderColor: "rgba(95,176,255,0.35)" }}>
                <div className="kicker text-sky text-[10px] mb-3">ad-hoc task — added to today's plan</div>
                <div className="grid sm:grid-cols-[1fr_150px] gap-2">
                  <input type="text" placeholder="Title — what exactly gets done?" value={nt.title} onChange={(e) => setNt({ ...nt, title: e.target.value })} onKeyDown={(e) => e.key === "Enter" && addAdhoc()} />
                  <select value={nt.cat} onChange={(e) => setNt({ ...nt, cat: e.target.value })} aria-label="category">
                    {CATS.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
                  </select>
                </div>
                <textarea
                  rows={2}
                  className="w-full mt-2 resize-none"
                  placeholder="Detail — how do you do it, and what does 'done' look like?"
                  value={nt.detail}
                  onChange={(e) => setNt({ ...nt, detail: e.target.value })}
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button className="btn" onClick={() => setComposerOpen(false)}>CANCEL</button>
                  <button className="btn btn-amber" onClick={addAdhoc}>INJECT</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── rotation + rules + history ───────────────────────────── */}
        <div className="space-y-4 lg:sticky lg:top-28">
          <Reveal>
            <div className="panel p-5">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="refresh" size={14} className="text-sky" />
                <span className="kicker text-sky">Weekly Skill Rotation</span>
              </div>
              <div className="space-y-1.5">
                {DOW_ORDER.map((d) => {
                  const isToday = d === dow;
                  return (
                    <div
                      key={d}
                      className="flex items-center justify-between gap-3 rounded-md px-3 py-2 border transition-colors"
                      style={{ borderColor: isToday ? "rgba(255,178,36,0.5)" : "transparent", background: isToday ? "rgba(255,178,36,0.07)" : "transparent" }}
                    >
                      <span className={`mono text-[11px] w-20 flex-none ${isToday ? "text-amber font-bold" : "text-fog"}`}>
                        {DOW_NAMES[d].slice(0, 3).toUpperCase()}
                      </span>
                      <span className="flex flex-wrap items-center gap-1.5 justify-end">
                        {WEEK_SETS[d].map((c) => {
                          const cat = catOf(c);
                          return (
                            <span key={c} className="mono text-[9px] px-2 py-0.5 rounded-full flex items-center gap-1" style={{ color: cat.color, background: `${cat.color}12` }}>
                              <span className="w-1 h-1 rounded-full" style={{ background: cat.color }} />
                              {cat.label}
                            </span>
                          );
                        })}
                      </span>
                      {isToday && <span className="kicker text-[8px] text-amber flex-none">today</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="panel p-5">
              <div className="flex items-center gap-2 mb-2.5">
                <Icon name="shield" size={14} className="text-amber" />
                <span className="kicker text-amber">The Carry Rule</span>
              </div>
              <p className="text-[12px] text-fog leading-relaxed">
                A missed task <span className="text-snow">doesn't disappear and doesn't count</span> — the tracker stays flat.
                It waits at the front of the queue until the next day its skill is addressed, then re-enters that day's plan
                tagged <span className="text-amber">carried</span>. Complete it there and the debt is cleared for good.
              </p>
            </div>
          </Reveal>

          {history.length > 0 && (
            <Reveal delay={140}>
              <div className="panel p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="calendar" size={14} className="text-mint" />
                  <span className="kicker text-mint">Recent Days</span>
                </div>
                <div className="space-y-1.5">
                  {history.map((h) => {
                    const pct = h.total ? h.done / h.total : 0;
                    const color = pct === 1 ? "#6fdd8b" : pct >= 0.5 ? "#ffb224" : "#ff5c7a";
                    return (
                      <div
                        key={h.d}
                        title={h.missed.length ? `Missed: ${h.missed.join(" · ")}` : "All tasks cleared"}
                        className="flex items-center gap-3 cursor-default group"
                      >
                        <span className="mono text-[10.5px] text-fog w-24 flex-none group-hover:text-mist transition-colors">{dayLabel(h.d)}</span>
                        <div className="flex-1"><Meter pct={pct * 100} color={color} h={4} /></div>
                        <span className="mono text-[10.5px] tabular-nums w-9 text-right" style={{ color }}>{h.done}/{h.total}</span>
                      </div>
                    );
                  })}
                </div>
                <p className="kicker text-[8.5px] text-fog/70 mt-3">hover a day to see what was missed</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {/* ── sunday review + obsidian export ────────────────────────── */}
      <Reveal className="mt-6">
        <div className="panel p-5 flex flex-col md:flex-row md:items-center gap-4" style={{ borderColor: "rgba(111,221,139,0.25)" }}>
          <div className="flex items-center gap-3 flex-none">
            <Icon name="book" size={16} className="text-mint" />
            <div>
              <span className="kicker text-mint block">Sunday Review</span>
              <span className="mono text-[10px] text-fog">30 minutes · close the week honestly</span>
            </div>
          </div>
          <div className="flex-1 flex flex-wrap gap-1.5">
            {SUNDAY_REVIEW.map((r) => {
              const on = !!state.review[r];
              return (
                <button key={r} onClick={() => set((s) => ({ ...s, review: { ...s.review, [r]: !s.review[r] } }))}
                  className={`mono text-[9.5px] px-2.5 py-1.5 rounded-full border transition-all cursor-pointer ${on ? "border-mint/60 text-mint bg-mint/10 line-through" : "border-edge text-fog hover:text-mist hover:border-edge2"}`}
                  title={r}>
                  {r.length > 34 ? r.slice(0, 34) + "…" : r}
                </button>
              );
            })}
          </div>
          <button
            className="btn flex items-center justify-center gap-2 flex-none"
            style={{ borderColor: "rgba(111,221,139,0.5)", color: "#6fdd8b" }}
            onClick={() => {
              const per = (cat: string) => {
                const ts = plan.filter((t) => t.cat === cat);
                return ts.length ? Math.round((ts.filter((t) => t.done).length / ts.length) * 100) : null;
              };
              const lines: string[] = [`# NEXUS — Sunday Review · ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`, ""];
              lines.push("## Queue completion (today's plan)");
              CATS.forEach((c) => { const p = per(c.id); if (p !== null) lines.push(`- ${c.label}: ${p}%`); });
              lines.push("", "## CP", `- Rating: ${state.cp.rating} · contests logged: ${state.cp.contests.length}`);
              lines.push("", "## Money", `- Savings: $${state.savings} · income entries logged: ${state.incomeActual.length} · gigs won: ${state.freelance.gigs.filter((x) => x.status === "won").length}`);
              const carried = plan.filter((t) => t.carriedFrom && !t.done).map((t) => t.title);
              lines.push("", "## Carried forward", carried.length ? carried.map((t) => `- ${t}`).join("\n") : "- none — clean slate");
              lines.push("", "## Review checklist");
              SUNDAY_REVIEW.forEach((r) => lines.push(`- [${state.review[r] ? "x" : " "}] ${r}`));
              lines.push("", "## One sentence for the week", "> ");
              const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `nexus-review-${todayKey()}.md`;
              a.click();
              URL.revokeObjectURL(url);
              show("Sunday review exported — drop it in NEXUS/Journal.", "#6fdd8b");
            }}
          >
            <Icon name="upload" size={12} /> EXPORT TO OBSIDIAN
          </button>
        </div>
      </Reveal>
    </section>
  );
}
