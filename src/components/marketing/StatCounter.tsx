"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix?: string; label: string; delay: number };

const stats: Stat[] = [
  { value: 3,   suffix: "+", label: "Proyectos activos",       delay: 0   },
  { value: 47,              label: "Unidades en construcción", delay: 0.2 },
  { value: 120,             label: "Lotes en desarrollo",      delay: 0.4 },
  { value: 85,  suffix: "+", label: "Familias acompañadas",    delay: 0.6 },
];

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

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
            const duration = 2000;
            const start = performance.now();

            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              setCount(Math.floor(easeOut(t) * value));
              if (t < 1) {
                requestAnimationFrame(tick);
              } else {
                setCount(value);
                setDone(true);
              }
            };
            requestAnimationFrame(tick);
          }, delay * 1000);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-display text-crema text-5xl lg:text-6xl font-light mb-2"
        style={done ? { animation: "pulseScale 0.4s ease" } : undefined}
      >
        {count}
        <span className="text-dorado">{suffix}</span>
      </div>
      <div className="font-body text-crema/40 text-[11px] tracking-[0.25em] uppercase">
        {label}
      </div>
    </div>
  );
}

export default function StatCounter() {
  return (
    <div className="border-t border-crema/10 mt-20 pt-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
      {stats.map((s) => (
        <Counter key={s.label} {...s} />
      ))}
    </div>
  );
}
