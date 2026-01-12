import Section from "../components/Section.jsx";
import { FadeIn, HoverCard } from "../components/Motion.jsx";
import { experiences } from "../data.js";

export default function Experiences() {
  return (
    <Section id="experiences" className="relative py-24 space-y-20">
      <h2 className="mb-16 text-center text-4xl font-bold text-white">
  Experiences
</h2>

      <FadeIn>
        <div className="space-y-6">
          {experiences.map((xp) => (
            <HoverCard
              key={xp.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/15 p-6"
            >
              {/* Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="font-semibold text-zinc-50">
                  {xp.title}
                </div>
                <div className="text-sm text-zinc-500">
                  {xp.period}
                </div>
              </div>

              <div className="mt-1 text-sm text-zinc-300">
                {xp.company}
              </div>

              {/* Tech stack */}
              {xp.tech && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {xp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Points */}
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                {xp.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </HoverCard>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
