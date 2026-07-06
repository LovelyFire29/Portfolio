import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { SectionBadge } from "./SectionBadge";
const ease = [0.22, 1, 0.36, 1] as const;

export function Resume() {
  return (
    <section id="resume" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-3xl glass-card p-8 sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -bottom-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <SectionBadge>Résumé</SectionBadge>
              <h3 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-tight">
                A closer look
                <br />
                <span className="text-gradient">at my journey.</span>
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Explore my skills, education, projects, and experience in one place.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">

                <a
                href="/SR Resume.pdf"
                  download
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
                >
                  <Download className="h-4 w-4" />
                  Download résumé
                </a>
                <a
                href="/SR Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.07]"
                >
                  <Eye className="h-4 w-4" />
                  View online
                </a>
              </div>

              <div className="mt-5 text-xs text-muted-foreground">PDF · One page · Always up to date</div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative h-60 w-44 rotate-[6deg] rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 shadow-glow">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-md bg-primary/20 ring-1 ring-primary/40" />
                  <div className="h-2 w-20 rounded-full bg-white/20" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/15" />
                  <div className="h-2 w-5/6 rounded-full bg-white/10" />
                  <div className="h-2 w-3/4 rounded-full bg-white/10" />
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-2 w-1/2 rounded-full bg-primary/40" />
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-4/5 rounded-full bg-white/10" />
                  <div className="h-2 w-2/3 rounded-full bg-white/10" />
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-2 w-2/5 rounded-full bg-primary/40" />
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-3/4 rounded-full bg-white/10" />
                </div>
                <FileText className="absolute -bottom-3 -right-3 h-10 w-10 text-primary drop-shadow-[0_0_12px_oklch(0.58_0.22_265)]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
