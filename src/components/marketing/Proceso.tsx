"use client";

import { motion } from "framer-motion";

const pasos = [
  {
    num: "01",
    titulo: "Consultá",
    descripcion:
      "Nos contás tu idea, tu presupuesto y tus objetivos. Sin compromiso. Analizamos juntos las opciones que mejor se adaptan a vos.",
    detalle: "Reunión inicial · Análisis de perfil · Opciones a medida",
  },
  {
    num: "02",
    titulo: "Elegí",
    descripcion:
      "Te presentamos los proyectos disponibles con toda la información: planos, ubicación, cronograma y condiciones de inversión.",
    detalle: "Presentación de proyecto · Recorrido de obra · Propuesta económica",
  },
  {
    num: "03",
    titulo: "Invertí",
    descripcion:
      "Firmamos, estructuramos tu inversión y comenzamos. Seguís el avance de tu proyecto con reportes periódicos y comunicación directa.",
    detalle: "Firma de contrato · Plan de pagos · Seguimiento de obra",
  },
];

export default function Proceso() {
  return (
    <section className="bg-tierra relative overflow-hidden py-28 lg:py-36">
      {/* Grain */}
      <div className="absolute inset-0 grain-overlay opacity-[0.04] pointer-events-none" />

      {/* Large background number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-crema/[0.025] font-light leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(12rem, 30vw, 22rem)", letterSpacing: "-0.06em" }}
        aria-hidden="true"
      >
        PV
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 lg:mb-28">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-px w-10 bg-dorado/50" />
              <span className="eyebrow text-crema/30">Cómo trabajamos</span>
            </motion.div>

            <motion.h2
              className="font-display text-crema font-light leading-[1.0]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Tu inversión,{" "}
              <em className="not-italic italic text-dorado">paso a paso</em>
            </motion.h2>
          </div>

          <motion.p
            className="font-body text-crema/30 text-[15px] leading-relaxed max-w-xs lg:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Un proceso claro y transparente, diseñado para que tomes decisiones con confianza.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ background: "rgba(245,239,230,0.05)" }}>
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.num}
              className="relative bg-tierra p-10 lg:p-14 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top line that expands on view */}
              <motion.div
                className="absolute top-0 left-0 h-px bg-dorado"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Number */}
              <div
                className="font-display text-crema/8 font-light leading-none mb-8 select-none group-hover:text-dorado/15 transition-colors duration-700"
                style={{ fontSize: "clamp(4rem, 8vw, 6rem)", letterSpacing: "-0.05em" }}
              >
                {paso.num}
              </div>

              {/* Title */}
              <h3
                className="font-display text-crema font-light leading-tight mb-5"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}
              >
                {paso.titulo}
              </h3>

              {/* Description */}
              <p className="font-body text-crema/40 text-[15px] leading-relaxed mb-8">
                {paso.descripcion}
              </p>

              {/* Detail tags */}
              <div className="space-y-1.5">
                {paso.detalle.split(" · ").map((d) => (
                  <div key={d} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-dorado/40 shrink-0" />
                    <span className="font-body text-crema/25 text-[11px] tracking-[0.12em] uppercase">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
