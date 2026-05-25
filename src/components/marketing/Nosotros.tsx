"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SlideInLeft, SlideInRight, FadeUp } from "@/components/ui/AnimateOnScroll";

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
            setCount(Math.floor((1 - Math.pow(1 - t, 3)) * value));
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
    <section className="py-28 bg-crema overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <SlideInLeft>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-dorado" />
              <span className="eyebrow">Quiénes somos</span>
            </div>

            <h2 className="font-display text-tierra font-light text-5xl lg:text-[3.5rem] leading-[1.05] mb-8">
              Raíces patagónicas,{" "}
              <em className="not-italic italic text-dorado">visión de futuro</em>
            </h2>

            <div className="space-y-4 font-body text-tierra/55 text-[15px] leading-relaxed mb-10">
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

            <div className="flex flex-col sm:flex-row gap-8 mb-10 py-8 border-y border-arena">
              {[
                { value: 15, suffix: "+", label: "Años de experiencia" },
                { value: 200, suffix: "+", label: "Familias acompañadas" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-5">
                  <span className="font-display text-dorado font-light" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
                    <MiniCounter value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="font-body text-tierra/40 text-[11px] tracking-[0.2em] uppercase leading-tight max-w-[80px]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.15em] font-medium uppercase bg-tierra text-crema px-8 py-4 hover:bg-dorado transition-colors duration-300"
            >
              Conocer más
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </SlideInLeft>

          {/* Right: image */}
          <SlideInRight delay={0.1}>
            <div className="relative">
              {/* Background rectangle */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-arena/60 -z-10" />
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                  alt="Patagonia Vértice — obra en Neuquén"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Corner accent */}
              <div className="absolute -bottom-5 -left-5 w-32 h-32 border border-dorado/30 pointer-events-none" />
            </div>
          </SlideInRight>
        </div>
      </div>

      <div className="mt-28 mx-6 lg:mx-12 sep-gold h-px" />
    </section>
  );
}
