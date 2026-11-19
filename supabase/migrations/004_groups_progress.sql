-- ng · 004 teachers, groups and student progress (19 Nov 2026)
-- Run AFTER 001, 002 and 003 (in that order): Dashboard → SQL Editor → New query → paste this whole file → Run.
-- Keeps every member and all their data; safe to run again.
--
-- What it adds (admin → teachers → students):
--   groups            a teacher's group of students, e.g. "Class 12 Science" or "Class 12 Physics" (one class,
--                     optionally one subject). A student can be in several groups (physics + chemistry teachers).
--   group_members     who is in which group.
--   student_progress  one row per member: a summary the member's phone saves (papers and marks, streak, chapters
--                     read, recall, mistakes, study minutes). Readable by the member, their group teachers, the admin.
-- Students make their own profile (Join, as before). Teachers pick existing students into their groups, like picking
-- a team, take them out again, and see each student's progress and the live quizzes the teacher ran.
-- The admin sees every teacher, group and student (and can still create members, 003).
-- Every write goes through the functions below (security definer, guard first); the tables only allow reads.

create extension if not exists pgcrypto;
create schema if not exists ng_private;
revoke all on schema ng_private from public, anon, authenticated;

-- ------------------------------------------------------------------ tables
create table if not exists public.groups (
  id         uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  name       text not null check (char_length(name) between 1 and 60),
  class      text not null default '12',
  stream     text not null default 'science',
  subject    text,                                   -- null = every subject (a class teacher)
  created_at timestamptz not null default now()
);
create index if not exists groups_teacher on public.groups (teacher_id);
alter table public.groups enable row level security;

create table if not exists public.group_members (
  group_id   uuid not null references public.groups(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  added_at   timestamptz not null default now(),
  primary key (group_id, student_id)
);
create index if not exists group_members_student on public.group_members (student_id);
alter table public.group_members enable row level security;

create table if not exists public.student_progress (
  user_id    uuid primary key references public.profiles(id) on delete cascade,
  summary    jsonb not null default '{}',
  updated_at timestamptz not null default now()
);
alter table public.student_progress enable row level security;

-- ------------------------------------------------------------------ who may see whom
-- True when the caller (an approved teacher or admin) has this student in one of their groups.
create or replace function public.teaches(p_student uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select public.is_staff() and exists (
    select 1 from public.group_members gm join public.groups g on g.id = gm.group_id
    where gm.student_id = p_student and g.teacher_id = auth.uid())
$$;
revoke execute on function public.teaches(uuid) from public, anon;
grant execute on function public.teaches(uuid) to authenticated;

drop policy if exists "groups: own or admin" on public.groups;
create policy "groups: own or admin" on public.groups for select
  using (public.is_admin() or (public.is_staff() and teacher_id = auth.uid()));
drop policy if exists "group members: group owner or admin" on public.group_members;
create policy "group members: group owner or admin" on public.group_members for select
  using (public.is_admin() or exists (select 1 from public.groups g where g.id = group_id and g.teacher_id = auth.uid() and public.is_staff()));
drop policy if exists "progress: own, teacher or admin" on public.student_progress;
create policy "progress: own, teacher or admin" on public.student_progress for select
  using (user_id = auth.uid() or public.is_admin() or public.teaches(user_id));

-- ------------------------------------------------------------------ helpers
-- A group the caller may manage (its teacher, or the admin); raises otherwise.
create or replace function ng_private.my_group(p_group uuid) returns public.groups
language plpgsql stable security definer set search_path = '' as $$
declare g public.groups;
begin
  if not public.is_staff() then raise exception 'Only teachers and the admin can do this.'; end if;
  select * into g from public.groups where id = p_group;
  if g.id is null or (g.teacher_id <> auth.uid() and not public.is_admin()) then raise exception 'That group is not yours.'; end if;
  return g;
end $$;
revoke execute on function ng_private.my_group(uuid) from public, anon, authenticated;


-- ------------------------------------------------------------------ groups
-- Create (p_id null) or change a group. Teachers own their groups; the admin may set any teacher.
create or replace function public.group_save(p_id uuid, p_name text, p_class text, p_stream text, p_subject text, p_teacher uuid default null)
returns uuid language plpgsql security definer set search_path = '' as $$
declare v_teacher uuid := coalesce(p_teacher, auth.uid()); v_name text := trim(coalesce(p_name, '')); g public.groups;
        v_class text := coalesce(nullif(p_class, ''), '12');
        v_stream text := coalesce(nullif(p_stream, ''), case when coalesce(nullif(p_class, ''), '12') in ('9','10') then 'general' else 'science' end);
begin
  if not public.is_staff() then raise exception 'Only teachers and the admin can do this.'; end if;
  if not public.is_admin() then v_teacher := auth.uid(); end if;
  if not exists (select 1 from public.profiles p where p.id = v_teacher and p.role in ('teacher', 'admin') and p.status = 'approved') then
    raise exception 'Pick an approved teacher.';
  end if;
  if char_length(v_name) not between 1 and 60 then raise exception 'Group name: 1–60 characters.'; end if;
  if v_class not in ('9', '10', '11', '12') then raise exception 'Unknown class.'; end if;
  if p_subject is not null and p_subject !~ '^[a-z0-9-]{2,40}$' then raise exception 'Unknown subject.'; end if;
  if p_id is null then
    insert into public.groups (teacher_id, name, class, stream, subject) values (v_teacher, v_name, v_class, v_stream, nullif(p_subject, ''))
    returning id into p_id;
  else
    g := ng_private.my_group(p_id);
    update public.groups set teacher_id = v_teacher, name = v_name, class = v_class, stream = v_stream, subject = nullif(p_subject, '') where id = g.id;
  end if;
  return p_id;
end $$;
revoke execute on function public.group_save(uuid, text, text, text, text, uuid) from public, anon;
grant execute on function public.group_save(uuid, text, text, text, text, uuid) to authenticated;

-- Delete a group (its students keep their accounts and progress).
create or replace function public.group_delete(p_group uuid) returns void
language plpgsql security definer set search_path = '' as $$
declare g public.groups;
begin
  g := ng_private.my_group(p_group);
  delete from public.groups where id = g.id;
end $$;
revoke execute on function public.group_delete(uuid) from public, anon;
grant execute on function public.group_delete(uuid) to authenticated;

-- The team picker: every approved student (nickname, class) with whether they are already in this group.
-- Students of the group's class come first. Nicknames are what members already see of each other.
create or replace function public.group_pick_list(p_group uuid) returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare g public.groups;
begin
  g := ng_private.my_group(p_group);
  return coalesce((
    select jsonb_agg(jsonb_build_object('id', s.id, 'nickname', s.nickname, 'class', s.class, 'stream', s.stream,
             'in_group', exists (select 1 from public.group_members gm where gm.group_id = g.id and gm.student_id = s.id))
           order by (s.class = g.class and (s.stream = g.stream or g.stream = 'general')) desc, lower(s.nickname))
    from public.profiles s where s.role = 'student' and s.status = 'approved'), '[]'::jsonb);
end $$;
revoke execute on function public.group_pick_list(uuid) from public, anon;
grant execute on function public.group_pick_list(uuid) to authenticated;

-- Add the picked students (approved students only; ones already in stay). Returns how many were added.
create or replace function public.group_add_students(p_group uuid, p_students uuid[]) returns int
language plpgsql security definer set search_path = '' as $$
declare g public.groups; n int;
begin
  g := ng_private.my_group(p_group);
  if coalesce(array_length(p_students, 1), 0) > 500 then raise exception 'Pick at most 500 at a time.'; end if;
  insert into public.group_members (group_id, student_id)
    select g.id, s.id from public.profiles s
    where s.id = any(coalesce(p_students, '{}')) and s.role = 'student' and s.status = 'approved'
  on conflict do nothing;
  get diagnostics n = row_count;
  return n;
end $$;
revoke execute on function public.group_add_students(uuid, uuid[]) from public, anon;
grant execute on function public.group_add_students(uuid, uuid[]) to authenticated;

-- Take a student out of a group (the account stays).
create or replace function public.group_remove_student(p_group uuid, p_student uuid) returns void
language plpgsql security definer set search_path = '' as $$
declare g public.groups;
begin
  g := ng_private.my_group(p_group);
  delete from public.group_members where group_id = g.id and student_id = p_student;
end $$;
revoke execute on function public.group_remove_student(uuid, uuid) from public, anon;
grant execute on function public.group_remove_student(uuid, uuid) to authenticated;

-- ------------------------------------------------------------------ progress
-- The member's phone saves its own summary (one row each; about 2–20 KB).
create or replace function public.progress_save(p_summary jsonb) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if not public.is_member() then raise exception 'Sign in first.'; end if;
  if jsonb_typeof(p_summary) <> 'object' or pg_column_size(p_summary) > 200000 then raise exception 'Progress summary too large.'; end if;
  insert into public.student_progress (user_id, summary, updated_at) values (auth.uid(), p_summary, now())
  on conflict (user_id) do update set summary = excluded.summary, updated_at = now();
end $$;
revoke execute on function public.progress_save(jsonb) from public, anon;
grant execute on function public.progress_save(jsonb) to authenticated;

-- One call for the My students page: the caller's groups (admin: every group, every teacher, and students in no group).
-- Each student comes with the headline numbers of their summary only.
create or replace function public.staff_overview() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare v_admin boolean := public.is_admin(); v jsonb;
begin
  if not public.is_staff() then raise exception 'Only teachers and the admin can do this.'; end if;
  select jsonb_build_object(
    'groups', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', g.id, 'name', g.name, 'class', g.class, 'stream', g.stream, 'subject', g.subject,
        'teacher_id', g.teacher_id, 'teacher', t.nickname,
        'students', coalesce((
          select jsonb_agg(jsonb_build_object('id', s.id, 'nickname', s.nickname, 'status', s.status, 'class', s.class, 'stream', s.stream,
                   'head', sp.summary -> 'head', 'synced', sp.updated_at) order by lower(s.nickname))
          from public.group_members gm join public.profiles s on s.id = gm.student_id
          left join public.student_progress sp on sp.user_id = s.id
          where gm.group_id = g.id), '[]'::jsonb)
      ) order by lower(t.nickname), g.class desc, lower(g.name))
      from public.groups g join public.profiles t on t.id = g.teacher_id
      where v_admin or g.teacher_id = auth.uid()), '[]'::jsonb),
    'teachers', case when v_admin then coalesce((
      select jsonb_agg(jsonb_build_object('id', p.id, 'nickname', p.nickname, 'role', p.role) order by p.role, lower(p.nickname))
      from public.profiles p where p.role in ('teacher', 'admin') and p.status = 'approved'), '[]'::jsonb) else '[]'::jsonb end,
    'ungrouped', case when v_admin then coalesce((
      select jsonb_agg(jsonb_build_object('id', s.id, 'nickname', s.nickname, 'status', s.status, 'class', s.class, 'stream', s.stream,
               'head', sp.summary -> 'head', 'synced', sp.updated_at) order by lower(s.nickname))
      from public.profiles s left join public.student_progress sp on sp.user_id = s.id
      where s.role = 'student' and s.status <> 'pending'
        and not exists (select 1 from public.group_members gm where gm.student_id = s.id)), '[]'::jsonb) else '[]'::jsonb end
  ) into v;
  return v;
end $$;
revoke execute on function public.staff_overview() from public, anon;
grant execute on function public.staff_overview() to authenticated;

-- One student, in full: profile, the phone's summary, the groups the caller manages that hold them,
-- and live quiz results (quizzes the caller hosted; the admin sees all).
create or replace function public.student_detail(p_student uuid) returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare v_admin boolean := public.is_admin(); s public.profiles; v jsonb;
begin
  if not (v_admin or public.teaches(p_student)) then raise exception 'This student is not in your groups.'; end if;
  select * into s from public.profiles where id = p_student;
  if s.id is null then raise exception 'No such student.'; end if;
  select jsonb_build_object(
    'id', s.id, 'nickname', s.nickname, 'role', s.role, 'status', s.status, 'class', s.class, 'stream', s.stream, 'subjects', to_jsonb(s.subjects),
    'summary', sp.summary, 'synced', sp.updated_at,
    'groups', coalesce((
      select jsonb_agg(jsonb_build_object('id', g.id, 'name', g.name, 'teacher', t.nickname) order by lower(g.name))
      from public.group_members gm join public.groups g on g.id = gm.group_id join public.profiles t on t.id = g.teacher_id
      where gm.student_id = s.id and (v_admin or g.teacher_id = auth.uid())), '[]'::jsonb),
    'quizzes', coalesce((
      select jsonb_agg(q order by q ->> 'at' desc) from (
        select jsonb_build_object('title', r.title, 'subject', r.subject, 'chapter', r.chapter, 'at', r.created_at,
                 'host', h.nickname, 'score', lp.score, 'total', r.q_total,
                 'answered', (select count(*) from public.live_answers a where a.room_id = r.id and a.user_id = s.id)) as q
        from public.live_players lp join public.live_rooms r on r.id = lp.room_id join public.profiles h on h.id = r.host_id
        where lp.user_id = s.id and (v_admin or r.host_id = auth.uid())
        order by r.created_at desc limit 50) x), '[]'::jsonb)
  ) into v
  from (select 1) one left join public.student_progress sp on sp.user_id = s.id;
  return v;
end $$;
revoke execute on function public.student_detail(uuid) from public, anon;
grant execute on function public.student_detail(uuid) to authenticated;
