import type { Metadata } from "next";
import SumateContent from "@/components/marketing/SumateContent";

export const metadata: Metadata = {
  title: "Sumate",
  description: "Trabajá con Patagonia Vértice. Buscamos profesionales apasionados por el desarrollo de la Patagonia.",
};

export default function SumatePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-tierra pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=60"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(28,26,23,0.5), rgba(28,26,23,0.95))" }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-dorado" />
            <span className="font-body text-dorado text-[11px] tracking-[0.3em] uppercase">
              Trabajá con nosotros
            </span>
          </div>
          <h1
            className="font-display text-crema font-light leading-[1.05] mb-6 max-w-3xl"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            Construí tu futuro{" "}
            <span className="italic text-dorado">con nosotros</span>
          </h1>
          <p className="font-body text-crema/40 text-base leading-relaxed max-w-xl">
            Somos un equipo apasionado por el desarrollo de la Patagonia.
            Si querés formar parte, queremos conocerte.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, #B8965A40, transparent)" }}
        />
      </div>

      <SumateContent />
    </>
  );
}
