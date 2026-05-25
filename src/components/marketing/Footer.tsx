import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-tierra text-crema">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display text-crema text-2xl font-light tracking-widest uppercase block">
                Patagonia
              </span>
              <span className="font-display text-dorado text-base font-light tracking-[0.3em] uppercase block">
                Vértice
              </span>
            </div>
            <p className="font-body text-crema/50 text-sm leading-relaxed">
              Donde el paisaje define el valor.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-dorado text-xs tracking-widest uppercase mb-6">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/nosotros", label: "Nosotros" },
                { href: "/servicios", label: "Servicios" },
                { href: "/proyectos", label: "Proyectos" },
                { href: "/contacto", label: "Contacto" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-body text-crema/60 text-sm hover:text-dorado transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-dorado text-xs tracking-widest uppercase mb-6">
              Contacto
            </h4>
            <div className="flex flex-col gap-3 text-sm font-body text-crema/60">
              <span>Neuquén, Patagonia Argentina</span>
              <a href="mailto:info@patagoniavértice.com" className="hover:text-dorado transition-colors">
                info@patagoniavertice.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-crema/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-crema/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Patagonia Vértice. Todos los derechos reservados.
          </p>
          <Link
            href="/admin"
            className="font-body text-crema/20 text-xs hover:text-crema/40 transition-colors"
          >
            Panel Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
