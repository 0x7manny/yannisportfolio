import { FadeIn, HoverCard } from "../components/Motion.jsx";

function ButtonLink({ href, children }) {
  const external = !href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/20 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:bg-zinc-900/35"
    >
      {children}
    </a>
  );
}

export default function Contact({ profile }) {
  return (
    <section id="contact" className="scroll-mt-24">
      <FadeIn>
        <HoverCard className="rounded-2xl border border-zinc-800 bg-zinc-900/15 p-6">
          <div className="font-semibold text-zinc-50">Contact</div>

          <p className="mt-2 text-sm text-zinc-300">
            LinkedIn, GitHub ou email — comme tu veux.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <ButtonLink href={profile.links.linkedin}>LinkedIn</ButtonLink>
            <ButtonLink href={profile.links.github}>GitHub</ButtonLink>
            <ButtonLink href={profile.links.email}>Email</ButtonLink>
          </div>
        </HoverCard>

        <footer className="mt-10 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </FadeIn>
    </section>
  );
}

