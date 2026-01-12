export default function Kbd({ children }) {
  return (
    <span className="ml-2 inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/40 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
      {children}
    </span>
  );
}
