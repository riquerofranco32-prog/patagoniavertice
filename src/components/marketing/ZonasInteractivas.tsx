"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ZonaInfo {
  id: string;
  nombre: string;
  provincia: string;
  tagline: string;
  descripcion: string;
  destacados: string[];
  rentabilidad: string;
  tipoInversion: string;
  imagen: string;
  enlace: string;
}

const ZONAS_PATAGONIA: ZonaInfo[] = [
  {
    id: "cipolletti",
    nombre: "Cipolletti",
    provincia: "Río Negro",
    tagline: "El polo residencial y de desarrollo del Alto Valle",
    descripcion:
      "Ubicación estratégica lindera a Neuquén capital. Alta demanda de barrios privados, casas quinta, loteos premium y desarrollos en altura con máxima plusvalía.",
    destacados: [
      "Conexión directa con polo petrolero y comercial",
      "Alta revalorización en barrios cerrados",
      "Seguridad y entorno familiar",
    ],
    rentabilidad: "8% - 11% anual en alquileres y loteos",
    tipoInversion: "Residencial & Loteos",
    imagen:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
    enlace: "/inmobiliaria-cipoletti",
  },
  {
    id: "catriel",
    nombre: "Catriel",
    provincia: "Río Negro",
    tagline: "Corazón energético y demanda constante de vivienda",
    descripcion:
      "Capital del petróleo en Río Negro. Mercado con fuerte demanda corporativa y de alquileres residenciales, ideal para inversores que buscan rentabilidad inmediata y ocupación plena.",
    destacados: [
      "Fuerte demanda de empresas y contratistas",
      "Renta sostenida en departamentos y locales",
      "Oportunidades de compra por debajo del promedio",
    ],
    rentabilidad: "10% - 13% anual en alquiler corporativo",
    tipoInversion: "Alquiler Corporativo & Comercio",
    imagen:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
    enlace: "/inmobiliaria-catriel",
  },
  {
    id: "roca",
    nombre: "General Roca",
    provincia: "Río Negro",
    tagline: "Tradición productiva, chacras y vida ribereña",
    descripcion:
      "Centro neurálgico cultural y universitario del Alto Valle. Gran mercado de chacras productivas, lotes con costa de río en Paso Córdoba y residencias tradicionales.",
    destacados: [
      "Loteos ribereños y casas quinta",
      "Chacras con riego y potencial agroturístico",
      "Ciudad con infraestructura educativa y médica de primer nivel",
    ],
    rentabilidad: "7% - 9% anual + plusvalía de tierra",
    tipoInversion: "Chacras, Terrenos & Residencias",
    imagen:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=85",
    enlace: "/propiedades-rio-negro",
  },
  {
    id: "bariloche",
    nombre: "San Carlos de Bariloche",
    provincia: "Río Negro",
    tagline: "El destino turístico internacional más codiciado",
    descripcion:
      "Propiedades de lujo con vista al lago Nahuel Huapi y la cordillera de los Andes. Excelente retorno a través de alquiler turístico temporario en dólares y resguardo de capital en tierra patagónica.",
    destacados: [
      "Renta dolarizada en alquiler turístico",
      "Resguardo de valor internacional",
      "Vistas panorámicas únicas a lagos y bosques",
    ],
    rentabilidad: "12% - 15% anual en renta turística",
    tipoInversion: "Turismo & Casas de Alta Gama",
    imagen:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=85",
    enlace: "/propiedades-rio-negro",
  },
];

export default function ZonasInteractivas() {
  const [activa, setActiva] = useState<ZonaInfo>(ZONAS_PATAGONIA[0]);

  return (
    <section
      className="py-24 lg:py-36 relative overflow-hidden text-crema"
      style={{ background: "#060A13" }}
      id="zonas-cobertura"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-dorado" />
              <span className="eyebrow">Territorio & Mercado</span>
            </div>
            <h2
              className="font-display font-medium text-crema leading-[1.05]"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Donde la Patagonia{" "}
              <em className="not-italic italic text-dorado">crece</em>
            </h2>
            <p className="font-body text-crema/45 text-sm lg:text-base max-w-xl mt-4">
              Conocemos cada rincón de Río Negro y el Alto Valle. Explorá las oportunidades y el potencial de inversión de cada región.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {ZONAS_PATAGONIA.map((z) => (
              <button
                key={z.id}
                onClick={() => setActiva(z)}
                className={`font-body text-[11px] tracking-[0.16em] uppercase px-4 py-2.5 border transition-all duration-300 ${
                  activa.id === z.id
                    ? "border-dorado bg-dorado text-tierra font-semibold shadow-lg"
                    : "border-crema/10 bg-navy-950/40 text-crema/50 hover:text-crema hover:border-crema/30"
                }`}
              >
                {z.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Feature Panel */}
        <div className="relative border border-crema/10 bg-navy-900/60 overflow-hidden backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activa.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]"
            >
              {/* Left Column: Image with luxury overlay */}
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[540px] overflow-hidden">
                <Image
                  src={activa.imagen}
                  alt={activa.nombre}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-navy-950 via-navy-950/40 to-transparent" />

                {/* Badge flotante sobre la foto */}
                <div className="absolute bottom-6 left-6 right-6 lg:right-auto flex flex-col gap-1 p-4 bg-navy-950/85 backdrop-blur-md border border-crema/15 max-w-sm">
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-dorado font-medium">
                    {activa.tipoInversion}
                  </span>
                  <p className="font-body text-xs text-crema/80">
                    Retorno estimado: <strong className="text-crema">{activa.rentabilidad}</strong>
                  </p>
                </div>
              </div>

              {/* Right Column: Information & Points */}
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="font-body text-crema/35 text-[11px] tracking-[0.22em] uppercase">
                      {activa.provincia}
                    </span>
                    <h3 className="font-display text-3xl lg:text-4xl text-crema font-medium">
                      {activa.nombre}
                    </h3>
                  </div>

                  <p className="font-body text-dorado text-sm font-medium leading-snug">
                    {activa.tagline}
                  </p>

                  <p className="font-body text-crema/55 text-sm leading-relaxed">
                    {activa.descripcion}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-crema/10">
                    <h4 className="font-body text-crema/40 text-[10px] tracking-[0.2em] uppercase">
                      Ventajas Estratégicas
                    </h4>
                    {activa.destacados.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-crema/70">
                        <span className="text-dorado mt-0.5">✦</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 flex flex-col sm:flex-row gap-3 border-t border-crema/10">
                  <Link
                    href={activa.enlace}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-dorado text-tierra font-body text-[11px] font-semibold tracking-[0.16em] uppercase hover:bg-dorado-light transition-all text-center"
                  >
                    <span>Ver Oportunidades en {activa.nombre}</span>
                    <span>→</span>
                  </Link>

                  <a
                    href={`https://wa.me/5492996095742?text=${encodeURIComponent(
                      `Hola Altum Inmobiliaria, me interesa consultar opciones de inversión y propiedades en ${activa.nombre}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-3.5 border border-crema/15 text-crema/60 hover:text-dorado hover:border-dorado transition-colors text-center text-xs tracking-wider"
                  >
                    Consultar Asesor
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
