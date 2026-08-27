import { createClient } from "@/lib/supabase/server";
import CatalogoInteractivo, {
  ItemPropiedad,
} from "@/components/marketing/CatalogoInteractivo";
import GuiaInversion from "@/components/marketing/GuiaInversion";

export const metadata = {
  title: "Propiedades & Oportunidades de Inversión — Altum Inmobiliaria",
  description:
    "Catálogo exclusivo de residencias, loteos, departamentos y chacras en Río Negro y la Patagonia Argentina. Asesoría directa y matriculada.",
};

const demos: ItemPropiedad[] = [
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
      "310 m² cubiertos sobre parque forestado de 1.200 m² con vista panorámica ininterrumpida al lago y la cordillera. Apto renta turística.",
    precio: 320000,
    moneda: "USD",
  },
];

export default async function ProyectosPage() {
  let propiedades: ItemPropiedad[] = demos;

  try {
    const supabase = createClient();
    const { data } = await supabase
      .from("propiedades")
      .select("*")
      .eq("publicado", true)
      .order("destacado", { ascending: false });

    if (data && data.length > 0) {
      propiedades = data as unknown as ItemPropiedad[];
    }
  } catch {
    /* Fallback a demos curados */
  }

  return (
    <main className="bg-crema min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="pt-40 pb-28 relative overflow-hidden text-crema"
        style={{
          background:
            "linear-gradient(145deg, #060A13 0%, #0D1628 50%, #080E1A 100%)",
        }}
      >
        <div className="absolute inset-0 grain-overlay opacity-[0.04] pointer-events-none" />
        <div
          className="absolute top-1/3 right-10 w-[500px] h-[300px] opacity-15 blur-[120px] pointer-events-none rounded-full"
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
            className="font-display text-crema font-medium leading-[1.05] mb-6 max-w-4xl"
            style={{
              fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Propiedades seleccionadas en{" "}
            <em className="not-italic italic text-dorado font-normal">
              Río Negro & Patagonia
            </em>
          </h1>

          <p className="font-body text-crema/50 text-[15px] lg:text-base leading-relaxed max-w-2xl mb-8">
            Explorá residencias exclusivas, loteos con alta plusvalía y unidades
            de inversión con asesoramiento notarial y matriculado.
          </p>

          <div className="flex items-center gap-3 text-xs font-body text-dorado">
            <span>✦</span>
            <span>
              Supervisión por Martillera Colegiada Estela Mari Rojas (Mat. 35 RP
              2026)
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dorado/30 to-transparent" />
      </section>

      {/* ── Catálogo con Filtros Reactivos ────────────────────────────────── */}
      <section className="py-20 bg-crema">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <CatalogoInteractivo propiedadesIniciales={propiedades} />
        </div>
      </section>

      {/* ── Lead Magnet: Guía de Inversión ────────────────────────────────── */}
      <GuiaInversion />
    </main>
  );
}
