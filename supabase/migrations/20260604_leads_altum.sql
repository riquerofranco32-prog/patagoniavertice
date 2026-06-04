-- Tabla de leads ALTUM SDI
create table if not exists leads_altum (
  id             uuid primary key default gen_random_uuid(),
  nombre         text not null,
  email          text not null,
  telefono       text,
  tipo_consulta  text check (tipo_consulta in ('venta', 'alquiler', 'consultoria', 'contratos')),
  mensaje        text,
  estado         text default 'nuevo'
                   check (estado in ('nuevo', 'contactado', 'en_seguimiento', 'cerrado')),
  created_at     timestamptz default now()
);

-- RLS
alter table leads_altum enable row level security;

-- Admin puede ver y gestionar todos
create policy "admin leads_altum"
  on leads_altum for all
  using (auth.role() = 'authenticated');

-- Público puede insertar desde el formulario
create policy "insertar lead_altum"
  on leads_altum for insert
  with check (true);
