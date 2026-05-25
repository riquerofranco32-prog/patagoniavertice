export default function Nosotros() {
  return (
    <section id="nosotros" className="py-32 bg-crema">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: image placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-tierra/10 w-full max-w-md">
              <img
                src="https://placehold.co/600x800/1C1A17/B8965A?text=Patagonia+Vértice"
                alt="Patagonia Vértice"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold accent box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-dorado/30" />
          </div>

          {/* Right: content */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-dorado" />
              <span className="font-body text-dorado text-xs tracking-[0.4em] uppercase">
                Quiénes somos
              </span>
            </div>

            <h2 className="font-display text-tierra text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
              Raíces patagónicas,{" "}
              <span className="italic">visión de futuro</span>
            </h2>

            <div className="space-y-5 font-body text-tierra/60 leading-relaxed">
              <p>
                Patagonia Vértice nació de la convicción de que los desarrollos
                inmobiliarios en la región deben estar a la altura del entorno que
                los rodea: excepcionales.
              </p>
              <p>
                Con más de 15 años en el mercado neuquino, acompañamos a familias
                e inversores en la búsqueda de propiedades que no solo representan
                un activo, sino un estilo de vida único.
              </p>
              <p>
                Nuestro equipo conoce cada valle, cada cerro y cada barrio de la
                región. Esa experiencia territorial es lo que nos distingue.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-dorado/40" />
              <span className="font-display text-tierra/40 text-lg italic">
                Neuquén, desde siempre
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
