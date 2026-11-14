-- ng · Supabase schema, v1 (14 Nov 2026)
-- Paste the whole file into the Supabase dashboard → SQL editor → Run. Safe to run once on a fresh project.
-- Covers: profiles with roles (admin / teacher / student) and approval; shared notes + comments;
-- teacher exams + attempts; the live quiz game. Everything is behind row-level security.
-- Nothing personal is stored here except the sign-in email, which stays in auth.users (never shown in the app).

create extension if not exists pgcrypto;

-- Re-runnable: drops everything this file creates (member data included) and builds it again.
drop trigger if exists on_auth_user_created on auth.users;
drop table if exists public.live_answers, public.live_players, public.live_keys, public.live_rooms,
  public.exam_attempts, public.exams, public.comments, public.shared_notes, public.profiles cascade;
drop function if exists public.handle_new_user(), public.nickname_available(text), public.claim_session(text),
  public.my_role(), public.is_admin(), public.is_staff(), public.is_member(),
  public.live_new_code(), public.live_create(text, text, text, int), public.live_join(text), public.live_next(uuid, jsonb, text, int),
  public.live_reveal(uuid), public.live_tally(uuid, text), public.live_answered(uuid), public.live_end(uuid) cascade;

-- ------------------------------------------------------------------ profiles
create table public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  nickname    text not null check (nickname ~ '^[A-Za-z0-9_]{3,20}$'),
  role        text not null default 'student' check (role in ('admin','teacher','student')),
  status      text not null default 'pending' check (status in ('pending','approved','suspended')),
  class       text not null default '12',
  stream      text not null default 'science',
  subjects    text[] not null default '{}',
  session_token text,                      -- one device at a time: the latest sign-in owns the account
  created_at  timestamptz not null default now(),
  approved_at timestamptz
);
create unique index profiles_nickname_lower on public.profiles (lower(nickname));
alter table public.profiles enable row level security;

-- Who am I (approved members only)
create or replace function public.my_role() returns text
language sql stable security definer set search_path = public as
$$ select role from public.profiles where id = auth.uid() and status = 'approved' $$;
create or replace function public.is_admin()  returns boolean language sql stable as $$ select public.my_role() = 'admin' $$;
create or replace function public.is_staff()  returns boolean language sql stable as $$ select public.my_role() in ('admin','teacher') $$;
create or replace function public.is_member() returns boolean language sql stable as $$ select public.my_role() is not null $$;

-- A profile row is created automatically when someone signs in for the first time (nickname from sign-up metadata).
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare nick text; base text; n int := 0; cls text; strm text;
begin
  nick := regexp_replace(coalesce(new.raw_user_meta_data->>'nickname', ''), '[^A-Za-z0-9_]', '', 'g');
  if length(nick) < 3 then nick := 'member' || floor(random() * 9000 + 1000)::int; end if;
  nick := left(nick, 20); base := nick;
  while exists (select 1 from public.profiles where lower(nickname) = lower(nick)) loop
    n := n + 1; nick := left(base, 20 - length(n::text)) || n;
  end loop;
  cls  := coalesce(nullif(new.raw_user_meta_data->>'class', ''), '12');
  strm := coalesce(nullif(new.raw_user_meta_data->>'stream', ''), case when cls in ('9','10') then 'general' else 'science' end);
  insert into public.profiles (id, nickname, class, stream) values (new.id, nick, cls, strm);
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- Nickname check before sign-up (callable without being signed in)
create or replace function public.nickname_available(nick text) returns boolean
language sql stable security definer set search_path = public as
$$ select nick ~ '^[A-Za-z0-9_]{3,20}$' and not exists (select 1 from public.profiles where lower(nickname) = lower(nick)) $$;
grant execute on function public.nickname_available(text) to anon, authenticated;

-- One login per user anywhere: a fresh sign-in claims the account; older devices see the token change and sign out.
create or replace function public.claim_session(tok text) returns void
language sql security definer set search_path = public as
$$ update public.profiles set session_token = tok where id = auth.uid() $$;
grant execute on function public.claim_session(text) to authenticated;

-- Everyone sees their own row; approved members see other members (nicknames, roles) for leaderboards and comments.
create policy "profiles: read own or members" on public.profiles for select
  using (id = auth.uid() or public.is_member());
-- Only admins change profiles (approve, role, pause). Members never edit their own row from the app.
create policy "profiles: admin updates" on public.profiles for update
  using (public.is_admin()) with check (public.is_admin());

-- ------------------------------------------------------------------ shared notes + comments
create table public.shared_notes (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles(id) on delete cascade,
  class      text not null default '12',
  subject    text not null,
  chapter    text not null,
  layer      text not null default 'notes',
  quote      text not null check (length(quote) between 1 and 1000),
  note       text not null default '' check (length(note) <= 2000),
  color      text not null default 'yellow',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index shared_notes_chapter on public.shared_notes (subject, chapter, created_at desc);
alter table public.shared_notes enable row level security;
create policy "notes: members read"   on public.shared_notes for select using (public.is_member());
create policy "notes: own insert"     on public.shared_notes for insert with check (public.is_member() and user_id = auth.uid());
create policy "notes: own update"     on public.shared_notes for update using (user_id = auth.uid() or public.is_admin());
create policy "notes: own delete"     on public.shared_notes for delete using (user_id = auth.uid() or public.is_staff());

create table public.comments (
  id         uuid primary key default gen_random_uuid(),
  note_id    uuid not null references public.shared_notes(id) on delete cascade,
  user_id    uuid not null references public.profiles(id) on delete cascade,
  body       text not null check (length(body) between 1 and 1000),
  created_at timestamptz not null default now()
);
create index comments_note on public.comments (note_id, created_at);
alter table public.comments enable row level security;
create policy "comments: members read" on public.comments for select using (public.is_member());
create policy "comments: own insert"   on public.comments for insert with check (public.is_member() and user_id = auth.uid());
create policy "comments: own delete"   on public.comments for delete using (user_id = auth.uid() or public.is_staff());

-- ------------------------------------------------------------------ teacher exams
create table public.exams (
  id            uuid primary key default gen_random_uuid(),
  teacher_id    uuid not null references public.profiles(id) on delete cascade,
  title         text not null check (length(title) between 1 and 120),
  class         text not null default '12',
  subject       text not null,
  question_refs jsonb not null default '[]',      -- [{subject, chapter, id}]
  duration_min  int not null default 60 check (duration_min between 5 and 240),
  status        text not null default 'draft' check (status in ('draft','open','closed')),
  opens_at      timestamptz,
  closes_at     timestamptz,
  created_at    timestamptz not null default now()
);
alter table public.exams enable row level security;
create policy "exams: members read open" on public.exams for select
  using (public.is_member() and (status <> 'draft' or teacher_id = auth.uid() or public.is_admin()));
create policy "exams: staff insert" on public.exams for insert with check (public.is_staff() and teacher_id = auth.uid());
create policy "exams: owner update" on public.exams for update using (teacher_id = auth.uid() or public.is_admin());
create policy "exams: owner delete" on public.exams for delete using (teacher_id = auth.uid() or public.is_admin());

create table public.exam_attempts (
  id           uuid primary key default gen_random_uuid(),
  exam_id      uuid not null references public.exams(id) on delete cascade,
  user_id      uuid not null references public.profiles(id) on delete cascade,
  answers      jsonb not null default '{}',
  score        numeric,
  max_score    numeric,
  started_at   timestamptz not null default now(),
  submitted_at timestamptz,
  unique (exam_id, user_id)
);
alter table public.exam_attempts enable row level security;
create policy "attempts: own or staff read" on public.exam_attempts for select
  using (user_id = auth.uid() or public.is_staff());
create policy "attempts: own insert" on public.exam_attempts for insert with check (public.is_member() and user_id = auth.uid());
create policy "attempts: own update until submitted" on public.exam_attempts for update
  using ((user_id = auth.uid() and submitted_at is null) or public.is_staff());

-- ------------------------------------------------------------------ live quiz game
create table public.live_rooms (
  id                  uuid primary key default gen_random_uuid(),
  code                text not null unique,
  host_id             uuid not null references public.profiles(id) on delete cascade,
  title               text not null default '',
  subject             text,
  chapter             text,
  status              text not null default 'lobby' check (status in ('lobby','question','reveal','ended')),
  q_index             int not null default 0,
  q_total             int not null default 0,
  question            jsonb,              -- current question for players: {id, type, stem, options} — never the answer
  question_started_at timestamptz,
  ends_at             timestamptz,
  revealed_answer     text,               -- filled at reveal
  created_at          timestamptz not null default now()
);
alter table public.live_rooms replica identity full;
alter table public.live_rooms enable row level security;
create policy "rooms: members read"  on public.live_rooms for select using (public.is_member());
create policy "rooms: staff host"    on public.live_rooms for insert with check (public.is_staff() and host_id = auth.uid());
create policy "rooms: host update"   on public.live_rooms for update using (host_id = auth.uid() or public.is_admin());
create policy "rooms: host delete"   on public.live_rooms for delete using (host_id = auth.uid() or public.is_admin());

-- Correct answers live apart from the room row, readable by the host only.
create table public.live_keys (
  room_id uuid not null references public.live_rooms(id) on delete cascade,
  qid     text not null,
  answer  text not null,
  primary key (room_id, qid)
);
alter table public.live_keys enable row level security;
create policy "keys: host only" on public.live_keys for all
  using (exists (select 1 from public.live_rooms r where r.id = room_id and r.host_id = auth.uid()))
  with check (exists (select 1 from public.live_rooms r where r.id = room_id and r.host_id = auth.uid()));

create table public.live_players (
  room_id   uuid not null references public.live_rooms(id) on delete cascade,
  user_id   uuid not null references public.profiles(id) on delete cascade,
  nickname  text not null,
  score     int not null default 0,
  joined_at timestamptz not null default now(),
  primary key (room_id, user_id)
);
alter table public.live_players replica identity full;
alter table public.live_players enable row level security;
create policy "players: members read" on public.live_players for select using (public.is_member());
create policy "players: own leave"    on public.live_players for delete using (user_id = auth.uid());

create table public.live_answers (
  room_id     uuid not null references public.live_rooms(id) on delete cascade,
  qid         text not null,
  user_id     uuid not null references public.profiles(id) on delete cascade,
  key         text not null check (key ~ '^[A-F]$'),
  answered_at timestamptz not null default now(),
  correct     boolean,
  primary key (room_id, qid, user_id)
);
alter table public.live_answers replica identity full;
alter table public.live_answers enable row level security;
create policy "answers: own or host read" on public.live_answers for select
  using (user_id = auth.uid() or exists (select 1 from public.live_rooms r where r.id = room_id and r.host_id = auth.uid()));
-- A player may answer the current question once, while it is open (2 s grace for slow phones).
create policy "answers: players insert while open" on public.live_answers for insert
  with check (
    user_id = auth.uid()
    and exists (select 1 from public.live_players p where p.room_id = live_answers.room_id and p.user_id = auth.uid())
    and exists (select 1 from public.live_rooms r where r.id = room_id and r.status = 'question'
                and r.question->>'id' = qid and now() <= r.ends_at + interval '2 seconds')
  );

-- Room code: 5 characters, no look-alikes
create or replace function public.live_new_code() returns text language plpgsql as $$
declare chars text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; c text; i int;
begin
  loop
    c := '';
    for i in 1..5 loop c := c || substr(chars, 1 + floor(random() * length(chars))::int, 1); end loop;
    exit when not exists (select 1 from public.live_rooms where code = c and status <> 'ended');
  end loop;
  return c;
end $$;

-- Host: create a room. Returns the room row.
create or replace function public.live_create(p_title text, p_subject text, p_chapter text, p_total int)
returns public.live_rooms language plpgsql security definer set search_path = public as $$
declare r public.live_rooms;
begin
  if not public.is_staff() then raise exception 'teachers and admins only'; end if;
  insert into public.live_rooms (code, host_id, title, subject, chapter, q_total)
    values (public.live_new_code(), auth.uid(), left(coalesce(p_title, ''), 80), p_subject, p_chapter, greatest(p_total, 0)) returning * into r;
  return r;
end $$;

-- Player: join by code. Returns the room id.
create or replace function public.live_join(p_code text) returns uuid
language plpgsql security definer set search_path = public as $$
declare r public.live_rooms; nick text;
begin
  if not public.is_member() then raise exception 'members only'; end if;
  select * into r from public.live_rooms where code = upper(trim(p_code)) and status <> 'ended' order by created_at desc limit 1;
  if r.id is null then raise exception 'No live quiz with that code'; end if;
  select nickname into nick from public.profiles where id = auth.uid();
  insert into public.live_players (room_id, user_id, nickname) values (r.id, auth.uid(), nick) on conflict do nothing;
  return r.id;
end $$;

-- Host: push the next question. p_question has {id, type, stem, options}; p_answer is the key (A–F).
create or replace function public.live_next(p_room uuid, p_question jsonb, p_answer text, p_seconds int default 30)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.live_rooms where id = p_room and host_id = auth.uid()) then raise exception 'host only'; end if;
  insert into public.live_keys (room_id, qid, answer) values (p_room, p_question->>'id', upper(p_answer))
    on conflict (room_id, qid) do update set answer = excluded.answer;
  update public.live_rooms set status = 'question', question = p_question, revealed_answer = null,
    question_started_at = now(), ends_at = now() + make_interval(secs => greatest(5, least(p_seconds, 300))), q_index = q_index + 1
    where id = p_room;
end $$;

-- Host: reveal. Marks answers, awards 1 point per correct answer, and returns the tally per option.
create or replace function public.live_reveal(p_room uuid)
returns table (key text, n bigint, is_correct boolean) language plpgsql security definer set search_path = public as $$
declare r public.live_rooms; k text;
begin
  select * into r from public.live_rooms where id = p_room and host_id = auth.uid();
  if r.id is null then raise exception 'host only'; end if;
  select answer into k from public.live_keys where room_id = p_room and qid = r.question->>'id';
  if r.status = 'question' then
    update public.live_answers a set correct = (a.key = k) where a.room_id = p_room and a.qid = r.question->>'id';
    update public.live_players p set score = p.score + 1 from public.live_answers a
      where a.room_id = p_room and a.qid = r.question->>'id' and a.user_id = p.user_id and p.room_id = p_room and a.correct;
    update public.live_rooms set status = 'reveal', revealed_answer = k where id = p_room;
  end if;
  return query select t.key, t.n, t.key = k from public.live_tally(p_room, r.question->>'id') t;
end $$;

-- Anyone in the room: counts per option (only once the question is revealed, or for the host).
create or replace function public.live_tally(p_room uuid, p_qid text)
returns table (key text, n bigint) language plpgsql stable security definer set search_path = public as $$
declare r public.live_rooms;
begin
  select * into r from public.live_rooms where id = p_room;
  if r.id is null then return; end if;
  if r.host_id <> auth.uid() and r.status = 'question' and r.question->>'id' = p_qid then return; end if;
  if r.host_id <> auth.uid() and not exists (select 1 from public.live_players p where p.room_id = p_room and p.user_id = auth.uid()) then return; end if;
  return query select a.key, count(*) from public.live_answers a where a.room_id = p_room and a.qid = p_qid group by a.key order by a.key;
end $$;

-- Anyone in the room: how many have answered the current question.
create or replace function public.live_answered(p_room uuid) returns int
language sql stable security definer set search_path = public as $$
  select count(*)::int from public.live_answers a join public.live_rooms r on r.id = a.room_id
  where a.room_id = p_room and a.qid = r.question->>'id'
    and (r.host_id = auth.uid() or exists (select 1 from public.live_players p where p.room_id = p_room and p.user_id = auth.uid()))
$$;

-- Host: end the game.
create or replace function public.live_end(p_room uuid) returns void
language sql security definer set search_path = public as $$
  update public.live_rooms set status = 'ended', ends_at = now() where id = p_room and host_id = auth.uid()
$$;

grant execute on function public.live_create(text, text, text, int) to authenticated;
grant execute on function public.live_join(text) to authenticated;
grant execute on function public.live_next(uuid, jsonb, text, int) to authenticated;
grant execute on function public.live_reveal(uuid) to authenticated;
grant execute on function public.live_tally(uuid, text) to authenticated;
grant execute on function public.live_answered(uuid) to authenticated;
grant execute on function public.live_end(uuid) to authenticated;

-- Realtime: players follow their room row; the host follows players and answers.
alter publication supabase_realtime add table public.live_rooms, public.live_players, public.live_answers;

-- ------------------------------------------------------------------ after running this file
-- 1. Join the app once with your own email + password (it creates your profile as a pending student).
-- 2. Make yourself admin (replace the nickname with the one you typed at sign-up):
--      update public.profiles set role = 'admin', status = 'approved', approved_at = now() where lower(nickname) = lower('ni8951');
-- 3. From then on, approve members and set teacher / student roles from More → Admin dashboard in the app.
