"use client";

import { motion } from "framer-motion";
import { Building2, Wrench, TrendingUp, ClipboardList } from "lucide-react";

const servicios = [
  {
    num: "01",
    icon: Building2,
    titulo: "Desarrollo Inmobiliario",
    descripcion:
      "Proyectamos y ejecutamos desarrollos residenciales y comerciales que generan valor real para inversores y usuarios finales en la Patagonia.",
  },
  {
    num: "02",
    icon: Wrench,
    titulo: "Construcción Llave en Mano",
    descripcion:
      "Desde el diseño hasta la entrega, gestionamos cada etapa de la obra con estándares de calidad y trazabilidad total del proceso.",
  },
  {
    num: "03",
    icon: TrendingUp,
    titulo: "Inversión y Financiamiento",
    descripcion:
      "Estructuras de inversión accesibles con planes adaptados al mercado neuquino. Rentabilidad real en una región en expansión.",
  },
  {
    num: "04",
    icon: ClipboardList,
    titulo: "Gestión de Obras",
    descripcion:
      "Administración y dirección técnica de obras propias y de terceros, con reportes de avance y transparencia en cada etapa.",
  },
];

export default function Servicios() {
  return (
    <section className="bg-crema overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="py-20 lg:py-28">
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-10 bg-dorado" />
            <span className="eyebrow">Lo que hacemos</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h2
              className="font-display text-tierra font-light leading-[1.0]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Nuestros{" "}
              <em className="not-italic italic text-dorado">servicios</em>
            </motion.h2>

            <motion.p
              className="font-body text-tierra/40 text-[15px] leading-relaxed max-w-xs lg:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Cada servicio está diseñado para acompañarte desde la idea hasta la entrega.
            </motion.p>
          </div>
        </div>

        {/* Numbered rows */}
        <div className="border-t border-tierra/8">
          {servicios.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                className="group border-b border-tierra/8 grid grid-cols-[auto_1fr_auto] lg:grid-cols-[120px_1fr_200px_auto] items-center gap-6 lg:gap-10 py-8 lg:py-10 cursor-default"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Number */}
                <span
                  className="font-display text-tierra/10 font-light leading-none select-none group-hover:text-dorado/20 transition-colors duration-500"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}
                >
                  {s.num}
                </span>

                {/* Title */}
                <h3
                  className="font-display text-tierra font-light leading-tight group-hover:text-dorado transition-colors duration-500"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
                >
                  {s.titulo}
                </h3>

                {/* Description — hidden on mobile, visible lg+ */}
                <p className="hidden lg:block font-body text-tierra/40 text-sm leading-relaxed">
                  {s.descripcion}
                </p>

                {/* Icon */}
                <div className="text-tierra/20 group-hover:text-dorado transition-colors duration-500 shrink-0">
                  <Icon size={22} strokeWidth={1.25} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile descriptions */}
        <div className="lg:hidden pt-8 pb-16 space-y-6">
          {servicios.map((s) => (
            <p key={s.num} className="font-body text-tierra/45 text-sm leading-relaxed border-l-2 border-dorado/30 pl-4">
              <span className="text-dorado font-medium">{s.num} —</span> {s.descripcion}
            </p>
          ))}
        </div>

      </div>

      <div className="mx-6 lg:mx-12 pb-20 lg:pb-28 hidden lg:block" />
      <div className="mx-6 lg:mx-12 sep-gold h-px" />
    </section>
  );
}
