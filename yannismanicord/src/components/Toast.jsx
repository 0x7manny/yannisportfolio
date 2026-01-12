export default function Toast({ title, desc, onClose }) {
  if (!title) return null;
  return (
    <div className="fixed bottom-5 right-5 z-50 w-[320px] rounded-2xl border border-zinc-800 bg-zinc-950/95 p-4 shadow-xl backdrop-blur">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-zinc-50">{title}</div>
          {desc ? <div className="mt-1 text-sm text-zinc-300">{desc}</div> : null}
        </div>
        <button
          onClick={onClose}
          className="rounded-lg border border-zinc-800 bg-zinc-900/30 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-900/45"
        >
          Esc
        </button>
      </div>
    </div>
  );
}
