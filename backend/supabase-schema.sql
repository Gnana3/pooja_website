create extension if not exists pgcrypto;

create type booking_status as enum ('pending', 'accepted', 'rejected', 'cancelled');
create type visit_area as enum ('hyderabad', 'outside', 'online');
create type service_mode as enum ('home', 'temple', 'online');

create table priest_settings (
  id uuid primary key default gen_random_uuid(),
  site_name text not null,
  priest_name text not null,
  whatsapp_number text not null,
  email text not null,
  location_name text not null,
  location_url text not null,
  upi_id text,
  upi_qr_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table pooja_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table pooja_services (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references pooja_categories(id) on delete cascade,
  name text not null,
  price_label text not null default 'On call',
  duration_minutes integer,
  supports_home boolean not null default true,
  supports_temple boolean not null default true,
  supports_online boolean not null default true,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table availability_blocks (
  id uuid primary key default gen_random_uuid(),
  block_date date not null unique,
  reason text,
  created_at timestamptz not null default now()
);

create table bookings (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  customer_whatsapp text not null,
  service_id uuid references pooja_services(id),
  service_name text not null,
  category_name text not null,
  visit_area visit_area not null,
  service_mode service_mode not null,
  booking_date date not null,
  booking_time time not null,
  address text not null,
  notes text,
  status booking_status not null default 'pending',
  priest_decision_at timestamptz,
  customer_notified_at timestamptz,
  priest_notified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index accepted_booking_slot_unique
on bookings (booking_date, booking_time)
where status = 'accepted';

create index bookings_status_idx on bookings(status);
create index bookings_date_idx on bookings(booking_date);

insert into priest_settings (
  site_name,
  priest_name,
  whatsapp_number,
  email,
  location_name,
  location_url
) values (
  'Aathreyasa Krupa Pooja Services',
  'Kilambhi Narasimha Charyulu',
  '919502668772',
  'knarasimhacharyyulu@gmail.com',
  'Gandhi Nagar, Vanasthalipuram',
  'https://jsdl.in/DT-28J4GAEEYYW'
);
