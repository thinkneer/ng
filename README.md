# ng — free CBSE study app, Classes 9–12

**Live:** https://thinkneer.github.io/ng

A free study app for CBSE school and board exams, Classes 9–12, any stream and subject, for members the admin approves. The idea: **learn on the phone, practise on paper.** The app teaches, tests and plans; students draw, derive, solve and write answers by hand, the way exams are marked.

Live now: **Class 12 Science** (Physics, Chemistry, Mathematics, Biology, English Core) for the 2027 boards, and **Class 9 Social Science** (new NCERT book, in progress). Other classes and subjects show as "Coming soon" (see `data/classes.json`).

What members get:
- Notes per chapter in three layers: Read (the chapter explained), Must know (recall lines, titled formula boxes, traps → flashcards) and Practice.
- **Practice on paper**: diagrams to draw, derivations, fresh numericals and short explanations, with a printable A4 worksheet per chapter.
- Model answers written like a full-marks answer script, so students copy the layout on paper.
- Formula and facts sheets, card decks, live quizzes.
- Short YouTube videos inside the notes, only where moving pictures teach better than a page (played in the page, loaded only when tapped).
- Timed 3-hour papers on the CBSE pattern: the questions on the phone, the answers on paper; teachers mark the sheet (or paste it into Claude with photos) and send back marks.
- A distraction-free reading mode (full screen, text size, light / sepia / dark) on every chapter.
- **Board plan**: days left to each of your papers, in order.

Install it on your phone (Share → Add to Home Screen on iPhone; "Install app" on Android/Chrome). It works offline once opened.

## Honest notes
- **Stars are estimates**, not counts. "PYQ (year)" is used only when verified; otherwise "PYQ-style".
- **Syllabus:** the current rationalised CBSE syllabus for each class and year. Deleted topics are left out or marked "not in boards" / "not in syllabus". School-year (Class 9, 11) paper patterns are provisional until CBSE publishes one. Always confirm with cbseacademic.nic.in.
- **Dates:** board dates come from the CBSE date sheet (`data/exams/class-<N>-<year>.json`, with the date they were last checked). Recheck on cbse.gov.in.
- **No copyrighted text here.** No NCERT paragraphs, poems, prose, sample papers or marking schemes. We link to ncert.nic.in and cbseacademic.nic.in; everything here is our own notes, summaries and original questions.

## Membership and privacy (please read)
- The app is **members-only**: join with a nickname, an email and a password; the admin approves each member by hand.
- **What is stored where:**
  - Sign-in email and password: only in Supabase Auth (the sign-in service). The app never shows the email; the admin can see it in Supabase only to help with sign-in.
  - Nickname, role, class and approval status: in the Supabase database (`profiles`). Other members see nickname and role only.
  - Live quiz answers and scores: in the database for that quiz.
  - Study data (highlights, notes, recall schedule, practice, mistakes, tracker, papers, marks): **on the device only, for now**. Export from Progress to move devices.
- We never ask for real names, phone numbers, schools, cities or photos. Use a nickname, not your real name. Don't reuse a password from anywhere else. Photos of answer sheets sent for marking are used only to mark them and are never saved.
- The study content is public in this repo, so sign-in controls who uses the app; it is not a vault. The site asks search engines not to index it.

## Requests
Members ask for a topic, a chapter, a kind of question, or report a mistake from More → Request something: the app prepares the text and the student sends it to the admin by message. Students never need a GitHub account.

## For contributors / maintainers
- Content is Markdown + JSON under `content/`; the app is a fixed shell. Adding content never means editing app code. See `CLAUDE.md`.
- `node scripts/build-index.mjs` validates every JSON file against `schemas/` and writes `data/index.json`. It runs in CI on every push.
- Status per subject: `status/class-<N>/<subject>.md`.

## Tech
Plain HTML/CSS/JS (ES modules), hash routing, no build step to view. Vendored, pinned libraries: marked, KaTeX (+ mhchem), DOMPurify — no CDN, works offline. PWA with a service worker. GitHub Pages for the site, Supabase (free tier) for sign-in, roles and live quizzes.

## Licence
Site code: MIT. Content (notes and questions): CC BY-NC-SA 4.0. NCERT and CBSE materials belong to their owners and are linked, not copied.
