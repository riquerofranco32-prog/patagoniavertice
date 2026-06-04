"use server";

import { createClient } from "@/lib/supabase/server";

export type TipoConsulta = "venta" | "alquiler" | "consultoria" | "contratos";

export interface LeadAltumInput {
  nombre: string;
  email: string;
  telefono?: string;
  tipo_consulta: TipoConsulta;
  mensaje: string;
}

export interface LeadAltumResult {
  success: boolean;
  error?: string;
}

export async function guardarLeadAltum(
  data: LeadAltumInput,
): Promise<LeadAltumResult> {
  if (!data.nombre?.trim() || !data.email?.trim() || !data.mensaje?.trim()) {
    return { success: false, error: "Completá los campos obligatorios." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "El email no es válido." };
  }

  const supabase = createClient();

  const { error } = await supabase.from("leads_altum").insert({
    nombre: data.nombre.trim(),
    email: data.email.trim().toLowerCase(),
    telefono: data.telefono?.trim() || null,
    tipo_consulta: data.tipo_consulta,
    mensaje: data.mensaje.trim(),
    estado: "nuevo",
  });

  if (error) {
    console.error("[leads_altum] insert error:", error.message);
    return { success: false, error: "Error al enviar. Intentá de nuevo." };
  }

  return { success: true };
}
