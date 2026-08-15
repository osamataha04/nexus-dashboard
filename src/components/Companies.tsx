import { useMemo, useState } from "react";
import { COMPANIES, TIER_COLORS, type Company } from "../data";
import { HiringRadar } from "./PlanPanels";
import OpportunityRadar from "./OpportunityRadar";
import { useNexus } from "../store";
import { SectionHead, Reveal, Icon, Check, Modal, Chip, Meter } from "./ui";

const TIERS = Object.keys(TIER_COLORS) as Company["tier"][];

export default function Companies() {
  const { state, set } = useNexus();
  const [intel, setIntel] = useState<Company | null>(null);
  const [tierFilter, setTierFilter] = useState<Company["tier"] | "All">("All");

  const ready = useMemo(
    () => COMPANIES.filter((c) => (state.checklists[c.id] ?? []).every(Boolean)).length,
    [state.checklists]
  );

  const toggle = (co: Company, j: number) => {
    set((s) => ({
      ...s,
      checklists: {
        ...s.checklists,
        [co.id]: (s.checklists[co.id] ?? co.checklist.map(() => false)).map((v, k) => (k === j ? !v : v)),
      },
    }));
  };

  const shown = COMPANIES.filter((c) => tierFilter === "All" || c.tier === tierFilter);

  return (
    <section id="companies" className="py-16 scroll-mt-24">
      <SectionHead
        index="07"
        kicker={`${COMPANIES.length} Target Companies · 5 Domains`}
        color="#45c8e8"
        title="Company Intelligence"
        desc="Every target company's exact hiring pipeline, what passes, what fails, and what you need to build before applying. Tick only when genuinely ready — not aspirationally."
        right={
          <Reveal>
            <div className="panel px-5 py-3 text-center" style={{ borderColor: "rgba(69,200,232,0.35)" }}>
              <div className="kicker text-[9px] text-fog">companies ready</div>
              <div className="display font-bold text-3xl text-cyan tabular-nums">
                {ready}<span className="text-fog text-base">/{COMPANIES.length}</span>
              </div>
              <div className="kicker text-[8.5px] text-cyan/80 mt-0.5">apply jun 2030</div>
            </div>
          </Reveal>
        }
      />

      <HiringRadar />
      <OpportunityRadar />

      {/* pre-application checklist header */}
      <Reveal className="mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="kicker text-fog mr-2">Pre-Application Checklists</span>
          {(["All", ...TIERS] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTierFilter(t)}
              className="btn !py-1.5 !px-3 !text-[10px]"
              style={tierFilter === t ? { borderColor: t === "All" ? "#45c8e8" : TIER_COLORS[t], color: t === "All" ? "#45c8e8" : TIER_COLORS[t], background: `${t === "All" ? "#45c8e8" : TIER_COLORS[t]}14` } : {}}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      {TIERS.filter((t) => tierFilter === "All" || tierFilter === t).map((tier) => {
        const list = shown.filter((c) => c.tier === tier);
        if (list.length === 0) return null;
        const tc = TIER_COLORS[tier];
        return (
          <div key={tier} className="mb-8">
            <Reveal className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full" style={{ background: tc, boxShadow: `0 0 8px ${tc}` }} />
              <span className="display font-semibold text-[15px] text-snow">{tier}</span>
              <span className="mono text-[10px] text-fog">{list.length} companies</span>
              <span className="h-px flex-1 bg-edge" />
            </Reveal>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3.5">
              {list.map((c, i) => {
                const checks = state.checklists[c.id] ?? c.checklist.map(() => false);
                const done = checks.filter(Boolean).length;
                const isReady = done === c.checklist.length;
                return (
                  <Reveal key={c.id} delay={(i % 3) * 60}>
                    <div className="panel panel-hover p-4.5 h-full flex flex-col" style={{ ["--edge-hi" as string]: `${c.color}55`, padding: "16px", borderColor: isReady ? `${c.color}66` : undefined }}>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="display font-bold text-[16px] text-snow leading-tight">{c.name}</div>
                          <div className="kicker text-[8.5px] text-fog mt-1">{c.role}</div>
                        </div>
                        {isReady ? (
                          <span className="kicker text-[8px] rounded-full px-2 py-1 border flex-none" style={{ color: c.color, borderColor: `${c.color}55`, background: `${c.color}12` }}>
                            ✓ READY
                          </span>
                        ) : (
                          <button className="btn !p-1.5 flex-none" onClick={() => setIntel(c)} aria-label={`open ${c.name} intel`} title="Open intel dossier">
                            <Icon name="radar" size={13} style={{ color: c.color }} />
                          </button>
                        )}
                      </div>

                      <div className="mt-3 space-y-1.5 flex-1">
                        {c.checklist.map((item, j) => (
                          <label key={item} className="flex items-center gap-2.5 cursor-pointer group py-0.5">
                            <Check on={checks[j]} color={c.color} size={15} onToggle={() => toggle(c, j)} />
                            <span className={`text-[11.5px] leading-snug transition-colors ${checks[j] ? "text-fog line-through decoration-edge2" : "text-mist"} group-hover:text-snow`}>
                              {item}
                            </span>
                          </label>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center gap-2.5">
                        <div className="flex-1"><Meter pct={(done / c.checklist.length) * 100} color={c.color} h={3.5} /></div>
                        <span className="mono text-[10px] tabular-nums" style={{ color: done > 0 ? c.color : "#4b5878" }}>{done}/{c.checklist.length}</span>
                        <button className="kicker text-[8px] text-fog hover:text-snow transition-colors" onClick={() => setIntel(c)}>
                          intel →
                        </button>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* intel dossier modal */}
      <Modal open={!!intel} onClose={() => setIntel(null)} wide>
        {intel && (() => {
          const c = intel;
          const checks = state.checklists[c.id] ?? c.checklist.map(() => false);
          return (
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="kicker" style={{ color: c.color }}>{c.tier}</span>
                    <Chip color={c.color}>{c.role}</Chip>
                  </div>
                  <h3 className="display font-bold text-3xl text-snow mt-2">{c.name}</h3>
                </div>
                <button className="btn !p-2" onClick={() => setIntel(null)} aria-label="close"><Icon name="x" size={14} /></button>
              </div>

              <div className="mt-5">
                <span className="kicker text-sky text-[9px]">hiring pipeline</span>
                <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                  {c.pipeline.map((step, i) => (
                    <span key={step} className="flex items-center gap-1.5">
                      <span className="mono text-[10.5px] rounded-md border border-edge bg-deep/70 px-2.5 py-1.5 text-mist">
                        <span className="text-sky mr-1.5">{i + 1}.</span>{step}
                      </span>
                      {i < c.pipeline.length - 1 && <Icon name="chevR" size={11} className="text-fog/50" />}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-5">
                <div className="rounded-md border border-mint/30 bg-mint/6 p-4" style={{ background: "rgba(111,221,139,0.05)" }}>
                  <div className="flex items-center gap-2 text-mint"><Icon name="check" size={12} /><span className="kicker text-[9px]">what passes</span></div>
                  <p className="text-[12.5px] text-mist mt-2 leading-relaxed">{c.passes}</p>
                </div>
                <div className="rounded-md border border-rose/30 p-4" style={{ background: "rgba(255,92,122,0.05)" }}>
                  <div className="flex items-center gap-2 text-rose"><Icon name="x" size={12} /><span className="kicker text-[9px]">what fails</span></div>
                  <p className="text-[12.5px] text-mist mt-2 leading-relaxed">{c.fails}</p>
                </div>
              </div>

              <div className="rounded-md border border-amber/30 p-4 mt-3" style={{ background: "rgba(255,178,36,0.05)" }}>
                <div className="flex items-center gap-2 text-amber"><Icon name="cube" size={12} /><span className="kicker text-[9px]">build before applying</span></div>
                <p className="text-[12.5px] text-mist mt-2">{c.build}</p>
              </div>

              <div className="mt-5">
                <span className="kicker text-fog text-[9px]">readiness checklist</span>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-2.5">
                  {c.checklist.map((item, j) => (
                    <label key={item} className="flex items-center gap-2.5 cursor-pointer group">
                      <Check on={checks[j]} color={c.color} size={16} onToggle={() => toggle(c, j)} />
                      <span className={`text-[12px] ${checks[j] ? "text-fog line-through" : "text-mist"} group-hover:text-snow transition-colors`}>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </Modal>
    </section>
  );
}
