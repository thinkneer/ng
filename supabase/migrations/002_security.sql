-- ng · 002 security fixes (15 Nov 2026)
-- Run AFTER 001_init.sql: Dashboard → SQL Editor → New query → paste this whole file → Run.
-- Safe to run again, and it keeps every member and all their data (no drops of tables).
-- If you ever re-run 001_init.sql (which wipes everything), run this file again straight after it.
--
-- What it fixes:
--   (a) Members could read every column of every profile, including another member's session_token.
--       Now: your own row in full; admins see all rows; everyone else sees other members only through
--       the view public.members (id, nickname, role).
--   (c) A student could change their own exam score before submitting, and set submitted_at with any score.
--       Now: students never write score / max_score / started_at; a submitted attempt is locked;
--       submitted_at is stamped by the server clock; attempts can only start on an open exam.

-- ------------------------------------------------------------------ (a) profiles
drop policy if exists "profiles: read own or members" on public.profiles;
drop policy if exists "profiles: read own or admin" on public.profiles;
create policy "profiles: read own or admin" on public.profiles for select
  using (id = auth.uid() or public.is_admin());

-- Other members: nickname and role only, and only for approved members, and only to approved members.
-- The view runs with its owner's rights on purpose (that is how it can show three columns of rows the
-- caller cannot read directly). Supabase's linter lists it as a "Security Definer View"; that is expected:
-- the where-clause below is the guard, and session_token / status / class never leave the table.
drop view if exists public.members;
create view public.members as
  select p.id, p.nickname, p.role
  from public.profiles p
  where p.status = 'approved' and public.is_member();
revoke all on public.members from public, anon, authenticated;
grant select on public.members to authenticated;
comment on view public.members is 'Approved members as other members see them: id, nickname, role. Readable by approved members only.';

-- ------------------------------------------------------------------ (c) exam attempts
-- Students: insert only on an open exam, update only their own unsubmitted attempt, never the score.
drop policy if exists "attempts: own insert" on public.exam_attempts;
create policy "attempts: own insert" on public.exam_attempts for insert
  with check (
    public.is_member() and user_id = auth.uid()
    and exists (select 1 from public.exams e where e.id = exam_id and e.status = 'open')
  );
drop policy if exists "attempts: own update until submitted" on public.exam_attempts;
create policy "attempts: own update until submitted" on public.exam_attempts for update
  using ((user_id = auth.uid() and submitted_at is null) or public.is_staff())
  with check (user_id = auth.uid() or public.is_staff());

-- Column guard (row-level security cannot limit columns, so a trigger does): for anyone who is not a
-- teacher or admin, score / max_score / started_at / ids are kept as they were, and submitting is one-way.
create or replace function public.exam_attempt_guard() returns trigger
language plpgsql set search_path = public as $$
begin
  if public.is_staff() then return new; end if;
  if tg_op = 'INSERT' then
    new.score := null; new.max_score := null; new.started_at := now();
    if new.submitted_at is not null then new.submitted_at := now(); end if;
    return new;
  end if;
  if old.submitted_at is not null then raise exception 'This attempt is already submitted.'; end if;
  new.id := old.id; new.exam_id := old.exam_id; new.user_id := old.user_id;
  new.score := old.score; new.max_score := old.max_score; new.started_at := old.started_at;
  if new.submitted_at is not null then new.submitted_at := now(); end if;
  return new;
end $$;
drop trigger if exists exam_attempt_guard on public.exam_attempts;
create trigger exam_attempt_guard before insert or update on public.exam_attempts
  for each row execute function public.exam_attempt_guard();

-- ------------------------------------------------------------------ check (optional)
-- Signed in as a student in the app, these should hold; in the SQL editor you are the owner, so they don't apply there.
--   select * from public.profiles;            → only your own row
--   select * from public.members;             → id, nickname, role of approved members
