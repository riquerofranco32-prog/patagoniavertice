"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  Shield,
  Handshake,
  Users,
  Heart,
  CheckCircle,
} from "lucide-react";

const diferenciadores = [
  {
    icon: Mountain,
    titulo: "Empresa 100% patagónica",
    descripcion:
      "Nacimos y crecimos en la Patagonia. Conocemos el territorio, el mercado y los barrios mejor que nadie. No somos una inversora de afuera.",
  },
  {
    icon: Shield,
    titulo: "Transparencia total",
    descripcion:
      "Contratos claros, condiciones garantizadas y comunicación constante durante toda la operación. Sin letra chica.",
  },
  {
    icon: Handshake,
    titulo: "Trato directo",
    descripcion:
      "Negociás con quienes toman las decisiones. Sin intermediarios, sin burocracia. Condiciones adaptadas a tu situación.",
  },
  {
    icon: Heart,
    titulo: "Calidad en cada detalle",
    descripcion:
      "Atención personalizada y rigor profesional en cada operación en Río Negro y la Patagonia. Nuestro trabajo habla por nosotros.",
  },
  {
    icon: Users,
    titulo: "Acompañamiento real",
    descripcion:
      "Desde la primera consulta hasta la escritura. Nuestro equipo está disponible para vos, no una central de atención.",
  },
  {
    icon: CheckCircle,
    titulo: "Postventa activa",
    descripcion:
      "El vínculo no termina con la entrega. Seguimos acompañándote con gestión de garantías y lo que necesites.",
  },
];

export default function PorQueElegirnos() {
  return (
    <section className="bg-crema py-28 lg:py-36 overflow-hidden">
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
              <span className="eyebrow">Por qué elegirnos</span>
            </motion.div>

            <motion.h2
              className="font-display text-tierra font-light leading-[1.0]"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Lo que nos hace{" "}
              <em className="not-italic italic text-dorado">diferentes</em>
            </motion.h2>
          </div>

          <motion.p
            className="font-body text-tierra/40 text-[15px] leading-relaxed max-w-xs lg:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            No somos la única inmobiliaria en Río Negro y la Patagonia. Pero sí
            la que más te acompaña.
          </motion.p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(28,25,22,0.07)" }}
        >
          {diferenciadores.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.titulo}
                className="bg-crema p-8 lg:p-10 group relative overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Hover background — soft gold tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                  style={{ background: "rgba(201,168,76,0.08)" }}
                />

                <div className="relative">
                  <div className="text-dorado mb-6 group-hover:rotate-[360deg] transition-transform duration-[600ms] ease-in-out">
                    <Icon size={24} strokeWidth={1.25} />
                  </div>

                  <h3 className="font-display text-tierra text-xl font-light leading-tight mb-3">
                    {d.titulo}
                  </h3>

                  <p className="font-body text-tierra/50 text-sm leading-relaxed">
                    {d.descripcion}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
