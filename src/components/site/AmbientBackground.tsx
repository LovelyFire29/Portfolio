import { useEffect, useRef } from "react";

/**
 * Ambient, always-on backdrop:
 *  - drifting grid
 *  - slow rotating gradient glow
 *  - floating particles (canvas)
 *  - subtle neural network lines (SVG)
 * Respects prefers-reduced-motion.
 */
export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let particles: P[] = [];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(60, Math.floor((width * height) / 26000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random() * 0.4 + 0.15,
      }));
    };

    let last = performance.now();
    const tick = (t: number) => {
      const dt = Math.min(48, t - last);
      last = t;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < -5) p.x = width + 5;
        if (p.x > width + 5) p.x = -5;
        if (p.y < -5) p.y = height + 5;
        if (p.y > height + 5) p.y = -5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 180, 255, ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* base tint */}
      <div className="absolute inset-0 bg-background" />

      {/* drifting grid */}
      <div className="absolute inset-0 grid-bg opacity-70 [animation:gridDrift_60s_linear_infinite]" />

      {/* rotating gradient glow */}
      <div className="absolute -inset-[20%] opacity-70 [animation:auroraSpin_40s_linear_infinite]">
        <div
          className="h-full w-full"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, oklch(0.58 0.22 265 / 0.18), transparent 25%, oklch(0.55 0.22 250 / 0.15) 50%, transparent 75%, oklch(0.58 0.22 265 / 0.18))",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* neural lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="neuralStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.7 0.18 265)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.7 0.18 265)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.7 0.18 265)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          "M50 200 Q 300 100 600 300 T 950 250",
          "M100 700 Q 400 500 700 750 T 980 600",
          "M0 450 Q 250 400 500 500 T 1000 480",
          "M200 50 Q 400 300 300 600 T 500 950",
          "M800 100 Q 700 400 900 600 T 700 950",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="url(#neuralStroke)"
            strokeWidth="1"
            strokeDasharray="6 12"
            style={{
              animation: `neuralDash ${18 + i * 4}s linear infinite`,
              animationDelay: `${i * -3}s`,
            }}
          />
        ))}
      </svg>

      {/* floating particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 30%, transparent 40%, oklch(0.16 0.04 265 / 0.6) 100%)",
        }}
      />
    </div>
  );
}
