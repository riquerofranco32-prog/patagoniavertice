"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Manifiesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={ref}
      className="relative bg-crema py-24 lg:py-32 overflow-hidden"
    >
      {/* Faint horizontal rule top */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      <div className="relative max-w-3xl mx-auto px-8 lg:px-16 text-center">
        {/* Ornamento custom — línea oro (reemplaza quote marks genéricos) */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-10"
          style={{ y }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="h-px w-16 bg-dorado" />
          <div className="w-1.5 h-1.5 rotate-45 bg-dorado" />
          <div className="h-px w-16 bg-dorado" />
        </motion.div>

        <motion.blockquote
          className="type-quote text-tierra"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          El territorio más <span className="type-accent">generoso</span> de
          Argentina espera a quienes saben mirar más allá.
        </motion.blockquote>

        <motion.div
          className="flex items-center justify-center gap-5 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="h-px w-8 bg-dorado/40" />
          <span className="font-body text-tierra/30 text-[10px] tracking-[0.35em] uppercase">
            Altum Inmobiliaria · Río Negro
          </span>
          <div className="h-px w-8 bg-dorado/40" />
        </motion.div>
      </div>

      {/* Faint horizontal rule bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  );
}
