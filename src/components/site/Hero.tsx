import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { TypingText } from "./TypingText";
import { Magnetic } from "./Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;


const meta = [
  { k: "Based in", v: "Chennai, India" },
  { k: "Studying", v: "CSE @ SRM IST" },
  { k: "Working on", v: "Full-stack & AI projects" },
  { k: "Currently", v: "Open to internships" },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-20"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-hero-glow" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      {/* Animated glowing rings — decorative signature */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-[420px] w-[420px] md:block"
      >
        <div className="hero-ring absolute inset-0" style={{ animation: "ringPulse 6s ease-in-out infinite" }} />
        <div
          className="hero-ring absolute inset-[8%]"
          style={{ animation: "ringPulse 6s ease-in-out infinite", animationDelay: "0.8s" }}
        />
        <div
          className="hero-ring absolute inset-[18%]"
          style={{ animation: "ringPulse 6s ease-in-out infinite", animationDelay: "1.6s" }}
        />
        <div
          className="absolute inset-[28%] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, oklch(0.58 0.22 265 / 0.6) 90deg, transparent 180deg)",
            animation: "ringSpin 8s linear infinite",
            filter: "blur(6px)",
            opacity: 0.5,
          }}
        />
        <div className="absolute inset-[42%] rounded-full bg-primary/40 blur-2xl" />
      </div>


      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        {/* Available for internships badge removed */}

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
          className="font-display text-[clamp(2.5rem,7.2vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-balance"
        >
          Hi, I'm Raghavan —
          <br />
          <span className="text-gradient">I build ideas into real-world solutions.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.22 }}
          className="mt-7 max-w-xl text-sm leading-snug text-muted-foreground sm:text-lg sm:leading-relaxed [text-wrap:pretty]"
        >
          I’m a Computer Science Engineering student at SRM IST interested in{" "}
          <TypingText
            className="font-medium text-foreground"
            trailing="."
            phrases={[
              "full-stack development",
              "software engineering",
              "real-world applications",
              "solving hard problems",
            ]}
          />{" "}
          I enjoy turning ideas into functional applications and learning through building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Magnetic>
            <a
              href="#projects"
              data-ripple
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              Explore my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href="#contact"
              data-ripple
              className="inline-flex items-center gap-2 rounded-full glass-card px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get in touch
            </a>
          </Magnetic>

        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4"
        >
          {meta.map((m) => (
            <div key={m.k} className="border-l border-white/10 pl-4">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {m.k}
              </dt>
              <dd className="mt-1 text-sm font-medium">{m.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease, delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur transition-colors hover:text-foreground sm:inline-flex"
      >
        <ArrowDown className="h-3 w-3 animate-bounce" />
      </motion.a>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background"
      />
    </section>
  );
}
