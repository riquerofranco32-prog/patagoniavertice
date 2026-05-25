"use client";

import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const titleLines = [
  { words: ["La Patagonia"], style: "text-crema/90" },
  { words: ["como"], style: "text-crema/50" },
  { words: ["activo."], style: "italic text-dorado" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end overflow-hidden">

      {/* Video — parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: videoY, scale: 1.1 }}
      >
        <video
          className="w-full h-full object-cover"
          src="https://sxfzjcumsflqfyubrlyq.supabase.co/storage/v1/object/public/media/bg-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
        />
      </motion.div>

      {/* Overlay — vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(28,25,22,0.30) 0%, rgba(28,25,22,0.50) 35%, rgba(28,25,22,0.88) 100%)",
        }}
      />

      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado/25 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pb-28 pt-40"
        style={{ y: contentY, opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            className="bg-dorado"
            style={{ height: 1 }}
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <span className="eyebrow">Neuquén · Patagonia Argentina</span>
        </motion.div>

        {/* Title — lines staggered */}
        <h1 className="font-display font-light leading-[1.0] max-w-4xl mb-10 overflow-hidden"
          style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", letterSpacing: "-0.03em" }}>
          {titleLines.map((line, li) => (
            <motion.span
              key={li}
              className={`block ${line.style}`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5 + li * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {line.words.join(" ")}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-crema/50 text-base lg:text-lg leading-relaxed max-w-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
        >
          Proyectos inmobiliarios que crecen con la región más dinámica
          de Argentina. Donde el paisaje define el valor.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
        >
          <Link
            href="/proyectos"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 btn-shimmer text-tierra font-body text-[11px] font-medium tracking-[0.15em] uppercase"
          >
            Ver Proyectos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 border border-crema/20 text-crema font-body text-[11px] font-medium tracking-[0.15em] uppercase hover:border-dorado hover:text-dorado transition-colors duration-300"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar a Estela
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="eyebrow text-crema/20 text-[9px]">Scroll</span>
        <div className="relative h-12 w-px overflow-hidden">
          <div className="absolute inset-0 bg-dorado/50" style={{ animation: "scrollDown 1.8s ease-in-out infinite" }} />
        </div>
      </motion.div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  );
}
