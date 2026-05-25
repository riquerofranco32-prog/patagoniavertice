"use client";

import { useFormState, useFormStatus } from "react-dom";
import { enviarConsulta, type ContactoState } from "@/app/actions/contacto";

const initialState: ContactoState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 self-start px-10 py-4 bg-tierra text-crema font-body text-sm tracking-widest uppercase hover:bg-dorado transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Enviando..." : "Enviar consulta"}
    </button>
  );
}

export default function FormularioContacto() {
  const [state, action] = useFormState(enviarConsulta, initialState);

  if (state.success) {
    return (
      <section id="contacto" className="py-32 bg-crema">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-px bg-dorado mx-auto mb-8" />
            <h3 className="font-display text-tierra text-4xl font-light mb-4">
              Consulta recibida
            </h3>
            <p className="font-body text-tierra/60 leading-relaxed">
              Gracias por contactarte. Nos comunicaremos con vos a la brevedad.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-32 bg-crema">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-dorado" />
              <span className="font-body text-dorado text-xs tracking-[0.4em] uppercase">
                Hablemos
              </span>
            </div>
            <h2 className="font-display text-tierra text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
              ¿Tenés una{" "}
              <span className="italic">consulta?</span>
            </h2>
            <p className="font-body text-tierra/60 leading-relaxed mb-12">
              Contanos qué estás buscando y un miembro de nuestro equipo se
              comunicará con vos para orientarte sin compromiso.
            </p>
            <div className="space-y-4 font-body text-tierra/50 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-dorado" />
                <span>Neuquén, Patagonia Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-dorado" />
                <span>info@patagoniavertice.com</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form action={action} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-body text-tierra/60 text-xs tracking-widest uppercase">
                  Nombre <span className="text-dorado">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  className="bg-transparent border-b border-tierra/20 py-3 font-body text-tierra text-sm focus:outline-none focus:border-dorado transition-colors placeholder:text-tierra/30"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-body text-tierra/60 text-xs tracking-widest uppercase">
                  Email <span className="text-dorado">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="bg-transparent border-b border-tierra/20 py-3 font-body text-tierra text-sm focus:outline-none focus:border-dorado transition-colors placeholder:text-tierra/30"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-tierra/60 text-xs tracking-widest uppercase">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                className="bg-transparent border-b border-tierra/20 py-3 font-body text-tierra text-sm focus:outline-none focus:border-dorado transition-colors placeholder:text-tierra/30"
                placeholder="+54 299 000 0000"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-tierra/60 text-xs tracking-widest uppercase">
                Mensaje <span className="text-dorado">*</span>
              </label>
              <textarea
                name="mensaje"
                required
                rows={5}
                className="bg-transparent border-b border-tierra/20 py-3 font-body text-tierra text-sm focus:outline-none focus:border-dorado transition-colors placeholder:text-tierra/30 resize-none"
                placeholder="Contanos qué estás buscando..."
              />
            </div>

            {state.error && (
              <p className="font-body text-red-600 text-sm">{state.error}</p>
            )}

            <SubmitButton />
          </form>
        </div>
      </div>
    </section>
  );
}
