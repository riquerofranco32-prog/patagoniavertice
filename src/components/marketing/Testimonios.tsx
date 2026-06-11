"use client";

import { motion } from "framer-motion";

const diferenciadores = [
  {
    titulo: "Empresa 100% patagónica",
    descripcion:
      "Nacimos y crecimos en la Patagonia. Conocemos el territorio, el mercado y los barrios mejor que nadie. No somos una inversora de afuera.",
  },
  {
    titulo: "Transparencia total",
    descripcion:
      "Contratos claros, condiciones garantizadas y comunicación constante durante toda la operación. Sin letra chica.",
  },
  {
    titulo: "Trato directo",
    descripcion:
      "Negociás con quienes toman las decisiones. Sin intermediarios, sin burocracia. Condiciones adaptadas a tu situación.",
  },
  {
    titulo: "Calidad en cada detalle",
    descripcion:
      "Atención personalizada y rigor profesional en cada operación en Río Negro y la Patagonia. Nuestro trabajo habla por nosotros.",
  },
  {
    titulo: "Acompañamiento real",
    descripcion:
      "Desde la primera consulta hasta la escritura. Nuestro equipo está disponible para vos, no una central de atención.",
  },
  {
    titulo: "Postventa activa",
    descripcion:
      "El vínculo no termina con la entrega. Seguimos acompañándote con gestión de garantías y lo que necesites.",
  },
];

export default function PorQueElegirnos() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900">
      <div className="w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-dorado" />
              <span className="eyebrow">Por qué elegirnos</span>
            </div>
            <h2 className="font-cormorant font-bold text-crema mb-4 text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[0.01em]">
              Lo que nos hace <em className="text-gold-500">diferentes</em>
            </h2>
            <p className="text-gray-400 text-base font-inter max-w-2xl">
              No somos la única inmobiliaria en Río Negro y la Patagonia. Pero
              sí la que más te acompaña.
            </p>
          </motion.div>

          {/* Grid 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {diferenciadores.map((d, i) => (
              <motion.div
                key={d.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-3 border-l-2 border-gold-500/30 pl-6 hover:border-gold-500 transition-colors duration-300"
              >
                <h3 className="text-2xl font-cormorant font-bold text-white">
                  {d.titulo}
                </h3>
                <p className="text-gray-400 text-base font-inter leading-relaxed">
                  {d.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
