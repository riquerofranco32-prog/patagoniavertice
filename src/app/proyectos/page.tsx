import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import type { Propiedad } from "@/lib/supabase/types";

export const metadata = {
  title: "Propiedades & Oportunidades de Inversión — Altum Inmobiliaria",
  description:
    "Catálogo exclusivo de residencias, loteos, departamentos y chacras en Río Negro y la Patagonia Argentina. Asesoría directa y matriculada.",
};

const tipoLabel: Record<string, string> = {
  venta: "Venta",
  alquiler: "Alquiler",
  desarrollo: "Desarrollo",
  lote: "Lote / Terreno",
  chacra: "Chacra",
};

const estadoBadge: Record<string, { label: string; color: string }> = {
  disponible: { label: "Disponible", color: "bg-dorado text-tierra font-semibold" },
  en_construccion: { label: "A Estrenar / Pozo", color: "bg-navy-950 text-dorado border border-dorado/40" },
  reservado: { label: "Reservado", color: "bg-zinc-800 text-crema/70" },
  vendido: { label: "Vendido", color: "bg-emerald-950 text-emerald-300 border border-emerald-500/30" },
};

const demos = [
  {
    id: "casa-quinta-los-tilos-cipolletti",
    titulo: "Residencia Exclusiva con Parque & Piscina",
    barrio: "Los Tilos",
    ciudad: "Cipolletti",
    tipo: "venta",
    estado: "disponible",
    imagenes: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85",
    ],
    descripcion:
      "Propiedad de diseño contemporáneo sobre lote de 420 m² con piscina climatizada, quincho integrado y suite principal con vestidor.",
    precio: 185000,
    moneda: "USD",
  },
  {
    id: "lote-panoramico-paso-cordoba-roca",
    titulo: "Lote Panorámico con Costa de Río",
    barrio: "Paso Córdoba",
    ciudad: "General Roca",
    tipo: "lote",
    estado: "disponible",
    imagenes: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&q=85",
    ],
    descripcion:
      "Terreno exclusivo de 1.500 m² con vista abierta a las bardas y costa de río. Servicios subterráneos y escritura inmediata.",
    precio: 45000,
    moneda: "USD",
  },
  {
    id: "semipiso-centro-catriel",
    titulo: "Semipiso Moderno a Estrenar con Balcón Terraza",
    barrio: "Centro",
    ciudad: "Catriel",
    tipo: "venta",
    estado: "en_construccion",
    imagenes: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=85",
    ],
    descripcion:
      "Unidad de 3 ambientes con terminaciones de categoría, pisos de porcelanato y cochera cubierta. Ideal para vivienda o renta corporativa petrolera.",
    precio: 78000,
    moneda: "USD",
  },
  {
    id: "casa-rincon-lindo-cipolletti",
    titulo: "Casa Minimalista en Barrio Privado",
    barrio: "Rincón Lindo",
    ciudad: "Cipolletti",
    tipo: "venta",
    estado: "disponible",
    imagenes: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=85",
    ],
    descripcion:
      "290 m² cubiertos sobre lote de 550 m². 4 dormitorios, estar en doble altura, galería con parrilla y seguridad 24 horas.",
    precio: 210000,
    moneda: "USD",
  },
  {
    id: "chacra-productiva-valle-roca",
    titulo: "Chacra Productiva con Vivienda Patronal",
    barrio: "Alto Valle",
    ciudad: "General Roca",
    tipo: "chacra",
    estado: "disponible",
    imagenes: [
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=1000&q=85",
    ],
    descripcion:
      "Fracción de 4,5 Hectáreas con plantación en producción, riego sistematizado y casa de campo de 180 m² totalmente equipada.",
    precio: 160000,
    moneda: "USD",
  },
  {
    id: "chalet-lago-nahuel-huapi-bariloche",
    titulo: "Chalet de Montaña con Vista al Lago",
    barrio: "Av. Bustillo Km 7",
    ciudad: "Bariloche",
    tipo: "venta",
    estado: "disponible",
    imagenes: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&q=85",
    ],
    descripcion:
      "Propiedad de ensueño en Bariloche con 1.200 m² de parque forestado, vista panorámica al lago Nahuel Huapi y alto rendimiento en alquiler turístico.",
    precio: 320000,
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
    /* fallback a demos curadas */
  }

  const items =
    propiedades.length > 0 ? propiedades : (demos as unknown as Propiedad[]);

  return (
    <main className="bg-crema min-h-screen">
      {/* Hero */}
      <section className="bg-navy-950 pt-40 pb-24 relative overflow-hidden text-crema" style={{ background: "#060A13" }}>
        <div className="absolute inset-0 grain-overlay opacity-[0.04] pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] opacity-15 blur-[140px] pointer-events-none rounded-full"
          style={{ background: "#C9A84C" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-dorado" />
            <span className="font-body text-dorado text-[11px] tracking-[0.35em] uppercase">
              Portfolio Inmobiliario
            </span>
          </div>
          <h1
            className="font-display text-crema font-medium leading-[1.0] mb-6"
            style={{
              fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Propiedades en{" "}
            <em className="not-italic italic text-dorado">Río Negro & Patagonia</em>
          </h1>
          <p className="font-body text-crema/45 text-[15px] lg:text-base leading-relaxed max-w-xl">
            Inmuebles residenciales, loteos estratégicos y chacras productivas seleccionadas bajo estrictos estándares de calidad y respaldo jurídico.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dorado/30 to-transparent" />
      </section>

      {/* Grid de Propiedades */}
      <section className="py-24 bg-crema">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {items.map((p, i) => {
              const imagen =
                p.imagenes?.[0] ??
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85";
              const badge = p.estado ? estadoBadge[p.estado] : null;
              const waLink = `https://wa.me/5492996095742?text=${encodeURIComponent(
                `Hola Altum Inmobiliaria, quisiera consultar información y coordinar una visita para la propiedad: ${p.titulo} (${p.ciudad} - USD ${p.precio?.toLocaleString("es-AR") || "Consultar"})`
              )}`;

              return (
                <div
                  key={p.id}
                  className="group relative flex flex-col bg-white border border-tierra/10 shadow-sm hover:shadow-xl hover:border-dorado/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Foto */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-navy-950">
                    <Image
                      src={imagen}
                      alt={p.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                    {/* Número índice de propiedad */}
                    <div
                      className="absolute top-3 right-4 font-display text-white/20 font-medium select-none text-4xl leading-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Badge Estado */}
                    {badge && (
                      <div className="absolute top-3 left-3">
                        <span
                          className={`font-body text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 ${badge.color}`}
                        >
                          {badge.label}
                        </span>
                      </div>
                    )}

                    {/* Precio flotante */}
                    {p.precio && (
                      <div className="absolute bottom-3 left-4">
                        <p className="font-display text-white text-xl font-semibold">
                          {p.moneda} {p.precio.toLocaleString("es-AR")}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Detalle */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="font-body text-dorado text-[10px] tracking-[0.22em] uppercase mb-1.5 font-medium">
                        {p.tipo ? tipoLabel[p.tipo] : "Venta"} · {p.ciudad ?? "Río Negro"}
                      </div>
                      <h3
                        className="font-display text-tierra font-medium group-hover:text-dorado transition-colors duration-200 text-lg leading-snug mb-2"
                      >
                        {p.titulo}
                      </h3>
                      {p.barrio && (
                        <p className="font-body text-tierra/40 text-xs mb-3">
                          Ubicación: {p.barrio}, {p.ciudad}
                        </p>
                      )}
                      {p.descripcion && (
                        <p className="font-body text-tierra/65 text-xs leading-relaxed line-clamp-3 mb-4">
                          {p.descripcion}
                        </p>
                      )}
                    </div>

                    {/* Botones */}
                    <div className="pt-4 border-t border-tierra/10 flex items-center gap-2">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 bg-tierra text-crema text-center font-body text-[10px] font-semibold tracking-[0.16em] uppercase hover:bg-dorado hover:text-tierra transition-colors"
                      >
                        Consultar WhatsApp
                      </a>
                      <Link
                        href={`/contacto?propiedad=${encodeURIComponent(p.titulo)}`}
                        className="py-2.5 px-3 border border-tierra/20 text-tierra text-center font-body text-[10px] tracking-[0.12em] uppercase hover:border-dorado hover:text-dorado transition-colors"
                      >
                        Visita
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner inferior */}
          <div className="mt-20 p-10 bg-navy-950 text-crema border border-dorado/30 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: "#080E1A" }}>
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-display text-2xl font-medium text-crema">
                ¿Querés vender o tasar tu inmueble con nosotros?
              </h4>
              <p className="font-body text-crema/50 text-xs lg:text-sm">
                Tasación certificada por Martillera y Corredora Pública Mat. 35 RP 2026.
              </p>
            </div>
            <a
              href="https://wa.me/5492996095742?text=Hola%20Altum%2C%20quisiera%20solicitar%20una%20tasaci%C3%B3n%20profesional%20de%20mi%20propiedad."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-dorado text-tierra font-body text-[11px] font-semibold tracking-[0.16em] uppercase hover:bg-dorado-light transition-all"
            >
              <span>Solicitar Tasación</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
