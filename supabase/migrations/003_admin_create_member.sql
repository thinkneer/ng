-- ng · 003 admin creates members (19 Nov 2026)
-- Run AFTER 001 and 002: Dashboard → SQL Editor → New query → paste this whole file → Run.
-- Keeps every member and all their data; safe to run again.
--
-- What it adds: Admin dashboard → "New member". The admin types a nickname, the member's sign-in email and a
-- first password, picks student / teacher and the class; the account is created already approved, so the
-- member just signs in (no Join, no waiting). Same idea as DAME Hub's core_admin_create_user.
-- The email goes only into auth.users (never shown in the app). The member can change the password later
-- (More → Change password) and Forgot password works as usual because the email is real.

create extension if not exists pgcrypto;

create or replace function public.admin_create_member(
  p_email text, p_password text, p_nickname text,
  p_role text default 'student', p_class text default '12', p_stream text default 'science', p_subjects text[] default '{}'
) returns uuid
language plpgsql security definer set search_path = '' as $$
declare
  v_id uuid := gen_random_uuid();
  v_email text := lower(trim(coalesce(p_email, '')));
  v_nick text := trim(coalesce(p_nickname, ''));
  v_role text := coalesce(nullif(p_role, ''), 'student');
  v_class text := coalesce(nullif(p_class, ''), '12');
  v_stream text := coalesce(nullif(p_stream, ''), case when coalesce(nullif(p_class, ''), '12') in ('9','10') then 'general' else 'science' end);
begin
  if not public.is_admin() then raise exception 'Only the admin can create members.'; end if;
  if v_nick !~ '^[A-Za-z0-9_]{3,20}$' then raise exception 'Nickname: 3–20 letters, digits or _ (no spaces).'; end if;
  if exists (select 1 from public.profiles p where lower(p.nickname) = lower(v_nick)) then raise exception 'That nickname is taken.'; end if;
  if v_email !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then raise exception 'That email doesn’t look right.'; end if;
  if exists (select 1 from auth.users u where lower(u.email) = v_email) then raise exception 'That email already has an account.'; end if;
  if char_length(coalesce(p_password, '')) < 8 or p_password !~ '[A-Za-z]' or p_password !~ '[0-9]' then
    raise exception 'Password: at least 8 characters with letters and a number.';
  end if;
  if v_role not in ('student', 'teacher') then raise exception 'Role must be student or teacher.'; end if;
  if v_class not in ('9', '10', '11', '12', 'any') then raise exception 'Unknown class.'; end if;
  if v_class = 'any' then v_stream := 'any'; end if;

  -- The sign-in account (email confirmed, so the member can sign in at once)
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

  -- handle_new_user (001) made the profile row; approve it straight away with the chosen role and access
  update public.profiles
     set nickname = v_nick, role = v_role, status = 'approved', approved_at = now(),
         class = v_class, stream = v_stream, subjects = coalesce(p_subjects, '{}')
   where id = v_id;
  if not found then raise exception 'The profile was not created. Run 001_init.sql and 002_security.sql first.'; end if;
  return v_id;
end $$;
revoke execute on function public.admin_create_member(text, text, text, text, text, text, text[]) from public, anon;
grant execute on function public.admin_create_member(text, text, text, text, text, text, text[]) to authenticated;
