"use client";

import { motion } from "framer-motion";
import { Landmark, KeyRound, TrendingUp, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── Tipos ───────────────────────────────────────────────────────────────── */

interface Servicio {
  num: string;
  icon: LucideIcon;
  titulo: string;
  descripcion: string;
  modelo: string; // modelo de negocio (badge)
  waText: string; // mensaje URL-encoded para WhatsApp
}

/* ── Data ────────────────────────────────────────────────────────────────── */

const WA_NUMBER = "5492994668428";

const servicios: Servicio[] = [
  {
    num: "01",
    icon: Landmark,
    titulo: "Compra y Venta de Inmuebles",
    descripcion:
      "Gestionamos la compra y venta de propiedades residenciales y comerciales en Río Negro y la Patagonia. Tasación, difusión, negociación y acompañamiento hasta la firma de escritura.",
    modelo: "Comisión sobre precio de venta",
    waText:
      "Hola%2C%20me%20interesa%20comprar%20o%20vender%20un%20inmueble%20con%20ALTUM%20SDI",
  },
  {
    num: "02",
    icon: KeyRound,
    titulo: "Administración de Alquileres",
    descripcion:
      "Administramos tu propiedad de forma integral: búsqueda de inquilinos, cobros, expensas, mantenimiento y rendición mensual. Tranquilidad total para el propietario.",
    modelo: "Honorario mensual sobre alquiler",
    waText:
      "Hola%2C%20me%20interesa%20la%20administraci%C3%B3n%20de%20alquiler%20con%20ALTUM%20SDI",
  },
  {
    num: "03",
    icon: TrendingUp,
    titulo: "Consultoría Estratégica",
    descripcion:
      "Análisis de mercado, valuación de activos y asesoramiento en decisiones de inversión inmobiliaria. Información precisa para decisiones inteligentes en la Patagonia.",
    modelo: "Tarifa fija por consulta",
    waText:
      "Hola%2C%20me%20interesa%20una%20consultor%C3%ADa%20estrat%C3%A9gica%20con%20ALTUM%20SDI",
  },
  {
    num: "04",
    icon: Scale,
    titulo: "Redacción y Revisión de Contratos",
    descripcion:
      "Redactamos y revisamos contratos de compraventa, locación y opciones de compra. Seguridad jurídica en cada operación, sin sorpresas.",
    modelo: "Tarifa fija por contrato",
    waText:
      "Hola%2C%20me%20interesa%20la%20revisi%C3%B3n%20de%20un%20contrato%20con%20ALTUM%20SDI",
  },
];

/* ── Variantes ───────────────────────────────────────────────────────────── */

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ── Componente tarjeta ──────────────────────────────────────────────────── */

function ServiceCard({ s, index }: { s: Servicio; index: number }) {
  const Icon = s.icon;
  const isEven = index % 2 === 0;
  const bg = isEven ? "#ffffff" : "#F5F3EF";
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${s.waText}`;

  return (
    <div
      className="
        group relative flex flex-col p-10 lg:p-12
        border-b border-r border-tierra/8
        min-h-[420px]
        transition-shadow duration-300
        hover:shadow-[inset_0_0_0_1px_rgba(196,149,85,0.2)]
      "
      style={{ background: bg }}
    >
      {/* Gold top accent — visible on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-dorado scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Header row: icon + number */}
      <div className="flex items-start justify-between mb-8">
        <div className="inline-flex p-3.5 bg-tierra/5 group-hover:bg-dorado/10 transition-colors duration-300">
          <Icon
            size={26}
            strokeWidth={1.25}
            className="text-tierra/50 group-hover:text-dorado transition-colors duration-300"
          />
        </div>
        <span
          className="font-display text-tierra/6 font-light select-none leading-none group-hover:text-dorado/10 transition-colors duration-500"
          style={{
            fontSize: "clamp(3rem, 5vw, 4.5rem)",
            letterSpacing: "-0.05em",
          }}
        >
          {s.num}
        </span>
      </div>

      {/* Content */}
      <h3
        className="font-display text-tierra font-light leading-tight mb-4 group-hover:text-[#1A2752] transition-colors duration-300"
        style={{
          fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
          letterSpacing: "-0.02em",
        }}
      >
        {s.titulo}
      </h3>

      <p className="font-body text-tierra/45 text-[14px] lg:text-[15px] leading-relaxed mb-8 flex-1">
        {s.descripcion}
      </p>

      {/* Footer: badge + CTA */}
      <div className="flex flex-col gap-4 mt-auto">
        {/* Business model badge */}
        <span className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.18em] uppercase text-dorado/70 border border-dorado/25 px-3 py-1.5 self-start">
          <span className="w-1 h-1 rounded-full bg-dorado/60 shrink-0" />
          {s.modelo}
        </span>

        {/* WhatsApp CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group/cta inline-flex items-center gap-2.5
            font-body text-[11px] tracking-[0.15em] uppercase font-medium
            text-tierra/50 hover:text-dorado
            transition-colors duration-200
            self-start
          "
        >
          <WaIcon />
          Consultar por WhatsApp
          <svg
            className="w-3 h-3 opacity-0 group-hover/cta:opacity-100 translate-x-0 group-hover/cta:translate-x-1 transition-all duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ── Componente principal ────────────────────────────────────────────────── */

export default function Servicios() {
  return (
    <>
      {/* ── Hero de sección ─────────────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "#1A2752" }}
      >
        {/* Grain */}
        <div className="absolute inset-0 grain-overlay opacity-[0.04] mix-blend-overlay pointer-events-none" />
        {/* Left gold line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              variants={fadeUp}
            >
              <motion.div
                className="h-px bg-dorado"
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
              <span className="eyebrow">Lo que hacemos</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display text-crema font-light leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                letterSpacing: "-0.03em",
              }}
              variants={fadeUp}
            >
              Nuestros{" "}
              <em className="not-italic italic text-dorado">servicios</em>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="font-body text-crema/40 text-[15px] leading-relaxed max-w-md"
              variants={fadeUp}
            >
              Cuatro líneas de trabajo para acompañarte en cada etapa de tu
              operación inmobiliaria en Río Negro y la Patagonia.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom fade to grid */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(245,243,239,0.15))",
          }}
        />
      </section>

      {/* ── Grid de servicios ────────────────────────────────────────────── */}
      <section
        className="border-t border-tierra/8"
        style={{ background: "#F5F3EF" }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {servicios.map((s, i) => (
            <motion.div key={s.num} variants={cardVariants}>
              <ServiceCard s={s} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA final ───────────────────────────────────────────────────── */}
      <motion.section
        className="py-20 lg:py-24"
        style={{ background: "#ffffff" }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-body text-tierra/35 text-[11px] tracking-[0.3em] uppercase mb-3">
              ¿No sabés por dónde empezar?
            </p>
            <h2
              className="font-display text-tierra font-light leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Hablemos de tu{" "}
              <em className="not-italic italic text-dorado">propiedad</em>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20los%20servicios%20de%20ALTUM%20SDI`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 btn-shimmer text-tierra font-body text-[11px] font-semibold tracking-[0.15em] uppercase"
            >
              <WaIcon />
              Consultar ahora
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-tierra/15 text-tierra/60 font-body text-[11px] tracking-[0.15em] uppercase hover:border-dorado hover:text-dorado transition-colors duration-300"
            >
              Ver formulario
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}

/* ── WA Icon ─────────────────────────────────────────────────────────────── */

function WaIcon() {
  return (
    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
