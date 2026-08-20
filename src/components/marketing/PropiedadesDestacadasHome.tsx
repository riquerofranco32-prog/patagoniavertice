"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PropiedadEjemplo {
  id: string;
  titulo: string;
  zona: "Cipoletti" | "Catriel" | "General Roca";
  precio: string;
  tipo: string;
  imagen: string;
}

// ponytail: datos de ejemplo — reemplazar por fetch a Supabase cuando haya propiedades reales cargadas
const propiedades: PropiedadEjemplo[] = [
  {
    id: "1",
    titulo: "Casa quinta con parque",
    zona: "Cipoletti",
    precio: "USD 145.000",
    tipo: "Venta",
    imagen:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
  },
  {
    id: "2",
    titulo: "Lote con vista al río",
    zona: "General Roca",
    precio: "USD 38.000",
    tipo: "Lote",
    imagen:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80",
  },
  {
    id: "3",
    titulo: "Departamento a estrenar",
    zona: "Catriel",
    precio: "USD 72.000",
    tipo: "Venta",
    imagen:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
  },
];

const zonas = ["Todas", "Cipoletti", "Catriel", "General Roca"] as const;

export default function PropiedadesDestacadasHome() {
  const [zona, setZona] = useState<(typeof zonas)[number]>("Todas");

  const filtradas =
    zona === "Todas" ? propiedades : propiedades.filter((p) => p.zona === zona);

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0D1628" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-dorado" />
              <span className="eyebrow">Propiedades</span>
            </div>
            <h2
              className="font-display font-medium text-crema leading-[1.0]"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Selección{" "}
              <em className="not-italic italic text-dorado">destacada</em>
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="font-body text-crema/50 text-sm tracking-widest uppercase border-b border-crema/20 pb-1 hover:text-dorado hover:border-dorado transition-colors self-start md:self-auto"
          >
            Ver todas →
          </Link>
        </div>

        {/* Filtro por zona */}
        <div className="flex flex-wrap gap-2 mb-10">
          {zonas.map((z) => (
            <button
              key={z}
              onClick={() => setZona(z)}
              className="relative font-body text-[11px] tracking-[0.15em] uppercase px-4 py-2 transition-colors duration-200"
              style={{
                color: zona === z ? "#0D1628" : "rgba(245,239,230,0.5)",
              }}
            >
              {zona === z && (
                <motion.span
                  layoutId="zona-activa"
                  className="absolute inset-0 bg-dorado"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="relative z-10">{z}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtradas.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden aspect-[4/5] cursor-default"
              >
                <Image
                  src={p.imagen}
                  alt={p.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,14,26,0.95) 0%, rgba(8,14,26,0.2) 55%, transparent 100%)",
                  }}
                />
                <div className="absolute top-4 left-4 font-body text-[10px] tracking-[0.2em] uppercase bg-dorado text-tierra px-3 py-1">
                  {p.tipo}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-body text-dorado text-xs tracking-widest uppercase mb-2">
                    {p.zona}
                  </p>
                  <h3 className="font-display text-crema text-xl font-medium leading-snug mb-1">
                    {p.titulo}
                  </h3>
                  <p className="font-body text-crema/60 text-sm">{p.precio}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
