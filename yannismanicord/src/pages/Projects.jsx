import Section from "../components/Section.jsx";
import { FadeIn, HoverCard } from "../components/Motion.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <Section id="projects" className="py-24">
      <h2 className="mb-16 text-center text-4xl font-bold text-white">
        Projects
      </h2>

      <FadeIn>
        <div className="space-y-12">
          {projects.map((project) => (
            <HoverCard
              key={project.title}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/20"
            >
              {/* VIDEO */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  {project.subtitle}
                </p>

                <p className="mt-4 text-sm text-zinc-300">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINK */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block text-sm font-medium text-white underline underline-offset-4 hover:text-zinc-300"
                  >
                    View project →
                  </a>
                )}
              </div>
            </HoverCard>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
