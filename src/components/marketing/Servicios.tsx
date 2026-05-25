import { Building2, Wrench, TrendingUp, ClipboardList } from "lucide-react";
import { FadeUp, SlideInLeft } from "@/components/ui/AnimateOnScroll";

const servicios = [
  {
    icon: Building2,
    titulo: "Desarrollo Inmobiliario",
    descripcion:
      "Proyectamos y ejecutamos desarrollos residenciales y comerciales que generan valor real para inversores y usuarios finales.",
  },
  {
    icon: Wrench,
    titulo: "Construcción Llave en Mano",
    descripcion:
      "Desde el diseño hasta la entrega, gestionamos cada etapa de la obra con estándares de calidad patagónicos.",
  },
  {
    icon: TrendingUp,
    titulo: "Inversión y Financiamiento",
    descripcion:
      "Estructuras de inversión accesibles con planes de financiamiento adaptados al mercado neuquino y regional.",
  },
  {
    icon: ClipboardList,
    titulo: "Gestión de Obras",
    descripcion:
      "Administración y dirección técnica de obras propias y de terceros, con trazabilidad total del proceso.",
  },
];

export default function Servicios() {
  return (
    <section className="py-28 bg-humo overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <SlideInLeft>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-dorado" />
                <span className="eyebrow">Lo que hacemos</span>
              </div>
              <h2 className="font-display text-tierra text-5xl lg:text-[3.5rem] font-light leading-[1.05]">
                Nuestros{" "}
                <em className="not-italic italic text-dorado">servicios</em>
              </h2>
            </div>
            <p className="font-body text-tierra/40 text-[15px] leading-relaxed max-w-xs">
              Cada servicio está diseñado para acompañarte desde la idea hasta la entrega.
            </p>
          </div>
        </SlideInLeft>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(28,25,22,0.08)" }}>
          {servicios.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeUp key={s.titulo} delay={i * 0.1}>
                <div className="relative bg-humo p-10 group hover:bg-tierra transition-colors duration-500 h-full overflow-hidden">
                  {/* Left accent */}
                  <div className="absolute left-0 top-0 w-0.5 bg-dorado scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" style={{ height: "100%" }} />

                  <div className="text-dorado mb-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 origin-left">
                    <Icon size={30} strokeWidth={1.25} />
                  </div>

                  <h3 className="font-display text-tierra text-xl font-light mb-4 group-hover:text-crema transition-colors duration-500 leading-tight">
                    {s.titulo}
                  </h3>
                  <p className="font-body text-tierra/50 text-sm leading-relaxed group-hover:text-crema/50 transition-colors duration-500">
                    {s.descripcion}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>

      <div className="mt-28 mx-6 lg:mx-12 sep-gold h-px" />
    </section>
  );
}
