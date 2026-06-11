"use client";

import { motion } from "framer-motion";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

/**
 * Botón CTA con micro-interacciones (scale on hover/tap).
 * primary: oro sólido sobre navy · secondary: outline oro.
 */
export function CTAButton({
  href,
  children,
  variant = "primary",
  external = true,
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 px-8 py-4 font-inter font-semibold text-[11px] tracking-[0.15em] uppercase transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-gold-500 text-navy-900 hover:bg-gold-400 hover:shadow-lg"
      : "border border-gold-500/60 text-gold-500 hover:bg-gold-500/10 hover:border-gold-500";

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
