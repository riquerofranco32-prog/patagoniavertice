import Hero from "@/components/marketing/Hero";
import StatsStrip from "@/components/marketing/StatsStrip";
import Manifiesto from "@/components/marketing/Manifiesto";
import Nosotros from "@/components/marketing/Nosotros";
import ProyectosSlider from "@/components/marketing/ProyectosSlider";
import Servicios from "@/components/marketing/Servicios";
import Proceso from "@/components/marketing/Proceso";
import CTAFinal from "@/components/marketing/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Manifiesto />
      <Nosotros />
      <ProyectosSlider />
      <Servicios />
      <Proceso />
      <CTAFinal />
    </>
  );
}
