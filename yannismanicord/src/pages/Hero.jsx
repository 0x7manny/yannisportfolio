import { motion, useMotionValue, useSpring } from "framer-motion";
import { FadeIn } from "../components/Motion.jsx";
import Badge from "../components/Badge.jsx";
import Marquee from "../components/Marquee.jsx";
import { stack } from "../data.js";

export default function Hero({ onNavigate }) {
  return (
    <section className="relative">
      {/* ===== TITRE ===== */}
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
        Hi I&apos;m Yannis <span className="inline-block">👋</span>
        <br />
        <span className="text-white">A multi-cap Developer.</span>
      </h1>

      {/* ===== LOCALISATION ===== */}
      <div className="mt-4 flex items-center gap-2 text-zinc-400 italic">
        <span className="text-orange-500 text-lg">📍</span>
        <span>Paris, France.</span>
      </div>

      {/* ===== DESCRIPTION ===== */}
      <div className="mt-8 max-w-2xl space-y-5 text-zinc-400 text-base leading-relaxed">
        <p>
          I build web applications using <span className="text-white">React</span>,
          <span className="text-white"> TypeScript</span>, and
          <span className="text-white"> VueJS</span>, while also working with
          cloud & Blockchain technologies like <span className="text-white">AWS</span>,
          <span className="text-white"> Docker</span>,
          <span className="text-white"> Solidity</span>,
          and <span className="text-white">Rust</span>.
        </p>

        <p>
          My focus is on creating scalable, efficient solutions that solve
          real-world problems.
        </p>
      </div>

      {/* ===== CTA ===== */}
      <div className="mt-8">
        <button
          onClick={() => onNavigate("stack")}
          className="rounded-lg bg-zinc-800 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-700 transition"
        >
          More About My Stack
        </button>
      </div>

      {/* ===== TECHNO SECTION ===== */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-white mb-6">
          A quick look at the technologies I use, the rest is just above!
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {TECHS.map(tech => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 text-zinc-400 text-sm"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-10 w-10 object-contain"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TECHS = [
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
  { name: "Vite", icon: "/icons/vite.svg" },
  { name: "Express", icon: "/icons/express.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "MariaDB", icon: "/icons/mariadb.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "Solidity", icon: "/icons/solidity.svg" },
  { name: "Rust", icon: "/icons/rust.svg" },
];
