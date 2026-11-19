-- ng · 005 accounts without email, like DAME Hub (19 Nov 2026)
-- Run AFTER 001–004 (003 may be skipped): Dashboard → SQL Editor → New query → paste this whole file → Run.
-- Keeps every member and all their data; safe to run again.
--
-- Admin dashboard → New member asks only for a username (the nickname), a temporary password, student / teacher
-- and the class. The member signs in with the username and the temporary password and must choose their own
-- password at that first sign-in. No email is needed: the sign-in system gets an internal address
-- <username>@users.ng.local that nobody sees and that never receives mail. Members who joined with their own email
-- keep signing in with it. Admin → Reset password gives anyone a new temporary password (same first-sign-in rule),
-- which is how members without an email get back in.

create extension if not exists pgcrypto;

alter table public.profiles add column if not exists must_change_password boolean not null default false;

-- 003's email version is replaced by admin_create_user below.
drop function if exists public.admin_create_member(text, text, text, text, text, text, text[]);

create or replace function public.admin_create_user(
  p_nickname text, p_password text,
  p_role text default 'student', p_class text default '12', p_stream text default 'science', p_subjects text[] default '{}'
) returns uuid
language plpgsql security definer set search_path = '' as $$
declare
  v_id uuid := gen_random_uuid();
  v_nick text := trim(coalesce(p_nickname, ''));
  v_email text;
  v_role text := coalesce(nullif(p_role, ''), 'student');
  v_class text := coalesce(nullif(p_class, ''), '12');
  v_stream text := coalesce(nullif(p_stream, ''), case when coalesce(nullif(p_class, ''), '12') in ('9','10') then 'general' else 'science' end);
begin
  if not public.is_admin() then raise exception 'Only the admin can create members.'; end if;
  if v_nick !~ '^[A-Za-z0-9_]{3,20}$' then raise exception 'Username: 3–20 letters, digits or _ (no spaces).'; end if;
  v_email := lower(v_nick) || '@users.ng.local';
  if exists (select 1 from public.profiles p where lower(p.nickname) = lower(v_nick))
     or exists (select 1 from auth.users u where lower(u.email) = v_email) then raise exception 'That username is taken.'; end if;
  if char_length(coalesce(p_password, '')) < 8 or p_password !~ '[A-Za-z]' or p_password !~ '[0-9]' then
    raise exception 'Password: at least 8 characters with letters and a number.';
  end if;
  if v_role not in ('student', 'teacher') then raise exception 'Role must be student or teacher.'; end if;
  if v_class not in ('9', '10', '11', '12', 'any') then raise exception 'Unknown class.'; end if;
  if v_class = 'any' then v_stream := 'any'; end if;

  insert into auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
    raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
    confirmation_token, recovery_token, email_change_token_new, email_change, email_change_token_current,
    phone_change, phone_change_token, reauthentication_token)
  values ('00000000-0000-0000-0000-000000000000', v_id, 'authenticated', 'authenticated',
    v_email, extensions.crypt(p_password, extensions.gen_salt('bf')), now(),
    '{"provider":"email","providers":["email"]}',
    jsonb_build_object('nickname', v_nick, 'class', v_class, 'stream', v_stream),
    now(), now(), '', '', '', '', '', '', '', '');
  insert into auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
  values (gen_random_uuid(), v_id, jsonb_build_object('sub', v_id::text, 'email', v_email, 'email_verified', true),
    'email', v_id::text, now(), now(), now());

  -- handle_new_user (001) made the profile row; approve it with the chosen role and access
  update public.profiles
     set nickname = v_nick, role = v_role, status = 'approved', approved_at = now(),
         class = v_class, stream = v_stream, subjects = coalesce(p_subjects, '{}'), must_change_password = true
   where id = v_id;
  if not found then raise exception 'The profile was not created. Run 001_init.sql and 002_security.sql first.'; end if;
  return v_id;
end $$;
revoke execute on function public.admin_create_user(text, text, text, text, text, text[]) from public, anon;
grant execute on function public.admin_create_user(text, text, text, text, text, text[]) to authenticated;

-- Admin: a new temporary password for a member (they choose their own at the next sign-in).
create or replace function public.admin_set_password(p_user uuid, p_password text) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'Only the admin can reset passwords.'; end if;
  if p_user = auth.uid() then raise exception 'Change your own password under More → Change password.'; end if;
  if char_length(coalesce(p_password, '')) < 8 or p_password !~ '[A-Za-z]' or p_password !~ '[0-9]' then
    raise exception 'Password: at least 8 characters with letters and a number.';
  end if;
  update auth.users set encrypted_password = extensions.crypt(p_password, extensions.gen_salt('bf')), updated_at = now() where id = p_user;
  if not found then raise exception 'No such member.'; end if;
  update public.profiles set must_change_password = true where id = p_user;
end $$;
revoke execute on function public.admin_set_password(uuid, text) from public, anon;
grant execute on function public.admin_set_password(uuid, text) to authenticated;

-- The member, after choosing their own password: clear the flag (members cannot update profiles themselves).
create or replace function public.password_changed() returns void
language sql security definer set search_path = '' as $$
  update public.profiles set must_change_password = false where id = auth.uid();
$$;
revoke execute on function public.password_changed() from public, anon;
grant execute on function public.password_changed() to authenticated;
