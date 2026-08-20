import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://altumsci.com.ar";

export const metadata: Metadata = {
  title: "Inmobiliaria en Catriel — Altum | Propiedades en Río Negro",
  description:
    "Altum Inmobiliaria en Catriel, Río Negro. Compra, venta y alquiler de propiedades en Catriel con el equipo inmobiliario más comprometido de la región petrolera patagónica. Asesoramiento personalizado.",
  keywords: [
    "inmobiliaria Catriel",
    "propiedades en Catriel",
    "casas en venta Catriel",
    "alquiler Catriel Río Negro",
    "vender propiedad Catriel",
    "inmuebles Catriel",
    "Altum Catriel",
    "inversión inmobiliaria Catriel",
    "departamentos Catriel",
    "terrenos Catriel",
  ],
  alternates: { canonical: `${siteUrl}/inmobiliaria-catriel` },
  openGraph: {
    title: "Inmobiliaria en Catriel — Altum Inmobiliaria",
    description:
      "Propiedades en Catriel, la ciudad petrolera de Río Negro. Compra, venta y alquiler con respaldo profesional y conocimiento local del mercado.",
    url: `${siteUrl}/inmobiliaria-catriel`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const serviciosCatriel = [
  {
    titulo: "Propiedades Residenciales en Catriel",
    descripcion:
      "Casas, departamentos y lotes en los mejores sectores de Catriel. Asesoramiento experto en el mercado local.",
    icon: "🏠",
  },
  {
    titulo: "Inversión Inmobiliaria en Catriel",
    descripcion:
      "Catriel crece impulsada por la industria petrolera. Te ayudamos a identificar las mejores oportunidades de inversión con alta rentabilidad.",
    icon: "💰",
  },
  {
    titulo: "Propiedades Comerciales",
    descripcion:
      "Locales, oficinas y galpones en Catriel. Ideal para emprendimientos y negocios que buscan crecer en la región.",
    icon: "🏢",
  },
  {
    titulo: "Alquiler y Administración",
    descripcion:
      "Gestionamos tu propiedad en Catriel de forma integral. Inquilinos seguros, cobros puntuales y mantenimiento.",
    icon: "🔑",
  },
];

export default function InmobiliariaCatriel() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
              { "@type": "ListItem", position: 2, name: "Inmobiliaria Catriel", item: `${siteUrl}/inmobiliaria-catriel` },
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
            <nav className="flex items-center gap-2 mb-12 font-body text-[11px] tracking-[0.15em] uppercase" aria-label="Breadcrumb">
              <Link href="/" className="text-crema/30 hover:text-dorado transition-colors">Inicio</Link>
              <span className="text-dorado/30">·</span>
              <span className="text-dorado/70">Catriel</span>
            </nav>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-dorado" />
              <span className="font-body text-dorado/70 text-[10px] tracking-[0.3em] uppercase">Río Negro · Zona Petrolera</span>
            </div>

            <h1
              className="font-display font-medium text-crema leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em" }}
            >
              Inmobiliaria en{" "}
              <em className="not-italic italic text-dorado">Catriel</em>
            </h1>

            <p className="font-body text-crema/45 text-[16px] leading-relaxed max-w-2xl mb-10">
              Catriel es una de las ciudades con mayor crecimiento inmobiliario de la Patagonia.
              En Altum conocemos cada rincón del mercado local y te ayudamos a tomar la mejor
              decisión de compra, venta o inversión.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5492996095742?text=Hola%2C%20busco%20propiedades%20en%20Catriel"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 font-body text-tierra text-[11px] font-semibold tracking-[0.15em] uppercase"
              >
                Consultar propiedades en Catriel
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-crema/15 text-crema/60 font-body text-[11px] tracking-[0.15em] uppercase hover:border-dorado hover:text-dorado transition-colors"
              >
                Formulario de contacto
              </Link>
            </div>
          </div>
        </section>

        {/* Por qué invertir en Catriel */}
        <section className="py-16 bg-tierra">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2
              className="font-display font-medium text-crema mb-6"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              ¿Por qué invertir en{" "}
              <em className="not-italic italic text-dorado">Catriel</em>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { stat: "Alta", label: "demanda de alquileres por la industria petrolera" },
                { stat: "Crecimiento", label: "constante del valor de las propiedades" },
                { stat: "Rentabilidad", label: "superior al promedio nacional en alquileres" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-dorado/30 pl-6">
                  <p className="font-display font-medium text-dorado text-3xl mb-2">{item.stat}</p>
                  <p className="font-body text-crema/50 text-[14px] leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-24 lg:py-32 bg-navy-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2
              className="font-display font-medium text-crema mb-16"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Servicios inmobiliarios en{" "}
              <em className="not-italic italic text-dorado">Catriel</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy-700/20">
              {serviciosCatriel.map((s) => (
                <div key={s.titulo} className="p-8 lg:p-10 bg-navy-800 border-l-2 border-dorado/20 hover:border-dorado/60 transition-colors">
                  <div className="text-3xl mb-4" aria-hidden="true">{s.icon}</div>
                  <h3 className="font-display font-medium text-crema text-xl mb-3">{s.titulo}</h3>
                  <p className="font-body text-crema/40 text-[14px] leading-relaxed">{s.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-navy-900 text-center border-t border-dorado/10">
          <div className="max-w-2xl mx-auto px-6">
            <h2
              className="font-display font-medium text-crema mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Tu propiedad en{" "}
              <em className="not-italic italic text-dorado">Catriel</em> te espera
            </h2>
            <p className="font-body text-crema/40 text-[15px] mb-10">
              El mercado inmobiliario de Catriel crece mes a mes. Consultanos sin compromiso
              y aprovechá las mejores oportunidades antes que otros.
            </p>
            <a
              href="https://wa.me/5492996095742?text=Hola%2C%20quiero%20invertir%20en%20propiedades%20en%20Catriel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-3 px-10 py-4 font-body text-tierra text-[11px] font-semibold tracking-[0.15em] uppercase"
            >
              Hablar con un asesor
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
