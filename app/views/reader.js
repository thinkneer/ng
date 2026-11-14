// Reading mode: full-screen, distraction-free view of a chapter's notes (+ formulas).
// Route: #/<class>/<stream>/<subject>/<chapter>/read
import { html, raw, icon, esc, emptyState, haptic } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';

const SIZES = [0.9, 1, 1.1, 1.2, 1.35, 1.5];
const THEMES = ['light', 'sepia', 'dark'];

export async function reader({ cls, stream, sub, unit, ch }) {
  const all = data.allChapters(sub);
  const i = all.findIndex((c) => c.id === ch.id);
  const prev = all[i - 1], next = all[i + 1];
  const base = routeFor(cls.id, stream.id, sub.id, ch.id);
  const prefs = store.get('reader', { size: 1, theme: 'auto' });

  return {
    title: `${ch.title} · reading`, tab: 'subjects', fullscreen: true, unitColour: unit.colour,
    html: html`<div class="reader" id="reader" data-theme-reader="${prefs.theme}" style="--unit:#${unit.colour};--reader-scale:${SIZES[prefs.size] ?? 1}">
      <div class="reader__progress" aria-hidden="true"><div class="reader__progress-bar" id="reader-bar"></div></div>
      <header class="reader__bar reader__bar--top" id="reader-top">
        <a class="icon-btn" href="${base}" aria-label="Close reading mode">${raw(icon('x'))}</a>
        <div class="reader__title truncate"><span class="t-2">Ch ${ch.number} · </span>${ch.title}</div>
        <div class="row" style="gap:0">
          <button class="icon-btn" type="button" data-size="-1" aria-label="Smaller text"><span class="reader__a" style="font-size:.8em">A</span></button>
          <button class="icon-btn" type="button" data-size="1" aria-label="Larger text"><span class="reader__a" style="font-size:1.15em">A</span></button>
          <button class="icon-btn" type="button" data-theme-cycle aria-label="Switch light, sepia, dark">${raw(icon('sun'))}</button>
          <button class="icon-btn" type="button" data-fullscreen aria-label="Full screen" id="reader-fs">${raw(icon('expand'))}</button>
        </div>
      </header>
      <article class="reader__page" id="reader-page">
        <div class="reader__unit" style="color:var(--unit)">${sub.name} · Unit ${unit.id} · ${unit.name}</div>
        <h1 class="reader__h1">${ch.title}</h1>
        <div id="reader-content"><div class="skeleton" style="height:1.2em;width:80%"></div><div class="skeleton mt-2" style="height:1.2em;width:95%"></div><div class="skeleton mt-2" style="height:1.2em;width:70%"></div></div>
        <nav class="reader__nav" aria-label="Chapters">
          ${prev ? raw(`<a class="btn btn--plain" href="${routeFor(cls.id, stream.id, sub.id, prev.id, 'read')}">${icon('chevronLeft')} <span class="truncate">Ch ${prev.number} · ${esc(prev.title)}</span></a>`) : raw('<span></span>')}
          ${next ? raw(`<a class="btn btn--plain" href="${routeFor(cls.id, stream.id, sub.id, next.id, 'read')}"><span class="truncate">Ch ${next.number} · ${esc(next.title)}</span> ${icon('chevronRight')}</a>`) : ''}
        </nav>
      </article>
    </div>`,
    async mount(el) {
      const root = el.querySelector('#reader');
      const page = el.querySelector('#reader-page');
      const content = el.querySelector('#reader-content');
      const top = el.querySelector('#reader-top');
      const bar = el.querySelector('#reader-bar');
      applyTheme(root, prefs.theme, el);

      // content: notes, then formulas
      const [notes, formulas] = await Promise.all([
        ch.items?.notes ? data.notes(sub, ch.id) : null,
        ch.items?.formulas ? data.formulas(sub, ch.id) : null,
      ]);
      if (!notes && !formulas) {
        content.innerHTML = String(emptyState({ icon: 'book', title: 'Nothing to read yet', text: 'Notes for this chapter are on their way.', action: `<a class="btn btn--secondary" href="${base}">Back to chapter</a>` }));
      } else {
        const { renderMarkdown } = await import('../markdown.js');
        content.replaceChildren();
        if (notes) content.appendChild(await renderMarkdown(notes, { unitColour: unit.colour }));
        if (formulas) {
          const h = document.createElement('h2'); h.className = 'reader__divider'; h.textContent = 'Formula sheet';
          content.appendChild(h);
          content.appendChild(await renderMarkdown(formulas, { unitColour: unit.colour }));
        }
        // restore position
        const pos = store.get(`reader.pos.${sub.id}/${ch.id}`, 0);
        if (pos > 0) requestAnimationFrame(() => root.scrollTo({ top: pos, behavior: 'instant' }));
      }

      // progress + auto-hide bars + remember position
      let hideTimer, lastY = 0, saveTimer;
      const onScroll = () => {
        const max = root.scrollHeight - root.clientHeight;
        bar.style.width = (max > 0 ? Math.min(100, (root.scrollTop / max) * 100) : 0) + '%';
        const y = root.scrollTop;
        if (y > lastY + 8 && y > 80) root.classList.add('is-immersed'); else if (y < lastY - 8) root.classList.remove('is-immersed');
        lastY = y;
        clearTimeout(saveTimer); saveTimer = setTimeout(() => store.set(`reader.pos.${sub.id}/${ch.id}`, y), 300);
      };
      root.addEventListener('scroll', onScroll, { passive: true });
      page.addEventListener('click', (e) => { if (e.target.closest('a, button, select, input, textarea')) return; root.classList.toggle('is-immersed'); });

      // controls
      el.querySelectorAll('[data-size]').forEach((b) => b.addEventListener('click', () => {
        const p = store.get('reader', { size: 1, theme: 'auto' });
        p.size = Math.max(0, Math.min(SIZES.length - 1, (p.size ?? 1) + Number(b.dataset.size)));
        store.set('reader', p); root.style.setProperty('--reader-scale', SIZES[p.size]); haptic();
      }));
      el.querySelector('[data-theme-cycle]').addEventListener('click', () => {
        const p = store.get('reader', { size: 1, theme: 'auto' });
        const cur = p.theme === 'auto' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : p.theme;
        p.theme = THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length];
        store.set('reader', p); applyTheme(root, p.theme, el); haptic();
      });
      const fsBtn = el.querySelector('#reader-fs');
      const fsEl = document.documentElement;
      if (!(fsEl.requestFullscreen || fsEl.webkitRequestFullscreen)) fsBtn.hidden = true; // iPhone Safari: reading mode is already edge-to-edge
      const onFsChange = () => { fsBtn.innerHTML = icon(document.fullscreenElement ? 'collapse' : 'expand'); fsBtn.setAttribute('aria-label', document.fullscreenElement ? 'Exit full screen' : 'Full screen'); };
      document.addEventListener('fullscreenchange', onFsChange);
      fsBtn.addEventListener('click', async () => {
        try {
          if (document.fullscreenElement || document.webkitFullscreenElement) await (document.exitFullscreen?.() || document.webkitExitFullscreen?.());
          else await (fsEl.requestFullscreen?.({ navigationUI: 'hide' }) || fsEl.webkitRequestFullscreen?.());
        } catch { /* not allowed here */ }
      });
      const onKey = (e) => {
        if (/^(input|textarea|select)$/i.test(e.target.tagName)) return;
        if (e.key === 'Escape') { if (document.fullscreenElement) document.exitFullscreen?.(); else location.hash = base; }
        if (e.key === 'ArrowRight' && next) location.hash = routeFor(cls.id, stream.id, sub.id, next.id, 'read');
        if (e.key === 'ArrowLeft' && prev) location.hash = routeFor(cls.id, stream.id, sub.id, prev.id, 'read');
        if (e.key === '+' || e.key === '=') el.querySelector('[data-size="1"]').click();
        if (e.key === '-') el.querySelector('[data-size="-1"]').click();
      };
      document.addEventListener('keydown', onKey);
      return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('fullscreenchange', onFsChange); if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {}); };
    },
  };
}

function applyTheme(root, theme, el) {
  root.dataset.themeReader = theme;
  const eff = theme === 'auto' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
  const btn = el.querySelector('[data-theme-cycle]');
  if (btn) btn.innerHTML = icon(eff === 'dark' ? 'moon' : eff === 'sepia' ? 'book' : 'sun');
  const meta = document.querySelector('meta[name="theme-color"]:not([media])');
  const colours = { light: '#FFFFFF', sepia: '#F4ECD8', dark: '#121212' };
  if (meta) meta.content = colours[eff];
}
