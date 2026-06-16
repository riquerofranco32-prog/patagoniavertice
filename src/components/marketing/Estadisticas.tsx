"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Años en el mercado",
    detail: "Experiencia acumulada en la Patagonia",
  },
  {
    value: 200,
    suffix: "+",
    label: "Operaciones",
    detail: "Compras, ventas y alquileres gestionados",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfacción",
    detail: "Clientes que vuelven o nos recomiendan",
  },
  {
    value: 24,
    suffix: "hs",
    label: "Respuesta",
    detail: "Tiempo máximo de atención garantizado",
  },
];

function CounterNumber({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <span className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      <span className="text-dorado">{suffix}</span>
    </span>
  );
}

export default function Estadisticas() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#080E1A" }}
    >
      {/* Gold top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A84C40, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20 flex items-center gap-4"
        >
          <div className="h-px w-10 bg-dorado" />
          <span className="eyebrow">En números</span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-crema/[0.06]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group px-6 py-10 lg:px-10 lg:py-12 relative overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)",
                }}
              />

              {/* Number */}
              <div
                className="font-display font-light text-crema leading-none mb-4 relative"
                style={{
                  fontSize: "clamp(3.5rem, 6vw, 5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                <CounterNumber
                  value={s.value}
                  suffix={s.suffix}
                  inView={inView}
                />
              </div>

              {/* Thin gold separator */}
              <motion.div
                className="h-px bg-dorado/30 mb-4 origin-left"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {/* Label */}
              <p className="font-body text-crema text-[13px] font-medium tracking-[0.1em] uppercase mb-2">
                {s.label}
              </p>
              <p className="font-body text-crema/25 text-[12px] leading-snug">
                {s.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A84C40, transparent)",
        }}
      />
    </section>
  );
}
