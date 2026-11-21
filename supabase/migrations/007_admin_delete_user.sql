-- ng · 007 Admin → Delete member (21 Nov 2026)
-- Run AFTER 005 (and 006): Dashboard → SQL Editor → New query → paste this whole file → Run. Safe to run again.
--
-- Deletes the member's sign-in account. Everything else of theirs goes with it (profile, notes, comments, quiz
-- answers, group places, progress), because every table points at the account with "on delete cascade".
-- This cannot be undone: use Pause to stop someone for a while. The admin cannot delete themselves or another admin.

create or replace function public.admin_delete_user(p_user uuid) returns void
language plpgsql security definer set search_path = '' as $$
declare v_role text;
begin
  if not public.is_admin() then raise exception 'Only the admin can delete members.'; end if;
  if p_user = auth.uid() then raise exception 'You cannot delete your own account.'; end if;
  select role into v_role from public.profiles where id = p_user;
  if v_role = 'admin' then raise exception 'Another admin cannot be deleted here.'; end if;
  delete from auth.users where id = p_user;
  if not found then raise exception 'No such member.'; end if;
end $$;
revoke execute on function public.admin_delete_user(uuid) from public, anon;
grant execute on function public.admin_delete_user(uuid) to authenticated;
