"use client";

import Link from "next/link";
import { useState, useCallback } from "react";

export type ProyectoCard = {
  id: string;
  titulo: string;
  ubicacion: string | null;
  descripcion: string | null;
  estado: string | null;
  imagen: string | null;
};

const estadoBadge: Record<string, { label: string; color: string }> = {
  disponible:     { label: "EN PREVENTA",  color: "bg-dorado text-tierra" },
  en_construccion:{ label: "EN EJECUCIÓN", color: "bg-[#2563EB] text-white" },
  reservado:      { label: "RESERVADO",    color: "bg-tierra/60 text-crema" },
  vendido:        { label: "ENTREGADO",    color: "bg-[#16A34A] text-white" },
};

export default function ProyectosSliderClient({ proyectos }: { proyectos: ProyectoCard[] }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const total = proyectos.length;

  const navigate = useCallback((idx: number) => {
    if (idx === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 350);
  }, [current]);

  const prev = () => navigate((current - 1 + total) % total);
  const next = () => navigate((current + 1) % total);

  if (total === 0) {
    return (
      <div className="flex items-center justify-center py-32">
        <p className="font-body text-crema/30 text-sm tracking-wider">
          Próximamente nuevos proyectos disponibles.
        </p>
      </div>
    );
  }

  const p = proyectos[current];
  const badge = p.estado ? (estadoBadge[p.estado] ?? estadoBadge.disponible) : estadoBadge.disponible;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
      {/* Image */}
      <div className="relative overflow-hidden bg-tierra/50 aspect-[4/3] lg:aspect-auto">
        <img
          key={p.id}
          src={p.imagen ?? `https://placehold.co/800x600/1C1A17/B8965A?text=${encodeURIComponent(p.titulo)}`}
          alt={p.titulo}
          className="w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: fading ? 0 : 0.85 }}
          loading="lazy"
        />
        <div className="absolute top-6 left-6 font-display text-crema/20 text-8xl font-light leading-none select-none">
          {String(current + 1).padStart(2, "0")}
        </div>
        <div className="absolute bottom-4 right-4 font-body text-crema/30 text-xs tracking-widest">
          / {String(total).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div
        className="bg-[#232018] flex flex-col justify-between p-10 lg:p-14 transition-opacity duration-350"
        style={{ opacity: fading ? 0 : 1, transform: fading ? "translateX(10px)" : "translateX(0)", transition: "opacity 0.35s ease, transform 0.35s ease" }}
      >
        <div>
          {/* Badge */}
          <div className="mb-8 flex items-center gap-3">
            <span className={`font-body text-[11px] tracking-[0.2em] px-3 py-1.5 ${badge.color}`}>
              {badge.label}
            </span>
            {p.estado === "en_construccion" && (
              <span className="inline-block w-2 h-2 rounded-full bg-[#2563EB] badge-pulse" />
            )}
            {p.estado === "disponible" && (
              <span className="inline-block w-2 h-2 rounded-full bg-dorado badge-pulse" />
            )}
          </div>

          <div className="font-body text-dorado/40 text-[11px] tracking-[0.25em] uppercase mb-4">
            Proyecto {String(current + 1).padStart(2, "0")}
          </div>

          <h3 className="font-display text-crema text-4xl lg:text-5xl font-light leading-[1.1] mb-4" style={{ letterSpacing: "-0.02em" }}>
            {p.titulo}
          </h3>

          {p.ubicacion && (
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-3.5 h-3.5 text-dorado shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-body text-crema/50 text-sm">{p.ubicacion}</span>
            </div>
          )}

          {p.descripcion && (
            <p className="font-body text-crema/40 text-sm leading-relaxed line-clamp-3 mb-8">
              {p.descripcion}
            </p>
          )}

          <Link
            href={`/proyectos/${p.id}`}
            className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.12em] font-medium uppercase text-crema border border-crema/20 px-6 py-3 hover:bg-dorado hover:text-tierra hover:border-dorado transition-all duration-300"
          >
            Ver Proyecto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 border border-crema/20 flex items-center justify-center text-crema/60 hover:border-dorado hover:text-dorado hover:scale-110 transition-all duration-200"
            aria-label="Anterior"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-10 h-10 border border-crema/20 flex items-center justify-center text-crema/60 hover:border-dorado hover:text-dorado hover:scale-110 transition-all duration-200"
            aria-label="Siguiente"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex gap-2 ml-2">
            {proyectos.map((_, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                className={`h-px transition-all duration-300 ${i === current ? "w-8 bg-dorado" : "w-4 bg-crema/20 hover:bg-crema/40"}`}
                aria-label={`Proyecto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
