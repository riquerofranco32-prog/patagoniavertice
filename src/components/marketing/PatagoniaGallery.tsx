"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1751401424691-0b69bce61776?q=80&w=1171&auto=format&fit=crop",
    alt: "Patagonia — paisaje natural",
    caption: "Neuquén, Patagonia",
  },
  {
    url: "https://images.unsplash.com/photo-1617708638404-8ab2b9770193?w=900&auto=format&fit=crop&q=80",
    alt: "Neuquén — vista panorámica",
    caption: "Río Negro · Neuquén",
  },
  {
    url: "https://images.unsplash.com/photo-1668911494509-14baf3b42fda?q=80&w=1170&auto=format&fit=crop",
    alt: "Patagonia Argentina",
    caption: "Patagonia Argentina",
  },
];

export default function PatagoniaGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  const ys = [y1, y2, y3];

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 grid-rows-2 gap-2 h-[500px] md:h-[580px]"
    >
      {/* Imagen 1 — ocupa las 2 filas de la izquierda */}
      <motion.div
        style={{ y: ys[0] }}
        className="relative row-span-2 overflow-hidden group"
      >
        <img
          src={IMAGES[0].url}
          alt={IMAGES[0].alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute bottom-3 left-3 text-xs text-white/80 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {IMAGES[0].caption}
        </span>
      </motion.div>

      {/* Imagen 2 — fila superior derecha */}
      <motion.div
        style={{ y: ys[1] }}
        className="relative overflow-hidden group"
      >
        <img
          src={IMAGES[1].url}
          alt={IMAGES[1].alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute bottom-3 left-3 text-xs text-white/80 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {IMAGES[1].caption}
        </span>
      </motion.div>

      {/* Imagen 3 — fila inferior derecha con badge */}
      <motion.div
        style={{ y: ys[2] }}
        className="relative overflow-hidden group"
      >
        <img
          src={IMAGES[2].url}
          alt={IMAGES[2].alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className="absolute top-3 right-3 px-2 py-1 text-xs font-medium tracking-widest uppercase"
          style={{ backgroundColor: "#C9A84C", color: "#1A2752" }}
        >
          Patagonia
        </div>
      </motion.div>
    </div>
  );
}
