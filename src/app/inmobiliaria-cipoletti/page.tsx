import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://altumsci.com.ar";

export const metadata: Metadata = {
  title: "Inmobiliaria en Cipoletti — Altum | Propiedades en Río Negro",
  description:
    "Altum Inmobiliaria en Cipoletti, Río Negro. Comprá, vendé o alquilá propiedades con el equipo local más comprometido de la región. Más de 5 años de experiencia en el mercado de Cipoletti y el Alto Valle.",
  keywords: [
    "inmobiliaria Cipoletti",
    "propiedades en Cipoletti",
    "casas en venta Cipoletti",
    "alquiler Cipoletti Río Negro",
    "vender propiedad Cipoletti",
    "comprar casa Cipoletti",
    "inmuebles Cipoletti",
    "Altum Cipoletti",
    "agente inmobiliario Cipoletti",
    "Alto Valle inmobiliaria",
  ],
  alternates: { canonical: `${siteUrl}/inmobiliaria-cipoletti` },
  openGraph: {
    title: "Inmobiliaria en Cipoletti — Altum Inmobiliaria",
    description:
      "La inmobiliaria de confianza en Cipoletti. Propiedades residenciales y comerciales en el Alto Valle del Río Negro. Trato directo, sin intermediarios.",
    url: `${siteUrl}/inmobiliaria-cipoletti`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const serviciosCipoletti = [
  {
    titulo: "Compra y Venta en Cipoletti",
    descripcion:
      "Propiedades residenciales, comerciales y terrenos en todos los barrios de Cipoletti. Conocemos el mercado del Alto Valle como nadie.",
    icon: "🏡",
  },
  {
    titulo: "Alquiler en Cipoletti",
    descripcion:
      "Administración completa de alquileres en Cipoletti. Búsqueda de inquilinos, contratos y cobros mensuales.",
    icon: "🔑",
  },
  {
    titulo: "Consultoría Local",
    descripcion:
      "Análisis de mercado específico de Cipoletti. Valuación de propiedades y asesoramiento en inversiones en el Alto Valle.",
    icon: "📊",
  },
  {
    titulo: "Contratos y Documentación",
    descripcion:
      "Redacción y revisión de contratos de compraventa y locación conforme a la legislación de Río Negro.",
    icon: "📋",
  },
];

const barrios = [
  "Centro", "Ferri", "Los Olivos", "Villa del Parque", 
  "Centenario", "Villa Regina", "San Lorenzo", "Valentina Sur"
];

export default function InmobiliariaCipoletti() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
              { "@type": "ListItem", position: 2, name: "Inmobiliaria Cipoletti", item: `${siteUrl}/inmobiliaria-cipoletti` },
            ],
          }),
        }}
      />

      <main className="bg-crema min-h-screen">
        {/* Hero */}
        <section
          className="relative pt-40 pb-24 lg:pb-32 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0A1228 0%, #0F1A3E 50%, #080E1A 100%)" }}
        >
          <div className="absolute inset-0 grain-overlay opacity-[0.03] pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado/20 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-12 font-body text-[11px] tracking-[0.15em] uppercase" aria-label="Breadcrumb">
              <Link href="/" className="text-crema/30 hover:text-dorado transition-colors">Inicio</Link>
              <span className="text-dorado/30">·</span>
              <span className="text-dorado/70">Cipoletti</span>
            </nav>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-dorado" />
              <span className="font-body text-dorado/70 text-[10px] tracking-[0.3em] uppercase">Río Negro · Alto Valle</span>
            </div>

            <h1
              className="font-display font-medium text-crema leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em" }}
            >
              Inmobiliaria en{" "}
              <em className="not-italic italic text-dorado">Cipoletti</em>
            </h1>

            <p className="font-body text-crema/45 text-[16px] leading-relaxed max-w-2xl mb-10">
              Somos la inmobiliaria de referencia en Cipoletti y el Alto Valle del Río Negro.
              Más de 5 años acompañando a familias y inversores en compras, ventas y alquileres
              con transparencia total y trato directo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5492996095742?text=Hola%2C%20busco%20propiedades%20en%20Cipoletti"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 font-body text-tierra text-[11px] font-semibold tracking-[0.15em] uppercase"
              >
                Consultar propiedades en Cipoletti
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-crema/15 text-crema/60 font-body text-[11px] tracking-[0.15em] uppercase hover:border-dorado hover:text-dorado transition-colors"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-24 lg:py-32 bg-navy-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-10 bg-dorado" />
              <span className="font-body text-dorado/70 text-[10px] tracking-[0.3em] uppercase">Nuestros servicios en Cipoletti</span>
            </div>
            <h2
              className="font-display font-medium text-crema mb-16"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Todo lo que necesitás para tu{" "}
              <em className="not-italic italic text-dorado">propiedad en Cipoletti</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy-700/20">
              {serviciosCipoletti.map((s) => (
                <div key={s.titulo} className="p-8 lg:p-10 bg-navy-800 border-l-2 border-dorado/20 hover:border-dorado/60 transition-colors">
                  <div className="text-3xl mb-4" aria-hidden="true">{s.icon}</div>
                  <h3 className="font-display font-medium text-crema text-xl mb-3">{s.titulo}</h3>
                  <p className="font-body text-crema/40 text-[14px] leading-relaxed">{s.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Barrios */}
        <section className="py-16 bg-tierra">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="font-display font-medium text-crema text-2xl mb-8">
              Operamos en todos los barrios de Cipoletti
            </h2>
            <div className="flex flex-wrap gap-3">
              {barrios.map((b) => (
                <span
                  key={b}
                  className="font-body text-[11px] tracking-[0.15em] uppercase px-4 py-2 border border-dorado/20 text-dorado/70"
                  style={{ background: "rgba(201,168,76,0.05)" }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-navy-900 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2
              className="font-display font-medium text-crema mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              ¿Buscás una propiedad en{" "}
              <em className="not-italic italic text-dorado">Cipoletti</em>?
            </h2>
            <p className="font-body text-crema/40 text-[15px] mb-10">
              Contactanos sin compromiso. Te asesoramos gratis y encontramos la propiedad
              ideal para vos en Cipoletti y el Alto Valle.
            </p>
            <a
              href="https://wa.me/5492996095742?text=Hola%2C%20necesito%20asesoramiento%20inmobiliario%20en%20Cipoletti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-3 px-10 py-4 font-body text-tierra text-[11px] font-semibold tracking-[0.15em] uppercase"
            >
              Consultar ahora — es gratis
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
