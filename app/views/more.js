import { html, raw, icon, largeTitle, esc, listItem, toast, haptic, openSheet } from '../ui.js';
import { data } from '../data.js';
import { store } from '../store.js';
import { classLocked } from '../access.js';
import { applyTheme } from '../theme.js';
import { pwa } from '../pwa.js';
import { signOut, session, isDbMode, maskedEmail, setNewPassword, signOutEverywhere } from '../auth.js';
import { errText } from '../db.js';


export async function more(route) {
  const sub = route.sub || null;
  if (sub === 'settings') return settings();
  if (sub === 'about') return about();
  if (sub === 'request') return request();
  if (sub === 'access' || sub === 'account') return access();
  if (sub === 'install') { pwa.promptInstall(); return hub(); }
  return hub();
}

async function hub() {
  const s = store.settings;
  const dbMode = await isDbMode();
  const cls = s.class ? `Class ${s.class}${s.stream && s.stream !== 'general' ? ' · ' + cap(s.stream) : ''}` : 'Not chosen';
  return {
    title: 'More', largeTitle: true, tab: 'more',
    html: html`${largeTitle('More')}
      <div class="list">
        ${listItem({ href: '#/more/settings', title: 'Class, subjects & appearance', sub: cls, leading: icon('settings'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}
        ${listItem({ href: '#/plan', title: 'Board plan', sub: 'Days left to each paper', leading: icon('plan'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}
        ${dbMode ? listItem({ href: '#/live', title: 'Live quiz', sub: session()?.role === 'student' ? 'Join with the code from your teacher' : 'Host a quiz, or join one', leading: icon('bolt'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' }) : ''}
        ${pwa.installable ? listItem({ href: '#/more/install', title: 'Install app', sub: 'Full-screen, works offline', leading: icon('install'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' }) : ''}
      </div>
      ${session()?.role === 'admin' ? html`<div class="list__header">Admin</div><div class="list">${listItem({ href: '#/admin', title: 'Admin dashboard', sub: 'Approve requests · pause members', leading: icon('lock'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}</div>` : ''}
      <div class="list__header">Community</div>
      <div class="list">
        ${listItem({ href: '#/more/request', title: 'Request something', sub: 'A topic, a chapter, a kind of question, a mistake', leading: icon('message'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}
        ${listItem({ href: '#/more/account', title: `Signed in as ${session()?.nickname || 'member'}`, sub: session()?.role === 'admin' ? 'Admin · account and sign out' : 'Account and sign out', leading: icon('user'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}
      </div>
      <div class="list__header">About</div>
      <div class="list">
        ${listItem({ href: '#/more/about', title: 'About ng & privacy', sub: 'What is stored, and where', leading: icon('info'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}
      </div>
      <p class="t-footnote t-3 mt-6 center">ng · CBSE board prep · members only</p>`,
  };
}

async function settings() {
  const s = store.settings;
  const subjects = s.class ? await data.liveSubjects(s.class, s.stream) : [];
  const theme = store.theme;
  return {
    title: 'Settings', tab: 'more', back: '#/more',
    html: html`<h1 class="t-title" style="margin:var(--s-4) 0">Settings</h1>
      <div class="list__header">Class</div>
      <div class="list">${listItem({ href: '#/classes', title: s.class ? `Class ${s.class}${s.stream && s.stream !== 'general' ? ' · ' + cap(s.stream) : ''}` : 'Choose your class', sub: classLocked() ? 'Set by your admin' : 'Sets your subjects and plan', leading: icon('layers'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}</div>
      ${subjects.length ? html`<div class="list__header">My subjects</div><div class="card" data-subjects>
        ${subjects.map((x) => raw(`<label class="check"><input type="checkbox" value="${x.id}" ${!s.subjects?.length || s.subjects.includes(x.id) ? 'checked' : ''}><span class="grow">${esc(x.name)}</span><span class="badge" style="--unit:#${x.colour};color:var(--unit);background:color-mix(in srgb,var(--unit) 12%,transparent)">${x.theory_marks}</span></label>`))}
        <p class="t-footnote t-3 mt-2">Untick a subject to drop it from Today, Practice and the plan. Keep at least one.</p></div>` : ''}
      <div class="list__header">Appearance</div>
      <div class="card">
        <div class="segmented" style="position:static" role="radiogroup" aria-label="Theme" data-theme-picker>
          ${[['auto', 'System', 'auto'], ['light', 'Light', 'sun'], ['dark', 'Dark', 'moon']].map(([v, l, ic]) => raw(`<button class="segmented__btn" type="button" role="radio" data-theme="${v}" aria-checked="${theme === v}" aria-selected="${theme === v}">${icon(ic)} ${l}</button>`))}
        </div>
        <p class="t-footnote t-3 mt-3">Text size follows your phone or browser setting.</p>
      </div>
      <div class="list__header">Data</div>
      <div class="list">
        ${listItem({ href: '#/progress', title: 'Export or import progress', sub: 'JSON file, works without an account', leading: icon('download'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}
        ${listItem({ title: 'Clear everything on this device', sub: 'Settings, tracker and your notes', leading: icon('trash'), leadingStyle: 'background:var(--danger-soft);color:var(--danger)', attrs: 'data-reset', chevron: false })}
      </div>`,
    mount(el) {
      el.querySelector('[data-subjects]')?.addEventListener('change', () => {
        const picked = [...el.querySelectorAll('[data-subjects] input:checked')].map((i) => i.value);
        if (!picked.length) { toast('Keep at least one subject'); el.querySelector('[data-subjects] input').checked = true; return; }
        store.setSettings({ subjects: picked }); haptic();
      });
      el.querySelector('[data-theme-picker]')?.addEventListener('click', (e) => {
        const b = e.target.closest('[data-theme]'); if (!b) return;
        store.theme = b.dataset.theme; applyTheme(); haptic();
        for (const x of el.querySelectorAll('[data-theme]')) { const on = x === b; x.setAttribute('aria-checked', on); x.setAttribute('aria-selected', on); }
      });
      el.querySelector('[data-reset]')?.addEventListener('click', () => {
        const backup = {}; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith('ng.')) backup[k] = localStorage.getItem(k); }
        for (const k of Object.keys(backup)) localStorage.removeItem(k);
        toast('Cleared this device', { action: 'Undo', duration: 6000, onAction: () => { for (const [k, v] of Object.entries(backup)) localStorage.setItem(k, v); location.reload(); } });
        setTimeout(() => { if (!localStorage.getItem('ng.settings')) location.hash = '#/today'; }, 6100);
      });
    },
  };
}

async function request() {
  const s = store.settings;
  const fallback = `Request for ng (${s.class ? `Class ${s.class} ${s.stream || ''}` : 'class not set'})\nSubject: \nChapter: \nWhat I want: \nWhy: \nNickname: ${session()?.nickname || ''}`;
  return {
    title: 'Request something', tab: 'more', back: '#/more',
    html: html`<h1 class="t-title" style="margin:var(--s-4) 0">Request something</h1>
      <p class="t-2 t-subhead mb-4">Want a topic, a chapter, more questions of one kind, or found a wrong answer? Fill this in and send it to the admin. Requests are done in order of the nearest paper.</p>
      <div class="card">
        <label for="req-text">Your request</label>
        <textarea id="req-text" rows="8" class="t-mono" style="font-size:0.9rem">${fallback}</textarea>
        <div class="hl-actions"><button class="btn" type="button" data-share>${raw(icon('share'))} Send to admin</button><button class="btn btn--plain" type="button" data-copy>${raw(icon('copy'))} Copy</button></div>
      </div>
      <p class="t-footnote t-3 mt-4">Please don\u2019t add your real name, phone number or school.</p>`,
    mount(el) {
      const t = el.querySelector('#req-text');
      el.querySelector('[data-share]').addEventListener('click', async () => {
        if (navigator.share) { try { await navigator.share({ title: 'ng request', text: t.value }); return; } catch (e) { if (e?.name === 'AbortError') return; } }
        try { await navigator.clipboard.writeText(t.value); toast('Copied \u2014 paste it in a message to the admin'); } catch { t.select(); toast('Select the text and copy it'); }
      });
      el.querySelector('[data-copy]').addEventListener('click', async () => { try { await navigator.clipboard.writeText(t.value); toast('Copied'); } catch { t.select(); toast('Select the text and copy it'); } });
    },
  };
}

async function access() {
  const s = session();
  const dbMode = await isDbMode();
  const email = dbMode ? await maskedEmail().catch(() => '') : '';
  const roleName = s?.role === 'admin' ? 'Admin' : s?.role === 'teacher' ? 'Teacher' : 'Student';
  return {
    title: 'Account', tab: 'more', back: '#/more',
    html: html`<h1 class="t-title" style="margin:var(--s-4) 0">Account</h1>
      <div class="card row"><span class="list__leading" style="--unit:var(--accent)">${raw(esc((s?.nickname || '?').slice(0, 2).toUpperCase()))}</span><div class="grow"><div class="t-headline">${s?.nickname || ''}</div><div class="t-2 t-footnote">${roleName} · Class ${s?.class || '–'}${s?.stream && s.stream !== 'general' ? ' ' + cap(s.stream) : ''}${email ? ` · ${email}` : ''}</div></div></div>
      <div class="list mt-4">
        ${dbMode ? listItem({ title: 'Change password', sub: 'Pick a new one; you stay signed in here', leading: icon('lock'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)', attrs: 'data-changepw', chevron: false }) : ''}
        ${listItem({ title: 'Sign out', sub: dbMode ? 'This device only' : 'Your highlights and progress stay on this device', leading: icon('logout'), leadingStyle: 'background:var(--danger-soft);color:var(--danger)', attrs: 'data-signout', chevron: false })}
        ${dbMode ? listItem({ title: 'Sign out everywhere', sub: 'Every phone and computer signed in as you', leading: icon('logout'), leadingStyle: 'background:var(--danger-soft);color:var(--danger)', attrs: 'data-signout-all', chevron: false }) : ''}
      </div>
      <div class="card mt-6 stack-s">
        <div class="t-headline">How membership works</div>
        <p class="t-2 t-subhead">${dbMode ? 'You joined with a nickname, email and password; the admin approved you. Only your nickname is ever shown to others. One device is signed in at a time: signing in elsewhere signs this one out.' : 'Every member is a nickname the admin approved.'} Your highlights, notes, recall schedule and tracker are saved on this device under your nickname; use Progress → export to move them.</p>
        <p class="t-2 t-subhead">${dbMode ? 'Forgot your password? Sign out, then use “Forgot password” on the sign-in page. To change your nickname or close your account, ask the admin.' : 'This is a static site: sign-in decides who uses the app, it is not a vault.'} Never put personal details in notes.</p>
      </div>`,
    mount(el) {
      el.querySelector('[data-signout]')?.addEventListener('click', async () => { await signOut(); toast('Signed out'); location.hash = '#/signin'; });
      el.querySelector('[data-signout-all]')?.addEventListener('click', async () => { await signOutEverywhere(); toast('Signed out everywhere'); location.hash = '#/signin'; });
      el.querySelector('[data-changepw]')?.addEventListener('click', () => {
        const sh = openSheet({ title: 'Change password', content: `<form id="cpw" novalidate>
            <label for="cp1">New password</label><input id="cp1" type="password" autocomplete="new-password" placeholder="At least 8 characters, letters and a number">
            <label for="cp2" class="mt-4">Again</label><input id="cp2" type="password" autocomplete="new-password">
            <p class="auth__err" id="cp-err" role="alert" hidden></p>
            <button class="btn btn--block mt-4" type="submit">Save</button></form>` });
        const f = sh.body.querySelector('#cpw'), err = sh.body.querySelector('#cp-err');
        f.addEventListener('submit', async (e) => {
          e.preventDefault(); err.hidden = true;
          const a = f.querySelector('#cp1').value, b = f.querySelector('#cp2').value;
          const bad = a.length < 8 ? 'At least 8 characters.' : !/[A-Za-z]/.test(a) || !/\d/.test(a) ? 'Use letters and at least one number.' : a !== b ? 'The two passwords don’t match.' : '';
          if (bad) { err.textContent = bad; err.hidden = false; return; }
          f.querySelector('button').disabled = true;
          try { await setNewPassword(a); sh.close(); toast('Password changed'); haptic('success'); }
          catch (ex) { err.textContent = errText(ex); err.hidden = false; f.querySelector('button').disabled = false; }
        });
      });
    },
  };
}

async function about() {
  return {
    title: 'About', tab: 'more', back: '#/more',
    html: html`<h1 class="t-title" style="margin:var(--s-4) 0">About ng</h1>
      <div class="prose">
        <p>A free study app for CBSE Classes 9–12, for school and board exams. Read and recall on your phone, then do the real work on paper: draw, derive, solve and write answers by hand, the way the exam is marked. Notes written for marks, formula sheets, practice by question type, worksheets to print, timed papers and a countdown to each of your papers.</p>
        <h3>Honest labels</h3>
        <ul><li>Stars (★★★ / ★★ / ★) are <em>estimates</em> of how often a question type appears, not counts.</li><li>"PYQ (year)" only when verified; otherwise "PYQ-style".</li><li>Syllabus: the current rationalised CBSE syllabus for each class. Deleted topics are left out or marked "not in syllabus".</li><li>Board dates come from the CBSE date sheet; always recheck on cbse.gov.in.</li></ul>
        <h3>Privacy</h3>
        <ul><li><strong>Sign-in email and password:</strong> kept only by our sign-in service (Supabase Auth), to sign you in and reset your password. The app never shows it to anyone; the admin can see it in Supabase only to help with sign-in.</li><li><strong>Nickname, role and class:</strong> stored in our database. Other members see your nickname and role, for example in live quiz scores.</li><li><strong>Live quiz answers and scores:</strong> stored in the database for that quiz.</li><li><strong>Your study data</strong> (highlights, notes, recall, practice, mistakes, tracker, papers and marks): saved on this device only, for now. Clearing the browser deletes it; export it from Progress to move it.</li><li>Photos of answer sheets sent for marking are used only to mark them and are never saved.</li><li>No ads, no tracking, no analytics. We never ask for your real name, phone, school or photo.</li></ul>
        <h3>Sources and copyright</h3>
        <p>Nothing here copies NCERT or CBSE text. We write our own notes, summaries and questions and link to <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener">ncert.nic.in</a> and <a href="https://cbseacademic.nic.in/" target="_blank" rel="noopener">cbseacademic.nic.in</a> for the originals.</p>
        <h3>Keyboard</h3>
        <p><span class="kbd">/</span> search chapters · <span class="kbd">Esc</span> close · reader: <span class="kbd">f</span> full screen, <span class="kbd">←</span> <span class="kbd">→</span> pages · recall: <span class="kbd">space</span> show, <span class="kbd">1</span> again, <span class="kbd">2</span> got it</p>
        <p class="t-footnote t-3">Made for students, free, with no ads and no tracking.</p>
      </div>`,
  };
}

function cap(s) { return s ? s[0].toUpperCase() + s.slice(1) : ''; }
