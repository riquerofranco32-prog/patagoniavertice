"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * TestimoniosReales — inspirado en 21st.dev (ruixenui/testimonials-carousel + smammar100/scroll-reel)
 * Infinite marquee en dos filas con velocidades opuestas.
 * Adaptado al sistema de diseño Altum (navy/dorado/crema).
 */

const testimonios = [
  {
    nombre: "Martín R.",
    ciudad: "Cipoletti",
    texto:
      "Vendimos nuestra casa en menos de 45 días. El equipo de Altum fue transparente desde el principio, sin sorpresas ni complicaciones. Los recomendaría sin dudar.",
    operacion: "Venta residencial",
  },
  {
    nombre: "Valeria S.",
    ciudad: "Catriel",
    texto:
      "Llevaban años sin poder alquilar el departamento. Con Altum tuvieron inquilinos en tres semanas y ahora se encargan de todo. Una tranquilidad enorme.",
    operacion: "Administración de alquiler",
  },
  {
    nombre: "Federico D.",
    ciudad: "General Roca",
    texto:
      "Quería invertir en Río Negro desde Buenos Aires y no sabía por dónde empezar. Altum me asesoró paso a paso, hicimos la operación completamente online.",
    operacion: "Inversión a distancia",
  },
  {
    nombre: "Laura M.",
    ciudad: "Neuquén",
    texto:
      "La consultoría estratégica nos ayudó a entender el mercado antes de comprar. Pagamos un precio justo y con total seguridad legal. Excelente experiencia.",
    operacion: "Consultoría de compra",
  },
  {
    nombre: "Diego P.",
    ciudad: "Viedma",
    texto:
      "Trato directo, sin intermediarios. Hablé siempre con quienes tomaban las decisiones. Eso marca la diferencia respecto a otras inmobiliarias.",
    operacion: "Compra de terreno",
  },
  {
    nombre: "Sofía A.",
    ciudad: "Cipolletti",
    texto:
      "El proceso de firma del contrato fue clarísimo. Sin letra chica. Se tomaron el tiempo de explicar cada cláusula. Muy profesionales.",
    operacion: "Redacción de contrato",
  },
  {
    nombre: "Rodrigo T.",
    ciudad: "Bariloche",
    texto:
      "Necesitaba vender rápido por una mudanza al exterior. Altum concretó todo en un mes. Precio justo, documentación impecable y acompañamiento hasta el final.",
    operacion: "Venta express",
  },
  {
    nombre: "Cecilia H.",
    ciudad: "Cipoletti",
    texto:
      "Ya hice dos operaciones con ellos. La primera fue una compra, la segunda la administración de alquiler. En ambas, el servicio fue impecable.",
    operacion: "Cliente recurrente",
  },
];

function TestimonioCard({
  t,
}: {
  t: (typeof testimonios)[number];
}) {
  return (
    <div
      className="relative shrink-0 w-80 lg:w-96 p-6 lg:p-8 border border-crema/[0.08] bg-navy-800 mx-3"
      style={{ background: "rgba(15,26,62,0.6)" }}
    >
      {/* Quote mark */}
      <span
        className="absolute top-4 right-6 font-display text-dorado/10 text-7xl leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-1 mb-5" aria-label="5 estrellas">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#C9A84C" aria-hidden="true">
            <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.1L6 7.95l-2.78 1.61.53-3.1L1.5 4.27l3.11-.45L6 1z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="font-body text-[14px] text-crema/55 leading-relaxed mb-6 relative z-10">
        &ldquo;{t.texto}&rdquo;
      </p>

      {/* Footer */}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-body text-crema text-[13px] font-medium">{t.nombre}</p>
          <p className="font-body text-crema/30 text-[11px] tracking-[0.1em] uppercase">
            {t.ciudad}
          </p>
        </div>
        <span
          className="font-body text-dorado/40 text-[10px] tracking-[0.15em] uppercase text-right max-w-[100px]"
        >
          {t.operacion}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 40,
}: {
  items: (typeof testimonios)[number][];
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items];
  const fromX = direction === "left" ? "0%" : "-50%";
  const toX = direction === "left" ? "-50%" : "0%";

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: [fromX, toX] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        style={{ width: "max-content" }}
      >
        {doubled.map((t, i) => (
          <TestimonioCard key={`${t.nombre}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimoniosReales() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <section className="py-24 lg:py-32 bg-navy-900" aria-labelledby="testimonios-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-dorado" />
            <span className="eyebrow">Lo que dicen nuestros clientes</span>
          </div>
          <h2 id="testimonios-heading" className="font-display font-medium text-crema mb-12"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}>
            Historias de <em className="not-italic italic text-dorado">confianza</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonios.slice(0, 3).map((t) => (
              <TestimonioCard key={t.nombre} t={t} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: "#080E1A" }}
      aria-labelledby="testimonios-heading"
      id="testimonios"
    >
      {/* Gold top accent */}
      <div
        className="h-px mb-16 lg:mb-20"
        style={{
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)",
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-14 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-dorado" />
            <span className="eyebrow">Lo que dicen nuestros clientes</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              id="testimonios-heading"
              className="font-display font-medium text-crema leading-[1.0]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Historias de{" "}
              <em className="not-italic italic text-dorado">confianza</em>
            </h2>
            <p className="font-body text-crema/30 text-[14px] leading-relaxed max-w-xs lg:text-right">
              Clientes que eligieron Altum para las decisiones inmobiliarias más
              importantes de su vida.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        <MarqueeRow items={testimonios} direction="left" speed={50} />
        <MarqueeRow
          items={[...testimonios].reverse()}
          direction="right"
          speed={55}
        />
      </div>

      {/* Gold bottom accent */}
      <div
        className="h-px mt-16 lg:mt-20"
        style={{
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)",
        }}
      />
    </section>
  );
}
