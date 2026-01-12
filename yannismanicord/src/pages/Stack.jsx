export default function Stack() {
  return (
    <section className="relative py-24 space-y-20">
      {/* PAGE TITLE */}
      <h2 className="text-center text-4xl font-bold text-white">
        Stack
      </h2>

      <BackendSection />
      <FrontendSection />
      <DevOpsSection />
      <BlockchainSection />
    </section>
  );
}

/* =========================================================
   BACKEND
========================================================= */

function BackendSection() {
  return (
    <Section title="Backend Development">

      <TechCard
        icon="/icons/express.svg"
        name="Express"
        description="Fast, unopinionated, minimalist web framework for Node.js."
        tags={["Framework", "Node.js"]}
      />

      <TechCard
        icon="/icons/postgresql.svg"
        name="PostgreSQL"
        description="Open source object-relational database system."
        tags={["Database", "SQL"]}
      />

      <TechCard
        icon="/icons/mongodb.svg"
        name="MongoDB"
        description="Document-oriented NoSQL database."
        tags={["Database", "NoSQL"]}
      />

      <TechCard
        icon="/icons/mariadb.svg"
        name="MariaDB"
        description="Community-developed fork of MySQL."
        tags={["Database", "SQL"]}
      />
    </Section>
  );
}

/* =========================================================
   FRONTEND
========================================================= */

function FrontendSection() {
  return (
    <Section title="Frontend Development">
      <TechCard
        icon="/icons/react.svg"
        name="React"
        description="A JavaScript library for building fast, interactive user interfaces."
        tags={["Frontend", "UI"]}
      />

      <TechCard
        icon="/icons/typescript.svg"
        name="TypeScript"
        description="A strongly typed programming language that builds on JavaScript."
        tags={["Language", "Type Safety"]}
      />

      <TechCard
        icon="/icons/javascript.svg"
        name="JavaScript"
        description="The core language of the web."
        tags={["Language"]}
      />

      <TechCard
        icon="/icons/nextjs.svg"
        name="Next.js"
        description="A React framework for production-grade applications."
        tags={["Framework", "SSR"]}
      />

      <TechCard
        icon="/icons/tailwind.svg"
        name="TailwindCSS"
        description="Utility-first CSS framework for rapidly building modern designs."
        tags={["CSS", "Design System"]}
      />

      <TechCard
        icon="/icons/vite.svg"
        name="Vite"
        description="Next generation frontend tooling for fast development."
        tags={["Tooling", "Bundler"]}
      />
    </Section>
  );
}

/* =========================================================
   DEVOPS / CLOUD
========================================================= */

function DevOpsSection() {
  return (
    <Section title="DevOps & Cloud">
      <TechCard
        icon="/icons/docker.svg"
        name="Docker"
        description="Containerization platform for building and deploying applications."
        tags={["Containers", "DevOps"]}
      />

      <TechCard
        icon="/icons/aws.svg"
        name="AWS"
        description="Cloud computing services for scalable infrastructure."
        tags={["Cloud", "Infrastructure"]}
      />

      <TechCard
        icon="/icons/kubernetes.svg"
        name="Kubernetes"
        description="Container orchestration system for automating deployment and scaling."
        tags={["Orchestration", "Cloud"]}
      />
    </Section>
  );
}

/* =========================================================
   GENERIC SECTION WRAPPER
========================================================= */

function Section({ title, children }) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 rounded-xl bg-zinc-900/60 px-6 py-4 text-lg font-semibold text-white backdrop-blur">
        {title}
      </div>

      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   TECH CARD
========================================================= */

function TechCard({ icon, name, description, tags }) {
  return (
    <div className="group flex gap-6 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-xl">
      {/* ICON */}
      <div className="flex h-12 w-12 items-center justify-center">
        <img
          src={icon}
          alt={name}
          className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white">
          {name}
        </h3>

        <p className="mt-1 max-w-2xl text-sm text-zinc-400">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlockchainSection() {
  return (
    <Section title="Blockchain & Systems">
      <TechCard
        icon="/icons/rust.svg"
        name="Rust"
        description="A systems programming language focused on safety, performance, and concurrency."
        tags={["Language", "Systems", "Performance"]}
      />

      <TechCard
        icon="/icons/solidity.svg"
        name="Solidity"
        description="Smart contract programming language for Ethereum-based blockchains."
        tags={["Blockchain", "Smart Contracts"]}
      />

      <TechCard
        icon="/icons/ethereum.svg"
        name="Ethereum"
        description="Decentralized blockchain platform for smart contracts and decentralized applications."
        tags={["Blockchain", "EVM"]}
      />
    </Section>
  );
}
