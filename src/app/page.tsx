import Hero from "@/components/marketing/Hero";
import StatsStrip from "@/components/marketing/StatsStrip";
import Nosotros from "@/components/marketing/Nosotros";
import ProyectosSlider from "@/components/marketing/ProyectosSlider";
import Servicios from "@/components/marketing/Servicios";
import CTAFinal from "@/components/marketing/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Nosotros />
      <ProyectosSlider />
      <Servicios />
      <CTAFinal />
    </>
  );
}
