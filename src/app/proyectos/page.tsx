import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Propiedad } from "@/lib/supabase/types";

export const metadata = {
  title: "Propiedades — Altum Inmobiliaria",
  description:
    "Conocé todas las propiedades de Altum Inmobiliaria en Río Negro y la Patagonia Argentina.",
};

const tipoLabel: Record<string, string> = {
  venta: "Venta",
  alquiler: "Alquiler",
  desarrollo: "Desarrollo",
  lote: "Lote",
};

const estadoBadge: Record<string, { label: string; color: string }> = {
  disponible: { label: "En preventa", color: "text-dorado" },
  en_construccion: { label: "En ejecución", color: "text-[#2563EB]" },
  reservado: { label: "Reservado", color: "text-piedra" },
  vendido: { label: "Entregado", color: "text-salvia" },
};

const demos = [
  {
    id: "demo-1",
    titulo: "Altos del Limay",
    barrio: "Confluencia",
    ciudad: "Río Negro",
    tipo: "desarrollo",
    estado: "en_construccion",
    imagenes: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    ],
    descripcion:
      "Complejo residencial en altura con vistas panorámicas al río Limay. Unidades de 2 y 3 ambientes con amenities.",
    precio: null,
    moneda: "USD",
  },
  {
    id: "demo-2",
    titulo: "Parque Patagónico",
    barrio: "Centenario",
    ciudad: "Río Negro",
    tipo: "lote",
    estado: "disponible",
    imagenes: [
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    ],
    descripcion:
      "Loteo premium en entorno natural. 80 lotes de entre 500 y 1.200 m² con acceso a áreas verdes.",
    precio: null,
    moneda: "USD",
  },
  {
    id: "demo-3",
    titulo: "Vértice Confluencia",
    barrio: "Villa María",
    ciudad: "Río Negro",
    tipo: "desarrollo",
    estado: "vendido",
    imagenes: [
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
    ],
    descripcion:
      "Desarrollo de viviendas unifamiliares en el corazón residencial de Río Negro. Diseño contemporáneo.",
    precio: null,
    moneda: "USD",
  },
];

export default async function ProyectosPage() {
  let propiedades: Propiedad[] = [];

  try {
    const supabase = createClient();
    const { data } = await supabase
      .from("propiedades")
      .select("*")
      .eq("publicado", true)
      .order("created_at", { ascending: false });
    if (data && data.length > 0) propiedades = data as Propiedad[];
  } catch {
    /* supabase not configured yet */
  }

  const items =
    propiedades.length > 0 ? propiedades : (demos as unknown as Propiedad[]);

  return (
    <>
      {/* Hero */}
      <div className="bg-tierra pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay opacity-[0.04] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-dorado" />
            <span className="font-body text-dorado text-[11px] tracking-[0.35em] uppercase">
              Portafolio
            </span>
          </div>
          <h1
            className="font-display text-crema font-light leading-[1.0] mb-6"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Proyectos{" "}
            <em className="not-italic italic text-dorado">disponibles</em>
          </h1>
          <p className="font-body text-crema/35 text-[15px] leading-relaxed max-w-md">
            Desarrollos que transforman regiones y generan valor real en la
            Patagonia.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
      </div>

      {/* Grid */}
      <section className="py-24 bg-crema">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {items.map((p, i) => {
              const imagen =
                p.imagenes?.[0] ??
                `https://placehold.co/600x400/1C1A17/B8965A?text=${encodeURIComponent(p.titulo)}`;
              const badge = p.estado ? estadoBadge[p.estado] : null;
              return (
                <Link
                  key={p.id}
                  href={`/proyectos/${p.id}`}
                  className="group block"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3] mb-5 bg-arena">
                    <img
                      src={imagen}
                      alt={p.titulo}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(28,25,22,0.5) 0%, transparent 50%)",
                      }}
                    />
                    {/* Number */}
                    <div
                      className="absolute top-4 right-4 font-display text-crema/15 font-light select-none"
                      style={{
                        fontSize: "4rem",
                        letterSpacing: "-0.05em",
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {badge && (
                      <div className="absolute bottom-4 left-4">
                        <span
                          className={`font-body text-[9px] tracking-[0.25em] uppercase ${badge.color} bg-tierra/80 backdrop-blur-sm px-3 py-1.5`}
                        >
                          {badge.label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="font-body text-dorado text-[10px] tracking-[0.25em] uppercase mb-2">
                    {p.tipo ? tipoLabel[p.tipo] : "Proyecto"} ·{" "}
                    {p.ciudad ?? "Río Negro"}
                  </div>
                  <h3
                    className="font-display text-tierra font-light group-hover:text-dorado transition-colors duration-300 mb-1"
                    style={{
                      fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {p.titulo}
                  </h3>
                  {p.barrio && (
                    <p className="font-body text-tierra/40 text-sm">
                      {p.barrio}
                    </p>
                  )}
                  {p.precio && (
                    <p className="font-display text-tierra text-lg font-light mt-2">
                      {p.moneda} {p.precio.toLocaleString("es-AR")}
                    </p>
                  )}

                  {/* CTA inline */}
                  <div className="mt-4 flex items-center gap-2 text-tierra/30 group-hover:text-dorado transition-colors duration-300">
                    <span className="font-body text-[10px] tracking-[0.2em] uppercase">
                      Ver proyecto
                    </span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA bottom */}
          <div className="mt-20 pt-16 border-t border-tierra/8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-display text-tierra font-light text-2xl mb-1">
                ¿Buscás algo específico?
              </p>
              <p className="font-body text-tierra/40 text-sm">
                Contanos qué necesitás y encontramos la opción ideal.
              </p>
            </div>
            <Link
              href="/contacto"
              className="shrink-0 inline-flex items-center gap-3 px-9 py-4 bg-tierra text-crema font-body text-[11px] tracking-[0.15em] font-medium uppercase hover:bg-dorado transition-colors duration-300"
            >
              Consultar ahora
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
          </div>
        </div>
      </section>
    </>
  );
}
