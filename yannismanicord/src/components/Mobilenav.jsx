export default function MobileNav({ currentPage, onNavigate }) {
  const items = [
    { id: "explore", label: "Home" },
    { id: "experiences", label: "XP" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 md:hidden">
      <nav className="flex gap-1 rounded-full bg-zinc-900/90 px-3 py-2 backdrop-blur border border-zinc-800 shadow-lg">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`px-3 py-1.5 text-sm rounded-full transition
              ${
                currentPage === item.id
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400"
              }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
