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
  imagenes text[],
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

-- Trigger para updated_at automático
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger propiedades_updated_at
  before update on propiedades
  for each row execute function update_updated_at();
