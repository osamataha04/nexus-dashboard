import { useState } from "react";
import { useNexus, dayNumber, type Profile } from "../store";
import { Icon, Modal, useToast } from "./ui";

/* ── first-run gate ───────────────────────────────────────────────── */
export function Onboarding({
  profiles,
  onResume,
  onCreate,
}: {
  profiles: Profile[];
  onResume: (id: string) => void;
  onCreate: (name: string, startDate: string) => void;
}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("2026-07-01");
  const [err, setErr] = useState("");

  const init = () => {
    const n = name.trim();
    if (n.length < 2) {
      setErr("Give the console an operator name (2+ characters).");
      return;
    }
    if (!date) {
      setErr("Set the arc start date — the whole plan counts from it.");
      return;
    }
    onCreate(n, date);
  };

  return (
    <div className="min-h-screen grid place-items-center p-5">
      <div className="panel w-full max-w-lg p-7 sm:p-9" style={{ borderColor: "rgba(255,178,36,0.35)" }}>
        <div className="flex items-center gap-3.5">
          <span className="grid place-items-center w-12 h-12 rounded-lg border border-amber/50 bg-amber/10 text-amber">
            <Icon name="bolt" size={22} />
          </span>
          <div>
            <div className="display font-bold text-2xl text-snow tracking-tight">NEXUS<span className="text-amber">.</span></div>
            <div className="kicker text-amber text-[9px] mt-0.5">operator registration</div>
          </div>
        </div>

        <h1 className="display font-bold text-[26px] leading-tight text-snow mt-6">
          Who&rsquo;s running this console?
        </h1>
        <p className="text-[13px] text-fog leading-relaxed mt-2.5">
          This dashboard is personal. Every operator gets their <span className="text-mist">own plan state</span> —
          tasks, streaks, checklists, progress — stored only in this browser. Register once; the console remembers you.
        </p>

        {profiles.length > 0 && (
          <div className="mt-6">
            <div className="kicker text-[9px] text-fog mb-2.5">returning operators</div>
            <div className="space-y-2">
              {profiles.map((p) => (
                <button
                  key={p.id}
                  className="w-full flex items-center gap-3 rounded-md border border-edge bg-deep/60 px-4 py-3 text-left group hover:border-amber/50 transition-colors"
                  onClick={() => onResume(p.id)}
                >
                  <span className="grid place-items-center w-8 h-8 rounded-full border border-edge2 text-mist group-hover:text-amber group-hover:border-amber/50 transition-colors">
                    <Icon name="user" size={14} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="display font-semibold text-[15px] text-snow block truncate">{p.name}</span>
                    <span className="mono text-[9.5px] text-fog">arc start {p.startDate} · day {Math.max(0, dayNumber(p.startDate))}</span>
                  </span>
                  <span className="kicker text-[9px] text-amber opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    resume <Icon name="chevR" size={11} />
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 my-5">
              <span className="h-px flex-1 bg-edge" />
              <span className="kicker text-[8.5px] text-fog">or register a new operator</span>
              <span className="h-px flex-1 bg-edge" />
            </div>
          </div>
        )}

        <div className={profiles.length ? "" : "mt-6"}>
          <label className="kicker text-[9px] text-fog block mb-1.5">operator name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setErr(""); }}
            placeholder="e.g. Osama Taha"
            className="w-full"
            onKeyDown={(e) => e.key === "Enter" && init()}
            autoFocus
          />
          <label className="kicker text-[9px] text-fog block mt-4 mb-1.5">arc start date</label>
          <input type="date" value={date} onChange={(e) => { setDate(e.target.value); setErr(""); }} className="w-full" />
          {err && <p className="mono text-[11px] text-rose mt-3">▲ {err}</p>}
          <button className="btn btn-amber w-full mt-5 flex items-center justify-center gap-2 !py-3 !text-[11px]" onClick={init}>
            <Icon name="bolt" size={13} /> INITIALIZE CONSOLE
          </button>
          <p className="mono text-[9.5px] text-fog/70 text-center mt-3.5">
            nothing leaves this machine · switch operators anytime from the sidebar
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── operator console modal ───────────────────────────────────────── */
export function ProfileModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { state, profile, profiles, patchProfile, switchProfile, createProfile, deleteProfile, reset } = useNexus();
  const { show, node } = useToast();
  const [name, setName] = useState(profile.name);
  const [date, setDate] = useState(profile.startDate);
  const [confirmReset, setConfirmReset] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("2026-07-01");

  const save = () => {
    if (name.trim().length < 2) return show("Name needs at least 2 characters.", "#ff5c7a");
    if (!date) return show("Start date can't be empty.", "#ff5c7a");
    patchProfile({ name: name.trim(), startDate: date });
    show("Operator profile updated.", "#6fdd8b");
  };

  const addNew = () => {
    if (newName.trim().length < 2) return show("Give the new operator a name first.", "#ff5c7a");
    createProfile(newName.trim(), newDate);
    show(`Welcome, ${newName.trim()} — fresh console initialized.`, "#ffb224");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} wide>
      {node}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber">
            <Icon name="user" size={15} />
            <span className="kicker">Operator Console</span>
          </div>
          <h3 className="display font-bold text-2xl text-snow mt-2">Profiles on this machine</h3>
          <p className="text-[12px] text-fog mt-1.5">Each operator has an isolated plan state. Switching never overwrites anyone's progress.</p>
        </div>
        <button className="btn !p-2" onClick={onClose} aria-label="close">
          <Icon name="x" size={14} />
        </button>
      </div>

      {/* current operator */}
      <div className="rounded-lg border border-amber/35 bg-amber/[0.04] p-4 mt-5">
        <div className="flex items-center justify-between mb-3">
          <span className="kicker text-[9px] text-amber">active operator</span>
          <span className="mono text-[10px] text-fog">day {Math.max(0, dayNumber(state.startDate))} of arc</span>
        </div>
        <div className="grid sm:grid-cols-[1fr_190px_auto] gap-2.5">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} aria-label="operator name" />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-label="arc start date" />
          <button className="btn btn-amber flex items-center justify-center gap-2" onClick={save}>
            <Icon name="check" size={12} /> SAVE
          </button>
        </div>
        <div className="mt-3">
          {confirmReset ? (
            <div className="flex items-center gap-2.5">
              <span className="mono text-[11px] text-rose">Wipe all progress (tasks, streaks, checklists, snapshots)? Profile stays.</span>
              <button className="btn !py-1.5 !px-3 !text-[9px] !border-rose/60 !text-rose" onClick={() => { reset(); setConfirmReset(false); show("Progress wiped — profile kept.", "#ff5c7a"); }}>YES, WIPE</button>
              <button className="btn !py-1.5 !px-3 !text-[9px]" onClick={() => setConfirmReset(false)}>KEEP</button>
            </div>
          ) : (
            <button className="btn !py-1.5 !px-3 !text-[9px] flex items-center gap-1.5" onClick={() => setConfirmReset(true)}>
              <Icon name="refresh" size={11} /> RESET PROGRESS (keep profile)
            </button>
          )}
        </div>
      </div>

      {/* other operators */}
      {profiles.length > 1 && (
        <div className="mt-5">
          <div className="kicker text-[9px] text-fog mb-2.5">switch operator</div>
          <div className="space-y-2">
            {profiles.filter((p) => p.id !== profile.id).map((p) => (
              <div key={p.id} className="flex items-center gap-3 rounded-md border border-edge bg-deep/60 px-4 py-2.5">
                <Icon name="user" size={14} className="text-fog" />
                <span className="flex-1 min-w-0">
                  <span className="display font-semibold text-[14px] text-snow block truncate">{p.name}</span>
                  <span className="mono text-[9.5px] text-fog">arc start {p.startDate}</span>
                </span>
                {confirmDelete === p.id ? (
                  <span className="flex items-center gap-1.5">
                    <button className="btn !py-1.5 !px-2.5 !text-[9px] !border-rose/60 !text-rose" onClick={() => { deleteProfile(p.id); setConfirmDelete(null); show(`${p.name} removed with their data.`, "#ff5c7a"); }}>DELETE</button>
                    <button className="btn !py-1.5 !px-2.5 !text-[9px]" onClick={() => setConfirmDelete(null)}>KEEP</button>
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <button className="btn !py-1.5 !px-3 !text-[9px] flex items-center gap-1.5" onClick={() => { switchProfile(p.id); onClose(); }}>
                      <Icon name="switch" size={11} /> SWITCH
                    </button>
                    <button className="btn !p-1.5 hover:!border-rose/60 hover:!text-rose" title="delete operator + their data" onClick={() => setConfirmDelete(p.id)}>
                      <Icon name="trash" size={11} />
                    </button>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* new operator */}
      <div className="rounded-lg border border-edge bg-deep/40 p-4 mt-5">
        <div className="kicker text-[9px] text-fog mb-3">register new operator — gets a fresh, isolated console</div>
        <div className="grid sm:grid-cols-[1fr_190px_auto] gap-2.5">
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="name" aria-label="new operator name" />
          <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} aria-label="new operator start date" />
          <button className="btn flex items-center justify-center gap-2" onClick={addNew}>
            <Icon name="plus" size={12} /> CREATE + SWITCH
          </button>
        </div>
      </div>
    </Modal>
  );
}
