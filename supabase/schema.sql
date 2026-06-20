create extension if not exists pgcrypto;

create table if not exists public.site_resources (
  language text primary key,
  content jsonb not null default '{}'::jsonb
);

create table if not exists public.cms_pages (
  slug text primary key,
  title text not null,
  description text not null default '',
  status text not null default 'Draft',
  missing_vietnamese integer not null default 0,
  updated_at date not null default current_date,
  sections jsonb not null default '[]'::jsonb
);

create table if not exists public.seo_settings (
  page text primary key,
  title text not null,
  description text not null default '',
  slug text not null,
  focus_keywords text not null default '',
  indexed boolean not null default true,
  sitemap boolean not null default true
);

create table if not exists public.documents (
  id text primary key,
  title text not null,
  description text not null default '',
  category text not null,
  language text not null,
  status text not null default 'Draft',
  require_email boolean not null default false,
  track_downloads boolean not null default false,
  downloads integer not null default 0,
  updated_at date not null default current_date
);

create table if not exists public.media_assets (
  id text primary key,
  name text not null,
  type text not null,
  category text not null,
  alt_text text not null default '',
  url text not null,
  size text not null default '',
  updated_at date not null default current_date
);

create table if not exists public.admin_users (
  id text primary key,
  name text not null,
  email text not null,
  role text not null,
  status text not null,
  last_login text not null default '',
  created_at text not null default ''
);

create table if not exists public.site_settings (
  id text primary key,
  company_name text not null default '',
  short_name text not null default '',
  tagline text not null default '',
  email text not null default '',
  phone text not null default '',
  office_hours text not null default '',
  headquarters_address text not null default '',
  linkedin text not null default '',
  facebook text not null default '',
  youtube text not null default '',
  google_analytics_id text not null default '',
  google_tag_manager_id text not null default '',
  linkedin_insight_tag_id text not null default '',
  maintenance_mode boolean not null default false,
  default_language text not null default 'English',
  timezone text not null default 'Asia/Ho_Chi_Minh',
  admin_notification_email text not null default ''
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  date date not null default current_date,
  name text not null,
  company text not null default '',
  email text not null,
  phone text not null default '',
  country text not null default '',
  area text not null default '',
  message text not null default '',
  source_page text not null default 'Contact Us',
  status text not null default 'New',
  assigned_to text not null default 'Sales Manager',
  last_updated date not null default current_date,
  notes jsonb not null default '[]'::jsonb
);

grant select on public.site_resources to anon, authenticated;
grant select on public.cms_pages to anon, authenticated;
grant select on public.seo_settings to anon, authenticated;
grant select on public.documents to anon, authenticated;
grant select on public.media_assets to anon, authenticated;
grant select, insert on public.leads to anon, authenticated;
grant select on public.admin_users to authenticated;
grant select, update on public.site_settings to authenticated;
grant select, update on public.cms_pages to authenticated;
grant select, update on public.seo_settings to authenticated;
grant select, update on public.leads to authenticated;

alter table public.site_resources enable row level security;
alter table public.cms_pages enable row level security;
alter table public.seo_settings enable row level security;
alter table public.documents enable row level security;
alter table public.media_assets enable row level security;
alter table public.leads enable row level security;
alter table public.admin_users enable row level security;
alter table public.site_settings enable row level security;

create policy "public can read site resources" on public.site_resources for select to anon, authenticated using (true);
create policy "public can read published pages" on public.cms_pages for select to anon using (status = 'Published');
create policy "authenticated can read all pages" on public.cms_pages for select to authenticated using (true);
create policy "public can read seo settings" on public.seo_settings for select to anon, authenticated using (true);
create policy "public can read published documents" on public.documents for select to anon using (status = 'Published');
create policy "authenticated can read all documents" on public.documents for select to authenticated using (true);
create policy "public can read media assets" on public.media_assets for select to anon, authenticated using (true);
create policy "public can insert leads" on public.leads for insert to anon, authenticated with check (true);
create policy "authenticated can read leads" on public.leads for select to authenticated using (true);
create policy "authenticated can read admin users" on public.admin_users for select to authenticated using (true);
create policy "authenticated can update pages" on public.cms_pages for update to authenticated using (true) with check (true);
create policy "authenticated can update seo settings" on public.seo_settings for update to authenticated using (true) with check (true);
create policy "authenticated can update leads" on public.leads for update to authenticated using (true) with check (true);
create policy "authenticated can read site settings" on public.site_settings for select to authenticated using (true);
create policy "authenticated can update site settings" on public.site_settings for update to authenticated using (true) with check (true);
