"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Stat = { value: number; suffix?: string; label: string; delay: number };

const stats: Stat[] = [
  { value: 3,   suffix: "+", label: "Proyectos activos",        delay: 0    },
  { value: 47,              label: "Unidades en construcción",  delay: 0.12 },
  { value: 120,             label: "Lotes en desarrollo",        delay: 0.24 },
  { value: 85,  suffix: "+", label: "Familias acompañadas",     delay: 0.36 },
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
            const duration = 2000;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              setCount(Math.floor((1 - Math.pow(1 - t, 3)) * value));
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
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center px-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        className="font-display text-tierra font-light leading-none mb-3"
        style={{
          fontSize: "clamp(3rem, 5vw, 5rem)",
          letterSpacing: "-0.03em",
          animation: done ? "pulseScale 0.4s ease" : undefined,
        }}
      >
        {count}
        <span className="text-dorado">{suffix}</span>
      </div>
      <div className="font-body text-tierra/40 text-[10px] tracking-[0.3em] uppercase">
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-arena py-20 relative overflow-hidden">
      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #1C1916 0, #1C1916 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-10 bg-dorado/50" />
            <span className="eyebrow text-tierra/50">Nuestra trayectoria</span>
            <div className="h-px w-10 bg-dorado/50" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(28,25,22,0.08)" }}>
          {stats.map((s, i) => (
            <div key={s.label} className="bg-arena py-10 lg:py-14 relative">
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-tierra/10" />
              )}
              <Counter {...s} />
            </div>
          ))}
        </div>
      </div>

      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  );
}
