import { motion } from "framer-motion";
import { Sparkles, Rocket, Code2, Layers } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

const ease = [0.22, 1, 0.36, 1] as const;

const focusAreas = [
  { icon: Code2, label: "Full-stack web apps" },
  { icon: Layers, label: "AI-powered tools" },
  { icon: Rocket, label: "Developer utilities" },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-20 -z-10 h-96 w-[40rem] rounded-full bg-primary/10 blur-[140px]"
      />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <SectionBadge>Featured Projects</SectionBadge>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            Things I'm Building
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-snug text-muted-foreground sm:text-lg sm:leading-relaxed">
            A collection of software projects focused on solving real-world problems.
            New projects will be added as they are completed.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="group relative mt-14 overflow-hidden rounded-3xl glass-card p-8 sm:p-12"
        >
          {/* Ambient glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />
          {/* Subtle grid backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                In progress
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Projects in Progress
              </h3>
              <p className="mt-3 text-sm leading-snug text-muted-foreground sm:text-base sm:leading-relaxed">
                I'm currently building a set of full-stack and AI-focused projects — designed
                to solve real problems, sharpen my engineering skills, and grow into a
                portfolio worth sharing. Polished write-ups, live demos, and source code will
                land here as each project ships.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {focusAreas.map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    <f.icon className="h-3.5 w-3.5 text-primary" />
                    {f.label}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/LovelyFire29"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
                >
                  Follow along on GitHub
                  <span aria-hidden className="transition-transform group-hover/btn:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full glass-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.07]"
                >
                  Get notified
                </a>
              </div>
            </div>

            {/* Decorative visual */}
            <div className="relative hidden lg:block">
              <div className="relative grid h-56 w-56 place-items-center rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-white/[0.03] to-transparent">
                <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/20" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/30 shadow-glow">
                  <Sparkles className="h-9 w-9 text-primary" />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-4 rounded-2xl border border-white/5"
                  style={{ animation: "ringPulse 4s ease-in-out infinite" }}
                />
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
