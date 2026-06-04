import Hero from "@/components/marketing/Hero";
import Manifiesto from "@/components/marketing/Manifiesto";
import Nosotros from "@/components/marketing/Nosotros";
import ProyectosSlider from "@/components/marketing/ProyectosSlider";
import Servicios from "@/components/marketing/Servicios";
import Proceso from "@/components/marketing/Proceso";
import Testimonios from "@/components/marketing/Testimonios";
import CTAFinal from "@/components/marketing/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifiesto />
      <Nosotros />
      <ProyectosSlider />
      <Servicios />
      <Proceso />
      <Testimonios />
      <CTAFinal />
    </>
  );
}
