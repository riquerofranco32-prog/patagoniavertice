import Link from "next/link";
import StatCounter from "./StatCounter";

const titleWords = [
  { text: "Construimos", extra: "" },
  { text: "con", extra: "" },
  { text: "visión,", extra: "italic text-dorado" },
  { text: "compromiso", extra: "" },
  { text: "y", extra: "text-crema/50" },
  { text: "confianza", extra: "text-crema/50" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Video background con zoom lento */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://sxfzjcumsflqfyubrlyq.supabase.co/storage/v1/object/public/media/bg-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
        style={{ animation: "zoomBg 20s ease-in-out infinite alternate" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(28,26,23,0.65)" }} />

      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado/30 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pb-20 pt-40">

        {/* Eyebrow — fade in delay 0.3s */}
        <div
          className="flex items-center gap-4 mb-10"
          style={{ animation: "fadeUp 0.7s ease forwards", animationDelay: "0.3s", opacity: 0 }}
        >
          <div className="h-px w-10 bg-dorado" />
          <span className="font-body text-dorado text-[11px] tracking-[0.25em] uppercase">
            3 Proyectos Activos en Neuquén
          </span>
        </div>

        {/* Title — word by word stagger */}
        <h1
          className="font-display text-crema font-light leading-[1.1] text-[2.8rem] md:text-6xl lg:text-7xl max-w-4xl mb-8 flex flex-wrap gap-x-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          {titleWords.map((w, i) => (
            <span
              key={i}
              className={w.extra}
              style={{
                display: "inline-block",
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: `${0.5 + i * 0.1}s`,
                opacity: 0,
              }}
            >
              {w.text}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className="font-body text-crema/50 text-lg leading-relaxed max-w-xl mb-12"
          style={{ animation: "fadeUp 0.7s ease forwards", animationDelay: "0.75s", opacity: 0 }}
        >
          Desarrollos inmobiliarios de primer nivel en Neuquén y la Patagonia.
        </p>

        {/* CTAs — slide up delay 0.8s */}
        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{ animation: "fadeUp 0.7s ease forwards", animationDelay: "0.8s", opacity: 0 }}
        >
          <Link
            href="/proyectos"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-shimmer text-tierra font-body text-xs font-medium tracking-[0.12em] uppercase"
          >
            Ver Proyectos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-crema/30 text-crema font-body text-xs font-medium tracking-[0.12em] uppercase hover:border-dorado hover:text-dorado transition-colors duration-300"
          >
            Contactar
          </Link>
        </div>

        {/* Counters */}
        <StatCounter />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-12 flex flex-col items-center gap-1">
        <div className="relative h-14 w-px overflow-hidden">
          <div className="absolute inset-0 bg-dorado/50" style={{ animation: "scrollDown 1.8s ease-in-out infinite" }} />
        </div>
      </div>

      {/* Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #B8965A, transparent)" }} />
    </section>
  );
}
