import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SectionBadge } from "./SectionBadge";

const ease = [0.22, 1, 0.36, 1] as const;

export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <SectionBadge>{eyebrow}</SectionBadge>
      <h2
        id={id}
        className="font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-balance"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
