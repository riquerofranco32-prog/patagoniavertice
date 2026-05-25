import Hero from "@/components/marketing/Hero";
import Nosotros from "@/components/marketing/Nosotros";
import Servicios from "@/components/marketing/Servicios";
import PropiedadesDestacadas from "@/components/marketing/PropiedadesDestacadas";
import FormularioContacto from "@/components/marketing/FormularioContacto";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Nosotros />
      <Servicios />
      <PropiedadesDestacadas />
      <FormularioContacto />
    </>
  );
}
