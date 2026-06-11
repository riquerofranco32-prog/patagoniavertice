"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

/**
 * Player de video 16:9 con thumbnail + play button animado (glow oro).
 * El video recién se monta al hacer click — no descarga nada antes.
 */
export function VideoPlayer({
  src,
  poster,
  title = "Servicios Altum Inmobiliaria",
  className = "",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  return (
    <div
      className={`relative w-full bg-black rounded-lg overflow-hidden group ${className}`}
      style={{ contain: "layout style paint" }}
    >
      <div className="aspect-video relative bg-navy-900">
        <AnimatePresence>
          {isPlaying ? (
            <motion.video
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={src}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-cover"
              onLoadedData={() => setIsLoading(false)}
            />
          ) : (
            <motion.div
              key="thumbnail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center cursor-pointer"
              onClick={handlePlay}
              role="button"
              aria-label={`Reproducir video: ${title}`}
            >
              {/* Poster opcional */}
              {poster && (
                <img
                  src={poster}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-navy-900/70" />

              {/* Play button con glow pulsante */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(201, 168, 76, 0.3)",
                      "0 0 40px rgba(201, 168, 76, 0.5)",
                      "0 0 20px rgba(201, 168, 76, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center"
                >
                  <Play className="w-8 h-8 text-navy-900 fill-current ml-1" />
                </motion.div>
              </motion.div>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900 to-transparent p-6">
                <p className="text-white font-cormorant text-xl">{title}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading bars mientras buffea */}
        {isLoading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-navy-900/50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex gap-1">
              {[0, 0.1, 0.2].map((delay) => (
                <motion.div
                  key={delay}
                  animate={{ scaleY: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay }}
                  className="w-1 h-6 bg-gold-500 rounded"
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
