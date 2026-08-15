import { useState } from "react";
import { RES_CATEGORIES, RES_BOOKS, RES_OFF_ROADMAP, RES_QUARTER_HINTS, QUARTERS } from "../data";
import { SectionHead, Reveal, Icon } from "./ui";

const LEVEL_COLOR: Record<string, string> = {
  Foundation: "#2fd6b5",
  Core: "#ffb224",
  Advanced: "#ff5c7a",
};

export default function ResourceLibrary() {
  const [filter, setFilter] = useState<string>("all");
  const cats = filter === "all" ? RES_CATEGORIES : RES_CATEGORIES.filter((c) => c.id === filter);

  return (
    <section id="resources" className="py-16 scroll-mt-24">
      <SectionHead
        index="09"
        kicker="Library"
        color="#45c8e8"
        title="Resource Library"
        desc="Every course, textbook, and tool the plan touches — categorized on the CS-DIY wiki taxonomy and ordered foundations → advanced inside each topic. Amber tags mark what's already on your roadmap with its quarter; fog tags are complementary picks from the site."
        right={
          <Reveal>
            <div className="panel px-5 py-3">
              <div className="kicker text-[9px] text-fog">in plan</div>
              <div className="display font-bold text-2xl text-sky">
                {RES_CATEGORIES.reduce((a, c) => a + c.courses.filter((x) => x.inPlan).length, 0)}
                <span className="text-fog text-sm"> courses</span>
              </div>
            </div>
          </Reveal>
        }
      />

      {/* topic filter rail */}
      <Reveal className="mb-6">
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setFilter("all")}
            className={`mono text-[10px] tracking-wide px-3 py-1.5 rounded-full border transition-all duration-200 ${
              filter === "all" ? "border-sky text-sky bg-sky/10" : "border-edge text-fog hover:text-snow hover:border-edge2"
            }`}
          >
            All topics
          </button>
          {RES_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className="mono text-[10px] tracking-wide px-3 py-1.5 rounded-full border transition-all duration-200"
              style={{
                borderColor: filter === c.id ? c.color : "var(--color-edge)",
                color: filter === c.id ? c.color : "#8e9cc0",
                background: filter === c.id ? `${c.color}14` : "transparent",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="space-y-10">
        {cats.map((cat, ci) => (
          <Reveal key={cat.id} delay={Math.min(ci * 50, 200)}>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full flex-none self-center" style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
              <h3 className="display font-bold text-xl text-snow tracking-tight">{cat.label}</h3>
              <span className="kicker text-[9px] text-fog">{cat.cn}</span>
              <span className="mono text-[10px] text-fog/60 ml-auto">{cat.courses.length} resources</span>
            </div>

            <div className="grid gap-2">
              {cat.courses.map((c, i) => {
                const lc = LEVEL_COLOR[c.level];
                return (
                  <a
                    key={c.code}
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="panel panel-hover group flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 px-4.5 py-3.5"
                    style={{ ["--edge-hi" as string]: `${cat.color}55`, padding: "14px 18px" }}
                  >
                    <span className="mono text-[10px] text-fog/50 w-6 flex-none tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="display font-semibold text-[14px] text-snow">{c.code}</span>
                        <span className="text-[12px] text-mist">{c.name}</span>
                      </div>
                      <p className="text-[11.5px] text-fog leading-snug mt-1">{c.note}</p>
                    </div>
                    <div className="flex flex-none flex-wrap items-center gap-1.5">
                      <span className="mono text-[8.5px] tracking-wider uppercase px-2 py-0.5 rounded-full border" style={{ color: lc, borderColor: `${lc}55`, background: `${lc}10` }}>
                        {c.level}
                      </span>
                      {c.inPlan ? (
                        <span className="mono text-[8.5px] tracking-wider uppercase px-2 py-0.5 rounded-full border border-amber/55 text-amber bg-amber/10 flex items-center gap-1">
                          <Icon name="flag" size={9} /> in plan · {c.inPlan}
                        </span>
                      ) : RES_QUARTER_HINTS[c.code] ? (
                        <span className="mono text-[8.5px] tracking-wider uppercase px-2 py-0.5 rounded-full border border-sky/45 text-sky bg-sky/10 flex items-center gap-1">
                          <Icon name="chevR" size={9} /> placed · {QUARTERS[RES_QUARTER_HINTS[c.code] - 1].label}
                        </span>
                      ) : (
                        <span className="mono text-[8.5px] tracking-wider uppercase px-2 py-0.5 rounded-full border border-edge text-fog/70">
                          csdiy complement
                        </span>
                      )}
                      <Icon name="chevR" size={12} className="text-fog/40 group-hover:text-snow group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </a>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>

      {/* books */}
      <Reveal className="mt-14">
        <div className="flex items-center gap-3 mb-5">
          <span className="kicker text-amber">Book Recommendations</span>
          <span className="h-px flex-1 bg-edge" />
          <span className="kicker text-fog">好书推荐 · the plan's shelf</span>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {RES_BOOKS.map((b, i) => (
            <div key={b.title} className={`panel panel-hover p-4 h-full flex flex-col ${i % 3 === 0 ? "" : ""}`} style={{ ["--edge-hi" as string]: "#ffb22444" }}>
              <div className="flex items-start justify-between gap-2">
                <span className="display font-semibold text-[13.5px] text-snow leading-tight">{b.title}</span>
                {b.inPlan && (
                  <span className="mono text-[8px] tracking-wider uppercase px-1.5 py-0.5 rounded-full border border-amber/55 text-amber bg-amber/10 flex-none">
                    {b.inPlan}
                  </span>
                )}
              </div>
              <div className="mono text-[10px] text-fog mt-1">{b.author}</div>
              <p className="text-[11.5px] text-fog leading-snug mt-2">{b.note}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* off-roadmap */}
      <Reveal className="mt-8">
        <div className="rounded-md border border-dashed border-edge2 px-5 py-4 bg-deep/40">
          <div className="flex items-center gap-2 text-fog">
            <Icon name="shield" size={13} />
            <span className="kicker text-[9px]">deliberately off the roadmap</span>
          </div>
          <p className="text-[11.5px] text-fog mt-2 leading-relaxed">
            These csdiy categories were cut by the hiring-only plan — they trace to no target company's screen, so their hours stay in the five domains:{" "}
            {RES_OFF_ROADMAP.map((s, i) => (
              <span key={s}>
                <span className="text-mist/80">{s}</span>
                {i < RES_OFF_ROADMAP.length - 1 ? " · " : ""}
              </span>
            ))}
            .
          </p>
        </div>
      </Reveal>
    </section>
  );
}
