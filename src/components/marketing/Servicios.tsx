const servicios = [
  {
    numero: "01",
    titulo: "Venta de Propiedades",
    descripcion:
      "Casas, departamentos y lotes en los mejores barrios de Neuquén y la región. Tasaciones precisas y acompañamiento completo en cada operación.",
  },
  {
    numero: "02",
    titulo: "Desarrollos Inmobiliarios",
    descripcion:
      "Proyectos propios y en alianza con desarrolladoras de la región. Inversión transparente, calidades superiores y entornos extraordinarios.",
  },
  {
    numero: "03",
    titulo: "Gestión de Alquileres",
    descripcion:
      "Administración integral de propiedades en alquiler. Tu inversión, gestionada con la misma dedicación que si fuera nuestra.",
  },
  {
    numero: "04",
    titulo: "Asesoría de Inversión",
    descripcion:
      "El mercado patagónico tiene sus propias reglas. Te orientamos para que tomes decisiones informadas con el conocimiento local como ventaja.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-32 bg-tierra">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-dorado" />
              <span className="font-body text-dorado text-xs tracking-[0.4em] uppercase">
                Lo que hacemos
              </span>
            </div>
            <h2 className="font-display text-crema text-5xl lg:text-6xl font-light leading-[1.1]">
              Servicios{" "}
              <span className="italic text-dorado">inmobiliarios</span>
            </h2>
          </div>
          <p className="font-body text-crema/40 text-sm leading-relaxed max-w-xs">
            Desde la búsqueda hasta la escritura, cada paso con el respaldo de
            quienes conocen la Patagonia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-crema/10">
          {servicios.map((s) => (
            <div
              key={s.numero}
              className="bg-tierra p-10 lg:p-14 group hover:bg-[#242018] transition-colors duration-500"
            >
              <div className="font-display text-dorado/30 text-6xl font-light mb-6 group-hover:text-dorado/50 transition-colors">
                {s.numero}
              </div>
              <h3 className="font-display text-crema text-2xl font-light mb-4">
                {s.titulo}
              </h3>
              <p className="font-body text-crema/50 text-sm leading-relaxed">
                {s.descripcion}
              </p>
              <div className="mt-8 h-px w-0 bg-dorado group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
