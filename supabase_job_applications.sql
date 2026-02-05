-- Additional schema for general resume submissions
-- The existing job_applications table already supports this use case
-- since the "role" field can accept "General Application - [area of interest]"

-- If you haven't created the job_applications table yet, run this:

create table if not exists public.job_applications (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text,
  phone text not null,
  role text not null, -- Can be a specific job title OR "General Application - [area]"
  resume_url text,
  resume_filename text,
  status text default 'pending' -- pending, reviewed, contacted, hired, rejected
);

-- Enable Row Level Security (RLS)
alter table public.job_applications enable row level security;

-- Policy for authenticated users to read applications
create policy "Enable read access for authenticated users only"
on public.job_applications
for select
to authenticated
using (true);

-- Also make sure you have the 'resumes' storage bucket created in Supabase
-- Go to Storage in Supabase dashboard and create a bucket named "resumes"
-- Set it to public if you want to access resume URLs directly
