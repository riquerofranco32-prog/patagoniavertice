import Link from "next/link";
import StatCounter from "./StatCounter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-tierra overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="/bg-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="https://placehold.co/1920x1080/1C1A17/1C1A17"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-tierra via-tierra/70 to-tierra/40" />

      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado/30 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pb-20 pt-40">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-10 bg-dorado" />
          <span className="font-body text-dorado text-xs tracking-[0.4em] uppercase">
            6 Proyectos Activos en Neuquén
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-crema font-light leading-[1.1] text-5xl md:text-6xl lg:text-7xl max-w-4xl mb-8">
          Construimos con{" "}
          <span className="italic text-dorado">visión</span>,{" "}
          compromiso{" "}
          <span className="text-crema/60">y confianza</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-crema/50 text-lg leading-relaxed max-w-xl mb-12">
          Desarrollos inmobiliarios de primer nivel en Neuquén y la Patagonia.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/proyectos"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-dorado text-tierra font-body text-xs font-medium tracking-widest uppercase hover:bg-dorado/90 transition-colors duration-300"
          >
            Ver Proyectos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-crema/30 text-crema font-body text-xs font-medium tracking-widest uppercase hover:border-dorado hover:text-dorado transition-colors duration-300"
          >
            Contactar
          </Link>
        </div>

        {/* Animated counters */}
        <StatCounter />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-12 flex flex-col items-center gap-1">
        <div className="relative h-14 w-px overflow-hidden">
          <div
            className="absolute inset-0 bg-dorado/50"
            style={{
              animation: "scrollDown 1.8s ease-in-out infinite",
            }}
          />
        </div>
        <style>{`
          @keyframes scrollDown {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
        `}</style>
      </div>
    </section>
  );
}
