"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Stat = { value: number; suffix?: string; label: string; sub?: string; delay: number };

const stats: Stat[] = [
  { value: 15,  suffix: "+", label: "Años de trayectoria",       sub: "en el mercado neuquino", delay: 0    },
  { value: 47,              label: "Unidades en construcción",   sub: "en ejecución activa",    delay: 0.1  },
  { value: 200, suffix: "+", label: "Familias acompañadas",      sub: "que confían en nosotros", delay: 0.2 },
  { value: 3,               label: "Proyectos activos",          sub: "disponibles hoy",        delay: 0.3  },
];

function Counter({ value, suffix = "", label, sub, delay }: Stat) {
  const [count, setCount] = useState(0);
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
              setCount(Math.floor((1 - Math.pow(1 - t, 3)) * value));
              if (t < 1) requestAnimationFrame(tick);
              else setCount(value);
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
    <motion.div
      ref={ref}
      className="flex flex-col px-8 lg:px-12 py-14 lg:py-20 border-b border-crema/8 lg:border-b-0 lg:border-r lg:last:border-r-0"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Number */}
      <div
        className="font-display text-crema font-light leading-none mb-3"
        style={{ fontSize: "clamp(4.5rem, 9vw, 8rem)", letterSpacing: "-0.04em" }}
      >
        {count}
        <span className="text-dorado">{suffix}</span>
      </div>

      {/* Label */}
      <div className="font-body text-crema/70 text-[14px] leading-snug mb-1">
        {label}
      </div>
      {sub && (
        <div className="font-body text-crema/25 text-[11px] tracking-[0.15em] uppercase">
          {sub}
        </div>
      )}
    </motion.div>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-tierra relative overflow-hidden">
      {/* Grain */}
      <div className="absolute inset-0 grain-overlay opacity-[0.04] pointer-events-none" />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      {/* Eyebrow label */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-0">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-10 bg-dorado/50" />
          <span className="eyebrow text-crema/30">Nuestra trayectoria en números</span>
        </motion.div>
      </div>

      {/* Stats grid */}
      <div className="max-w-7xl mx-auto px-0 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {stats.map((s) => (
            <Counter key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* Gold bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  );
}
