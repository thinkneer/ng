# ng — free CBSE board-exam study site

**Live:** https://thinkneer.github.io/ng

A free, public study site for CBSE board exams. Built for Classes 9–12; right now it carries **Class 12 Science** (Physics, Chemistry, Mathematics, Biology, English Core) for the **2027 boards**. Other classes show as "Coming soon".

What you get, without logging in:
- Must-have notes per chapter: most-repeated board questions (with ★ estimates), must-know lines, key formulas, answer skeletons with step marks, 1-mark facts, case-based angles and mark-losing traps.
- Formula and facts sheets.
- Practice by chapter, type and stars; timed exams on the CBSE 2026–27 pattern with marking schemes.
- A distraction-free reading mode (full screen, text size, light / sepia / dark) on every chapter.
- **Board_Plan_2027**: a day-by-day plan from today to your last paper that rebuilds itself for the subjects you pick.

Install it on your phone (Share → Add to Home Screen on iPhone; "Install app" on Android/Chrome). It works offline once opened.

## Honest notes
- **Stars are estimates**, not counts. "PYQ (year)" is used only when verified; otherwise "PYQ-style".
- **Syllabus:** rationalised CBSE 2026–27. Deleted topics are left out or marked "not in boards". Always confirm with cbseacademic.nic.in.
- **Dates:** board dates come from the CBSE date sheet (see `data/exams/class-12-2027.json`, with the date they were last checked). Recheck on cbse.gov.in.
- **No copyrighted text here.** No NCERT paragraphs, poems, prose, sample papers or marking schemes. We link to ncert.nic.in and cbseacademic.nic.in; everything here is our own notes, summaries and original questions.

## Privacy (please read)
- There is **no database, no server and no email collection**. The site is static files in this public repo.
- Accounts are a **nickname only**. Don't use your real name. We never ask for names, emails, phone numbers, schools, cities or photos.
- "Login" on a static site is a light gate that picks whose progress to show. **It is not security.** Don't reuse a passphrase you use anywhere else.
- Progress is saved on your device first. If you choose "Sync to site", your progress JSON is posted as a GitHub issue under your nickname and, after a check that the issue author matches the approved GitHub username for that nickname, written to `data/progress/<nickname>.json` — **publicly**. Only sync what you're happy to have public.
- Users are approved by the admin by hand.

## Requests
Anyone can ask for a topic, a chapter, a kind of question, or report a bug: use "Request something" in the app (it opens a GitHub issue form) or, without a GitHub account, copy the request text it gives you and send it to the admin.

## For contributors / maintainers
- Content is Markdown + JSON under `content/`; the app is a fixed shell. Adding content never means editing app code. See `CLAUDE.md`.
- `node scripts/build-index.mjs` validates every JSON file against `schemas/` and writes `data/index.json`. It runs in CI on every push.
- Status per subject: `status/class-12/<subject>.md`.

## Tech
Plain HTML/CSS/JS (ES modules), hash routing, no build step to view. Vendored, pinned libraries: marked, KaTeX (+ mhchem), DOMPurify — no CDN, works offline. PWA with a service worker. GitHub Pages + GitHub Actions + GitHub Issues only; free tier throughout.

## Licence
Site code: MIT. Content (notes and questions): CC BY-NC-SA 4.0. NCERT and CBSE materials belong to their owners and are linked, not copied.
