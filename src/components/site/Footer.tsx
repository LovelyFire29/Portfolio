import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/srinivasaraghavan29/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/LovelyFire29", label: "GitHub" },
  { icon: Mail, href: "mailto:ssrinivasaraghavan29@gmail.com", label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10">
      <div aria-hidden className="footer-shimmer absolute inset-x-0 top-0 h-px" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          {/* Left — signature */}
          <div className="space-y-1.5">
            <div className="font-display text-base font-semibold tracking-tight">
              Srinivasa Raghavan<span className="text-primary">.</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {year} Srinivasa Raghavan. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed &amp; developed by Srinivasa Raghavan · Built with React, TypeScript &amp; Tailwind CSS.
            </p>
          </div>

          {/* Right — socials + status */}
          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  data-ripple
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-glow"
                >
                  <s.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
            {/* Status removed per request */}
          </div>
        </div>
      </div>
    </footer>
  );
}
