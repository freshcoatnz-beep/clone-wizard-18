create extension if not exists pg_cron;
create extension if not exists pg_net;

create table public.seo_scans (
  id uuid primary key default gen_random_uuid(),
  scanned_at timestamptz not null default now(),
  total_pages int not null default 0,
  total_issues int not null default 0,
  new_issues int not null default 0,
  resolved_issues int not null default 0,
  email_sent boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.seo_scan_findings (
  id uuid primary key default gen_random_uuid(),
  scan_id uuid not null references public.seo_scans(id) on delete cascade,
  url text not null,
  check_type text not null,
  severity text not null default 'warning',
  message text not null,
  created_at timestamptz not null default now()
);

create index idx_seo_scan_findings_scan_id on public.seo_scan_findings(scan_id);
create index idx_seo_scan_findings_key on public.seo_scan_findings(url, check_type, message);
create index idx_seo_scans_scanned_at on public.seo_scans(scanned_at desc);

alter table public.seo_scans enable row level security;
alter table public.seo_scan_findings enable row level security;

-- No public policies: only service role (edge function) can read/write.
