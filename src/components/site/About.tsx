import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, BookOpen } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    icon: Code2,
    title: "Full-stack development",
    body: "Building my skills across frontend, backend, and databases to create complete and functional web applications.",
  },
  {
    icon: Cpu,
    title: "Software engineering",
    body: "Interested in designing reliable software, solving complex problems, and understanding how technology works beyond the interface.",
  },
  {
    icon: Rocket,
    title: "Real-world applications",
    body: "I enjoy turning ideas into practical applications that solve meaningful problems and provide real value.",
  },
  {
    icon: BookOpen,
    title: "Continuous learning",
    body: "Constantly exploring new technologies, strengthening my skills, and learning through hands-on projects and real-world challenges.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <SectionBadge>About</SectionBadge>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            About me —
            <br />
            <span className="text-gradient">in my own words.</span>
          </h2>
          <p className="mt-6 text-sm leading-snug text-muted-foreground sm:text-lg sm:leading-relaxed">
            I’m Srinivasa Raghavan, a Computer Science Engineering student at SRM Institute of Science and Technology with an interest in full-stack development and software engineering. I enjoy building practical applications, exploring new technologies, and improving my skills through hands-on projects. I’m currently focused on gaining real-world experience and growing as a developer.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
