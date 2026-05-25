"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 3,   suffix: "+", label: "Proyectos activos" },
  { value: 47,              label: "Unidades en construcción" },
  { value: 120,             label: "Lotes en desarrollo" },
  { value: 85,  suffix: "+", label: "Familias acompañadas" },
];

function Counter({ value, suffix = "", label }: Stat) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-crema text-5xl lg:text-6xl font-light mb-2">
        {count}
        <span className="text-dorado">{suffix}</span>
      </div>
      <div className="font-body text-crema/40 text-xs tracking-widest uppercase">
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
