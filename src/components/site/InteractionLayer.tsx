import { useEffect } from "react";

/**
 * Global UX layer:
 *  - Card spotlight: tracks pointer over .glass-card, sets --mx/--my for ::after glow.
 *  - Ripple: expands a soft ring from click point on [data-ripple] elements.
 */
export function InteractionLayer() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Card spotlight
    const onMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const card = target?.closest?.(".glass-card") as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("mousemove", onMove, { passive: true });

    // Ripple
    const onClick = (e: MouseEvent) => {
      if (reduce) return;
      const target = e.target as HTMLElement | null;
      const host = target?.closest?.("[data-ripple]") as HTMLElement | null;
      if (!host) return;
      const rect = host.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.className = "lv-ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      const prevPosition = getComputedStyle(host).position;
      if (prevPosition === "static") host.style.position = "relative";
      const prevOverflow = host.style.overflow;
      host.style.overflow = "hidden";
      host.appendChild(ripple);
      window.setTimeout(() => {
        ripple.remove();
        host.style.overflow = prevOverflow;
      }, 650);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
