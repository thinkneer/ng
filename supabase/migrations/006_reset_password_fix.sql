-- ng · 006 Reset password that actually lets the member in (21 Nov 2026)
-- Run AFTER 005: Dashboard → SQL Editor → New query → paste this whole file → Run. Keeps all data; safe to run again.
--
-- Why: Admin → Reset password set the new temporary password, but two kinds of member still could not sign in:
--  1. Members who joined themselves with an email: their sign-in name is that email, not the nickname. Typing the
--     nickname looks for <nickname>@users.ng.local, which does not exist → "Username / email or password is wrong".
--  2. Members who joined while "Confirm email" was on and never tapped the link: Supabase refuses the sign-in
--     ("Email not confirmed") whatever the password is.
-- Now the reset also confirms the account, and returns what the member must type in "Username or email"
-- (the username, or the email masked like n•••@gmail.com), so the admin can tell them exactly that.

drop function if exists public.admin_set_password(uuid, text);
create function public.admin_set_password(p_user uuid, p_password text) returns text
language plpgsql security definer set search_path = '' as $$
declare
  v_email text;
  v_nick text;
begin
  if not public.is_admin() then raise exception 'Only the admin can reset passwords.'; end if;
  if p_user = auth.uid() then raise exception 'Change your own password under More → Change password.'; end if;
  if char_length(coalesce(p_password, '')) < 8 or p_password !~ '[A-Za-z]' or p_password !~ '[0-9]' then
    raise exception 'Password: at least 8 characters with letters and a number.';
  end if;
  update auth.users
     set encrypted_password = extensions.crypt(p_password, extensions.gen_salt('bf')),
         email_confirmed_at = coalesce(email_confirmed_at, now()),
         updated_at = now()
   where id = p_user
   returning email into v_email;
  if not found then raise exception 'No such member.'; end if;
  update public.profiles set must_change_password = true where id = p_user returning nickname into v_nick;
  if lower(v_email) like '%@users.ng.local' then return v_nick; end if;
  return left(v_email, 1) || '•••@' || split_part(v_email, '@', 2);
end $$;
revoke execute on function public.admin_set_password(uuid, text) from public, anon;
grant execute on function public.admin_set_password(uuid, text) to authenticated;
