export default function Nav({
  profile,
  currentPage,
  onNavigate,
  onSurprise,
}) {
  const item = (id, label) => (
    <button
      key={id}
      onClick={() => onNavigate(id)}
      className={`px-3 py-1.5 text-sm transition rounded-full
        ${
          currentPage === id
            ? "text-white bg-zinc-800"
            : "text-zinc-400 hover:text-white"
        }`}
    >
      {label}
    </button>
  );

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-30">
      <nav className="flex items-center gap-4 rounded-full bg-zinc-900/80 px-6 py-3 backdrop-blur-md shadow-lg border border-zinc-800">
        {/* Logo / Profile */}
        <div className="flex items-center gap-3 pr-2 border-r border-zinc-800">
          <div className="h-8 w-8 rounded-full bg-zinc-700" />
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-medium text-zinc-100">
              {profile.name}
            </div>
            <div className="text-xs text-zinc-400">
              {profile.role}
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center gap-1">
          {item("explore", "Explore")}
          {item("stack", "Stack")}
          {item("experiences", "Experiences")}
          {item("projects", "Projects")}
          {item("about", "About")}
          {item("terminal", "Terminal")}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pl-2 border-l border-zinc-800">
          <button
            onClick={onSurprise}
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            ?
          </button>
        </div>
      </nav>
    </header>
  );
}
