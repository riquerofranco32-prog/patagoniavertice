"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PropiedadDestacada {
  id: string;
  titulo: string;
  zona: "Cipolletti" | "Catriel" | "General Roca" | "Bariloche";
  ubicacionDetalle: string;
  precio: string;
  tipo: "Venta" | "Alquiler" | "Inversión";
  categoria: "Casa" | "Departamento" | "Lote / Terreno" | "Chacra";
  superficie: string;
  ambientes?: string;
  dormitorios?: number;
  banos?: number;
  badge?: string;
  imagen: string;
  destacado?: boolean;
}

const propiedades: PropiedadDestacada[] = [
  {
    id: "casa-quinta-cipolletti",
    titulo: "Residencia Exclusiva con Parque & Piscina",
    zona: "Cipolletti",
    ubicacionDetalle: "Barrio Residencial Los Tilos, Cipolletti",
    precio: "USD 185.000",
    tipo: "Venta",
    categoria: "Casa",
    superficie: "420 m² tot. · 240 m² cub.",
    ambientes: "5 ambientes",
    dormitorios: 3,
    banos: 3,
    badge: "Exclusivo",
    imagen:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85",
    destacado: true,
  },
  {
    id: "lote-vista-rio-roca",
    titulo: "Lote Panorámico con Costa de Río",
    zona: "General Roca",
    ubicacionDetalle: "Paso Córdoba / Ribera, General Roca",
    precio: "USD 45.000",
    tipo: "Inversión",
    categoria: "Lote / Terreno",
    superficie: "1.500 m²",
    ambientes: "Escritura inmediata",
    badge: "Oportunidad",
    imagen:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&q=85",
    destacado: true,
  },
  {
    id: "depto-estrenar-catriel",
    titulo: "Semipiso Moderno a Estrenar con Balcón Terraza",
    zona: "Catriel",
    ubicacionDetalle: "Centro Urbano, Catriel",
    precio: "USD 78.000",
    tipo: "Venta",
    categoria: "Departamento",
    superficie: "85 m² cubiertos",
    ambientes: "3 ambientes",
    dormitorios: 2,
    banos: 2,
    badge: "A Estrenar",
    imagen:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=85",
    destacado: true,
  },
  {
    id: "casa-diseno-cipolletti",
    titulo: "Casa de Diseño Minimalista en Barrio Privado",
    zona: "Cipolletti",
    ubicacionDetalle: "Rincón Lindo, Cipolletti",
    precio: "USD 210.000",
    tipo: "Venta",
    categoria: "Casa",
    superficie: "550 m² tot. · 290 m² cub.",
    ambientes: "5 ambientes · Quincho",
    dormitorios: 4,
    banos: 3,
    badge: "Top Tier",
    imagen:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=85",
  },
  {
    id: "chacra-productiva-valle",
    titulo: "Chacra Productiva con Vivienda Patronal",
    zona: "General Roca",
    ubicacionDetalle: "Alto Valle de Río Negro",
    precio: "USD 160.000",
    tipo: "Inversión",
    categoria: "Chacra",
    superficie: "4,5 Hectáreas",
    ambientes: "Riego sistematizado",
    badge: "Inversión Segura",
    imagen:
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=1000&q=85",
  },
  {
    id: "residencia-bariloche-lago",
    titulo: "Chalet de Montaña con Vista al Lago",
    zona: "Bariloche",
    ubicacionDetalle: "Av. Bustillo Km 7, Bariloche",
    precio: "USD 320.000",
    tipo: "Venta",
    categoria: "Casa",
    superficie: "1.200 m² parque · 310 m² cub.",
    ambientes: "6 ambientes",
    dormitorios: 4,
    banos: 4,
    badge: "Vista al Lago",
    imagen:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&q=85",
  },
];

const zonas = ["Todas", "Cipolletti", "Catriel", "General Roca", "Bariloche"] as const;

export default function PropiedadesDestacadasHome() {
  const [zona, setZona] = useState<(typeof zonas)[number]>("Todas");
  const [tipoOperacion, setTipoOperacion] = useState<string>("Todos");

  const filtradas = propiedades.filter((p) => {
    const matchZona = zona === "Todas" || p.zona === zona;
    const matchTipo = tipoOperacion === "Todos" || p.tipo === tipoOperacion;
    return matchZona && matchTipo;
  });

  return (
    <section
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: "#09101F" }}
      id="propiedades-destacadas"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-20 blur-[130px] rounded-full"
        style={{ background: "radial-gradient(circle, #C9A84C 0%, #1A2752 70%, transparent 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-dorado" />
              <span className="eyebrow">Portfolio Inmobiliario</span>
            </div>
            <h2
              className="font-display font-medium text-crema leading-[1.05]"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Propiedades de{" "}
              <em className="not-italic italic text-dorado font-normal">primer nivel</em>
            </h2>
            <p className="font-body text-crema/45 text-sm lg:text-base max-w-xl mt-4">
              Selección curada de residencias, loteos estratégicos y oportunidades de inversión en Río Negro y Patagonia.
            </p>
          </div>

          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-3 font-body text-dorado text-xs tracking-[0.2em] uppercase border-b border-dorado/40 pb-1.5 hover:border-dorado transition-all self-start lg:self-auto"
          >
            <span>Ver Catálogo Completo</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-crema/10">
          {/* Filtros por Zona */}
          <div className="flex flex-wrap gap-2">
            {zonas.map((z) => (
              <button
                key={z}
                onClick={() => setZona(z)}
                className="relative font-body text-[11px] tracking-[0.16em] uppercase px-4 py-2 transition-all duration-300"
                style={{
                  color: zona === z ? "#0D1628" : "rgba(245,239,230,0.6)",
                }}
              >
                {zona === z && (
                  <motion.span
                    layoutId="zona-destacada-activa"
                    className="absolute inset-0 bg-dorado"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className="relative z-10 font-medium">{z}</span>
              </button>
            ))}
          </div>

          {/* Filtros por Operación */}
          <div className="flex items-center gap-2">
            {["Todos", "Venta", "Inversión"].map((t) => (
              <button
                key={t}
                onClick={() => setTipoOperacion(t)}
                className={`font-body text-[10px] tracking-[0.14em] uppercase px-3 py-1.5 border transition-all duration-200 ${
                  tipoOperacion === t
                    ? "border-dorado text-dorado bg-dorado/10"
                    : "border-crema/10 text-crema/40 hover:text-crema/70"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Propiedades */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtradas.map((p) => {
              const waLink = `https://wa.me/5492996095742?text=Hola%20Altum%20Inmobiliaria%2C%20quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20propiedad%3A%20${encodeURIComponent(
                p.titulo + " (" + p.zona + " - " + p.precio + ")"
              )}`;

              return (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col bg-navy-900 border border-crema/10 overflow-hidden hover:border-dorado/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                  style={{ background: "rgba(13,22,40,0.75)" }}
                >
                  {/* Imagen & Badges */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={p.imagen}
                      alt={p.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

                    {/* Badge Superior Izquierdo: Tipo & Exclusividad */}
                    <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                      <span className="font-body text-[9px] font-semibold tracking-[0.2em] uppercase bg-dorado text-tierra px-2.5 py-1 shadow-sm">
                        {p.tipo}
                      </span>
                      {p.badge && (
                        <span className="font-body text-[9px] tracking-[0.15em] uppercase bg-navy-950/80 backdrop-blur-md text-crema/90 border border-crema/15 px-2.5 py-1">
                          {p.badge}
                        </span>
                      )}
                    </div>

                    {/* Categoría Badge Superior Derecho */}
                    <span className="absolute top-3.5 right-3.5 font-body text-[9px] tracking-[0.15em] uppercase text-crema/70 bg-black/40 backdrop-blur-sm px-2 py-0.5 border border-white/10">
                      {p.categoria}
                    </span>

                    {/* Precio flotante sobre la foto */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                      <p className="font-display text-dorado text-2xl font-semibold tracking-tight">
                        {p.precio}
                      </p>
                      <span className="font-body text-[11px] tracking-wider text-crema/60 uppercase">
                        {p.zona}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-body text-crema/35 text-[11px] tracking-widest uppercase mb-1.5">
                        {p.ubicacionDetalle}
                      </p>
                      <h3 className="font-display text-crema text-lg font-medium leading-snug group-hover:text-dorado transition-colors duration-200 mb-4 line-clamp-2">
                        {p.titulo}
                      </h3>

                      {/* Metadatos: Superficie, Ambientes */}
                      <div className="grid grid-cols-2 gap-2 py-3 border-y border-crema/8 mb-6 font-body text-xs text-crema/55">
                        <div className="flex items-center gap-2">
                          <SurfaceIcon />
                          <span className="truncate">{p.superficie}</span>
                        </div>
                        {p.ambientes && (
                          <div className="flex items-center gap-2">
                            <RoomIcon />
                            <span className="truncate">{p.ambientes}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-dorado text-tierra font-body text-[10px] font-semibold tracking-[0.18em] uppercase hover:bg-dorado-light transition-colors"
                      >
                        <WaMiniIcon />
                        <span>Consultar</span>
                      </a>

                      <Link
                        href={`/contacto?propiedad=${encodeURIComponent(p.titulo)}`}
                        className="inline-flex items-center justify-center p-3 border border-crema/15 text-crema/60 hover:text-dorado hover:border-dorado transition-colors"
                        title="Agendar visita"
                      >
                        <CalendarIcon />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 lg:p-10 border border-dorado/25 bg-navy-800/40 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-crema text-xl font-medium">
              ¿Buscás una propiedad específica o querés publicar la tuya?
            </h4>
            <p className="font-body text-crema/50 text-xs lg:text-sm">
              Asesoría personalizada, tasaciones certificadas y gestión integral sin letra chica.
            </p>
          </div>
          <a
            href="https://wa.me/5492996095742?text=Hola%20Altum%2C%20quisiera%20asesoramiento%20personalizado%20para%20una%20propiedad."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 px-7 py-3.5 border border-dorado text-dorado font-body text-[11px] font-medium tracking-[0.18em] uppercase hover:bg-dorado hover:text-tierra transition-all duration-300"
          >
            <span>Hablar con un asesor</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SurfaceIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-dorado/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  );
}

function RoomIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-dorado/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function WaMiniIcon() {
  return (
    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
