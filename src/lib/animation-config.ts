/**
 * Configuración centralizada de timings y easing para Framer Motion.
 * Usar en componentes nuevos: <motion.div {...animConfig.fadeInUp}>
 */
export const animConfig = {
  // Durations (segundos)
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,

  // Easing curves (cubic-bezier)
  easeInOut: [0.4, 0.0, 0.2, 1] as const,
  easeOut: [0.0, 0.0, 0.2, 1] as const,
  easeIn: [0.4, 0.0, 1, 1] as const,
  luxury: [0.16, 1, 0.3, 1] as const, // usado en headers/reveals del sitio

  // Presets de transición
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  staggerContainer: {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    viewport: { once: true },
  },
} as const;
