import type { ReactNode } from "react";

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <div className="group relative mb-5 inline-flex items-center justify-center">
      {/* Background glow */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {/* Main badge */}
      <span className="relative inline-flex items-center justify-center rounded-lg border border-primary/40 bg-primary/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-sm">
        {/* Corner bracket accents */}
        <span
          aria-hidden
          className="absolute -left-px -top-px h-2 w-2 rounded-tl-md border-l-2 border-t-2 border-primary/70"
        />
        <span
          aria-hidden
          className="absolute -right-px -top-px h-2 w-2 rounded-tr-md border-r-2 border-t-2 border-primary/70"
        />
        <span
          aria-hidden
          className="absolute -left-px -bottom-px h-2 w-2 rounded-bl-md border-l-2 border-b-2 border-primary/70"
        />
        <span
          aria-hidden
          className="absolute -right-px -bottom-px h-2 w-2 rounded-br-md border-r-2 border-b-2 border-primary/70"
        />
        {children}
      </span>
    </div>
  );
}
