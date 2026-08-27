import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/marketing/Hero";
import Manifiesto from "@/components/marketing/Manifiesto";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://altumsci.com.ar";

// ── Metadata específica de la home ──────────────────────────────────────────
export const metadata: Metadata = {
  title: "Altum Inmobiliaria — Propiedades en Río Negro y la Patagonia",
  description:
    "Inmobiliaria en Río Negro con más de 5 años de experiencia y +200 operaciones exitosas. Compra, venta, alquiler y consultoría de propiedades en Cipoletti, Catriel y toda la Patagonia.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Altum Inmobiliaria — Propiedades en Río Negro y la Patagonia",
    description:
      "Compra, venta y alquiler de propiedades en Río Negro. Trato directo, transparencia total. +200 operaciones exitosas en Cipoletti, Catriel y la Patagonia Argentina.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Altum Inmobiliaria — Propiedades en Río Negro y la Patagonia Argentina",
      },
    ],
  },
};

// ── Lazy loading de secciones below-fold ────────────────────────────────────
const Nosotros = dynamic(() => import("@/components/marketing/Nosotros"));
const Servicios = dynamic(() => import("@/components/marketing/Servicios"));
const Estadisticas = dynamic(
  () => import("@/components/marketing/Estadisticas"),
);
const Proceso = dynamic(() => import("@/components/marketing/Proceso"));
const PropiedadesDestacadasHome = dynamic(
  () => import("@/components/marketing/PropiedadesDestacadasHome"),
);
const TasadorExpress = dynamic(
  () => import("@/components/marketing/TasadorExpress"),
);
const ZonasInteractivas = dynamic(
  () => import("@/components/marketing/ZonasInteractivas"),
);
const GuiaInversion = dynamic(
  () => import("@/components/marketing/GuiaInversion"),
);
const CalculadoraRentabilidad = dynamic(
  () => import("@/components/marketing/CalculadoraRentabilidad"),
);
const PorQueElegirnos = dynamic(
  () => import("@/components/marketing/BentoDiferenciadores"),
);
const TestimoniosReales = dynamic(
  () => import("@/components/marketing/TestimoniosReales"),
);
const FAQ = dynamic(() => import("@/components/marketing/FAQ"));
const CTAFinal = dynamic(() => import("@/components/marketing/CTAFinal"));
const SpotlightCursor = dynamic(
  () => import("@/components/ui/SpotlightCursor"),
  { ssr: false },
);

export default function HomePage() {
  return (
    <>
      <SpotlightCursor />
      {/* Hero + Manifiesto: above-fold, no lazy */}
      <Hero />
      <Manifiesto />

      {/* Propiedades destacadas (Portfolio de primer nivel) */}
      <PropiedadesDestacadasHome />

      {/* Tasador Express & Valuación Certificada */}
      <TasadorExpress />

      {/* Quiénes somos */}
      <Nosotros />

      {/* Exploración territorial y análisis de mercado por zona */}
      <ZonasInteractivas />

      {/* Lead Magnet — Guía Estratégica de Inversión */}
      <GuiaInversion />

      {/* Calculadora interactiva de rentabilidad & inversión */}
      <CalculadoraRentabilidad />

      {/* Servicios + video institucional */}
      <Servicios />

      {/* En números */}
      <Estadisticas />

      {/* Proceso de trabajo */}
      <Proceso />

      {/* Diferenciadores "Por qué elegirnos" (Bento Grid) */}
      <PorQueElegirnos />

      {/* Testimonios reales (Social Proof / Marquee) */}
      <TestimoniosReales />

      {/* FAQ — preguntas frecuentes (rich snippet) */}
      <FAQ />

      {/* CTA final */}
      <CTAFinal />
    </>
  );
}
