"use client";

import { useRef, useEffect } from "react";

export default function SpotlightCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (mouseX !== -1000) {
        const g = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          320,
        );
        // gold rgba(201,168,76)
        g.addColorStop(0, "rgba(201,168,76,0.09)");
        g.addColorStop(0.4, "rgba(201,168,76,0.03)");
        g.addColorStop(1, "rgba(201,168,76,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      rafId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998] w-full h-full"
      aria-hidden="true"
    />
  );
}
