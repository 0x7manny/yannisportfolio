import { useMemo, useState, useEffect } from "react";
import Nav from "./components/Nav.jsx";
import NavHistory from "./components/NavHistory.jsx";
import Toast from "./components/Toast.jsx";
import { initSakura } from "./lib/sakura.js";

import { profile } from "./data.js";
import { useHotkeys } from "./lib/useHotkeys.js";
import { usePrefersReducedMotion } from "./lib/usePrefersReducedMotion.js";

// Pages
import Hero from "./pages/Hero.jsx";
import Stack from "./pages/Stack.jsx";
import Experiences from "./pages/Experiences.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import TerminalPage from "./pages/TerminalPage.jsx";
import Contact from "./pages/Contact.jsx";

const PAGES = {
  explore: "explore",
  stack: "stack",
  experiences: "experiences",
  projects: "projects",
  about: "about",
  terminal: "terminal",
};

const SURPRISES = [
  { title: "🧠", desc: "Just lock in." },
  { title: "🧠", desc: "Do not follow the mass." },
  { title: "🧠", desc: "Simplicity is the ultimate sophistication." },
  { title: "🧠", desc: "Less is more." },
  { title: "🧠", desc: "Code is poetry." },
  { title: "🧠", desc: "Stay curious, keep learning." },
];

function toShuka(text) {
  return text
    .replaceAll("Je ", "I ")
    .replaceAll("déploie", "deploy")
    .replaceAll("applications web", "web apps")
    .replaceAll("avec", "with")
    .replaceAll(" et ", " & ");
}

export default function App() {
  const reduced = usePrefersReducedMotion();

  const [toast, setToast] = useState({ title: "", desc: "" });
  const [shuka, setShuka] = useState(false);

  const [currentPage, setCurrentPage] = useState(PAGES.explore);
  const [history, setHistory] = useState([PAGES.explore]);

  useEffect(() => {
    initSakura();
  }, []);

  const p = useMemo(() => {
    if (!shuka) return profile;
    return { ...profile, tagline: toShuka(profile.tagline) };
  }, [shuka]);

  function surprise() {
    const s = SURPRISES[Math.floor(Math.random() * SURPRISES.length)];
    setToast(s);
  }

  function navigate(page) {
  setCurrentPage(page);
  setHistory((prev) => {
    // enlève la page si elle existe déjà
    const filtered = prev.filter((p) => p !== page);
    // ajoute à la fin
    return [...filtered, page].slice(-4);
  });
}
function removeFromHistory(page) {
  setHistory((prev) => prev.filter((p) => p !== page));
}


  useHotkeys({
    h: () => navigate(PAGES.explore),
    s: () => navigate(PAGES.stack),
    e: () => navigate(PAGES.experiences),
    p: () => navigate(PAGES.projects),
    a: () => navigate(PAGES.about),
    t: () => navigate(PAGES.terminal),
    "?": surprise,
    u: () => setShuka((v) => !v),
    escape: () => setToast({ title: "", desc: "" }),
  });

  return (
    <>
      {/* 🌸 Sakura canvas (decorative) */}
      <canvas
        id="sakura"
        className="pointer-events-none fixed inset-0 z-0"
      />

      {/* ===== APP LAYOUT ===== */}
      <div
        className={`relative z-10 ${
          shuka ? "font-mono" : "font-sans"
        }`}
      >
        {/* NAV TOP */}
        <Nav
          profile={{ name: p.name, role: p.role }}
          currentPage={currentPage}
          onNavigate={navigate}
          onSurprise={surprise}
        />

        {/* NAV HISTORY (RIGHT SIDE) */}
        <NavHistory
  history={history}
  currentPage={currentPage}
  onNavigate={navigate}
  onRemove={removeFromHistory}
/>


        {/* TOAST */}
        <Toast
          title={toast.title}
          desc={toast.desc}
          onClose={() => setToast({ title: "", desc: "" })}
        />

        {/* MAIN CONTENT */}
        <main className="relative mx-auto max-w-5xl px-4 pb-16 pt-32">
          {currentPage === PAGES.explore && (
            <Hero
              profile={p}
              reduced={reduced}
              onNavigate={navigate}
            />
          )}

          {currentPage === PAGES.stack && <Stack />}
          {currentPage === PAGES.experiences && <Experiences />}
          {currentPage === PAGES.projects && <Projects />}
          {currentPage === PAGES.about && <About />}
          {currentPage === PAGES.terminal && (
            <TerminalPage profile={p} />
          )}
          {currentPage === "contact" && <Contact profile={p} />}
        </main>
      </div>
    </>
  );
}
