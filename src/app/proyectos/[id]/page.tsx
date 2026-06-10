import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Propiedad } from "@/lib/supabase/types";

const tipoLabel: Record<string, string> = {
  venta: "Venta",
  alquiler: "Alquiler",
  desarrollo: "Desarrollo",
  lote: "Lote",
};

const estadoLabel: Record<string, string> = {
  disponible: "Disponible",
  reservado: "Reservado",
  vendido: "Vendido",
  en_construccion: "En construcción",
};

export default async function PropiedadPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data } = await supabase
    .from("propiedades")
    .select("*")
    .eq("id", params.id)
    .eq("publicado", true)
    .single();

  if (!data) notFound();

  const propiedad = data as Propiedad;
  const imagenes = propiedad.imagenes?.length
    ? propiedad.imagenes
    : [
        `https://placehold.co/1200x800/1C1A17/B8965A?text=${encodeURIComponent(propiedad.titulo)}`,
      ];

  return (
    <>
      {/* Hero image */}
      <div className="relative h-[60vh] bg-tierra">
        <img
          src={imagenes[0]}
          alt={propiedad.titulo}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tierra/80 to-transparent" />
      </div>

      <div className="bg-crema">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <Link
            href="/proyectos"
            className="font-body text-tierra/40 text-xs tracking-widest uppercase hover:text-dorado transition-colors mb-10 block"
          >
            ← Volver a proyectos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main info */}
            <div className="lg:col-span-2">
              <div className="font-body text-dorado text-xs tracking-widest uppercase mb-4">
                {propiedad.tipo ? tipoLabel[propiedad.tipo] : ""} ·{" "}
                {propiedad.ciudad}
                {propiedad.barrio && ` · ${propiedad.barrio}`}
              </div>
              <h1 className="font-display text-tierra text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
                {propiedad.titulo}
              </h1>
              {propiedad.descripcion && (
                <div className="font-body text-tierra/60 leading-relaxed whitespace-pre-line">
                  {propiedad.descripcion}
                </div>
              )}

              {/* Extra images */}
              {imagenes.length > 1 && (
                <div className="mt-12 grid grid-cols-2 gap-4">
                  {imagenes.slice(1).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${propiedad.titulo} ${i + 2}`}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-tierra p-8 sticky top-28">
                {propiedad.precio && (
                  <div className="mb-6 pb-6 border-b border-crema/10">
                    <div className="font-body text-crema/40 text-xs mb-1">
                      {propiedad.moneda}
                    </div>
                    <div className="font-display text-crema text-4xl font-light">
                      {propiedad.precio.toLocaleString("es-AR")}
                    </div>
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  {propiedad.estado && (
                    <div className="flex justify-between">
                      <span className="font-body text-crema/40 text-xs uppercase tracking-wider">
                        Estado
                      </span>
                      <span className="font-body text-crema text-sm">
                        {estadoLabel[propiedad.estado]}
                      </span>
                    </div>
                  )}
                  {propiedad.superficie_m2 && (
                    <div className="flex justify-between">
                      <span className="font-body text-crema/40 text-xs uppercase tracking-wider">
                        Superficie
                      </span>
                      <span className="font-body text-crema text-sm">
                        {propiedad.superficie_m2} m²
                      </span>
                    </div>
                  )}
                  {propiedad.ubicacion && (
                    <div className="flex justify-between">
                      <span className="font-body text-crema/40 text-xs uppercase tracking-wider">
                        Ubicación
                      </span>
                      <span className="font-body text-crema text-sm">
                        {propiedad.ubicacion}
                      </span>
                    </div>
                  )}
                </div>

                <Link
                  href={`/contacto`}
                  className="block w-full py-4 bg-dorado text-tierra text-center font-body text-sm tracking-widest uppercase hover:bg-dorado/90 transition-colors"
                >
                  Consultar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
