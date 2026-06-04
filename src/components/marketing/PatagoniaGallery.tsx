"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IMAGES = [
  {
    url: "https://source.unsplash.com/At0wecizwVU/900x600",
    caption: "Lagos del Neuquén",
  },
  {
    url: "https://source.unsplash.com/3DJCwb3oW0g/900x600",
    caption: "Patagonia profunda",
  },
  {
    url: "https://images.unsplash.com/photo-1550515040-9daffea2d4ee?w=900&q=85",
    caption: "Cordillera del Neuquén",
  },
  {
    url: "https://source.unsplash.com/oFsKu7cGxe0/900x600",
    caption: "Río Negro de noche",
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

  const ys = [y1, y2, y3, y4];

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 grid-rows-2 gap-2 h-[500px] md:h-[580px]"
    >
      {IMAGES.map((img, i) => (
        <motion.div
          key={img.url}
          style={{ y: ys[i] }}
          className="relative overflow-hidden group"
        >
          <img
            src={img.url}
            alt={img.caption}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute bottom-3 left-3 text-xs text-white/80 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {img.caption}
          </span>
          {i === 2 && (
            <div
              className="absolute top-3 right-3 px-2 py-1 text-xs font-medium tracking-widest uppercase"
              style={{ backgroundColor: "#C9A84C", color: "#1A2752" }}
            >
              Patagonia
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
