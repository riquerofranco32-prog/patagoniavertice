"use client";

import { useFormState, useFormStatus } from "react-dom";
import { enviarConsulta, type ContactoState } from "@/app/actions/contacto";

const initialState: ContactoState = {};

const inputClass =
  "w-full bg-transparent border-b border-tierra/15 py-3.5 font-body text-tierra text-sm focus:outline-none focus:border-dorado transition-colors duration-200 placeholder:text-tierra/25";

const labelClass = "font-body text-tierra/40 text-[10px] tracking-[0.25em] uppercase mb-2 block";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-4 w-full sm:w-auto px-12 py-4 bg-tierra text-crema font-body text-[11px] tracking-[0.15em] font-medium uppercase hover:bg-dorado transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Enviando..." : "Enviar mensaje"}
    </button>
  );
}

export default function FormularioContacto() {
  const [state, action] = useFormState(enviarConsulta, initialState);

  if (state.success) {
    return (
      <div className="flex flex-col items-start gap-6 py-16">
        <div className="w-14 h-14 border border-dorado/40 flex items-center justify-center">
          <svg className="w-6 h-6 text-dorado" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-tierra text-3xl font-light mb-3">Consulta recibida</h3>
          <p className="font-body text-tierra/50 text-sm leading-relaxed max-w-sm">
            Gracias por contactarte. Nos comunicaremos con vos a la brevedad.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>
            Nombre <span className="text-dorado">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            required
            className={inputClass}
            placeholder="Tu nombre completo"
          />
        </div>
        <div>
          <label className={labelClass}>
            Email <span className="text-dorado">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className={inputClass}
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>Teléfono</label>
          <input
            type="tel"
            name="telefono"
            className={inputClass}
            placeholder="+54 299 000 0000"
          />
        </div>
        <div>
          <label className={labelClass}>Asunto</label>
          <input
            type="text"
            name="asunto"
            className={inputClass}
            placeholder="Ej: Consulta sobre proyecto"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Mensaje <span className="text-dorado">*</span>
        </label>
        <textarea
          name="mensaje"
          required
          rows={5}
          className={inputClass}
          placeholder="Contanos qué estás buscando..."
        />
      </div>

      {state.error && (
        <p className="font-body text-red-600 text-sm">{state.error}</p>
      )}

      <SubmitButton />
    </form>
  );
}
