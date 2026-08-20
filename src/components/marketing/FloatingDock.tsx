"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * FloatingDock — dock de contacto flotante inspirado en macOS dock (21st.dev/s/dock)
 * Muestra íconos que se agrandan al acercarse el cursor (efecto magnético)
 * Expandible desde un botón principal
 */

const ITEMS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/5492996095742?text=Hola%2C%20quiero%20consultar%20con%20Altum%20Inmobiliaria",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "#25D366",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:altumsci@gmail.com?subject=Consulta%20Altum%20Inmobiliaria",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#C9A84C",
    external: false,
  },
  {
    id: "phone",
    label: "Llamar",
    href: "tel:+5492996095742",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: "#F5EFE6",
    external: false,
  },
  {
    id: "propiedades",
    label: "Propiedades",
    href: "/proyectos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "#F5EFE6",
    external: false,
  },
];

function DockItem({
  item,
  mouseX,
  dockRef,
}: {
  item: (typeof ITEMS)[number];
  mouseX: number | null;
  dockRef: React.RefObject<HTMLDivElement | null>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (mouseX === null || !ref.current || !dockRef.current) {
      setScale(1);
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const distance = Math.abs(mouseX - center);
    const maxDist = 80;
    const newScale = distance < maxDist ? 1 + (1 - distance / maxDist) * 0.55 : 1;
    setScale(newScale);
  }, [mouseX, dockRef]);

  return (
    <a
      ref={ref}
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      aria-label={item.label}
      className="relative flex items-center justify-center rounded-xl transition-colors duration-150 group"
      style={{
        width: 44,
        height: 44,
        transform: `scale(${scale})`,
        transformOrigin: "bottom center",
        transition: "transform 0.15s cubic-bezier(0.34,1.56,0.64,1)",
        background: "rgba(15,26,62,0.85)",
        border: "1px solid rgba(201,168,76,0.2)",
        color: item.color,
        backdropFilter: "blur(12px)",
      }}
    >
      {item.icon}
      {/* Tooltip */}
      <span
        className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-[10px] font-body tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
        style={{
          background: "rgba(15,26,62,0.95)",
          border: "1px solid rgba(201,168,76,0.25)",
          color: "rgba(245,239,230,0.8)",
        }}
      >
        {item.label}
      </span>
    </a>
  );
}

export default function FloatingDock() {
  const [open, setOpen] = useState(false);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => setMouseX(e.clientX);
  const handleMouseLeave = () => setMouseX(null);

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
      style={{ pointerEvents: "none" }}
    >
      {/* Dock items */}
      <motion.div
        ref={dockRef}
        className="flex items-end gap-2 px-3 py-2 rounded-2xl"
        style={{
          background: "rgba(8,14,26,0.7)",
          border: "1px solid rgba(201,168,76,0.15)",
          backdropFilter: "blur(16px)",
          pointerEvents: open ? "auto" : "none",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.08)",
        }}
        initial={false}
        animate={
          prefersReduced
            ? { opacity: open ? 1 : 0 }
            : {
                opacity: open ? 1 : 0,
                y: open ? 0 : 12,
                scale: open ? 1 : 0.92,
              }
        }
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {ITEMS.map((item) => (
          <DockItem key={item.id} item={item} mouseX={mouseX} dockRef={dockRef} />
        ))}
      </motion.div>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Cerrar contacto" : "Contactar Altum"}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full font-body text-[10px] tracking-[0.18em] uppercase font-semibold"
        style={{
          pointerEvents: "auto",
          background: open ? "rgba(201,168,76,0.15)" : "#C9A84C",
          border: "1px solid rgba(201,168,76,0.4)",
          color: open ? "#C9A84C" : "#0A1228",
          backdropFilter: "blur(12px)",
          boxShadow: open ? "none" : "0 4px 20px rgba(201,168,76,0.25)",
          transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "inline-flex" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.span>
        {open ? "Cerrar" : "Contactar"}
      </motion.button>
    </div>
  );
}
