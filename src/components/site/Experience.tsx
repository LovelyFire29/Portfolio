import { motion } from "framer-motion";
import { Briefcase, Compass } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

const ease = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <SectionBadge>Experience</SectionBadge>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            Learning through
            <br />
            <span className="text-gradient">building.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="relative mt-14 overflow-hidden rounded-3xl glass-card p-8 sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/30">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Open to my first internship.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                I’m building practical experience through personal projects and hands-on
                development. I’m looking for opportunities where I can apply my skills, learn
                from experienced developers, and contribute to meaningful software projects.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Frontend",
                  "Full-stack",
                  "Developer tooling",
                  "AI / ML",
                  "Open source",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Let's build something
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative grid h-52 w-52 place-items-center rounded-2xl border border-white/10 bg-white/[0.03]">
                <Compass className="h-16 w-16 text-primary" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20" />
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
