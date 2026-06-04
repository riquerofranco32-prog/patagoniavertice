import type { Metadata } from "next";
import Servicios from "@/components/marketing/Servicios";

export const metadata: Metadata = {
  title: "Servicios — ALTUM SDI",
  description:
    "Compra y venta de inmuebles, administración de alquileres, consultoría estratégica y contratos inmobiliarios en Neuquén y la Patagonia.",
  keywords: [
    "servicios inmobiliarios Neuquén",
    "compra venta inmuebles Patagonia",
    "administración alquileres Neuquén",
    "consultoría inmobiliaria",
    "contratos inmobiliarios",
    "ALTUM SDI",
  ],
};

export default function ServiciosPage() {
  return <Servicios />;
}
