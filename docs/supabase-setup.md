# Supabase setup (admin, one-time)

Project: `https://kschtxkqurkzhfencyko.supabase.co` · config in `data/supabase.json` (publishable key only).

## 1. Run the schema
Dashboard → **SQL Editor** → New query → paste the whole of `supabase/migrations/001_init.sql` → **Run**.
You should see "Success. No rows returned". (It creates `profiles`, `shared_notes`, `comments`, `exams`, `exam_attempts`, `live_*` tables, the policies and the live-quiz functions.)

## 2. Auth settings (three switches)
Dashboard → **Authentication**:
- **URL Configuration** → Site URL: `https://thinkneer.github.io/ng/` · Redirect URLs: add `https://thinkneer.github.io/ng/**`.
- **Providers → Email**: keep *Enable email provider* on. Turn **Confirm email** *off* (members verify by the code/link anyway, and the admin approves each one by hand). Leave *Secure email change* as is.
- **Email Templates → Magic Link**: so the email carries the 6-digit code as well as the link, make the body something like:

  ```html
  <h2>Your ng sign-in code</h2>
  <p style="font-size:28px;letter-spacing:6px"><strong>{{ .Token }}</strong></p>
  <p>Type this code in the app, or <a href="{{ .ConfirmationURL }}">tap here to sign in</a>. The code works for 1 hour.</p>
  ```
  Subject: `Your ng sign-in code`.

Sending limits: Supabase's built-in mailer allows only a few emails per hour. Fine for a handful of members; for a class, add a custom SMTP (Authentication → SMTP Settings — Brevo, Resend, Gmail app password all work).

## 3. Make yourself admin
Open the live site, **Join with a nickname** (use your usual admin nickname), enter the code from the email. You land on "Access awaited". Then in the SQL Editor:

```sql
update public.profiles set role = 'admin', status = 'approved', approved_at = now() where lower(nickname) = lower('YOUR_NICKNAME');
```

Back in the app tap **I've been approved — check again**. From now on everything is in **More → Admin dashboard**: approve members, make someone a teacher, pause.

## 4. What members do
Join with a nickname + email → code → "Access awaited" → send you the WhatsApp note → you approve → they open the app again.
Existing members from the static list (`data/users.json`) simply join again with the same nickname.

## Keys
- `sb_publishable_…` in `data/supabase.json` — public by design, guarded by row-level security.
- The **secret / service-role key** must never be in the repo or in the app.
- Supabase's "legacy API keys will be retired in early 2027" notice is about the old `anon`/`service_role` JWT keys; the publishable key we use is the new kind.

## Roles
| role | can |
|---|---|
| student | read everything, recall, practice, join live quizzes, (later) share notes, sit exams |
| teacher | all of the above + host live quizzes, (later) create exams and see results |
| admin | all of the above + approve / pause members and set roles |
