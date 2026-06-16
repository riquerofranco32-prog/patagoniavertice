"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * FAQ Section — inspirado en 21st.dev (ruixenui/faqsection + ui-layouts/multi-accordion)
 * Adaptado al sistema de diseño Altum: navy/dorado/crema
 * Incluye FAQPage JSON-LD embebido via useEffect para rich snippets
 */

const faqs = [
  {
    pregunta: "¿Cuáles son las zonas donde operan?",
    respuesta:
      "Trabajamos principalmente en Río Negro: Cipoletti, Catriel, General Roca, Viedma y localidades intermedias. También asesoramos operaciones en Neuquén capital y zonas limítrofes de la Patagonia. Si tenés una propiedad o interés fuera de estas áreas, consultanos de todas formas — evaluamos cada caso.",
  },
  {
    pregunta: "¿Cuánto cuesta vender una propiedad con Altum?",
    respuesta:
      "La comisión de venta es un porcentaje estándar sobre el precio de cierre, acordado antes de iniciar cualquier operación. No hay costos ocultos ni cargos previos. Solo cobramos si concretamos la venta. Contactanos para recibir una propuesta detallada según tu propiedad.",
  },
  {
    pregunta: "¿Qué incluye el servicio de administración de alquileres?",
    respuesta:
      "Gestionamos todo el ciclo: búsqueda y selección de inquilinos, firma y seguimiento del contrato, cobro mensual del alquiler, atención de reclamos y coordinación de mantenimiento. Vos recibís el dinero y nosotros manejamos el operativo.",
  },
  {
    pregunta: "¿Puedo comprar una propiedad si estoy en otro país o ciudad?",
    respuesta:
      "Sí, trabajamos con compradores no residentes. Coordinamos visitas virtuales, gestionamos poderes notariales si es necesario y te acompañamos en cada paso remoto. Varios de nuestros clientes han cerrado operaciones desde Buenos Aires, Europa y otros países.",
  },
  {
    pregunta: "¿Cómo funciona la valuación de una propiedad?",
    respuesta:
      "Realizamos un análisis comparativo de mercado (CMA) basado en propiedades similares vendidas recientemente en la zona, estado del inmueble, metraje y características diferenciales. La valuación es gratuita para propietarios que decidan trabajar con nosotros.",
  },
  {
    pregunta: "¿Cuánto tiempo tarda en promedio cerrar una venta?",
    respuesta:
      "El tiempo promedio de cierre en Río Negro y la Patagonia varía entre 45 y 90 días desde la firma de la seña, según complejidad documental. En propiedades con documentación en orden y comprador pre-calificado, hemos cerrado en menos de 30 días.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-crema/[0.08] last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-6 lg:py-7 text-left group"
        aria-expanded={isOpen}
      >
        {/* Número */}
        <span
          className="font-body text-[10px] text-dorado/40 tracking-[0.2em] uppercase shrink-0 mt-1 w-6"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Pregunta */}
        <span
          className="flex-1 font-display font-light text-crema leading-snug group-hover:text-dorado transition-colors duration-300"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", letterSpacing: "0.01em" }}
        >
          {faq.pregunta}
        </span>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 mt-1 w-5 h-5 flex items-center justify-center text-dorado/50 group-hover:text-dorado transition-colors duration-300"
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pl-12 pb-7 font-body text-[15px] text-crema/45 leading-relaxed max-w-2xl">
              {faq.respuesta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden"
      aria-labelledby="faq-heading"
      id="faq"
    >
      {/* Subtle grain */}
      <div className="absolute inset-0 grain-overlay opacity-[0.03] pointer-events-none" />

      {/* Decorative large text */}
      <div
        className="absolute right-0 bottom-0 font-display text-crema/[0.02] font-light leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(6rem, 20vw, 16rem)", letterSpacing: "-0.06em" }}
        aria-hidden="true"
      >
        FAQ
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Two-column layout — header left, accordion right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-dorado" />
              <span className="eyebrow">Preguntas frecuentes</span>
            </div>

            <h2
              id="faq-heading"
              className="font-display font-light text-crema leading-[1.0] mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Todo lo que{" "}
              <em className="not-italic italic text-dorado">necesitás saber</em>
            </h2>

            <p className="font-body text-crema/35 text-[15px] leading-relaxed mb-10">
              Respondemos las dudas más comunes sobre compra, venta, alquileres y
              nuestros servicios en Río Negro y la Patagonia.
            </p>

            <a
              href="https://wa.me/5492996095742?text=Hola%2C%20tengo%20una%20consulta%20para%20Altum%20Inmobiliaria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.18em] uppercase text-dorado/60 hover:text-dorado transition-colors duration-200"
            >
              ¿Otra pregunta?
              <span className="text-base">→</span>
            </a>
          </motion.div>

          {/* Right: accordion */}
          <div className="divide-y-0">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.pregunta}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
