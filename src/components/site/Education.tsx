import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

const ease = [0.22, 1, 0.36, 1] as const;

const timeline = [
  {
    period: "2025 — 2029",
    title: "Bachelor of Technology",
    field: "Computer Science Engineering",
    place: "SRM Institute of Science and Technology",
    status: "In progress",
    description:
      "Developing a strong foundation in programming, problem-solving, and software development while building practical projects beyond the classroom.",
    size: "lg" as const,
  },
  {
    period: "Completed 2025",
    title: "Higher Secondary Education",
    field: "Computer Science",
    place: "Sethu Bhaskara Matriculation Higher Secondary School",
    status: "Completed",
    description:
      "Studied Computer Science in higher secondary school, where I developed an early foundation in programming and problem-solving before pursuing Computer Science Engineering.",
    size: "sm" as const,
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <SectionBadge>Education</SectionBadge>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            Building the foundation
            <br />
            <span className="text-gradient">for what comes next.</span>
          </h2>
        </motion.div>

        <div className="relative mt-16 pl-8 sm:pl-12">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent sm:left-5"
          />

          {timeline.map((item, i) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className={`relative ${i > 0 ? "mt-6" : ""}`}
            >
              {/* Dot */}
              <div
                aria-hidden
                className={`absolute ${
                  item.size === "sm"
                    ? "-left-[1.3rem] top-6 h-3 w-3 sm:-left-[1.75rem]"
                    : "-left-[1.4rem] top-7 h-3.5 w-3.5 sm:-left-[1.85rem]"
                } flex items-center justify-center`}
              >
                <span className={`absolute rounded-full bg-primary/40 ${item.size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5 animate-ping"}`} />
                <span className={`relative rounded-full bg-primary ring-4 ring-primary/15 ${item.size === "sm" ? "h-2 w-2" : "h-2.5 w-2.5"}`} />
              </div>

              <div
                className={`group relative overflow-hidden rounded-2xl glass-card transition-all hover:-translate-y-1 hover:bg-white/[0.06] ${
                  item.size === "sm" ? "p-5 sm:p-6" : "p-6 sm:p-8"
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
                />

                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1">
                    <Calendar className="h-3 w-3" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-primary">
                    {item.status}
                  </span>
                </div>

                <div className={`flex items-start gap-4 ${item.size === "sm" ? "mt-4" : "mt-5"}`}>
                  <div
                    className={`hidden shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30 sm:inline-flex ${
                      item.size === "sm" ? "h-10 w-10" : "h-12 w-12"
                    }`}
                  >
                    <GraduationCap className={`text-primary ${item.size === "sm" ? "h-5 w-5" : "h-6 w-6"}`} />
                  </div>
                  <div>
                    <h3
                      className={`font-display font-semibold tracking-tight ${
                        item.size === "sm" ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className={`mt-1 font-medium text-primary ${item.size === "sm" ? "text-xs sm:text-sm" : "text-sm"}`}>
                      {item.field}
                    </p>
                    <p className={`mt-2 text-muted-foreground ${item.size === "sm" ? "text-xs sm:text-sm" : "text-sm"}`}>
                      {item.place}
                    </p>
                    <p
                      className={`max-w-2xl text-muted-foreground ${
                        item.size === "sm"
                          ? "mt-3 text-xs leading-snug sm:text-sm sm:leading-relaxed"
                          : "mt-4 text-sm leading-relaxed"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
