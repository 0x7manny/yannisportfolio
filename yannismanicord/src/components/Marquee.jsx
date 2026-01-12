export default function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/10 py-3">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_55%)] opacity-60" />
      <div className="flex gap-6 whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-[marquee_22s_linear_infinite] gap-6 px-6">
          {doubled.map((it, idx) => (
            <span key={idx} className="font-mono text-xs text-zinc-300">
              {it}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
