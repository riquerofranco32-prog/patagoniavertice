"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix?: string; label: string; delay: number };

const stats: Stat[] = [
  { value: 3,   suffix: "+",  label: "Proyectos activos",        delay: 0   },
  { value: 47,               label: "Unidades en construcción",  delay: 0.15 },
  { value: 120,              label: "Lotes en desarrollo",        delay: 0.3  },
  { value: 85,  suffix: "+", label: "Familias acompañadas",      delay: 0.45 },
];

function Counter({ value, suffix = "", label, delay }: Stat) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();
          setTimeout(() => {
            const duration = 1800;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setCount(Math.floor(eased * value));
              if (t < 1) requestAnimationFrame(tick);
              else { setCount(value); setDone(true); }
            };
            requestAnimationFrame(tick);
          }, delay * 1000);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4">
      <div
        className="font-display text-crema font-light leading-none mb-2"
        style={{
          fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
          letterSpacing: "-0.03em",
          animation: done ? "pulseScale 0.4s ease" : undefined,
        }}
      >
        {count}
        <span className="text-dorado">{suffix}</span>
      </div>
      <div className="font-body text-crema/35 text-[10px] tracking-[0.3em] uppercase">
        {label}
      </div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-[#141210] py-16 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#B8965A 1px, transparent 1px), linear-gradient(90deg, #B8965A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-crema/5">
          {stats.map((s, i) => (
            <div key={s.label} className="bg-[#141210] py-10 lg:py-14 relative">
              {/* Right divider (hide last) */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-dorado/20" />
              )}
              <Counter {...s} />
            </div>
          ))}
        </div>
      </div>

      {/* Top/bottom gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #B8965A40, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #B8965A40, transparent)" }} />
    </section>
  );
}
