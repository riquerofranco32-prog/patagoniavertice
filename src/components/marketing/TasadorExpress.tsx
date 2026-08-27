"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TIPOS_INMUEBLE = [
  { id: "casa", label: "Casa / Residencia", icon: "🏡" },
  { id: "depto", label: "Departamento", icon: "🏢" },
  { id: "terreno", label: "Lote / Terreno", icon: "📐" },
  { id: "chacra", label: "Chacra / Campo", icon: "🌾" },
  { id: "comercial", label: "Local / Galpón", icon: "🏬" },
];

const LOCALIDADES = [
  "Cipolletti",
  "Catriel",
  "General Roca",
  "Neuquén Capital",
  "Bariloche",
  "Otras zonas de Río Negro",
];

const RANGOS_SUPERFICIE = [
  "Hasta 70 m²",
  "70 a 150 m²",
  "150 a 300 m²",
  "300 a 800 m²",
  "Más de 800 m² / Fracción",
];

export default function TasadorExpress() {
  const [tipo, setTipo] = useState("casa");
  const [localidad, setLocalidad] = useState("Cipolletti");
  const [superficie, setSuperficie] = useState("70 a 150 m²");
  const [operacion, setOperacion] = useState<"vender" | "alquilar">("vender");
  const [step, setStep] = useState<1 | 2>(1);

  const generarMensajeWhatsApp = () => {
    const texto = `Hola Estela Mari Rojas (Altum Inmobiliaria). Quisiera solicitar la tasación profesional de mi inmueble:
• Tipo: ${TIPOS_INMUEBLE.find((t) => t.id === tipo)?.label || tipo}
• Localidad: ${localidad}
• Superficie aprox: ${superficie}
• Intención: ${operacion === "vender" ? "Venta" : "Alquiler / Administración"}
¿Cuándo podríamos coordinar una tasación o visita?`;

    return `https://wa.me/5492996095742?text=${encodeURIComponent(texto)}`;
  };

  return (
    <section
      className="py-24 lg:py-36 relative overflow-hidden text-crema"
      style={{ background: "#080E1A" }}
      id="tasador-express"
    >
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-15 blur-[120px] rounded-full"
        style={{ background: "#C9A84C" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-10 blur-[140px] rounded-full"
        style={{ background: "#1A2752" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-dorado" />
              <span className="eyebrow">Valuación Certificada</span>
            </div>

            <h2
              className="font-display font-medium leading-[1.05]"
              style={{
                fontSize: "clamp(2.3rem, 4.2vw, 3.6rem)",
                letterSpacing: "-0.02em",
              }}
            >
              ¿Cuánto vale tu propiedad en{" "}
              <em className="not-italic italic text-dorado">Río Negro?</em>
            </h2>

            <p className="font-body text-crema/55 text-sm lg:text-base leading-relaxed">
              Tasaciones inmobiliarias con respaldo legal de <strong>Estela Mari Rojas</strong> (Martillera & Corredora Pública Mat. 35 RP 2026).
            </p>

            {/* Checklist de Garantías */}
            <div className="space-y-4 pt-4 border-t border-crema/10">
              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-dorado/15 flex items-center justify-center shrink-0 mt-0.5 text-dorado">
                  ✓
                </div>
                <div>
                  <h4 className="font-body text-xs font-semibold tracking-wider uppercase text-crema/90">
                    Análisis de Mercado Real
                  </h4>
                  <p className="font-body text-crema/40 text-xs">
                    Basado en operaciones efectivas cerradas en la zona, sin sobrevaluaciones ficticias.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-dorado/15 flex items-center justify-center shrink-0 mt-0.5 text-dorado">
                  ✓
                </div>
                <div>
                  <h4 className="font-body text-xs font-semibold tracking-wider uppercase text-crema/90">
                    Seguridad Jurídica y Notarial
                  </h4>
                  <p className="font-body text-crema/40 text-xs">
                    Revisión de títulos, planos y estado dominial para una venta sin contratiempos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-dorado/15 flex items-center justify-center shrink-0 mt-0.5 text-dorado">
                  ✓
                </div>
                <div>
                  <h4 className="font-body text-xs font-semibold tracking-wider uppercase text-crema/90">
                    Respuesta en 24/48 Horas
                  </h4>
                  <p className="font-body text-crema/40 text-xs">
                    Coordinamos inspección física o virtual de inmediato.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="lg:col-span-7">
            <div
              className="p-8 lg:p-10 border border-dorado/30 relative backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
              style={{ background: "rgba(13,22,40,0.85)" }}
            >
              {/* Header Card */}
              <div className="flex items-center justify-between border-b border-crema/10 pb-5 mb-8">
                <div>
                  <span className="font-body text-dorado text-[11px] tracking-[0.2em] uppercase">
                    Paso {step} de 2
                  </span>
                  <h3 className="font-display text-xl font-medium text-crema mt-0.5">
                    {step === 1
                      ? "Datos preliminares del inmueble"
                      : "Resumen y solicitud de tasación"}
                  </h3>
                </div>

                {/* Switch Operación */}
                <div className="flex bg-navy-950 p-1 border border-crema/15">
                  <button
                    onClick={() => setOperacion("vender")}
                    className={`px-3.5 py-1.5 font-body text-[10px] tracking-widest uppercase transition-colors ${
                      operacion === "vender"
                        ? "bg-dorado text-tierra font-semibold"
                        : "text-crema/50 hover:text-crema"
                    }`}
                  >
                    Venta
                  </button>
                  <button
                    onClick={() => setOperacion("alquilar")}
                    className={`px-3.5 py-1.5 font-body text-[10px] tracking-widest uppercase transition-colors ${
                      operacion === "alquilar"
                        ? "bg-dorado text-tierra font-semibold"
                        : "text-crema/50 hover:text-crema"
                    }`}
                  >
                    Alquiler
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-6"
                  >
                    {/* Selector de Tipo */}
                    <div>
                      <label className="block font-body text-[11px] tracking-[0.16em] uppercase text-crema/60 mb-3">
                        1. Tipo de Propiedad
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {TIPOS_INMUEBLE.map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setTipo(t.id)}
                            className={`p-3 text-left border transition-all flex items-center gap-2.5 ${
                              tipo === t.id
                                ? "border-dorado bg-dorado/15 text-dorado font-medium"
                                : "border-crema/10 bg-navy-950/40 text-crema/60 hover:border-crema/30 hover:text-crema"
                            }`}
                          >
                            <span className="text-base">{t.icon}</span>
                            <span className="font-body text-xs truncate">
                              {t.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Selector de Localidad */}
                    <div>
                      <label className="block font-body text-[11px] tracking-[0.16em] uppercase text-crema/60 mb-3">
                        2. Localidad / Zona en Patagonia
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {LOCALIDADES.map((loc) => (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => setLocalidad(loc)}
                            className={`p-2.5 text-center border font-body text-xs transition-all ${
                              localidad === loc
                                ? "border-dorado bg-dorado text-tierra font-semibold"
                                : "border-crema/10 bg-navy-950/40 text-crema/60 hover:border-crema/30 hover:text-crema"
                            }`}
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Selector de Superficie */}
                    <div>
                      <label className="block font-body text-[11px] tracking-[0.16em] uppercase text-crema/60 mb-3">
                        3. Superficie estimada
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {RANGOS_SUPERFICIE.map((sup) => (
                          <button
                            key={sup}
                            type="button"
                            onClick={() => setSuperficie(sup)}
                            className={`px-3 py-1.5 border font-body text-[11px] transition-all ${
                              superficie === sup
                                ? "border-dorado text-dorado bg-dorado/15 font-medium"
                                : "border-crema/10 text-crema/50 hover:text-crema/80"
                            }`}
                          >
                            {sup}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Siguiente Paso */}
                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-dorado text-tierra font-body text-xs font-semibold tracking-[0.18em] uppercase hover:bg-dorado-light transition-all shadow-md"
                      >
                        <span>Continuar</span>
                        <span>→</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    {/* Resumen de Tasación */}
                    <div className="p-6 bg-navy-950/70 border border-crema/10 space-y-3">
                      <h4 className="font-body text-dorado text-[11px] tracking-[0.2em] uppercase">
                        Detalles seleccionados
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-xs font-body text-crema/70 pt-2 border-t border-crema/10">
                        <div>
                          <span className="block text-crema/40 text-[10px] uppercase tracking-wider">
                            Inmueble
                          </span>
                          <span className="font-medium text-crema">
                            {TIPOS_INMUEBLE.find((t) => t.id === tipo)?.label}
                          </span>
                        </div>
                        <div>
                          <span className="block text-crema/40 text-[10px] uppercase tracking-wider">
                            Ubicación
                          </span>
                          <span className="font-medium text-crema">{localidad}</span>
                        </div>
                        <div>
                          <span className="block text-crema/40 text-[10px] uppercase tracking-wider">
                            Superficie
                          </span>
                          <span className="font-medium text-crema">{superficie}</span>
                        </div>
                        <div>
                          <span className="block text-crema/40 text-[10px] uppercase tracking-wider">
                            Operación
                          </span>
                          <span className="font-medium text-crema capitalize">
                            {operacion}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="font-body text-crema/60 text-xs leading-relaxed">
                      Al presionar el botón a continuación, se abrirá una conversación directa por WhatsApp con <strong>Estela Mari Rojas</strong> con los datos de tu inmueble ya listos para coordinar la tasación profesional.
                    </p>

                    {/* Botones Finales */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-3.5 border border-crema/20 font-body text-xs uppercase tracking-wider text-crema/60 hover:text-crema transition-colors"
                      >
                        ← Volver a editar
                      </button>

                      <a
                        href={generarMensajeWhatsApp()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-dorado text-tierra font-body text-xs font-semibold tracking-[0.18em] uppercase hover:bg-dorado-light transition-all shadow-lg text-center"
                      >
                        <span>Solicitar Tasación por WhatsApp</span>
                        <span>→</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
