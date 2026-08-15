import { useEffect, useRef, useState } from "react";
import { useNexus, dayNumber, todayKey } from "../store";
import { Icon, useToast } from "./ui";

const NAV = [
  { id: "command", n: "01", label: "Command Center", icon: "compass" },
  { id: "daily", n: "02", label: "Daily Queue", icon: "target" },
  { id: "analytics", n: "03", label: "Analytics", icon: "chart" },
  { id: "build", n: "04", label: "Build + Roadmap", icon: "cube" },
  { id: "skill", n: "05", label: "CP + Math", icon: "code" },
  { id: "finance", n: "06", label: "Finance", icon: "dollar" },
  { id: "companies", n: "07", label: "Companies", icon: "briefcase" },
  { id: "todo", n: "08", label: "To-Do", icon: "list" },
  { id: "resources", n: "09", label: "Resource Library", icon: "book" },
];

export default function Sidebar({ onOperator }: { onOperator: () => void }) {
  const { state, restore, profile } = useNexus();
  const { show, node } = useToast();
  const [active, setActive] = useState("command");
  const [now, setNow] = useState(new Date());
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    const secs = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.15, 0.4] }
    );
    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const day = dayNumber(state.startDate);
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");

  const backup = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nexus-backup-${todayKey()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    show("Backup downloaded — keep it somewhere safe.", "#2fd6b5");
  };

  const onImport = (f: File | null) => {
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      let ok = false;
      try {
        ok = restore(JSON.parse(String(r.result)));
      } catch {
        ok = false;
      }
      show(ok ? "Backup restored. Welcome back, operator." : "That file isn't a NEXUS backup.", ok ? "#6fdd8b" : "#ff5c7a");
      if (fileRef.current) fileRef.current.value = "";
    };
    r.readAsText(f);
  };

  return (
    <>
      {node}
      <input ref={fileRef} type="file" accept="application/json,.json" className="hidden" onChange={(e) => onImport(e.target.files?.[0] ?? null)} aria-hidden />

      {/* desktop rail */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-[248px] flex-col border-r border-edge bg-deep/70 backdrop-blur-sm z-40">
        <a href="#command" className="flex items-center gap-3 px-6 h-[72px] border-b border-edge group">
          <span className="grid place-items-center w-9 h-9 rounded-lg border border-amber/50 bg-amber/10 text-amber group-hover:bg-amber group-hover:text-ink transition-colors duration-200">
            <Icon name="bolt" size={18} />
          </span>
          <span>
            <span className="display font-bold text-lg tracking-tight text-snow leading-none block">NEXUS</span>
            <span className="kicker text-[9px] text-fog">engineer's os</span>
          </span>
        </a>

        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {NAV.map((n) => {
            const on = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="group flex items-center gap-3 px-3 py-2.5 rounded-md mb-0.5 transition-all duration-200"
                style={{
                  background: on ? "rgba(255,178,36,0.08)" : "transparent",
                  borderLeft: `2px solid ${on ? "#ffb224" : "transparent"}`,
                }}
              >
                <span className={`mono text-[10px] ${on ? "text-amber" : "text-fog/50"} group-hover:text-amber transition-colors`}>{n.n}</span>
                <Icon name={n.icon} size={15} className={on ? "text-amber" : "text-fog"} />
                <span className={`text-[13px] font-medium ${on ? "text-snow" : "text-fog"} group-hover:text-snow transition-colors`}>{n.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="px-5 py-4 border-t border-edge">
          <button
            className="w-full flex items-center gap-2.5 rounded-md border border-edge bg-deep/60 px-3 py-2 mb-3 group hover:border-amber/50 transition-colors text-left cursor-pointer"
            onClick={onOperator}
            title="Operator console — switch profile, edit name / start date, reset progress"
          >
            <span className="grid place-items-center w-7 h-7 flex-none rounded-full border border-edge2 text-mist group-hover:text-amber group-hover:border-amber/50 transition-colors">
              <Icon name="user" size={13} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="display font-semibold text-[12.5px] text-snow block truncate leading-tight">{profile.name}</span>
              <span className="kicker text-[8px] text-fog">operator · switch / edit</span>
            </span>
            <Icon name="edit" size={12} className="text-fog group-hover:text-amber transition-colors flex-none" />
          </button>
          <div className="flex items-center justify-between mb-3">
            <span className="flex items-center gap-2">
              <span className="livedot" />
              <span className="kicker text-fog">systems live</span>
            </span>
            <span className="mono text-sm text-mist tabular-nums">
              {hh}:{mm}<span className="text-amber">:{ss}</span>
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="display font-bold text-2xl text-snow tabular-nums">{day > 0 ? `D${day}` : "D—"}</span>
            <span className="mono text-[10px] text-fog">/ 1461</span>
          </div>
          <div className="meter mt-2" style={{ height: 4 }}>
            <i style={{ width: `${(day / 1461) * 100}%`, background: "linear-gradient(90deg,#ffb224,#ff7849)" }} />
          </div>
          <div className="flex gap-2 mt-3.5">
            <button className="btn flex-1 !py-1.5 !px-2 !text-[9px] flex items-center justify-center gap-1.5" onClick={backup}>
              <Icon name="upload" size={11} /> BACKUP
            </button>
            <button className="btn flex-1 !py-1.5 !px-2 !text-[9px] flex items-center justify-center gap-1.5" onClick={() => fileRef.current?.click()}>
              <Icon name="refresh" size={11} /> RESTORE
            </button>
          </div>
        </div>
      </aside>

      {/* mobile top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 border-b border-edge bg-deep/85 backdrop-blur">
        <div className="flex items-center justify-between px-4 h-14">
          <a href="#command" className="flex items-center gap-2">
            <span className="grid place-items-center w-7 h-7 rounded-md border border-amber/50 bg-amber/10 text-amber">
              <Icon name="bolt" size={14} />
            </span>
            <span className="display font-bold text-snow">NEXUS</span>
            <span className="mono text-[10px] text-fog">D{day > 0 ? day : "—"}</span>
            <span className="mono text-[10px] text-mist truncate max-w-[88px] hidden xs:inline sm:inline">{profile.name}</span>
          </a>
          <span className="flex items-center gap-2">
            <button className="btn !p-1.5" onClick={onOperator} aria-label="operator console" title="operator console">
              <Icon name="user" size={13} />
            </button>
            <button className="btn !p-1.5" onClick={backup} aria-label="download backup">
              <Icon name="upload" size={13} />
            </button>
            <button className="btn !p-1.5" onClick={() => fileRef.current?.click()} aria-label="restore backup">
              <Icon name="refresh" size={13} />
            </button>
            <span className="mono text-xs text-mist tabular-nums">{hh}:{mm}:{ss}</span>
          </span>
        </div>
        <nav className="flex gap-1 px-3 pb-2 overflow-x-auto">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`flex-none mono text-[10px] tracking-wide px-2.5 py-1.5 rounded-full border transition-colors ${active === n.id ? "border-amber text-amber bg-amber/10" : "border-edge text-fog"}`}>
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
