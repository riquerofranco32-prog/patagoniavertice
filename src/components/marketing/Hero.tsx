"use client";

import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const marqueeItems = [
  "NEUQUÉN", "PATAGONIA", "DESARROLLOS", "INVERSIÓN", "LOTES",
  "VIVIENDAS", "NEUQUÉN", "PATAGONIA", "DESARROLLOS", "INVERSIÓN", "LOTES", "VIVIENDAS",
];

const titleLines = [
  { text: "La Patagonia", cls: "text-crema/90" },
  { text: "como", cls: "text-crema/35 pl-0 lg:pl-20" },
  { text: "activo.", cls: "italic text-dorado" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Video with parallax ── */}
      <motion.div className="absolute inset-0" style={{ y: videoY, scale: 1.12 }}>
        <video
          className="w-full h-full object-cover"
          src="https://sxfzjcumsflqfyubrlyq.supabase.co/storage/v1/object/public/media/bg-hero.mp4"
          autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
        />
      </motion.div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(28,25,22,0.25) 0%, rgba(28,25,22,0.45) 30%, rgba(28,25,22,0.92) 100%)"
      }} />
      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay opacity-[0.055] mix-blend-overlay" />

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado/20 to-transparent" />

      {/* ── Live project badge ── */}
      <motion.div
        className="absolute top-28 right-6 lg:right-12"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex items-center gap-2.5 bg-tierra/70 backdrop-blur-sm border border-crema/10 px-4 py-2">
          <span className="w-1.5 h-1.5 rounded-full bg-dorado badge-pulse" />
          <span className="font-body text-crema/60 text-[10px] tracking-[0.25em] uppercase">3 proyectos activos</span>
        </div>
      </motion.div>

      {/* ── Main content ── */}
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
          <span className="eyebrow">Neuquén · Patagonia Argentina</span>
        </motion.div>

        {/* Title — each line clips up */}
        <h1
          className="font-display font-light leading-[1.0] max-w-5xl mb-10 overflow-hidden"
          style={{ fontSize: "clamp(3.8rem, 9vw, 8rem)", letterSpacing: "-0.03em" }}
        >
          {titleLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                className={`block ${line.cls}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.5 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-crema/45 text-[15px] lg:text-base leading-relaxed max-w-md mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          Proyectos inmobiliarios que crecen con la región más dinámica
          de Argentina. Donde el paisaje define el valor.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
        >
          <Link
            href="/proyectos"
            className="group inline-flex items-center justify-center gap-3 px-9 py-4 btn-shimmer text-tierra font-body text-[11px] font-semibold tracking-[0.15em] uppercase"
          >
            Ver Proyectos
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 border border-crema/15 text-crema/70 font-body text-[11px] font-medium tracking-[0.15em] uppercase hover:border-dorado hover:text-dorado transition-colors duration-300"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar a Estela
          </a>
        </motion.div>
      </motion.div>

      {/* ── Marquee ticker (bottom) ── */}
      <motion.div
        className="relative border-t border-crema/8 overflow-hidden h-11 bg-tierra/40 backdrop-blur-sm shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        {/* Scroll indicator — positioned outside the animating track */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="relative h-5 w-px overflow-hidden">
            <div className="absolute inset-0 bg-dorado/60" style={{ animation: "scrollDown 1.8s ease-in-out infinite" }} />
          </div>
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(28,25,22,0.4), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, rgba(28,25,22,0.4), transparent)" }} />

        {/* Animating track — no padding on this element */}
        <div className="flex items-center h-full marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-6 shrink-0">
              <span className="font-body text-crema/25 text-[9px] tracking-[0.4em] uppercase">{item}</span>
              <span className="text-dorado/30 text-[10px]">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
