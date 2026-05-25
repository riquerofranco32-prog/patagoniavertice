import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Propiedad } from "@/lib/supabase/types";

export const metadata = {
  title: "Proyectos — Patagonia Vértice",
};

const tipoLabel: Record<string, string> = {
  venta: "Venta",
  alquiler: "Alquiler",
  desarrollo: "Desarrollo",
  lote: "Lote",
};

export default async function ProyectosPage() {
  const supabase = createClient();
  const { data: propiedades } = await supabase
    .from("propiedades")
    .select("*")
    .eq("publicado", true)
    .order("created_at", { ascending: false });

  return (
    <>
      <div className="bg-tierra pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-dorado" />
            <span className="font-body text-dorado text-xs tracking-[0.4em] uppercase">
              Portafolio
            </span>
          </div>
          <h1 className="font-display text-crema text-6xl lg:text-7xl font-light leading-[1.1]">
            Proyectos <span className="italic text-dorado">disponibles</span>
          </h1>
        </div>
      </div>

      <section className="py-24 bg-crema">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {!propiedades || propiedades.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-body text-tierra/40 text-lg">
                Próximamente nuevos proyectos disponibles.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {propiedades.map((p) => {
                const prop = p as Propiedad;
                const imagen = prop.imagenes?.[0] ?? `https://placehold.co/600x400/1C1A17/B8965A?text=${encodeURIComponent(prop.titulo)}`;
                return (
                  <Link key={prop.id} href={`/proyectos/${prop.id}`} className="group block">
                    <div className="overflow-hidden aspect-[4/3] mb-5">
                      <img
                        src={imagen}
                        alt={prop.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="font-body text-dorado text-xs tracking-widest uppercase mb-2">
                      {prop.tipo ? tipoLabel[prop.tipo] : ""} · {prop.ciudad}
                    </div>
                    <h3 className="font-display text-tierra text-xl font-light group-hover:text-dorado transition-colors mb-1">
                      {prop.titulo}
                    </h3>
                    {prop.barrio && (
                      <p className="font-body text-tierra/50 text-sm">{prop.barrio}</p>
                    )}
                    {prop.precio && (
                      <p className="font-display text-tierra text-lg font-light mt-2">
                        {prop.moneda} {prop.precio.toLocaleString("es-AR")}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
