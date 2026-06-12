"use client";

import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

const WA = WHATSAPP_NUMBER;

const servicios = [
  {
    num: "01",
    titulo: "Compra y Venta de Inmuebles",
    descripcion:
      "Gestionamos la compra y venta de propiedades residenciales y comerciales en Río Negro y la Patagonia.",
    waText: "Hola%2C%20me%20interesa%20comprar%20o%20vender%20un%20inmueble",
  },
  {
    num: "02",
    titulo: "Administración de Alquileres",
    descripcion:
      "Administramos tu propiedad de forma integral: búsqueda de inquilinos, cobros y mantenimiento.",
    waText:
      "Hola%2C%20me%20interesa%20la%20administraci%C3%B3n%20de%20alquiler",
  },
  {
    num: "03",
    titulo: "Consultoría Estratégica",
    descripcion:
      "Análisis de mercado, valuación de activos y asesoramiento en decisiones de inversión.",
    waText:
      "Hola%2C%20me%20interesa%20una%20consultor%C3%ADa%20estrat%C3%A9gica",
  },
  {
    num: "04",
    titulo: "Redacción y Revisión de Contratos",
    descripcion:
      "Redactamos y revisamos contratos de compraventa, locación y opciones de compra.",
    waText: "Hola%2C%20me%20interesa%20la%20revisi%C3%B3n%20de%20un%20contrato",
  },
];

export default function Servicios() {
  return (
    <section className="py-16 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-42px font-cormorant font-bold mb-2 text-crema">
            Nuestros{" "}
            <em className="not-italic italic text-gold-500">servicios</em>
          </h2>
          <p className="text-gray-400 text-14px font-inter max-w-2xl">
            Cuatro líneas de trabajo para acompañarte en cada etapa de tu
            operación inmobiliaria
          </p>
        </motion.div>

        {/* Grid 2×2 — clipPath wipe entry + hover background reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {servicios.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
              transition={{
                duration: 0.65,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-40px" }}
              className="group relative overflow-hidden p-6 bg-navy-800 rounded-lg border-l-2 border-gold-500 cursor-pointer"
            >
              {/* Hover background reveal — wipe from bottom */}
              <motion.div
                className="absolute inset-0 bg-navy-700 rounded-lg"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileHover={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ zIndex: 0 }}
              />

              {/* Content — sits above the reveal layer */}
              <div className="relative z-10">
                <motion.div
                  className="text-xs text-gold-500 font-inter mb-2 tracking-widest"
                  whileHover={{ opacity: [null, 0.5, 1] }}
                >
                  {s.num}
                </motion.div>
                <h3 className="text-18px font-cormorant font-bold mb-3 text-white">
                  {s.titulo}
                </h3>
                <p className="text-gray-400 text-13px leading-relaxed mb-4 font-inter group-hover:text-gray-300 transition-colors duration-300">
                  {s.descripcion}
                </p>
                <motion.a
                  href={`https://wa.me/${WA}?text=${s.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold-500 text-12px font-inter font-semibold hover:text-gold-400 transition"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Consultar por WhatsApp
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video 9:16 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="pt-16 border-t border-gold-500/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-32px font-cormorant font-bold mb-2 text-crema">
              Conocé nuestro proceso
            </h3>
            <p className="text-gray-400 text-14px font-inter">
              Un recorrido visual por cómo trabajamos
            </p>
          </div>

          <div className="flex justify-center">
            <VideoPlayer src="/videos/ALTUMSCI.mp4" title="Servicios Altum" />
          </div>

          <div className="text-center mt-8">
            <motion.a
              href={`https://wa.me/${WA}?text=Vi%20vuestro%20video%20y%20quiero%20consultar`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-6 py-2 bg-gold-500 text-navy-900 rounded font-inter font-semibold text-13px hover:bg-gold-400 transition-all"
            >
              Consultar ahora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
