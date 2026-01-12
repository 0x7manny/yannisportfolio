import { useMemo, useRef, useState } from "react";

const HELP = [
  ["help", "Liste les commandes"],
  ["whoami", "Résumé rapide"],
  ["skills", "Afficher la stack"],
  ["projects", "Lister les projets"],
  ["contact", "Liens de contact"],
  ["clear", "Nettoyer le terminal"]
];

export default function Terminal({ profile, stack, projects }) {
  const [lines, setLines] = useState([
    "Welcome 👋",
    "Type 'help' then press Enter."
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const stackLine = useMemo(() => stack.join(", "), [stack]);

  function push(...newLines) {
    setLines((l) => [...l, "", ...newLines]);
  }

  function run(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setLines([]);
      return;
    }
    if (cmd === "help") {
      push(...HELP.map(([c, d]) => `${c.padEnd(10, " ")} — ${d}`));
      return;
    }
    if (cmd === "whoami") {
      push(`${profile.name} — ${profile.role}`, profile.tagline);
      return;
    }
    if (cmd === "skills") {
      push(stackLine);
      return;
    }
    if (cmd === "projects") {
      push(...projects.map((p) => `• ${p.name} — ${p.desc}`));
      return;
    }
    if (cmd === "contact") {
      push(
        `LinkedIn: ${profile.links.linkedin}`,
        `GitHub: ${profile.links.github}`,
        `Email: ${profile.links.email.replace("mailto:", "")}`
      );
      return;
    }

    push(`Unknown command: ${raw}`, "Type 'help'.");
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-zinc-900 px-4 py-3">
        <div className="text-sm text-zinc-300">/home/portfolio</div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
        </div>
      </div>

      <div
        className="px-4 py-4 font-mono text-sm"
        onClick={() => inputRef.current?.focus()}
        role="button"
        tabIndex={0}
      >
        {lines.map((ln, idx) => (
          <div key={idx} className="whitespace-pre-wrap text-zinc-200">
            {ln}
          </div>
        ))}

        <form
          className="mt-3 flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            setLines((l) => [...l, "", `➜~ ${value}`]);
            run(value);
            setValue("");
          }}
        >
          <span className="text-zinc-400">➜~<span className="cursor-blink">▍</span></span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-transparent text-zinc-100 outline-none placeholder:text-zinc-600"
            placeholder="help"
            spellCheck={false}
            autoCapitalize="none"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
