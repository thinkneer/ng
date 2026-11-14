import { html, raw, icon, largeTitle, esc, listItem, toast, haptic, openSheet } from '../ui.js';
import { data } from '../data.js';
import { store } from '../store.js';
import { applyTheme } from '../theme.js';
import { pwa } from '../pwa.js';
import { signOut, session } from '../auth.js';

const REPO = 'https://github.com/thinkneer/ng';

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
  const cls = s.class ? `Class ${s.class}${s.stream && s.stream !== 'general' ? ' · ' + cap(s.stream) : ''}` : 'Not chosen';
  return {
    title: 'More', largeTitle: true, tab: 'more',
    html: html`${largeTitle('More')}
      <div class="list">
        ${listItem({ href: '#/more/settings', title: 'Class, subjects & appearance', sub: cls, leading: icon('settings'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}
        ${listItem({ href: '#/plan', title: 'Board plan', sub: 'Days left and the plan', leading: icon('plan'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}
        ${pwa.installable ? listItem({ href: '#/more/install', title: 'Install app', sub: 'Full-screen, works offline', leading: icon('install'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' }) : ''}
      </div>
      <div class="list__header">Community</div>
      <div class="list">
        ${listItem({ href: '#/more/request', title: 'Request something', sub: 'A topic, a chapter, a kind of question, a bug', leading: icon('message'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}
        ${listItem({ href: '#/more/account', title: `Signed in as ${session()?.nickname || 'member'}`, sub: session()?.role === 'admin' ? 'Admin · account and sign out' : 'Account and sign out', leading: icon('user'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}
      </div>
      <div class="list__header">About</div>
      <div class="list">
        ${listItem({ href: '#/more/about', title: 'About ng & privacy', sub: 'Free, open, no personal data', leading: icon('info'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}
        ${listItem({ href: REPO, title: 'Source on GitHub', sub: 'thinkneer/ng', leading: icon('github'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)', attrs: 'target="_blank" rel="noopener"' })}
      </div>
      <p class="t-footnote t-3 mt-6 center">ng · CBSE board prep · no login needed</p>`,
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
      <div class="list">${listItem({ href: '#/classes', title: s.class ? `Class ${s.class}${s.stream && s.stream !== 'general' ? ' · ' + cap(s.stream) : ''}` : 'Choose your class', sub: 'Sets your subjects and plan', leading: icon('layers'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)' })}</div>
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
  const fallback = `Request for ng (${s.class ? `Class ${s.class} ${s.stream || ''}` : 'class not set'})\nSubject: \nChapter: \nWhat I want: \nWhy: \n(nickname, optional): `;
  return {
    title: 'Request something', tab: 'more', back: '#/more',
    html: html`<h1 class="t-title" style="margin:var(--s-4) 0">Request something</h1>
      <p class="t-2 t-subhead mb-4">A topic, a chapter, a kind of question, a wrong answer or a bug. Requests are read by the admin and done in order of the nearest paper. <strong>Use a nickname and don't add personal details</strong> — requests are public on GitHub.</p>
      ${!navigator.onLine ? raw(`<div class="notice notice--warn mb-4">${icon('wifiOff')}<div>You're offline. Requests need a connection.</div></div>`) : ''}
      <div class="list">
        ${listItem({ href: `${REPO}/issues/new?template=content-request.yml`, title: 'Ask for content', sub: 'Opens a GitHub form (needs a free GitHub account)', leading: icon('message'), leadingStyle: 'background:var(--accent-soft);color:var(--accent-text)', attrs: 'target="_blank" rel="noopener"' })}
        ${listItem({ href: `${REPO}/issues/new?template=bug.yml`, title: 'Report a bug or a wrong answer', sub: 'Opens a GitHub form', leading: icon('alert'), leadingStyle: 'background:var(--warning-soft);color:var(--warning)', attrs: 'target="_blank" rel="noopener"' })}
      </div>
      <div class="list__header">No GitHub account?</div>
      <div class="card"><p class="t-subhead t-2">Copy this text, fill it in, and send it to the admin by any channel you already use.</p>
        <textarea id="req-text" rows="7" class="mt-2 t-mono" style="font-size:0.9rem">${fallback}</textarea>
        <button class="btn btn--secondary btn--sm mt-2" type="button" data-copy>${raw(icon('check'))} Copy text</button></div>`,
    mount(el) {
      el.querySelector('[data-copy]').addEventListener('click', async () => {
        const t = el.querySelector('#req-text'); try { await navigator.clipboard.writeText(t.value); toast('Copied'); } catch { t.select(); toast('Select and copy the text'); }
      });
    },
  };
}

async function access() {
  const s = session();
  return {
    title: 'Account', tab: 'more', back: '#/more',
    html: html`<h1 class="t-title" style="margin:var(--s-4) 0">Account</h1>
      <div class="card row"><span class="list__leading" style="--unit:var(--accent)">${raw(esc((s?.nickname || '?').slice(0, 2).toUpperCase()))}</span><div class="grow"><div class="t-headline">${s?.nickname || ''}</div><div class="t-2 t-footnote">${s?.role === 'admin' ? 'Admin' : 'Member'} · Class ${s?.class || '–'}${s?.stream && s.stream !== 'general' ? ' ' + cap(s.stream) : ''}</div></div></div>
      <div class="list mt-4">${listItem({ title: 'Sign out', sub: 'Your highlights and progress stay on this device', leading: icon('logout'), leadingStyle: 'background:var(--danger-soft);color:var(--danger)', attrs: 'data-signout', chevron: false })}</div>
      <div class="card mt-6 stack-s">
        <div class="t-headline">How membership works</div>
        <p class="t-2 t-subhead">Every member is a nickname the admin approved. Your highlights, notes, recall schedule and tracker are saved on this device under your nickname; use Progress → export to move them.</p>
        <p class="t-2 t-subhead">This is a static site: sign-in decides who uses the app, it is not a vault. Never put personal details in notes.</p>
      </div>`,
    mount(el) {
      el.querySelector('[data-signout]')?.addEventListener('click', () => { signOut(); toast('Signed out'); location.hash = '#/signin'; });
    },
  };
}

async function about() {
  return {
    title: 'About', tab: 'more', back: '#/more',
    html: html`<h1 class="t-title" style="margin:var(--s-4) 0">About ng</h1>
      <div class="prose">
        <p>A free study site for CBSE board exams, built for Classes 9–12 and filled first for <strong>Class 12 Science (2027 boards)</strong>. Notes written for marks, formula sheets, practice by question type, timed papers and a day-by-day plan to your last paper.</p>
        <h3>Honest labels</h3>
        <ul><li>Stars (★★★ / ★★ / ★) are <em>estimates</em> of how often a question type appears, not counts.</li><li>"PYQ (year)" only when verified; otherwise "PYQ-style".</li><li>Syllabus: rationalised CBSE 2026–27. Deleted topics are left out or marked "not in boards".</li><li>Board dates come from the CBSE date sheet; always recheck on cbse.gov.in.</li></ul>
        <h3>Privacy</h3>
        <ul><li>No server, no database, no tracking, no email collection.</li><li>Your settings, tracker and notes stay in this browser unless you export them.</li><li>Accounts (when they arrive) are nickname-only and public by design.</li></ul>
        <h3>Sources and copyright</h3>
        <p>Nothing here copies NCERT or CBSE text. We write our own notes, summaries and questions and link to <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener">ncert.nic.in</a> and <a href="https://cbseacademic.nic.in/" target="_blank" rel="noopener">cbseacademic.nic.in</a> for the originals.</p>
        <h3>Keyboard</h3>
        <p><span class="kbd">/</span> search chapters · <span class="kbd">Esc</span> close · reader: <span class="kbd">f</span> full screen, <span class="kbd">←</span> <span class="kbd">→</span> pages · recall: <span class="kbd">space</span> show, <span class="kbd">1</span> again, <span class="kbd">2</span> got it</p>
        <p class="t-footnote t-3">Open source: <a href="${REPO}" target="_blank" rel="noopener">github.com/thinkneer/ng</a>. Code MIT; content CC BY-NC-SA 4.0.</p>
      </div>`,
  };
}

function cap(s) { return s ? s[0].toUpperCase() + s.slice(1) : ''; }
