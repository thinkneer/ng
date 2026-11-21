# Supabase setup (admin, one-time)

Project: `https://kschtxkqurkzhfencyko.supabase.co` · config in `data/supabase.json` (publishable key only).

## 0. Starting over
To wipe every member and start afresh: SQL Editor → paste `supabase/reset.sql` → Run (it also clears the sign-in accounts), then do step 1 again (001, then 002).

## 1. Run the schema (numbered files, in order)
Dashboard → **SQL Editor** → New query → paste the whole file → **Run**, one file at a time:

1. `supabase/migrations/001_init.sql` — tables, roles, live quiz. **Wipes everything it owns (members included)** when run again, so only on a fresh project or after `reset.sql`.
2. `supabase/migrations/002_security.sql` — members see other members only as nickname + role (view `public.members`); students cannot touch exam scores. Keeps all data; safe to run again.
3. `supabase/migrations/003_admin_create_member.sql` — lets the Admin dashboard create members directly (**New member**). Keeps all data; safe to run again.
4. `supabase/migrations/004_groups_progress.sql` — teachers' groups and each student's progress summary (**My students** / **Teachers & students**). Keeps all data; safe to run again.
5. `supabase/migrations/005_username_accounts.sql` — **New member without email** (username + temporary password, new password chosen at the first sign-in, like DAME Hub) and **Reset password** on each member. Keeps all data; safe to run again. (003 may be skipped; 005 replaces it.)
6. `supabase/migrations/006_reset_password_fix.sql` — **Reset password that works for everyone**: also confirms accounts that never confirmed their email, and tells the admin what the member must type in *Username or email* (the username, or their masked email for members who joined with one). Safe to run again.
7. `supabase/migrations/007_admin_delete_user.sql` — **Delete** on each member row (admin only): removes the account and all its data for good. Safe to run again.

**Already live with members?** Run only `002_security.sql`. Every later numbered file is the same: run it once, in number order; it says at the top whether it keeps data.

After 002 the Supabase *Security Advisor* lists `public.members` as a "Security Definer View". That is intended (it is how three safe columns are shown); see the comment in the file.

## 2. Auth settings (two switches)
Dashboard → **Authentication**:
- **Providers → Email**: *Enable email provider* on. **Confirm email → OFF.** (That is what produced the "Confirm your email address" mail; with it off, Join signs the member straight in and you approve them by hand.) *Secure email change* can stay on.
- **URL Configuration** → Site URL `https://thinkneer.github.io/ng/` and add `https://thinkneer.github.io/ng/**` to Redirect URLs. Only used by **Forgot password** links; with the default `localhost:3000` those links die.

No email template changes needed: sign-in is email + password, no codes.

## 2b. Bot protection (CAPTCHA) — not switched on, on purpose
Supabase's CAPTCHA cannot be limited to Join: once on, **every** sign-in, Join and Forgot password must send a token, and the app has to load Cloudflare's (or hCaptcha's) script from their servers. Students would see nothing in most cases, but the switch and the app change must land together, or every sign-in fails. Every member already waits for your approval, so a bot that joins gets nowhere.

What is on instead, and costs students nothing:
- **Authentication → Rate Limits**: keep *sign-ups and sign-ins* at about 30 per 5 minutes per IP (the default is fine; lower it if spam joins appear).
- **Admin dashboard**: pending members you don't recognise simply stay pending.

If spam joins do appear, switch CAPTCHA on like this (one sitting, with a Site chat):
1. Cloudflare dashboard → **Turnstile** → Add widget → hostname `thinkneer.github.io` → mode **Managed** (or Invisible) → copy the **site key** and the **secret key**.
2. Ask a Site chat to add the site key to `data/supabase.json` as `"captcha"` and send the Turnstile token with Join, Sign in and Forgot password. Wait until that push is live.
3. Supabase → **Authentication → Attack Protection** → *Enable CAPTCHA protection* → provider **Turnstile by Cloudflare** → paste the **secret key** → Save.
4. Join a test account on your phone, then sign in and use Forgot password once each.
Never do step 3 before step 2 is live.

## 3. Make yourself admin
Open the live site → **Join with a nickname** (your usual admin nickname, your email, a password ≥ 8 characters). You land on "Access awaited". Then in the SQL Editor:

```sql
update public.profiles set role = 'admin', status = 'approved', approved_at = now() where lower(nickname) = lower('YOUR_NICKNAME');
```

Back in the app tap **I've been approved — check again**. From now on everything is in **More → Admin dashboard**.

## 4. Members
- Join with nickname + email + password → "Access awaited" → they send you the WhatsApp note → you tap **Approve as student** or **Approve as teacher** → they open the app again.
- Or create them yourself (needs 005): Admin dashboard → **New member** → username, a temporary password (**Generate**), student / teacher, class → **Create**. No email. Tell them the username and temporary password by voice; at the first sign-in they choose their own password. Forgotten password: **Reset password** on their row gives a new temporary one.
- Later: **Make teacher / Make student**, **Pause / Restore**.
- **Groups** (needs 004): a teacher (More → My students) makes a group such as *Class 12 Physics* and taps **Pick students** to tick students who have joined, like picking a team. Students still make their own profile (Join). The teacher then sees each student's papers and marks, live quiz results, timetable streak, chapters read, recall cards, mistakes and study minutes. You see every teacher, group and student under More → Teachers & students (or the button on the Admin dashboard) and can make groups for any teacher.
- **One phone at a time**: each sign-in claims the account; an older device is signed out on its next load with a one-line notice.
- Forgot password: Sign in → Forgot password → link by email → choose a new password (open the link on the same phone/browser).
- The old static nickname list (`data/users.json`) is empty and used only by the local test server; the live site always signs in through Supabase.

## Keys
- `sb_publishable_…` in `data/supabase.json` is public by design; row-level security guards the data.
- The **secret / service-role key** must never be in the repo or in the app.
- Supabase's "legacy API keys retired in early 2027" notice concerns the old `anon`/`service_role` JWT keys; the publishable key is the new kind.

## Roles
| role | can |
|---|---|
| student | read everything, recall, practice, join live quizzes, (later) share notes, sit exams |
| teacher | all of the above + host live quizzes, (later) create exams and see results |
| admin | all of the above + approve / pause members and set roles |
