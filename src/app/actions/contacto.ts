"use server";

import { createClient } from "@/lib/supabase/server";

export type ContactoState = {
  success?: boolean;
  error?: string;
};

export async function enviarConsulta(
  _prev: ContactoState,
  formData: FormData
): Promise<ContactoState> {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const telefono = formData.get("telefono") as string;
  const mensaje = formData.get("mensaje") as string;

  if (!nombre || !email || !mensaje) {
    return { error: "Por favor completá los campos obligatorios." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "El email ingresado no es válido." };
  }

  const supabase = createClient();
  const { error } = await supabase.from("leads").insert({
    nombre,
    email,
    telefono: telefono || null,
    mensaje,
    estado: "nuevo",
  });

  if (error) {
    console.error("Error inserting lead:", error);
    return { error: "Hubo un error al enviar tu consulta. Intentá de nuevo." };
  }

  return { success: true };
}
