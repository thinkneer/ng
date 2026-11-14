import { createRouter } from './router.js';
import { store } from './store.js';
import { data } from './data.js';
import { initTheme } from './theme.js';
import { initPWA } from './pwa.js';
import { $, $$, html, raw, icon, esc, openSheet, emptyState } from './ui.js';
import { views } from './views/index.js';

const main = $('#main');
const viewEl = $('#view');
const topbar = $('#topbar');
const topbarTitle = $('#topbar-title');
const topbarStart = $('#topbar-start');
const topbarEnd = $('#topbar-end');

const TABS = [
  { id: 'today', label: 'Today', href: '#/today', icon: 'today' },
  { id: 'subjects', label: 'Subjects', href: '#/subjects', icon: 'subjects' },
  { id: 'practice', label: 'Practice', href: '#/practice', icon: 'practice' },
  { id: 'progress', label: 'Progress', href: '#/progress', icon: 'progress' },
  { id: 'more', label: 'More', href: '#/more', icon: 'more' },
];

function renderTabbar(active) {
  $('#tabbar').innerHTML = TABS.map((t) => `<a class="tab" href="${t.href}" ${active === t.id ? 'aria-current="page"' : ''}>${icon(t.icon)}<span class="tab__label">${t.label}</span></a>`).join('');
}

async function renderSidebar(active, route) {
  const s = store.settings;
  const subjects = s.class ? await data.liveSubjects(s.class, s.stream) : [];
  const link = (href, label, ic, id, extra = '') => `<a class="side-link" href="${href}" ${active === id ? 'aria-current="page"' : ''} ${extra}>${icon(ic)}<span>${esc(label)}</span></a>`;
  $('#sidebar').innerHTML = `
    <div class="sidebar__brand"><img src="assets/icons/icon-64.png" alt="" width="32" height="32"><div><div class="name">ng</div><div class="sub">CBSE board prep</div></div></div>
    ${link('#/today', 'Today', 'today', 'today')}
    ${link('#/plan', 'Board plan', 'plan', 'plan')}
    ${link('#/practice', 'Practice', 'practice', 'practice')}
    ${link('#/progress', 'Progress', 'progress', 'progress')}
    <div class="sidebar__section">${s.class ? `Class ${esc(s.class)}${s.stream && s.stream !== 'general' ? ' · ' + esc(s.stream) : ''}` : 'Subjects'}</div>
    ${subjects.length ? subjects.map((sub) => `<a class="side-link" href="${routeOf(s.class, s.stream, sub.id)}" ${route?.subjectId === sub.id ? 'aria-current="page"' : ''}><span class="dot" style="--unit:#${sub.colour}"></span><span>${esc(sub.name)}</span></a>`).join('') : link('#/classes', 'Choose your class', 'layers', 'classes')}
    ${link('#/subjects', 'All subjects', 'subjects', 'subjects')}
    <div class="sidebar__section">More</div>
    <button class="side-link" type="button" data-search>${icon('search')}<span>Search</span><span class="kbd">/</span></button>
    ${link('#/more', 'Settings & about', 'settings', 'more')}
    <div class="sidebar__foot">Free · no login needed · <a href="https://github.com/thinkneer/ng">source</a></div>`;
}
function routeOf(cls, stream, subject) { return `#/${cls}${cls === '9' || cls === '10' ? '' : '/' + stream}/${subject}`; }

let titleObserver = null;
let currentCleanup = null;
let renderSeq = 0;

async function render(route) {
  const seq = ++renderSeq;
  const view = views[route.name] || views['not-found'];
  let result;
  try {
    result = await view(route, { store, data });
  } catch (e) {
    console.error(e);
    result = { title: 'Something went wrong', html: emptyState({ icon: 'alert', title: 'This page could not load', text: navigator.onLine ? e.message : 'You are offline and this page is not saved yet.', action: `<a class="btn btn--secondary" href="#/today">Go to Today</a>` }) };
  }
  if (seq !== renderSeq) return; // a newer navigation started while this one loaded
  for (const d of $$('#sheets dialog')) { try { d.close(); } catch { /* ignore */ } d.remove(); }
  currentCleanup?.();
  currentCleanup = null;
  // Tab / sidebar
  const tab = result.tab || route.name;
  renderTabbar(tab);
  renderSidebar(tab, route);
  // Top bar
  topbarTitle.textContent = result.title || '';
  topbarStart.innerHTML = result.back ? `<a class="back" href="${esc(result.back)}" aria-label="Back">${icon('chevronLeft')}<span class="hide-phone">${esc(result.backLabel || 'Back')}</span></a>` : '';
  topbarEnd.innerHTML = result.actions || `<button class="icon-btn" type="button" data-search aria-label="Search chapters">${icon('search')}</button>`;
  topbar.classList.toggle('no-large-title', !result.largeTitle);
  topbar.classList.remove('is-scrolled');
  topbar.style.setProperty('--unit', result.unitColour ? `#${result.unitColour}` : '');
  // View
  $('#app').classList.toggle('is-reading', !!result.fullscreen);
  viewEl.className = 'view' + (result.wide ? ' view--wide' : '');
  viewEl.innerHTML = String(result.html || '');
  document.title = (result.title ? result.title + ' · ' : '') + 'ng';
  // Large-title shrink
  titleObserver?.disconnect();
  const sentinel = viewEl.querySelector('.title-sentinel');
  if (sentinel) {
    titleObserver = new IntersectionObserver(([en]) => topbar.classList.toggle('is-scrolled', !en.isIntersecting), { root: main, threshold: 0, rootMargin: `-${topbar.offsetHeight}px 0px 0px 0px` });
    titleObserver.observe(sentinel);
  } else {
    const onScroll = () => topbar.classList.toggle('is-scrolled', main.scrollTop > 4);
    main.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    currentCleanup = () => main.removeEventListener('scroll', onScroll);
  }
  const mountCleanup = await result.mount?.(viewEl);
  if (typeof mountCleanup === 'function') {
    const prev = currentCleanup;
    currentCleanup = () => { prev?.(); mountCleanup(); };
  }
  // Move focus for screen readers / keyboard users after navigation
  if (!document.activeElement || document.activeElement === document.body || viewEl.contains(document.activeElement) === false) main.focus({ preventScroll: true });
}

/* ---------- Search (chapters of the chosen class) ---------- */
async function openSearch() {
  const s = store.settings;
  if (!s.class) { location.hash = '#/classes'; return; }
  const subjects = await data.liveSubjects(s.class, s.stream);
  const items = subjects.flatMap((sub) => data.allChapters(sub).map((c) => ({ sub, c })));
  const panel = document.createElement('div');
  panel.innerHTML = `<input type="search" placeholder="Search chapters…" aria-label="Search chapters" autocomplete="off"><div class="list mt-4" id="search-results"></div>`;
  const input = panel.querySelector('input');
  const results = panel.querySelector('#search-results');
  const show = (q) => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    const hits = items.filter(({ sub, c }) => { const hay = `${sub.name} ${c.title} ${c.number} ${c.unitObj.name}`.toLowerCase(); return words.every((w) => hay.includes(w)); }).slice(0, 12);
    results.innerHTML = hits.length ? hits.map(({ sub, c }) => `<a class="list__item has-leading" href="${routeOf(s.class, s.stream, sub.id)}/${c.id}"><span class="list__leading" style="--unit:#${c.unitObj.colour}">${c.number}</span><span class="list__body"><span class="list__title">${esc(c.title)}</span><span class="list__sub">${esc(sub.name)} · ${esc(c.unitObj.name)}</span></span><span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></a>`).join('') : `<div class="list__item t-2">No chapters match</div>`;
  };
  show('');
  input.addEventListener('input', () => show(input.value));
  const sheet = openSheet({ title: 'Search', content: panel });
  results.addEventListener('click', (e) => { if (e.target.closest('a')) sheet.close(); });
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { const a = results.querySelector('a'); if (a) { sheet.close(); location.hash = a.getAttribute('href'); } } });
  setTimeout(() => input.focus(), 50);
}

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-search]')) { e.preventDefault(); openSearch(); }
});
document.addEventListener('keydown', (e) => {
  const typing = /^(input|textarea|select)$/i.test(e.target.tagName) || e.target.isContentEditable;
  if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey) { e.preventDefault(); openSearch(); }
  if (e.key === 'Escape') { const d = $('dialog[open]'); if (d) d.dispatchEvent(new Event('cancel')); }
});

/* ---------- Boot ---------- */
initTheme();
initPWA();
const router = createRouter({ render, scroller: main });
router.start();
export { router };
