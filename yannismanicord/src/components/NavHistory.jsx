export default function NavHistory({
  history,
  currentPage,
  onNavigate,
  onRemove,
}) {
  if (!history.length) return null;

  return (
    <aside className="fixed right-6 top-1/2 z-30 -translate-y-1/2">
      <nav className="flex flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-2 backdrop-blur-md shadow-lg">
        {history.map((page) => {
          const active = page === currentPage;

          return (
            <div
  key={page}
  className={`group relative flex items-center rounded-xl transition
    ${
      active
        ? "bg-zinc-800 text-white"
        : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
    }`}
>
  {/* NAV BUTTON */}
  <button
    onClick={() => onNavigate(page)}
    className="flex-1 px-5 py-2 pr-10 text-sm text-left"
  >
    {label(page)}
  </button>

  {/* REMOVE BUTTON */}
  {!active && (
    <button
      onClick={() => onRemove(page)}
      className="absolute right-3 text-sm opacity-0 transition group-hover:opacity-100 text-zinc-400 hover:text-white"
      aria-label="Remove from history"
    >
      ✕
    </button>
  )}
</div>

          );
        })}
      </nav>
    </aside>
  );
}

function label(page) {
  const labels = {
    explore: "Explore",
    stack: "Stack",
    experiences: "XP",
    projects: "Projects",
    about: "About",
    terminal: "Terminal",
  };

  return labels[page] ?? page;
}

