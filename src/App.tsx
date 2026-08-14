import { Component, type ErrorInfo, type ReactNode } from "react";
import { NexusProvider } from "./store";
import Sidebar from "./components/Sidebar";
import CommandCenter from "./components/CommandCenter";
import DailyQueue from "./components/DailyQueue";
import Analytics from "./components/Analytics";
import BuildTrack from "./components/BuildTrack";
import SkillTrack from "./components/SkillTrack";
import Finance from "./components/Finance";
import Companies from "./components/Companies";
import TodoList from "./components/TodoList";
import { Icon } from "./components/ui";

class ErrorBoundary extends Component<{ children: ReactNode }, { err: string }> {
  state = { err: "" };
  static getDerivedStateFromError(e: unknown) {
    return { err: e instanceof Error ? `${e.name}: ${e.message}` : String(e) };
  }
  componentDidCatch(error: unknown, info: ErrorInfo) {
    console.error("NEXUS runtime error:", error, info.componentStack);
  }
  render() {
    if (!this.state.err) return this.props.children;
    return (
      <div className="min-h-screen grid place-items-center p-6" style={{ background: "var(--color-ink)" }}>
        <div className="panel p-8 max-w-lg w-full" style={{ borderColor: "rgba(255,92,122,0.45)" }}>
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-10 h-10 rounded-md border border-rose/50 bg-rose/10 text-rose">
              <Icon name="bolt" size={18} />
            </span>
            <div>
              <div className="display font-bold text-xl text-snow">NEXUS hit a runtime error</div>
              <div className="kicker text-rose text-[9px] mt-0.5">diagnostic panel · v1.2</div>
            </div>
          </div>
          <p className="text-[13px] text-fog mt-4 leading-relaxed">
            The dashboard failed to start in your browser. Copy the message below and paste it back —
            it pinpoints exactly what to fix.
          </p>
          <div className="rounded-md border border-edge bg-deep/70 p-3.5 mt-3">
            <code className="mono text-[12px] text-rose break-all">{this.state.err}</code>
          </div>
          <button className="btn btn-amber w-full mt-5 flex items-center justify-center gap-2" onClick={() => window.location.reload()}>
            <Icon name="refresh" size={13} /> RELOAD DASHBOARD
          </button>
          <p className="mono text-[10px] text-fog/70 mt-3">
            tip: also try an incognito window — cached data from the old site can mask the fix.
          </p>
        </div>
      </div>
    );
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <NexusProvider>
      <div className="nexus-bg" />
      <div className="nexus-grid" />
      <div className="nexus-scan" />
      <Sidebar />

      <main className="lg:pl-[248px] pt-24 lg:pt-0">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-7 lg:px-10">
          <CommandCenter />
          <DailyQueue />
          <Analytics />
          <BuildTrack />
          <SkillTrack />
          <Finance />
          <Companies />
          <TodoList />

          <footer className="border-t border-edge py-10 mb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="grid place-items-center w-8 h-8 rounded-md border border-amber/50 bg-amber/10 text-amber">
                    <Icon name="bolt" size={15} />
                  </span>
                  <span className="display font-bold text-xl text-snow tracking-tight">NEXUS</span>
                </div>
                <p className="mono text-[10.5px] text-fog mt-3 leading-relaxed max-w-md">
                  one goal · get hired by a giant · 4 years · 44 companies · 5 domains · every task traces to a named interview screen. State lives in your browser — nothing leaves this machine.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="kicker text-[9px] text-fog">arc window</div>
                  <div className="mono text-[12px] text-mist mt-1">JUL 2026 → JUN 2030</div>
                </div>
                <div className="text-right">
                  <div className="kicker text-[9px] text-fog">signature target</div>
                  <div className="mono text-[12px] text-amber mt-1">🏁 JUN 2030</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
      </NexusProvider>
    </ErrorBoundary>
  );
}
