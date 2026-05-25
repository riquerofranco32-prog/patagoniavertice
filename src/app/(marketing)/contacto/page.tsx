import FormularioContacto from "@/components/marketing/FormularioContacto";

export const metadata = {
  title: "Contacto — Patagonia Vértice",
};

export default function ContactoPage() {
  return (
    <>
      <div className="bg-tierra pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-dorado" />
            <span className="font-body text-dorado text-xs tracking-[0.4em] uppercase">
              Hablemos
            </span>
          </div>
          <h1 className="font-display text-crema text-6xl lg:text-7xl font-light leading-[1.1]">
            Contacto
          </h1>
        </div>
      </div>
      <FormularioContacto />
    </>
  );
}
