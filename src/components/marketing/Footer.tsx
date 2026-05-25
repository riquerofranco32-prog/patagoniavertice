import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

const waIcon = (
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
);

export default function Footer() {
  return (
    <footer className="bg-[#141210] text-crema">
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, #B8965A, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 27,26 1,26" fill="#B8965A" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-display text-crema text-lg font-light tracking-widest uppercase">Patagonia</span>
                <span className="font-display text-dorado text-xs font-semibold tracking-[0.35em] uppercase">Vértice</span>
              </div>
            </div>
            <p className="font-body text-crema/40 text-sm leading-relaxed mb-6">
              Desarrollos inmobiliarios de primer nivel en Neuquén y la Patagonia.
              Donde el paisaje define el valor.
            </p>
            <p className="font-body text-crema/20 text-[11px] tracking-[0.15em] uppercase">
              Neuquén, Patagonia Argentina
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-body text-dorado text-[11px] tracking-[0.25em] uppercase mb-6">Empresa</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/nosotros", label: "Nosotros" },
                { href: "/servicios", label: "Servicios" },
                { href: "/proyectos", label: "Proyectos" },
                { href: "/sumate", label: "Sumate al equipo" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="font-body text-crema/40 text-sm hover:text-dorado transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Proyectos */}
          <div>
            <h4 className="font-body text-dorado text-[11px] tracking-[0.25em] uppercase mb-6">Proyectos</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/proyectos", label: "En ejecución" },
                { href: "/proyectos", label: "En preventa" },
                { href: "/proyectos", label: "Entregados" },
                { href: "/proyectos", label: "Lotes" },
              ].map((l, i) => (
                <Link key={i} href={l.href} className="font-body text-crema/40 text-sm hover:text-dorado transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-body text-dorado text-[11px] tracking-[0.25em] uppercase mb-6">Contacto</h4>
            <div className="flex flex-col gap-4 font-body text-crema/40 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-dorado/60 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Neuquén Capital,<br />Patagonia Argentina</span>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-dorado transition-colors duration-200">
                <svg className="w-4 h-4 text-dorado/60 shrink-0 fill-current" viewBox="0 0 24 24">{waIcon}</svg>
                WhatsApp — Estela
              </a>
              <a href="mailto:info@patagoniavertice.com" className="flex items-center gap-3 hover:text-dorado transition-colors duration-200">
                <svg className="w-4 h-4 text-dorado/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@patagoniavertice.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-crema/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-crema/20 text-xs tracking-wider">
            © {new Date().getFullYear()} Patagonia Vértice. Todos los derechos reservados.
          </p>
          <Link href="/contacto" className="font-body text-crema/30 text-xs hover:text-dorado transition-colors duration-200">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
