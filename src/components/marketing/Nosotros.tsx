"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SlideInLeft, SlideInRight } from "@/components/ui/AnimateOnScroll";
import PatagoniaGallery from "@/components/marketing/PatagoniaGallery";

function MiniCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - t, 3)) * value));
            if (t < 1) requestAnimationFrame(tick);
            else setCount(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      <span className="text-dorado">{suffix}</span>
    </span>
  );
}

const valores = [
  "Transparencia",
  "Compromiso",
  "Calidad",
  "Visión",
  "Territorio",
];

export default function Nosotros() {
  return (
    <section className="bg-crema overflow-hidden">
      {/* Main 2-col content */}
      <div className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: text */}
            <SlideInLeft>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-dorado" />
                <span className="eyebrow">Quiénes somos</span>
              </div>

              <h2
                className="font-display text-tierra font-light leading-[1.0] mb-8"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Raíces patagónicas,{" "}
                <em className="not-italic italic text-dorado">
                  visión de futuro
                </em>
              </h2>

              <div className="space-y-4 font-body text-tierra/50 text-[15px] leading-relaxed mb-10">
                <p>
                  Somos una empresa neuquina con más de 15 años desarrollando
                  proyectos inmobiliarios que respetan el entorno patagónico y
                  generan valor real para quienes invierten con nosotros.
                </p>
                <p>
                  Cada proyecto nace de un profundo conocimiento del territorio,
                  del mercado y de las familias que eligen la Patagonia como su
                  lugar en el mundo.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-10 mb-10 py-8 border-y border-arena">
                {[
                  { value: 15, suffix: "+", label: "Años de experiencia" },
                  { value: 200, suffix: "+", label: "Familias acompañadas" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-5">
                    <span
                      className="font-display text-dorado font-light"
                      style={{
                        fontSize: "clamp(2.8rem, 5vw, 4rem)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      <MiniCounter value={s.value} suffix={s.suffix} />
                    </span>
                    <span className="font-body text-tierra/35 text-[11px] tracking-[0.2em] uppercase leading-tight max-w-[80px]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/nosotros"
                className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.15em] font-semibold uppercase bg-tierra text-crema px-9 py-4 hover:bg-dorado transition-colors duration-300"
              >
                Conocer más
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </SlideInLeft>

            {/* Right: gallery */}
            <SlideInRight delay={0.1}>
              <PatagoniaGallery />
            </SlideInRight>
          </div>
        </div>
      </div>

      {/* Valores strip */}
      <div className="border-t border-arena overflow-hidden">
        <motion.div
          style={{ display: "flex", width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...valores, ...valores, ...valores, ...valores].map((v, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.25rem 2rem",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <span className="font-display text-tierra/40 font-light italic text-xl">
                {v}
              </span>
              <span className="text-dorado/40 text-sm">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
