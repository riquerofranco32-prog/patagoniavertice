"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ModeloInversion {
  id: string;
  nombre: string;
  roiAnual: number; // Porcentaje ej: 11
  plusvaliaAnual: number; // Porcentaje ej: 8
  zonaRecomendada: string;
  tipoRenta: string;
  descripcion: string;
}

const MODELOS_INVERSION: ModeloInversion[] = [
  {
    id: "loteo-plusvalia",
    nombre: "Loteo & Tierra con Plusvalía",
    roiAnual: 14,
    plusvaliaAnual: 10,
    zonaRecomendada: "Cipolletti & General Roca",
    tipoRenta: "Apreciación de capital a mediano plazo",
    descripcion:
      "Adquisición de lotes en etapas de preventa o zonas en expansión con alta tasa de valorización por metro cuadrado.",
  },
  {
    id: "alquiler-corporativo",
    nombre: "Alquiler Corporativo Petrolero",
    roiAnual: 12,
    plusvaliaAnual: 6,
    zonaRecomendada: "Catriel & Alto Valle",
    tipoRenta: "Renta mensual en USD / Moneda dura",
    descripcion:
      "Viviendas y semipisos alquilados a empresas de servicios petroleros y ejecutivos con contratos seguros y ocupación sostenida.",
  },
  {
    id: "alquiler-turistico",
    nombre: "Renta Turística Temporaria",
    roiAnual: 13,
    plusvaliaAnual: 9,
    zonaRecomendada: "Bariloche & Cordillera",
    tipoRenta: "Renta diaria / semanal en USD",
    descripcion:
      "Departamentos y chalets de montaña comercializados en plataformas internacionales con flujo de caja en moneda extranjera.",
  },
  {
    id: "residencial-tradicional",
    nombre: "Residencial Tradicional",
    roiAnual: 7.5,
    plusvaliaAnual: 5.5,
    zonaRecomendada: "Cipolletti Centro & Barrios Cerrados",
    tipoRenta: "Contratos de 2 o 3 años",
    descripcion:
      "Casas y departamentos en zonas consolidadas con inquilinos calificados y bajo índice de vacancia.",
  },
];

export default function CalculadoraRentabilidad() {
  const [modeloSeleccionado, setModeloSeleccionado] = useState<ModeloInversion>(
    MODELOS_INVERSION[0]
  );
  const [montoUSD, setMontoUSD] = useState<number>(60000);
  const [horizonteAnios, setHorizonteAnios] = useState<number>(3);

  // Cálculos
  const rentaAnualEstimada = (montoUSD * modeloSeleccionado.roiAnual) / 100;
  const plusvaliaTotalEstimada =
    montoUSD *
    (Math.pow(1 + modeloSeleccionado.plusvaliaAnual / 100, horizonteAnios) - 1);
  const retornoTotalEstimado =
    rentaAnualEstimada * horizonteAnios + plusvaliaTotalEstimada;
  const valorFinalPatrimonio = montoUSD + retornoTotalEstimado;

  const generarEnlaceWhatsApp = () => {
    const texto = `Hola Altum Inmobiliaria. Estuve simulando una inversión con su Calculadora de Rentabilidad:
• Modelo de Interés: ${modeloSeleccionado.nombre}
• Capital Estimado: USD ${montoUSD.toLocaleString("es-AR")}
• Plazo Proyectado: ${horizonteAnios} años
• Retorno Total Proyectado: USD ${Math.round(retornoTotalEstimado).toLocaleString("es-AR")}
¿Tienen oportunidades activas disponibles para este perfil?`;

    return `https://wa.me/5492996095742?text=${encodeURIComponent(texto)}`;
  };

  return (
    <section
      className="py-24 lg:py-36 relative overflow-hidden text-crema"
      style={{ background: "#050811" }}
      id="calculadora-inversion"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] opacity-10 blur-[150px] pointer-events-none rounded-full"
        style={{ background: "#C9A84C" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-dorado" />
              <span className="eyebrow">Simulador de Rendimiento</span>
            </div>
            <h2
              className="font-display font-medium text-crema leading-[1.05]"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Calculadora de Inversión en{" "}
              <em className="not-italic italic text-dorado">Patagonia</em>
            </h2>
            <p className="font-body text-crema/45 text-sm lg:text-base max-w-2xl mt-4">
              Proyectá el retorno estimado de tu capital según el modelo de negocio inmobiliario en Río Negro y zonas clave de la región.
            </p>
          </div>

          <span className="font-body text-crema/40 text-xs tracking-widest uppercase self-start lg:self-auto border border-crema/10 px-4 py-2">
            Estimaciones con datos reales de mercado
          </span>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Controls Left Column */}
          <div className="lg:col-span-6 space-y-8 p-8 lg:p-10 bg-navy-950/80 border border-crema/10 backdrop-blur-md">
            {/* 1. Selector de Estrategia */}
            <div>
              <label className="block font-body text-[11px] tracking-[0.2em] uppercase text-dorado mb-3 font-medium">
                1. Seleccioná el Modelo de Inversión
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MODELOS_INVERSION.map((mod) => (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setModeloSeleccionado(mod)}
                    className={`p-4 text-left border transition-all ${
                      modeloSeleccionado.id === mod.id
                        ? "border-dorado bg-dorado/15 text-dorado"
                        : "border-crema/10 bg-navy-900/40 text-crema/60 hover:border-crema/30 hover:text-crema"
                    }`}
                  >
                    <span className="font-display text-sm font-semibold block mb-1">
                      {mod.nombre}
                    </span>
                    <span className="font-body text-[10px] tracking-wider text-crema/40 uppercase block">
                      ROI: ~{mod.roiAnual}% Anual
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Slider Capital a Invertir */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-body text-[11px] tracking-[0.2em] uppercase text-dorado font-medium">
                  2. Capital Inicial a Invertir
                </label>
                <span className="font-display text-dorado text-2xl font-bold">
                  USD {montoUSD.toLocaleString("es-AR")}
                </span>
              </div>

              <input
                type="range"
                min={20000}
                max={500000}
                step={5000}
                value={montoUSD}
                onChange={(e) => setMontoUSD(Number(e.target.value))}
                className="w-full accent-[#C9A84C] cursor-pointer h-2 bg-navy-900 rounded-lg appearance-none"
              />

              <div className="flex justify-between text-[10px] font-body text-crema/40 tracking-wider mt-2">
                <span>USD 20.000</span>
                <span>USD 250.000</span>
                <span>USD 500.000+</span>
              </div>
            </div>

            {/* 3. Horizonte Temporal */}
            <div>
              <label className="block font-body text-[11px] tracking-[0.2em] uppercase text-dorado mb-3 font-medium">
                3. Plazo de Inversión Proyectado
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 5].map((anios) => (
                  <button
                    key={anios}
                    type="button"
                    onClick={() => setHorizonteAnios(anios)}
                    className={`py-2.5 text-center font-body text-xs border transition-all ${
                      horizonteAnios === anios
                        ? "border-dorado bg-dorado text-tierra font-bold"
                        : "border-crema/10 bg-navy-900/40 text-crema/50 hover:text-crema hover:border-crema/30"
                    }`}
                  >
                    {anios} {anios === 1 ? "Año" : "Años"}
                  </button>
                ))}
              </div>
            </div>

            {/* Nota Informativa del Modelo */}
            <div className="p-4 bg-navy-900/60 border-l-2 border-dorado text-xs font-body text-crema/60 space-y-1">
              <span className="text-dorado font-semibold block uppercase text-[10px] tracking-wider">
                Zona Clave: {modeloSeleccionado.zonaRecomendada}
              </span>
              <p>{modeloSeleccionado.descripcion}</p>
            </div>
          </div>

          {/* Results Projection Right Column */}
          <div className="lg:col-span-6 space-y-6">
            <div
              className="p-8 lg:p-12 border border-dorado/40 shadow-2xl space-y-8 backdrop-blur-xl relative overflow-hidden"
              style={{ background: "rgba(10,18,35,0.9)" }}
            >
              {/* Header Box */}
              <div>
                <span className="font-body text-dorado text-[10px] tracking-[0.25em] uppercase block mb-1">
                  Proyección a {horizonteAnios} {horizonteAnios === 1 ? "año" : "años"}
                </span>
                <h3 className="font-display text-3xl font-medium text-crema">
                  Retorno Estimado Total
                </h3>
              </div>

              {/* Big Stat */}
              <div className="p-6 bg-navy-950/80 border border-dorado/20 space-y-1">
                <span className="font-body text-crema/40 text-[11px] uppercase tracking-wider block">
                  Ganancia Proyectada (Renta + Plusvalía)
                </span>
                <motion.div
                  key={retornoTotalEstimado}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-display text-4xl lg:text-5xl font-bold text-dorado tracking-tight"
                >
                  +USD {Math.round(retornoTotalEstimado).toLocaleString("es-AR")}
                </motion.div>
                <span className="font-body text-emerald-400 text-xs font-medium block pt-1">
                  ▲ +{Math.round((retornoTotalEstimado / montoUSD) * 100)}% de ganancia sobre el capital
                </span>
              </div>

              {/* Desglose Métrico */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-crema/10">
                <div className="space-y-1">
                  <span className="font-body text-crema/40 text-[10px] uppercase tracking-wider block">
                    Renta Neta por Año
                  </span>
                  <span className="font-display text-xl text-crema font-medium">
                    USD {Math.round(rentaAnualEstimada).toLocaleString("es-AR")} / año
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-body text-crema/40 text-[10px] uppercase tracking-wider block">
                    Valor Final de Cartera
                  </span>
                  <span className="font-display text-xl text-crema font-medium">
                    USD {Math.round(valorFinalPatrimonio).toLocaleString("es-AR")}
                  </span>
                </div>
              </div>

              {/* Botón Call to Action */}
              <div className="pt-4 space-y-3">
                <a
                  href={generarEnlaceWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 bg-dorado text-tierra font-body text-xs font-semibold tracking-[0.18em] uppercase hover:bg-dorado-light transition-all shadow-xl text-center"
                >
                  <span>Solicitar Oportunidades por WhatsApp</span>
                  <span>→</span>
                </a>

                <p className="text-center font-body text-crema/35 text-[10px]">
                  * Las proyecciones son orientativas basadas en rendimientos históricos promedio de Río Negro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
