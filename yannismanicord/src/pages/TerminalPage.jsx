import Section from "../components/Section.jsx";
import Terminal from "../components/Terminal.jsx";
import { FadeIn } from "../components/Motion.jsx";
import { stack, projects } from "../data.js";

export default function TerminalPage({ profile }) {
  return (
    <Section id="terminal" kicker="Terminal" title="Terminal">
      <FadeIn>
        <Terminal
          profile={profile}
          stack={stack}
          projects={projects}
        />
      </FadeIn>
    </Section>
  );
}
