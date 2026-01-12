import Section from "../components/Section.jsx";
import { FadeIn, HoverCard } from "../components/Motion.jsx";

export default function About() {
  return (
    <Section id="about" className="py-24">
      {/* TITLE */}
      <h2 className="mb-16 text-center text-4xl font-bold text-white">
        About
      </h2>

      <FadeIn>
        <div className="mx-auto max-w-5xl space-y-12">
          {/* INTRO */}
          <p className="mx-auto max-w-3xl text-center text-lg text-zinc-300">
            I'm 21 years old and a student at Epitech Paris. I have a strong passion for technology, programming, finances, blockchain and sports, which has driven me to continuously learn and improve my skills in all of those things. I enjoy tackling complex problems and finding innovative solutions through code.
          </p>

          {/* PROCESS GRID */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* HOW I THINK */}
            <HoverCard className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                How I think
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• I’m someone who learns by observing, questioning, and experimenting.</li>
                <li>• I like understanding why something is done, not just how to do it.</li>
                <li>• I’m naturally reflective — I question my choices, I take a step back, and I try to stay aligned with what actually makes sense to me.</li>
                <li>• I value clarity, calm decision-making, and honesty, both with myself and with others.</li>
              </ul>
            </HoverCard>

            {/* WHAT I BUILD */}
            <HoverCard className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                What drives me
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• I’m driven by curiosity and the desire to improve — not only in what I do, but in how I do it.</li>
                <li>• I care about doing things properly, even when no one is watching. </li>
                <li>• I like building things that feel meaningful and well thought out, and I’m motivated by progress that feels real, not rushed.</li>
              </ul>
            </HoverCard>

            {/* WHAT I AVOID */}
            <HoverCard className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                What I avoid
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• I try to avoid superficiality and rushing decisions just to “move fast”.</li>
               <li>• I stay away from environments where clarity, respect, and sincerity are not valued.</li>
                <li>• I’m not comfortable pretending to be someone I’m not, whether in my work or in relationships.</li>
              </ul>
            </HoverCard>
          </div>

          {/* OUTRO */}
          <p className="mx-auto max-w-3xl text-center text-sm text-zinc-400">
            What matters to me is staying aligned with who I am, while continuing to grow. And do not forget to love you befoe anything else. 
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
