import Link from "next/link";

export default function Nosotros() {
  return (
    <section className="py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-dorado" />
              <span className="font-body text-dorado text-xs tracking-[0.4em] uppercase">
                Quiénes somos
              </span>
            </div>

            <h2 className="font-display text-tierra text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
              Raíces patagónicas,{" "}
              <span className="italic text-dorado">visión de futuro</span>
            </h2>

            <div className="space-y-5 font-body text-tierra/60 leading-relaxed mb-10">
              <p>
                Somos una empresa neuquina con más de 15 años desarrollando
                proyectos inmobiliarios que respetan el entorno patagónico y
                generan valor real para quienes invierten con nosotros.
              </p>
              <p>
                Cada proyecto nace de un profundo conocimiento del territorio,
                del mercado y de las familias que eligen la Patagonia como su
                lugar en el mundo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              {[
                { value: "15+", label: "Años de experiencia" },
                { value: "200+", label: "Familias acompañadas" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <span className="font-display text-dorado text-4xl font-light">
                    {s.value}
                  </span>
                  <span className="font-body text-tierra/40 text-xs tracking-wider uppercase leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-3 font-body text-tierra text-xs tracking-widest uppercase bg-tierra text-crema px-7 py-3.5 hover:bg-dorado transition-colors duration-300"
            >
              Conocer más
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://placehold.co/800x1000/1C1A17/B8965A?text=Patagonia+Vértice"
                alt="Patagonia Vértice - obra"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold accent frame */}
            <div className="absolute -bottom-5 -right-5 w-40 h-40 border border-dorado/25 pointer-events-none" />
            <div className="absolute -top-5 -left-5 w-24 h-24 border border-dorado/15 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
