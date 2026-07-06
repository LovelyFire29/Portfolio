import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SectionBadge } from "./SectionBadge";

const ease = [0.22, 1, 0.36, 1] as const;

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

type Category = {
  key: string;
  label: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    key: "languages",
    label: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    ],
  },
  {
    key: "database-tools",
    label: "Database & Tools",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    ],
  },
];


export function Skills() {
  const [active, setActive] = useState(categories[0].key);
  const activeCategory = categories.find((c) => c.key === active)!;

  return (
    <section id="skills" className="relative py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <SectionBadge>Skills</SectionBadge>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            Technologies I work with —
            <br />
            <span className="text-gradient">and continue to learn.</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="mt-14 -mx-6 px-6">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex gap-2 overflow-x-auto pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible"
          >
            {categories.map((cat) => {
              const isActive = cat.key === active;
              return (
                <button
                  key={cat.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat.key)}
                  className={`
                    relative shrink-0 select-none rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                    ${
                      isActive
                        ? "border-primary/30 bg-primary/15 text-primary shadow-[0_0_20px_-6px_var(--color-primary)]"
                        : "border-transparent bg-white/[0.03] text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                    }
                  `}
                >
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 rounded-full border border-primary/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease }}
              role="tabpanel"
              aria-label={activeCategory.label}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            >
              {activeCategory.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease, delay: i * 0.06 }}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-2xl glass-card p-4 transition-all hover:-translate-y-0.5"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                  />
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/10 transition-colors group-hover:bg-white/[0.1]">
                    <skill.icon className="h-[20px] w-[20px]" style={{ color: skill.color }} />
                  </div>
                  <span className="text-sm font-medium tracking-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
