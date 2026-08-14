import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

/* ── icons (inline SVG, stroke-based) ─────────────────────────────── */
const PATHS: Record<string, ReactNode> = {
  bolt: <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />,
  target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" /></>),
  calendar: (<><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /></>),
  chart: (<><path d="M4 20V5" /><path d="M4 20h16" /><path d="M8 16v-5M12 16V7M16 16v-8M20 16v-3" /></>),
  cube: (<><path d="M12 2.8 20.2 7.4v9.2L12 21.2 3.8 16.6V7.4L12 2.8z" /><path d="M3.8 7.4 12 12l8.2-4.6M12 12v9.2" /></>),
  code: (<><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></>),
  sigma: <path d="M18 5H6.5L12 12l-5.5 7H18" />,
  dollar: (<><path d="M12 2.5v19" /><path d="M17 6.5c-.8-1.5-2.5-2.3-5-2.3-3 0-5 1.4-5 3.7 0 4.9 10.4 2.6 10.4 7.5 0 2.4-2.2 3.9-5.4 3.9-2.8 0-4.7-1-5.6-2.7" /></>),
  briefcase: (<><rect x="3" y="7.5" width="18" height="12.5" rx="2" /><path d="M9 7.5V5.6A1.6 1.6 0 0 1 10.6 4h2.8A1.6 1.6 0 0 1 15 5.6v1.9M3 12.5h18" /></>),
  list: (<><path d="M9 6h11M9 12h11M9 18h11" /><path d="M4.5 6h.01M4.5 12h.01M4.5 18h.01" strokeWidth="2.6" /></>),
  chevD: <path d="m6 9.5 6 6 6-6" />,
  chevR: <path d="m9.5 6 6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  x: <path d="m6 6 12 12M18 6 6 18" />,
  check: <path d="m4.5 12.5 5 5L19.5 7" />,
  flame: <path d="M12 2.5c.6 3.2-1.6 4.9-3 6.8-1.5 2-2.3 3.7-2.3 5.7a7.3 7.3 0 0 0 14.6 0c0-2.6-1.2-4.6-2.6-6.3-.4 1.5-1.1 2.4-2.2 3 .4-3.6-1.5-7.2-4.5-9.2z" />,
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>),
  arrowL: <path d="M19 12H5m6-6-6 6 6 6" />,
  arrowR: <path d="M5 12h14m-6-6 6 6-6 6" />,
  refresh: (<><path d="M20 11a8 8 0 1 0-2.3 6.3" /><path d="M20 4v7h-7" /></>),
  upload: (<><path d="M12 16V4m-5 5 5-5 5 5" /><path d="M4 16.5V19a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 19v-2.5" /></>),
  trophy: (<><path d="M8 4h8v5a4 4 0 0 1-8 0V4z" /><path d="M8 5H4.5v1.5A3.5 3.5 0 0 0 8 10M16 5h3.5v1.5A3.5 3.5 0 0 1 16 10" /><path d="M12 13v4m-4 3h8m-6.5-3h5l.8 3H8.7l.8-3z" /></>),
  flag: (<><path d="M5 21V4" /><path d="M5 4c4-2.2 7 2 12 0v9c-5 2-8-2.2-12 0" /></>),
  edit: (<><path d="M14.5 4.5 19.5 9.5 8 21H3v-5L14.5 4.5z" /><path d="m12.5 6.5 5 5" /></>),
  compass: (<><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2z" /></>),
  radar: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><path d="M12 12 18.5 5.5" /></>),
  shield: <path d="M12 2.8 19.5 5.6v6c0 5-3.2 8.2-7.5 9.6-4.3-1.4-7.5-4.6-7.5-9.6v-6L12 2.8z" />,
  spark: (<><path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21" /><path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></>),
  book: (<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z" /><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-2.5" /></>),
};

export function Icon({ name, size = 16, className = "", style }: { name: string; size?: number; className?: string; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden>
      {PATHS[name] ?? PATHS.spark}
    </svg>
  );
}

/* ── scroll reveal ────────────────────────────────────────────────── */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── count-up number ──────────────────────────────────────────────── */
export function CountUp({ value, decimals = 0, prefix = "", suffix = "", className = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string; className?: string }) {
  const [disp, setDisp] = useState(0);
  const prev = useRef(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const from = prev.current;
        const to = value;
        const t0 = performance.now();
        const dur = 900;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisp(from + (to - from) * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
          else prev.current = to;
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {disp.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

/* ── section header ───────────────────────────────────────────────── */
export function SectionHead({ index, kicker, title, desc, color, right }: { index: string; kicker: string; title: string; desc?: string; color: string; right?: ReactNode }) {
  return (
    <Reveal className="mb-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="kicker" style={{ color }}>{kicker}</span>
            <span className="mono text-[11px] text-fog/60">/{index}</span>
          </div>
          <h2 className="display text-3xl md:text-4xl font-bold tracking-tight mt-2 text-snow">{title}</h2>
          {desc && <p className="text-fog text-sm mt-2 max-w-xl leading-relaxed">{desc}</p>}
        </div>
        {right}
      </div>
      <div className="mt-4 h-px w-full" style={{ background: `linear-gradient(90deg, ${color}66, transparent 70%)` }} />
    </Reveal>
  );
}

/* ── meter bar ────────────────────────────────────────────────────── */
export function Meter({ pct, color, h = 6, striped = false }: { pct: number; color: string; h?: number; striped?: boolean }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setW(Math.min(100, Math.max(0, pct)));
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pct]);
  return (
    <div ref={ref} className="meter" style={{ height: h }}>
      <i className={striped ? "stripes" : ""} style={{ width: `${w}%`, background: `linear-gradient(90deg, ${color}b3, ${color})`, boxShadow: `0 0 12px ${color}55` }} />
    </div>
  );
}

/* ── ring gauge ───────────────────────────────────────────────────── */
export function Ring({ pct, color, size = 148, label, sub }: { pct: number; color: string; size?: number; label?: ReactNode; sub?: string }) {
  const [p, setP] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setP(Math.min(100, pct));
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pct]);
  const r = (size - 14) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div ref={ref} className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(142,156,192,0.14)" strokeWidth="9" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * p) / 100}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1)", filter: `drop-shadow(0 0 6px ${color}66)` }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="display font-bold text-3xl text-snow">{label ?? <CountUp value={Math.round(p)} suffix="%" />}</div>
        {sub && <div className="kicker text-fog mt-1">{sub}</div>}
      </div>
    </div>
  );
}

/* ── modal ────────────────────────────────────────────────────────── */
export function Modal({ open, onClose, children, wide = false }: { open: boolean; onClose: () => void; children: ReactNode; wide?: boolean }) {
  useEffect(() => {
    if (!open) return;
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4" style={{ background: "rgba(6,9,18,0.78)", backdropFilter: "blur(3px)" }} onMouseDown={onClose}>
      <div
        className={`panel w-full ${wide ? "max-w-2xl" : "max-w-md"} max-h-[86vh] overflow-y-auto p-6 relative`}
        style={{ animation: "pop 0.22s cubic-bezier(0.34,1.56,0.64,1)" }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

/* ── stepper ──────────────────────────────────────────────────────── */
export function Stepper({ value, onChange, min = 0, max, step = 1, color, suffix = "" }: { value: number; onChange: (n: number) => void; min?: number; max?: number; step?: number; color: string; suffix?: string }) {
  const dec = () => onChange(Math.max(min, value - step));
  const inc = () => onChange(Math.min(max ?? Infinity, value + step));
  return (
    <div className="flex items-center gap-1">
      <button onClick={dec} className="check" style={{ borderRadius: 6 }} aria-label="decrease">
        <Icon name="minus" size={12} className="text-fog" />
      </button>
      <span className="mono text-sm font-semibold text-snow min-w-[3.2rem] text-center">
        {value}
        <span className="text-fog text-[10px]">{suffix}</span>
      </span>
      <button onClick={inc} className="check" style={{ borderRadius: 6 }} aria-label="increase">
        <Icon name="plus" size={12} style={{ color }} />
      </button>
    </div>
  );
}

/* ── checkbox ─────────────────────────────────────────────────────── */
export function Check({ on, onToggle, color = "#ffb224", size = 18 }: { on: boolean; onToggle: () => void; color?: string; size?: number }) {
  return (
    <button
      onClick={onToggle}
      className={`check ${on ? "on" : ""}`}
      style={{ width: size, height: size, ["--chk" as string]: color }}
      aria-pressed={on}
    >
      {on && <Icon name="check" size={size - 7} style={{ color: "#0b101e" }} />}
    </button>
  );
}

/* ── chip ─────────────────────────────────────────────────────────── */
export function Chip({ children, color }: { children: ReactNode; color: string }) {
  return (
    <span className="mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full border" style={{ color, borderColor: `${color}55`, background: `${color}14` }}>
      {children}
    </span>
  );
}

/* ── toast ────────────────────────────────────────────────────────── */
export function useToast() {
  const [toast, setToast] = useState<{ msg: string; color: string } | null>(null);
  const timer = useRef<number>(0);
  const show = (msg: string, color = "#ffb224") => {
    setToast({ msg, color });
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 2600);
  };
  const node = toast ? (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] panel px-5 py-3 flex items-center gap-3" style={{ borderColor: toast.color, animation: "pop 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}>
      <Icon name="bolt" size={15} style={{ color: toast.color }} />
      <span className="mono text-xs text-snow">{toast.msg}</span>
    </div>
  ) : null;
  return { show, node };
}
