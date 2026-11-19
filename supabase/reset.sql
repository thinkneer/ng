-- ng · FULL RESET — everyone starts afresh. Run in Dashboard → SQL Editor, then run 001_init.sql and 002_security.sql again.
-- This deletes every member account (sign-in emails, nicknames, roles), every shared note, exam and live quiz.
-- The study content is not touched (it lives in the repo, not the database).

-- 1. App tables and functions (same drops as the top of 001_init.sql)
drop trigger if exists on_auth_user_created on auth.users;
drop view if exists public.members;  -- from 002_security.sql
drop table if exists public.live_answers, public.live_players, public.live_keys, public.live_rooms,
  public.exam_attempts, public.exams, public.comments, public.shared_notes, public.profiles cascade;
drop function if exists public.handle_new_user(), public.nickname_available(text), public.claim_session(text),
  public.my_role(), public.is_admin(), public.is_staff(), public.is_member(),
  public.live_new_code(), public.live_create(text, text, text, int), public.live_join(text), public.live_next(uuid, jsonb, text, int),
  public.live_reveal(uuid), public.live_tally(uuid, text), public.live_answered(uuid), public.live_end(uuid),
  public.exam_attempt_guard(), public.admin_create_member(text, text, text, text, text, text, text[]) cascade;  -- the last two come from 002 and 003

-- 2. Sign-in accounts (cascades to sessions, identities, refresh tokens)
delete from auth.users;

-- 3. Now run supabase/migrations/001_init.sql, then 002_security.sql, then Join on the site and make yourself admin (docs/supabase-setup.md §3).
