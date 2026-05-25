import FadeIn from "@/components/ui/FadeIn";

const servicios = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    titulo: "Desarrollo Inmobiliario",
    descripcion: "Proyectamos y ejecutamos desarrollos residenciales y comerciales que generan valor real para inversores y usuarios finales.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titulo: "Construcción Llave en Mano",
    descripcion: "Desde el diseño hasta la entrega, gestionamos cada etapa de la obra con estándares de calidad patagónicos.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titulo: "Inversión y Financiamiento",
    descripcion: "Estructuras de inversión accesibles con planes de financiamiento adaptados al mercado neuquino y regional.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    titulo: "Gestión de Obras",
    descripcion: "Administración y dirección técnica de obras propias y de terceros, con trazabilidad total del proceso.",
  },
];

export default function Servicios() {
  return (
    <section className="py-28 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-dorado" />
                <span className="font-body text-dorado text-[11px] tracking-[0.25em] uppercase">
                  Lo que hacemos
                </span>
              </div>
              <h2 className="font-display text-tierra text-5xl lg:text-6xl font-light leading-[1.1]" style={{ letterSpacing: "-0.02em" }}>
                Nuestros <span className="italic text-dorado">servicios</span>
              </h2>
            </div>
            <p className="font-body text-tierra/40 text-sm leading-relaxed max-w-xs">
              Cada servicio está diseñado para acompañarte desde la idea hasta la entrega.
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-tierra/10">
          {servicios.map((s, i) => (
            <FadeIn key={s.titulo} direction="up" delay={i * 0.15}>
              <div className="relative bg-[#FAFAF8] p-10 group hover:bg-tierra transition-colors duration-500 h-full overflow-hidden">
                {/* Left border grow */}
                <div className="absolute left-0 top-0 w-0.5 bg-dorado h-0 group-hover:h-full transition-all duration-400" />

                {/* Icon */}
                <div className="text-dorado mb-6 transition-transform duration-300 group-hover:rotate-[5deg] group-hover:scale-110 origin-center">
                  {s.icon}
                </div>

                <h3 className="font-display text-tierra text-xl font-light mb-4 group-hover:text-crema transition-colors duration-500">
                  {s.titulo}
                </h3>
                <p className="font-body text-tierra/50 text-sm leading-relaxed group-hover:text-crema/50 transition-colors duration-500">
                  {s.descripcion}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="mt-28 h-px mx-6 lg:mx-12" style={{ background: "linear-gradient(to right, transparent, #B8965A, transparent)" }} />
    </section>
  );
}
