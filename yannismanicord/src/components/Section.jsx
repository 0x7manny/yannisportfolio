export default function Section({ id, title, children, kicker }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        {kicker ? (
          <div className="mb-2 text-xs uppercase tracking-[0.24em] text-zinc-400">
            {kicker}
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
