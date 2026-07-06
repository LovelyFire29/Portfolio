import { motion } from "framer-motion";
import { Trophy, GitCommit, BookOpen } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ease = [0.22, 1, 0.36, 1] as const;

const achievements = [
  {
    icon: Trophy,
    title: "Began my journey at SRM Institute",
    body: "Started pursuing B.Tech Computer Science Engineering, building a strong foundation in programming, problem-solving, and software development.",
    tag: "2025",
  },
  {
    icon: GitCommit,
    title: "Building projects, consistently",
    body: "Turning ideas into practical projects while learning new technologies and improving my development skills through hands-on experience.",
    tag: "Ongoing",
  },
  {
    icon: BookOpen,
    title: "Learning beyond the classroom",
    body: "Exploring full-stack development, software engineering, and new technologies beyond coursework through self-directed learning and project building.",
    tag: "2023 — PRESENT",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="relative py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-20 -z-10 h-96 w-[40rem] rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          id="achievements-title"
          eyebrow="Highlights"
          title={
            <>
              Small wins, stacked —
              <br />
              <span className="text-gradient">momentum compounding.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06] sm:p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
              />
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                  <a.icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {a.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
