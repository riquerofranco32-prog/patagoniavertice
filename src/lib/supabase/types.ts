export type Propiedad = {
  id: string
  titulo: string
  descripcion: string | null
  tipo: 'venta' | 'alquiler' | 'desarrollo' | 'lote' | null
  estado: 'disponible' | 'reservado' | 'vendido' | 'en_construccion' | null
  precio: number | null
  moneda: string
  superficie_m2: number | null
  ubicacion: string | null
  barrio: string | null
  ciudad: string
  imagenes: string[] | null
  destacado: boolean
  publicado: boolean
  created_at: string
  updated_at: string
}

export type Lead = {
  id: string
  nombre: string
  email: string
  telefono: string | null
  mensaje: string | null
  propiedad_id: string | null
  estado: 'nuevo' | 'contactado' | 'en_seguimiento' | 'cerrado'
  created_at: string
}

export type Database = {
  public: {
    Tables: {
      propiedades: {
        Row: Propiedad
        Insert: Omit<Propiedad, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Propiedad, 'id' | 'created_at' | 'updated_at'>>
      }
      leads: {
        Row: Lead
        Insert: Omit<Lead, 'id' | 'created_at'>
        Update: Partial<Omit<Lead, 'id' | 'created_at'>>
      }
    }
  }
}
