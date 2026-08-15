import { DESIGN_DOCS, DOC_STATUSES } from "../data";
import { useNexus } from "../store";
import { Icon, Reveal, useToast } from "./ui";

const STATUS_COLOR = ["#8e9cc0", "#ffb224", "#5fb0ff", "#6fdd8b"];

export default function DesignDocs() {
  const { state, set } = useNexus();
  const { show, node } = useToast();

  const setStatus = (id: string, status: number) => {
    set((s) => ({ ...s, designDocs: { ...s.designDocs, [id]: { status, link: s.designDocs[id]?.link ?? "" } } }));
    if (status === 3) show("Design doc shipped — same format you'll write on the job.", "#6fdd8b");
  };
  const setLink = (id: string, link: string) =>
    set((s) => ({ ...s, designDocs: { ...s.designDocs, [id]: { status: s.designDocs[id]?.status ?? 0, link } } }));

  const done = DESIGN_DOCS.filter((d) => (state.designDocs[d.id]?.status ?? 0) === 3).length;

  return (
    <div className="mt-14">
      {node}
      <Reveal className="mb-6">
        <div className="flex items-center gap-3">
          <span className="kicker text-sky">Writing Standard</span>
          <span className="h-px flex-1 bg-edge" />
          <span className="kicker text-fog">{done}/{DESIGN_DOCS.length} docs at “Done”</span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-3 mt-3">
          <h3 className="display text-2xl md:text-3xl font-bold text-snow">The 5-Section Design Doc Tracker</h3>
          <p className="mono text-[10px] text-fog max-w-md leading-relaxed">
            Summary · Motivation · Detailed Design · Alternatives Considered · Trade-offs — the exact genre every target company writes in. Fluent by hire day, not learning under deadline.
          </p>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {DESIGN_DOCS.map((d, i) => {
          const st = state.designDocs[d.id] ?? { status: 0, link: "" };
          const c = STATUS_COLOR[st.status];
          return (
            <Reveal key={d.id} delay={(i % 3) * 70}>
              <div className="panel panel-hover p-5 h-full flex flex-col" style={{ borderColor: st.status === 3 ? "rgba(111,221,139,0.4)" : undefined }}>
                <div className="flex items-center justify-between">
                  <span className="mono text-[10px] px-2 py-0.5 rounded-full border" style={{ color: c, borderColor: `${c}55`, background: `${c}10` }}>
                    {d.when}
                  </span>
                  {st.status === 3 && <Icon name="check" size={14} className="text-mint" />}
                </div>
                <div className="display font-bold text-[15.5px] text-snow mt-2.5">{d.title}</div>
                <p className="text-[11.5px] text-fog leading-snug mt-1.5 flex-1">{d.focus}</p>

                <div className="flex gap-1.5 mt-4">
                  {DOC_STATUSES.map((label, k) => (
                    <button
                      key={label}
                      className="flex-1 mono text-[8px] tracking-wide py-1.5 rounded border transition-all cursor-pointer"
                      style={{
                        color: st.status === k ? "#0b101e" : STATUS_COLOR[k],
                        borderColor: st.status === k ? STATUS_COLOR[k] : "var(--color-edge)",
                        background: st.status === k ? STATUS_COLOR[k] : "transparent",
                        fontWeight: st.status === k ? 700 : 400,
                      }}
                      onClick={() => setStatus(d.id, k)}
                    >
                      {label.replace("Not started", "—").replace("Self-review", "review")}
                    </button>
                  ))}
                </div>
                <input
                  className="mt-2.5 !py-1.5 !text-[11px]"
                  placeholder="link to the doc (GitHub / Notion / vault)"
                  value={st.link}
                  onChange={(e) => setLink(d.id, e.target.value)}
                  aria-label={`${d.title} doc link`}
                />
                {st.link.trim().startsWith("http") && (
                  <a href={st.link.trim()} target="_blank" rel="noreferrer" className="mono text-[9.5px] text-sky hover:text-snow mt-1.5 flex items-center gap-1 transition-colors">
                    ↗ open document
                  </a>
                )}
              </div>
            </Reveal>
          );
        })}

        {/* the standard itself */}
        <Reveal delay={210}>
          <div className="rounded-lg border border-dashed border-edge2 p-5 h-full flex flex-col bg-deep/30">
            <span className="kicker text-fog">the format, memorized</span>
            <ol className="mt-3 space-y-2.5">
              {["Summary — one paragraph: is the rest relevant to you?", "Motivation — why must this exist? (the section that decides everything)", "Detailed Design — APIs, data structures, system interactions", "Alternatives Considered — proves you didn't grab the first idea", "Trade-offs — explicit about what you're giving up"].map((s, i) => (
                <li key={s} className="flex items-start gap-2.5 text-[11.5px] text-mist leading-snug">
                  <span className="display font-bold text-sky flex-none">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mono text-[9px] text-fog/70 mt-auto pt-3">sources: “Design Docs at Google” (read Y2 Q1) · rust-lang/rfcs (read 3–5 accepted RFCs in Y2)</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
