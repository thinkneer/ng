# ng — free CBSE board-exam study site

**Live:** https://thinkneer.github.io/ng

A free study site for CBSE board exams, for members the admin approves. Built for Classes 9–12; right now it carries **Class 12 Science** (Physics, Chemistry, Mathematics, Biology, English Core) for the **2027 boards**. Other classes show as "Coming soon".

What members get:
- Must-have notes per chapter: most-repeated board questions (with ★ estimates), must-know lines, key formulas, answer skeletons with step marks, 1-mark facts, case-based angles and mark-losing traps.
- Formula and facts sheets.
- Practice by chapter, type and stars; timed exams on the CBSE 2026–27 pattern with marking schemes.
- A distraction-free reading mode (full screen, text size, light / sepia / dark) on every chapter.
- **Board plan**: days left to each of your papers, in order.

Install it on your phone (Share → Add to Home Screen on iPhone; "Install app" on Android/Chrome). It works offline once opened.

## Honest notes
- **Stars are estimates**, not counts. "PYQ (year)" is used only when verified; otherwise "PYQ-style".
- **Syllabus:** rationalised CBSE 2026–27. Deleted topics are left out or marked "not in boards". Always confirm with cbseacademic.nic.in.
- **Dates:** board dates come from the CBSE date sheet (see `data/exams/class-12-2027.json`, with the date they were last checked). Recheck on cbse.gov.in.
- **No copyrighted text here.** No NCERT paragraphs, poems, prose, sample papers or marking schemes. We link to ncert.nic.in and cbseacademic.nic.in; everything here is our own notes, summaries and original questions.

## Membership and privacy (please read)
- The app is **members-only**: join with a nickname, an email and a password; the admin approves each member by hand.
- **What is stored where:**
  - Sign-in email and password: only in Supabase Auth (the sign-in service). The app never shows the email; the admin can see it in Supabase only to help with sign-in.
  - Nickname, role, class and approval status: in the Supabase database (`profiles`). Other members see nickname and role only.
  - Live quiz answers and scores: in the database for that quiz.
  - Study data (highlights, notes, recall schedule, practice, mistakes, tracker, papers, marks): **on the device only, for now**. Export from Progress to move devices.
- We never ask for real names, phone numbers, schools, cities or photos. Use a nickname, not your real name. Don't reuse a password from anywhere else.
- The study content is public in this repo, so sign-in controls who uses the app; it is not a vault. The site asks search engines not to index it.

## Requests
Members ask for a topic, a chapter, a kind of question, or report a mistake from More → Request something: the app prepares the text and the student sends it to the admin by message. Students never need a GitHub account.

## For contributors / maintainers
- Content is Markdown + JSON under `content/`; the app is a fixed shell. Adding content never means editing app code. See `CLAUDE.md`.
- `node scripts/build-index.mjs` validates every JSON file against `schemas/` and writes `data/index.json`. It runs in CI on every push.
- Status per subject: `status/class-12/<subject>.md`.

## Tech
Plain HTML/CSS/JS (ES modules), hash routing, no build step to view. Vendored, pinned libraries: marked, KaTeX (+ mhchem), DOMPurify — no CDN, works offline. PWA with a service worker. GitHub Pages for the site, Supabase (free tier) for sign-in, roles and live quizzes.

## Licence
Site code: MIT. Content (notes and questions): CC BY-NC-SA 4.0. NCERT and CBSE materials belong to their owners and are linked, not copied.
