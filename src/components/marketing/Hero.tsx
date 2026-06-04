"use client";

import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const WA_HERO =
  "https://wa.me/5492996095742?text=Hola%2C%20quisiera%20consultar%20propiedades%20de%20Altum%20Inmobiliaria";

const SERVICES = ["Venta", "Alquiler", "Consultoría", "Contratos"];

const MARQUEE_ITEMS = [
  "ALTUM INMOBILIARIA",
  "VENTA",
  "ALQUILER",
  "CONSULTORÍA",
  "CONTRATOS",
  "RÍO NEGRO",
  "PATAGONIA",
  "PROPIEDADES",
  "ALTUM INMOBILIARIA",
  "VENTA",
  "ALQUILER",
  "CONSULTORÍA",
  "CONTRATOS",
  "RÍO NEGRO",
  "PATAGONIA",
  "PROPIEDADES",
];

const titleLines = [
  { text: "Tu inversión,", cls: "text-crema/90" },
  { text: "en el corazón", cls: "text-crema/30 pl-0 lg:pl-20" },
  { text: "de Patagonia.", cls: "italic text-dorado" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Video background — parallax ────────────────────────── */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: 1.1 }}>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/bg-hero.mp4"
          poster="/hero.png"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      {/* ── Overlays ─────────────────────────────────────────────────────── */}
      {/* Navy brand tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, rgba(15,26,62,0.70) 0%, rgba(26,39,82,0.48) 38%, rgba(10,18,40,0.92) 100%)",
        }}
      />
      {/* Bottom-up dark for content legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,18,40,0.97) 0%, rgba(10,18,40,0.28) 52%, transparent 100%)",
        }}
      />
      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay opacity-[0.04] mix-blend-overlay" />

      {/* Left gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado/20 to-transparent" />

      {/* ── ALTUM SDI brand badge ─────────────────────────────────────────── */}
      <motion.div
        className="absolute top-28 right-6 lg:right-12"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div
          className="flex items-center gap-2.5 backdrop-blur-sm border border-dorado/20 px-4 py-2"
          style={{ background: "rgba(26,39,82,0.55)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-dorado badge-pulse" />
          <span className="font-body text-dorado/75 text-[10px] tracking-[0.25em] uppercase">
            Altum Inmobiliaria · Río Negro
          </span>
        </div>
      </motion.div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <motion.div
        className="relative flex-1 flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-12 w-full pb-20 pt-40"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            className="h-px bg-dorado"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
          <span className="eyebrow">Río Negro · Patagonia Argentina</span>
        </motion.div>

        {/* Headline — clip-up reveal per line */}
        <h1
          className="font-display font-light leading-[1.0] max-w-5xl mb-8"
          style={{
            fontSize: "clamp(3.8rem, 9vw, 8rem)",
            letterSpacing: "-0.03em",
          }}
        >
          {titleLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                className={`block ${line.cls}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.5 + i * 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Services chips */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.92, duration: 0.55 }}
        >
          {SERVICES.map((service) => (
            <span
              key={service}
              className="font-body text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 border border-dorado/25 text-dorado/65"
              style={{ background: "rgba(196,149,85,0.07)" }}
            >
              {service}
            </span>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-body text-crema/45 text-[15px] lg:text-base leading-relaxed max-w-md mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          Accedé al mercado inmobiliario de mayor crecimiento en Argentina.
          Propiedades con respaldo profesional en Río Negro y la Patagonia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
        >
          {/* Primary — Ver Propiedades */}
          <Link
            href="/proyectos"
            className="group inline-flex items-center justify-center gap-3 px-9 py-4 btn-shimmer text-tierra font-body text-[11px] font-semibold tracking-[0.15em] uppercase"
          >
            Ver Propiedades
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          {/* Secondary — WhatsApp */}
          <a
            href={WA_HERO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 border border-crema/15 text-crema/70 font-body text-[11px] font-medium tracking-[0.15em] uppercase hover:border-dorado hover:text-dorado transition-colors duration-300"
          >
            <WaIcon />
            Consultar por WhatsApp
          </a>
        </motion.div>
      </motion.div>

      {/* ── Marquee ticker ────────────────────────────────────────────────── */}
      <motion.div
        className="relative border-t border-crema/8 overflow-hidden h-11 backdrop-blur-sm shrink-0"
        style={{ background: "rgba(15,26,62,0.45)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        {/* Scroll indicator */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
          <div className="relative h-5 w-px overflow-hidden">
            <div
              className="absolute inset-0 bg-dorado/60"
              style={{ animation: "scrollDown 1.8s ease-in-out infinite" }}
            />
          </div>
        </div>

        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(15,26,62,0.5), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(15,26,62,0.5), transparent)",
          }}
        />

        {/* Animating track */}
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: "max-content",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "0 1.5rem",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
            >
              <span className="font-body text-crema/25 text-[9px] tracking-[0.4em] uppercase">
                {item}
              </span>
              <span className="text-dorado/30 text-[10px]">·</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
