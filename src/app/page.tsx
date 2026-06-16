import dynamic from "next/dynamic";
import Hero from "@/components/marketing/Hero";
import Manifiesto from "@/components/marketing/Manifiesto";

// Below-fold: lazy loaded to reduce initial JS bundle
const Nosotros = dynamic(() => import("@/components/marketing/Nosotros"));
const Estadisticas = dynamic(
  () => import("@/components/marketing/Estadisticas"),
);
const Servicios = dynamic(() => import("@/components/marketing/Servicios"));
const Proceso = dynamic(() => import("@/components/marketing/Proceso"));
const Testimonios = dynamic(() => import("@/components/marketing/Testimonios"));
const CTAFinal = dynamic(() => import("@/components/marketing/CTAFinal"));
const SpotlightCursor = dynamic(
  () => import("@/components/ui/SpotlightCursor"),
  { ssr: false },
);

export default function HomePage() {
  return (
    <>
      <SpotlightCursor />
      <Hero />
      <Manifiesto />
      <Nosotros />
      <Estadisticas />
      <Servicios />
      <Proceso />
      <Testimonios />
      <CTAFinal />
    </>
  );
}
