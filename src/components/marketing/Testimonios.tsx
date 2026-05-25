"use client";

import { motion } from "framer-motion";

const testimonios = [
  {
    quote:
      "Invertimos en uno de sus proyectos y fue la mejor decisión que tomamos. El proceso fue transparente de principio a fin, con comunicación constante durante toda la obra.",
    autor: "Martín R.",
    rol: "Inversor — Neuquén Capital",
    iniciales: "MR",
  },
  {
    quote:
      "La atención personalizada y el seguimiento de obra superaron todas nuestras expectativas. Hoy vivimos en nuestro departamento soñado con vista al Limay.",
    autor: "Lucía y Diego F.",
    rol: "Propietarios — Neuquén",
    iniciales: "LF",
  },
  {
    quote:
      "Como inversor desde Buenos Aires necesitaba confianza y respaldo local. Patagonia Vértice me dio exactamente eso — y los números hablan solos.",
    autor: "Carolina M.",
    rol: "Inversora — Buenos Aires",
    iniciales: "CM",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-dorado" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonios() {
  return (
    <section className="bg-humo py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-px w-10 bg-dorado" />
              <span className="eyebrow">Lo que dicen nuestros clientes</span>
            </motion.div>

            <motion.h2
              className="font-display text-tierra font-light leading-[1.0]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Confianza que se{" "}
              <em className="not-italic italic text-dorado">construye</em>
            </motion.h2>
          </div>

          <motion.p
            className="font-body text-tierra/40 text-[15px] leading-relaxed max-w-xs lg:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Más de 200 familias ya eligieron invertir con nosotros en la Patagonia.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.autor}
              className="relative bg-crema border border-tierra/6 p-8 lg:p-10 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Decorative quote mark */}
              <div
                className="absolute top-4 right-6 font-display text-tierra/5 font-light leading-none select-none pointer-events-none group-hover:text-dorado/8 transition-colors duration-700"
                style={{ fontSize: "6rem", lineHeight: 1 }}
                aria-hidden="true"
              >
                "
              </div>

              {/* Stars */}
              <Stars />

              {/* Quote */}
              <blockquote className="font-body text-tierra/60 text-[15px] leading-relaxed my-6 relative">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-tierra/8">
                <div className="w-9 h-9 rounded-full bg-dorado/15 flex items-center justify-center shrink-0">
                  <span className="font-body text-dorado text-[10px] tracking-wider font-semibold">
                    {t.iniciales}
                  </span>
                </div>
                <div>
                  <p className="font-body text-tierra text-sm font-medium leading-tight">{t.autor}</p>
                  <p className="font-body text-tierra/35 text-[11px] tracking-[0.1em] uppercase mt-0.5">{t.rol}</p>
                </div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-dorado"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
