"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(26,39,82,0.96)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/logoo.png"
            alt="Altum Inmobiliaria"
            className="h-9 w-auto object-contain transition-opacity duration-300"
            style={{ mixBlendMode: "screen" }}
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link font-body text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                  active
                    ? "text-dorado active"
                    : "text-crema/70 hover:text-crema"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Derecha: WhatsApp + CTA ── */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-crema/60 text-[11px] tracking-wider hover:text-[#25D366] transition-colors flex items-center gap-2"
          >
            <WaIcon />
            WhatsApp
          </a>
          <Link
            href="/contacto"
            className="btn-shimmer font-body text-tierra text-[11px] tracking-[0.12em] font-medium uppercase px-5 py-2.5"
          >
            Consultar Ahora
          </Link>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span
            className={`block w-6 h-px bg-crema transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-crema transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-crema transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t border-white/5 overflow-hidden"
            style={{ background: "rgba(26,39,82,0.98)" }}
          >
            <nav className="flex flex-col gap-5 px-6 py-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={l.href}
                    className={`font-body text-[11px] tracking-[0.25em] uppercase transition-colors ${
                      pathname === l.href
                        ? "text-dorado"
                        : "text-crema/70 hover:text-dorado"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contacto"
                className="mt-2 btn-shimmer font-body text-tierra text-[11px] tracking-[0.12em] font-medium uppercase px-5 py-3 text-center"
              >
                Consultar Ahora
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function WaIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
