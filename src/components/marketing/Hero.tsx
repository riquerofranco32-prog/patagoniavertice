"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const frases = [
  "Desarrollamos proyectos en la Patagonia",
  "Creamos espacios que definen el paisaje",
  "Invertí en el futuro de Neuquén",
  "Arquitectura y territorio en sintonía",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % frases.length);
        setVisible(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center bg-tierra overflow-hidden">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-10 bg-dorado" />
          <span className="font-body text-dorado/80 text-xs tracking-[0.4em] uppercase">
            Patagonia Vértice
          </span>
        </div>

        {/* Rotating headline */}
        <div className="min-h-[7rem] md:min-h-[6rem] lg:min-h-[7rem] mb-8 flex items-start">
          <h1
            className="font-display text-crema font-light leading-[1.15] text-4xl md:text-5xl lg:text-[5rem] transition-opacity duration-500"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {frases[index]}
          </h1>
        </div>

        {/* Fixed subtitle */}
        <p className="font-body text-crema/40 text-sm tracking-[0.3em] uppercase mb-14">
          Desarrollos Inmobiliarios · Neuquén, Patagonia
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/proyectos"
            className="inline-flex items-center justify-center px-8 py-4 bg-dorado text-tierra font-body text-sm font-medium tracking-widest uppercase hover:bg-dorado/90 transition-colors duration-300"
          >
            Ver Proyectos
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-crema/30 text-crema font-body text-sm font-medium tracking-widest uppercase hover:border-crema hover:text-crema transition-colors duration-300"
          >
            Contactar
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="relative h-16 w-px overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-dorado/60 animate-scroll-line" style={{ height: "100%" }} />
        </div>
        <span className="font-body text-crema/30 text-[10px] tracking-[0.3em] uppercase mt-1">
          Scroll
        </span>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-scroll-line {
          animation: scrollLine 1.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
