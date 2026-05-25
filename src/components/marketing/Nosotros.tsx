"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

function MiniCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
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
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.floor(eased * value));
            if (t < 1) requestAnimationFrame(tick);
            else setCount(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
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

export default function Nosotros() {
  return (
    <section className="py-28 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text — slide from left */}
          <FadeIn direction="left">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-dorado" />
              <span className="font-body text-dorado text-[11px] tracking-[0.25em] uppercase">
                Quiénes somos
              </span>
            </div>

            <h2 className="font-display text-tierra text-5xl lg:text-6xl font-light leading-[1.1] mb-8" style={{ letterSpacing: "-0.02em" }}>
              Raíces patagónicas,{" "}
              <span className="italic text-dorado">visión de futuro</span>
            </h2>

            <div className="space-y-5 font-body text-tierra/60 leading-relaxed mb-10">
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

            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              {[
                { value: 15, suffix: "+", label: "Años de experiencia" },
                { value: 200, suffix: "+", label: "Familias acompañadas" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <span className="font-display text-dorado text-4xl font-light">
                    <MiniCounter value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="font-body text-tierra/40 text-[11px] tracking-[0.2em] uppercase leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.12em] font-medium uppercase bg-tierra text-crema px-7 py-3.5 hover:bg-dorado transition-colors duration-300"
            >
              Conocer más
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>

          {/* Right: image — slide from right */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                  alt="Patagonia Vértice — obra"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 border border-dorado/25 pointer-events-none" />
              <div className="absolute -top-5 -left-5 w-24 h-24 border border-dorado/15 pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Separator */}
      <div className="mt-28 h-px mx-6 lg:mx-12" style={{ background: "linear-gradient(to right, transparent, #B8965A, transparent)" }} />
    </section>
  );
}
