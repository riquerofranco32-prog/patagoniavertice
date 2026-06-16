"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  { text: "El", italic: false },
  { text: "territorio", italic: false },
  { text: "más", italic: false },
  { text: "generoso", italic: true },
  { text: "de", italic: false },
  { text: "Argentina", italic: false },
  { text: "espera", italic: false },
  { text: "a", italic: false },
  { text: "quienes", italic: false },
  { text: "saben", italic: false },
  { text: "mirar", italic: false },
  { text: "más", italic: false },
  { text: "allá.", italic: false },
];

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
      className="relative bg-crema py-28 lg:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      <div className="relative max-w-3xl mx-auto px-8 lg:px-16 text-center">
        {/* Ornament */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
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

        {/* Word-by-word reveal */}
        <blockquote
          className="type-quote text-tierra leading-tight"
          aria-label="El territorio más generoso de Argentina espera a quienes saben mirar más allá."
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block mr-[0.28em] ${
                word.italic ? "not-italic italic text-dorado" : ""
              }`}
            >
              {word.text}
            </motion.span>
          ))}
        </blockquote>

        <motion.div
          className="flex items-center justify-center gap-5 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <div className="h-px w-8 bg-dorado/40" />
          <span className="font-body text-tierra/30 text-[10px] tracking-[0.35em] uppercase">
            Altum Inmobiliaria · Río Negro
          </span>
          <div className="h-px w-8 bg-dorado/40" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  );
}
