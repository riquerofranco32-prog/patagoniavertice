import type { Metadata } from "next";
import FormularioContacto from "@/components/marketing/FormularioContacto";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactate con Patagonia Vértice. Estamos listos para asesorarte en tu inversión inmobiliaria en Neuquén y la Patagonia.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Dirección",
    value: "Neuquén Capital\nPatagonia Argentina",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@patagoniavertice.com",
    href: "mailto:info@patagoniavertice.com",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-tierra pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=60"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(28,26,23,0.7), rgba(28,26,23,0.95))" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-dorado" />
            <span className="font-body text-dorado text-[11px] tracking-[0.3em] uppercase">Hablemos</span>
          </div>
          <h1
            className="font-display text-crema font-light leading-[1.05] mb-6"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            Hablemos de tu{" "}
            <span className="italic text-dorado">próximo proyecto</span>
          </h1>
          <p className="font-body text-crema/40 text-sm leading-relaxed max-w-md">
            Estamos listos para asesorarte en tu inversión inmobiliaria en Neuquén
            y la Patagonia. Sin compromiso.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #B8965A40, transparent)" }} />
      </div>

      {/* WhatsApp CTA strip */}
      <div className="bg-[#141210] py-6 border-b border-crema/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-crema/40 text-sm">
            ¿Preferís contacto directo? Escribinos por WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3 bg-[#25D366] text-white font-body text-[11px] tracking-[0.15em] font-medium uppercase hover:bg-[#20bd5a] transition-colors duration-300 shrink-0"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp — Estela
          </a>
        </div>
      </div>

      {/* Form section */}
      <section className="py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">

            {/* Left: info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-dorado" />
                <span className="font-body text-dorado text-[11px] tracking-[0.25em] uppercase">Datos de contacto</span>
              </div>
              <h2
                className="font-display text-tierra font-light leading-[1.1] mb-8"
                style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", letterSpacing: "-0.02em" }}
              >
                ¿Tenés una{" "}
                <span className="italic text-dorado">consulta?</span>
              </h2>
              <p className="font-body text-tierra/50 text-sm leading-relaxed mb-12">
                Contanos qué estás buscando y un miembro de nuestro equipo
                se comunicará con vos para orientarte sin compromiso.
              </p>

              <div className="space-y-8">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-dorado/25 flex items-center justify-center text-dorado shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="font-body text-tierra/35 text-[10px] tracking-[0.25em] uppercase mb-1">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-body text-tierra/70 text-sm hover:text-dorado transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-body text-tierra/70 text-sm whitespace-pre-line">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* WA */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-dorado/25 flex items-center justify-center text-dorado shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-tierra/35 text-[10px] tracking-[0.25em] uppercase mb-1">WhatsApp</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-body text-tierra/70 text-sm hover:text-dorado transition-colors">
                      +54 9 299 466 8428 — Estela
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="mt-16 h-px bg-gradient-to-r from-dorado/30 to-transparent" />
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <FormularioContacto />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
