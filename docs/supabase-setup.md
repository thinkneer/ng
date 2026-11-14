# Supabase setup (admin, one-time)

Project: `https://kschtxkqurkzhfencyko.supabase.co` · config in `data/supabase.json` (publishable key only).

## 0. Starting over
To wipe every member and start afresh: SQL Editor → paste `supabase/reset.sql` → Run (it also clears the sign-in accounts), then do step 1 again.

## 1. Run the schema
Dashboard → **SQL Editor** → New query → paste the whole of `supabase/migrations/001_init.sql` → **Run**.
It is safe to run again: it drops and recreates everything it owns (members included), so run it before real members join, not after.

## 2. Auth settings (two switches)
Dashboard → **Authentication**:
- **Providers → Email**: *Enable email provider* on. **Confirm email → OFF.** (That is what produced the "Confirm your email address" mail; with it off, Join signs the member straight in and you approve them by hand.) *Secure email change* can stay on.
- **URL Configuration** → Site URL `https://thinkneer.github.io/ng/` and add `https://thinkneer.github.io/ng/**` to Redirect URLs. Only used by **Forgot password** links; with the default `localhost:3000` those links die.

No email template changes needed: sign-in is email + password, no codes.

## 3. Make yourself admin
Open the live site → **Join with a nickname** (your usual admin nickname, your email, a password ≥ 8 characters). You land on "Access awaited". Then in the SQL Editor:

```sql
update public.profiles set role = 'admin', status = 'approved', approved_at = now() where lower(nickname) = lower('YOUR_NICKNAME');
```

Back in the app tap **I've been approved — check again**. From now on everything is in **More → Admin dashboard**.

## 4. Members
- Join with nickname + email + password → "Access awaited" → they send you the WhatsApp note → you tap **Approve as student** or **Approve as teacher** → they open the app again.
- Later: **Make teacher / Make student**, **Pause / Restore**.
- **One phone at a time**: each sign-in claims the account; an older device is signed out on its next load with a one-line notice.
- Forgot password: Sign in → Forgot password → link by email → choose a new password (open the link on the same phone/browser).
- Existing members from the old static list simply join again with the same nickname.

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
