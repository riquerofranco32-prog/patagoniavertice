import type { Metadata } from "next";
import Servicios from "@/components/marketing/Servicios";

export const metadata: Metadata = {
  title: "Servicios — Altum Inmobiliaria",
  description:
    "Compra y venta de inmuebles, administración de alquileres, consultoría estratégica y contratos inmobiliarios en Río Negro y la Patagonia.",
  keywords: [
    "servicios inmobiliarios Río Negro",
    "compra venta inmuebles Patagonia",
    "administración alquileres Río Negro",
    "consultoría inmobiliaria",
    "contratos inmobiliarios",
    "Altum Inmobiliaria",
  ],
};

export default function ServiciosPage() {
  return <Servicios />;
}
