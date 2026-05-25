import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import ProyectosSliderClient, { type ProyectoCard } from "./ProyectosSliderClient";

const fallback: ProyectoCard[] = [
  {
    id: "demo-1",
    titulo: "Altos del Limay",
    ubicacion: "Neuquén Capital",
    descripcion: "Complejo residencial en altura con vistas panorámicas al río Limay. Unidades de 2 y 3 ambientes con amenities de primer nivel.",
    estado: "en_construccion",
    imagen: null,
  },
  {
    id: "demo-2",
    titulo: "Parque Patagónico",
    ubicacion: "Centenario, Neuquén",
    descripcion: "Loteo premium en entorno natural. 80 lotes de entre 500 y 1.200 m² con acceso a áreas verdes y seguridad perimetral.",
    estado: "disponible",
    imagen: null,
  },
  {
    id: "demo-3",
    titulo: "Vértice Confluencia",
    ubicacion: "Confluencia, Neuquén",
    descripcion: "Desarrollo de viviendas unifamiliares en el corazón residencial de Neuquén. Diseño contemporáneo con materiales de la región.",
    estado: "vendido",
    imagen: null,
  },
];

export default async function ProyectosSlider() {
  let proyectos: ProyectoCard[] = [];

  try {
    const supabase = createClient();
    const { data } = await supabase
      .from("propiedades")
      .select("id, titulo, ubicacion, descripcion, estado, imagenes")
      .eq("publicado", true)
      .order("created_at", { ascending: false })
      .limit(6);

    if (data && data.length > 0) {
      proyectos = data.map((p) => ({
        id: p.id,
        titulo: p.titulo,
        ubicacion: p.ubicacion,
        descripcion: p.descripcion,
        estado: p.estado,
        imagen: p.imagenes?.[0] ?? null,
      }));
    }
  } catch {
    // Supabase not configured yet — use fallback
  }

  const items = proyectos.length > 0 ? proyectos : fallback;

  return (
    <section className="py-0 bg-tierra">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-dorado" />
              <span className="font-body text-dorado text-xs tracking-[0.4em] uppercase">
                Portafolio
              </span>
            </div>
            <h2 className="font-display text-crema text-5xl lg:text-6xl font-light leading-[1.1]">
              Nuestros <span className="italic text-dorado">proyectos</span>
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="font-body text-crema/50 text-xs tracking-widest uppercase border-b border-crema/20 pb-1 hover:text-dorado hover:border-dorado transition-colors self-start md:self-auto"
          >
            Ver todos →
          </Link>
        </div>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
        <ProyectosSliderClient proyectos={items} />
      </div>
    </section>
  );
}
