-- 编剧结构实验室 Supabase 初始化 SQL
-- 需要在 Supabase SQL Editor 中执行，或用 Management API 搭配 Supabase Access Token 执行。

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  avatar_url text,
  bio text,
  created_at timestamptz default now()
);

create table if not exists public.scripts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  content text not null,
  tags text[],
  framework_type text,
  likes_count integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.likes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  script_id uuid references public.scripts(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, script_id)
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  script_id uuid references public.scripts(id) on delete cascade,
  content text not null,
  created_at timestamptz default now()
);

create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamptz default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists scripts_set_updated_at on public.scripts;
create trigger scripts_set_updated_at
before update on public.scripts
for each row execute function public.set_updated_at();

create or replace function public.sync_script_likes_count()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op = 'INSERT' then
    update public.scripts
    set likes_count = likes_count + 1
    where id = new.script_id;
    return new;
  elsif tg_op = 'DELETE' then
    update public.scripts
    set likes_count = greatest(likes_count - 1, 0)
    where id = old.script_id;
    return old;
  end if;
  return null;
end;
$$;

drop trigger if exists likes_sync_count_insert on public.likes;
create trigger likes_sync_count_insert
after insert on public.likes
for each row execute function public.sync_script_likes_count();

drop trigger if exists likes_sync_count_delete on public.likes;
create trigger likes_sync_count_delete
after delete on public.likes
for each row execute function public.sync_script_likes_count();

alter table public.profiles enable row level security;
alter table public.scripts enable row level security;
alter table public.likes enable row level security;
alter table public.comments enable row level security;
alter table public.chat_messages enable row level security;

drop policy if exists "profiles readable by everyone" on public.profiles;
create policy "profiles readable by everyone"
on public.profiles for select
using (true);

drop policy if exists "profiles insert own" on public.profiles;
create policy "profiles insert own"
on public.profiles for insert
to authenticated
with check (auth.uid() = id);

drop policy if exists "profiles update own" on public.profiles;
create policy "profiles update own"
on public.profiles for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "scripts readable by everyone" on public.scripts;
create policy "scripts readable by everyone"
on public.scripts for select
using (true);

drop policy if exists "scripts insert own" on public.scripts;
create policy "scripts insert own"
on public.scripts for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "scripts update own" on public.scripts;
create policy "scripts update own"
on public.scripts for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "scripts delete own" on public.scripts;
create policy "scripts delete own"
on public.scripts for delete
to authenticated
using (auth.uid() = user_id);

drop policy if exists "likes readable by everyone" on public.likes;
create policy "likes readable by everyone"
on public.likes for select
using (true);

drop policy if exists "likes insert own" on public.likes;
create policy "likes insert own"
on public.likes for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "likes delete own" on public.likes;
create policy "likes delete own"
on public.likes for delete
to authenticated
using (auth.uid() = user_id);

drop policy if exists "comments readable by everyone" on public.comments;
create policy "comments readable by everyone"
on public.comments for select
using (true);

drop policy if exists "comments insert own" on public.comments;
create policy "comments insert own"
on public.comments for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "comments update own" on public.comments;
create policy "comments update own"
on public.comments for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "comments delete own" on public.comments;
create policy "comments delete own"
on public.comments for delete
to authenticated
using (auth.uid() = user_id);

drop policy if exists "chat messages select own" on public.chat_messages;
create policy "chat messages select own"
on public.chat_messages for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "chat messages insert own" on public.chat_messages;
create policy "chat messages insert own"
on public.chat_messages for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "chat messages update own" on public.chat_messages;
create policy "chat messages update own"
on public.chat_messages for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "chat messages delete own" on public.chat_messages;
create policy "chat messages delete own"
on public.chat_messages for delete
to authenticated
using (auth.uid() = user_id);

create index if not exists scripts_created_at_idx on public.scripts(created_at desc);
create index if not exists scripts_likes_count_idx on public.scripts(likes_count desc);
create index if not exists scripts_framework_type_idx on public.scripts(framework_type);
create index if not exists likes_script_id_idx on public.likes(script_id);
create index if not exists comments_script_id_idx on public.comments(script_id, created_at desc);
create index if not exists chat_messages_user_created_idx on public.chat_messages(user_id, created_at asc);
