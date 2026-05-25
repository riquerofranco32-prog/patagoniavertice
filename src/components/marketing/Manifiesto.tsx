"use client";

import { motion, useScroll, useTransform, useRef } from "framer-motion";

export default function Manifiesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section ref={ref} className="relative bg-crema py-24 lg:py-32 overflow-hidden">
      {/* Faint horizontal rule top */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      {/* Large background quotation mark */}
      <motion.div
        className="absolute -top-6 left-6 lg:left-16 font-display text-tierra/[0.04] font-light leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(10rem, 25vw, 20rem)", y }}
        aria-hidden="true"
      >
        "
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-8 lg:px-16 text-center">
        <motion.blockquote
          className="font-display text-tierra font-light italic leading-[1.15]"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.025em" }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          El territorio más{" "}
          <span className="not-italic text-dorado">generoso</span>{" "}
          de Argentina espera a quienes saben mirar más allá.
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
            Patagonia Vértice · Neuquén
          </span>
          <div className="h-px w-8 bg-dorado/40" />
        </motion.div>
      </div>

      {/* Faint horizontal rule bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  );
}
