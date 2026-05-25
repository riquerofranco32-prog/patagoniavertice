# Patagonia Vértice — Instrucciones de Proyecto

## Contexto
Sitio web + panel de administración para **Patagonia Vértice**, empresa de desarrollos inmobiliarios en Neuquén, Patagonia Argentina. La dueña es quien opera el negocio. El objetivo es tener presencia web profesional, captar leads y gestionar propiedades/proyectos desde un panel interno.

## Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **UI**: Tailwind CSS + shadcn/ui
- **Base de datos + Auth**: Supabase (PostgreSQL + Row Level Security)
- **Deploy**: Vercel
- **Control de versiones**: GitHub

## Identidad de marca
- **Nombre**: Patagonia Vértice
- **Tagline**: "Donde el paisaje define el valor"
- **Rubro**: Desarrollos y Servicios Inmobiliarios
- **Ubicación**: Neuquén, Patagonia Argentina
- **Paleta**: Tonos tierra oscuros (`#1C1A17`), crema (`#F0EBE1`), dorado (`#B8965A`)
- **Tipografía**: Cormorant Garamond (display) + Jost (body)
- **Estética**: Lujo austero patagónico — elegante, minimalista, con peso visual

## Estructura del proyecto

```
patagonia-vertice/
├── src/
│   ├── app/
│   │   ├── (marketing)/          # Sitio público
│   │   │   ├── page.tsx          # Landing principal
│   │   │   ├── nosotros/
│   │   │   ├── servicios/
│   │   │   ├── proyectos/
│   │   │   └── contacto/
│   │   ├── (admin)/              # Panel privado (requiere auth)
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   ├── propiedades/
│   │   │   ├── proyectos/
│   │   │   ├── leads/            # Consultas recibidas del sitio
│   │   │   └── configuracion/
│   │   ├── api/
│   │   │   └── contacto/         # Recibe form y guarda lead en Supabase
│   │   └── auth/
│   │       ├── login/
│   │       └── callback/
│   ├── components/
│   │   ├── ui/                   # shadcn
│   │   ├── marketing/            # Hero, Navbar, Footer, etc.
│   │   └── admin/                # Tablas, forms del panel
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── server.ts
│   │   │   ├── client.ts
│   │   │   └── types.ts          # Tipos generados por Supabase CLI
│   │   └── utils.ts
│   └── middleware.ts             # Protege rutas /admin
├── supabase/
│   └── migrations/               # SQL versionado
├── CLAUDE.md                     # Este archivo
└── .env.local
```

## Base de datos (Supabase)

### Tablas principales

```sql
-- Propiedades / Proyectos
create table propiedades (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  descripcion text,
  tipo text check (tipo in ('venta', 'alquiler', 'desarrollo', 'lote')),
  estado text check (estado in ('disponible', 'reservado', 'vendido', 'en_construccion')),
  precio numeric,
  moneda text default 'USD',
  superficie_m2 numeric,
  ubicacion text,
  barrio text,
  ciudad text default 'Neuquén',
  imagenes text[],           -- URLs de imágenes
  destacado boolean default false,
  publicado boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Leads / Consultas del formulario de contacto
create table leads (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  email text not null,
  telefono text,
  mensaje text,
  propiedad_id uuid references propiedades(id),
  estado text default 'nuevo' check (estado in ('nuevo', 'contactado', 'en_seguimiento', 'cerrado')),
  created_at timestamptz default now()
);

-- RLS
alter table propiedades enable row level security;
alter table leads enable row level security;

-- Público puede ver propiedades publicadas
create policy "propiedades publicas" on propiedades
  for select using (publicado = true);

-- Solo admin puede todo (autenticado)
create policy "admin propiedades" on propiedades
  for all using (auth.role() = 'authenticated');

create policy "admin leads" on leads
  for all using (auth.role() = 'authenticated');

-- Público puede insertar un lead (desde el form de contacto)
create policy "insertar lead" on leads
  for insert with check (true);
```

## Variables de entorno

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Reglas de desarrollo

### Siempre
- Usar **Server Components** por defecto; Client Components (`"use client"`) solo cuando haya interactividad real (formularios, estado local)
- Usar **Server Actions** para mutaciones (crear/editar/eliminar)
- Proteger rutas `/admin/*` via `middleware.ts` con Supabase Auth
- Guardar migraciones SQL en `/supabase/migrations/` con nombre `YYYYMMDD_descripcion.sql`
- Respetar la paleta de colores y tipografía definidas en la identidad de marca
- Texto en **español** en toda la UI pública y el panel

### Nunca
- Hardcodear datos de propiedades — siempre vienen de Supabase
- Usar `service_role_key` en código client-side
- Olvidar RLS en tablas nuevas

### Componentes UI
- Usar **shadcn/ui** para el panel admin (tablas, forms, dialogs, toasts)
- El sitio público tiene su propio sistema de diseño (ver paleta e identidad)
- `cn()` de `lib/utils.ts` para clases condicionales

## Fases del proyecto

### Fase 1 — Sitio público ✅ (diseño aprobado)
- [ ] Landing con Hero, Nosotros, Servicios, Estadísticas, Contacto
- [ ] Formulario de contacto → guarda lead en Supabase
- [ ] Listado de propiedades/proyectos (desde Supabase)
- [ ] Página de detalle de propiedad

### Fase 2 — Panel Admin
- [ ] Login con Supabase Auth (email/password, solo dueña)
- [ ] Dashboard con resumen de leads y propiedades
- [ ] CRUD completo de propiedades
- [ ] Vista y gestión de leads/consultas
- [ ] Subida de imágenes a Supabase Storage

### Fase 3 — Producción
- [ ] Deploy en Vercel con dominio personalizado
- [ ] Variables de entorno en Vercel
- [ ] Redirección www → apex
- [ ] SSL automático

## Al iniciar cada sesión

1. Revisar este archivo para entender el contexto completo
2. Preguntar en qué fase/tarea estamos trabajando hoy
3. Antes de crear un archivo nuevo, verificar si ya existe algo similar
4. Hacer commits descriptivos: `feat: agregar formulario de contacto`, `fix: rls en tabla leads`
