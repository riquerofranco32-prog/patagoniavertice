import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-tierra overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-tierra via-tierra to-[#2a2620] opacity-90" />

      {/* Decorative gold line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-dorado" />
            <span className="font-body text-dorado text-xs tracking-[0.4em] uppercase">
              Neuquén, Patagonia Argentina
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-crema font-light leading-[1.1] mb-8">
            <span className="block text-6xl lg:text-8xl">Donde el</span>
            <span className="block text-6xl lg:text-8xl">paisaje</span>
            <span className="block text-6xl lg:text-8xl italic text-dorado">define el valor</span>
          </h1>

          {/* Description */}
          <p className="font-body text-crema/60 text-lg leading-relaxed mb-12 max-w-lg">
            Desarrollamos proyectos inmobiliarios únicos en la Patagonia,
            donde la naturaleza extraordinaria se convierte en el activo más valioso.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/proyectos"
              className="inline-flex items-center justify-center px-8 py-4 bg-dorado text-tierra font-body text-sm font-medium tracking-widest uppercase hover:bg-dorado/90 transition-colors duration-300"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-crema/30 text-crema font-body text-sm font-medium tracking-widest uppercase hover:border-dorado hover:text-dorado transition-colors duration-300"
            >
              Consultar
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-24 pt-8 border-t border-crema/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "+50", label: "Proyectos entregados" },
            { value: "+15", label: "Años de trayectoria" },
            { value: "+200", label: "Familias acompañadas" },
            { value: "100%", label: "Neuquén y región" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-dorado text-4xl font-light mb-2">
                {stat.value}
              </div>
              <div className="font-body text-crema/40 text-xs tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-12 flex flex-col items-center gap-2">
        <div className="h-16 w-px bg-gradient-to-b from-dorado/60 to-transparent animate-pulse" />
        <span className="font-body text-crema/30 text-xs tracking-[0.3em] uppercase rotate-90 origin-center translate-y-8">
          Scroll
        </span>
      </div>
    </section>
  );
}
