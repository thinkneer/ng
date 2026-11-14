// Reading mode: full-screen, distraction-free view of a chapter's notes (+ formula sheet).
// Route: #/<class>/<stream>/<subject>/<chapter>/read
// Three controls only: Contents, Aa (size · font · paper · layout) and Full screen. Scroll or Pages layout.
import { html, raw, icon, esc, emptyState, haptic, openSheet } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';

const SIZES = [15, 16, 17, 18, 19, 21, 23, 26];
const PAPERS = [['auto', 'Auto'], ['light', 'Light'], ['sepia', 'Sepia'], ['gray', 'Gray'], ['dark', 'Dark']];
const DEFAULTS = { size: 18, font: 'serif', paper: 'auto', mode: 'scroll' };
const prefs = () => ({ ...DEFAULTS, ...store.get('reader', {}) });
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export async function reader({ cls, stream, sub, unit, ch }) {
  const all = data.allChapters(sub);
  const i = all.findIndex((c) => c.id === ch.id);
  const prev = all[i - 1], next = all[i + 1];
  const base = routeFor(cls.id, stream.id, sub.id, ch.id);
  const posKey = `reader.pos.${sub.id}/${ch.id}`;
  const p = prefs();

  return {
    title: `${ch.title} · reading`, tab: 'subjects', fullscreen: true, unitColour: unit.colour,
    html: html`<div class="rd" id="rd" data-paper="${p.paper}" data-font="${p.font}" data-mode="${p.mode}" style="--unit:#${unit.colour};--rd-size:${p.size}px">
      <header class="rd__top" id="rd-top">
        <a class="icon-btn" href="${base}" aria-label="Close reading mode">${raw(icon('x'))}</a>
        <div class="rd__title truncate"><span class="rd__title-sub">Ch ${ch.number} · </span>${ch.title}</div>
        <div class="row" style="gap:0">
          <button class="icon-btn" type="button" data-contents aria-label="Contents">${raw(icon('menu'))}</button>
          <button class="icon-btn" type="button" data-aa aria-label="Text and page settings"><span class="rd__aa">Aa</span></button>
        </div>
      </header>
      <div class="rd__stage" id="rd-stage">
        <article class="rd__book" id="rd-book">
          <div class="rd__unit">${sub.name} · Unit ${unit.id} · ${unit.name}</div>
          <h1 class="rd__h1">${ch.title}</h1>
          <div id="rd-content"><div class="skeleton" style="height:1.2em;width:80%"></div><div class="skeleton mt-2" style="height:1.2em;width:95%"></div><div class="skeleton mt-2" style="height:1.2em;width:70%"></div></div>
          <nav class="rd__nav" aria-label="Chapters">
            ${prev ? raw(`<a class="btn btn--plain" href="${routeFor(cls.id, stream.id, sub.id, prev.id, 'read')}">${icon('chevronLeft')}<span class="truncate">Ch ${prev.number} · ${esc(prev.title)}</span></a>`) : raw('<span></span>')}
            ${next ? raw(`<a class="btn btn--plain" href="${routeFor(cls.id, stream.id, sub.id, next.id, 'read')}"><span class="truncate">Ch ${next.number} · ${esc(next.title)}</span>${icon('chevronRight')}</a>`) : ''}
          </nav>
          <span class="rd__end" id="rd-end"></span>
        </article>
      </div>
      <footer class="rd__foot" id="rd-foot">
        <div class="rd__track"><span id="rd-bar"></span></div>
        <span class="tnum" id="rd-left"></span>
        <button class="rd__full" type="button" data-full aria-label="Full screen" title="Full screen (f)">${raw(icon('expand'))}</button>
        <span class="tnum" id="rd-right"></span>
      </footer>
      <button class="rd__exit" type="button" data-exit hidden aria-label="Exit full screen">${raw(icon('x'))}</button>
    </div>`,
    async mount(el) {
      const rd = el.querySelector('#rd'), stage = el.querySelector('#rd-stage'), book = el.querySelector('#rd-book'), content = el.querySelector('#rd-content');
      const left = el.querySelector('#rd-left'), right = el.querySelector('#rd-right'), bar = el.querySelector('#rd-bar');
      const R = { pages: 1, page: 0, W: 0, minutes: 1, headings: [] };
      applyPaper(rd, prefs().paper);

      // ----- content -----
      const [notes, formulas] = await Promise.all([ch.items?.notes ? data.notes(sub, ch.id) : null, ch.items?.formulas ? data.formulas(sub, ch.id) : null]);
      if (!notes && !formulas) {
        content.innerHTML = String(emptyState({ icon: 'book', title: 'Nothing to read yet', text: 'Notes for this chapter are on their way.', action: `<a class="btn btn--secondary" href="${base}">Back to chapter</a>` }));
      } else {
        const { renderMarkdown, typesetAll } = await import('../markdown.js');
        R.typesetAll = () => Promise.all([...content.querySelectorAll('.prose')].map((n) => typesetAll(n)));
        content.replaceChildren();
        if (notes) content.appendChild(await renderMarkdown(notes, { unitColour: unit.colour }));
        if (formulas) {
          const h = document.createElement('h2'); h.className = 'rd__divider'; h.id = 'formula-sheet'; h.textContent = 'Formula sheet';
          content.appendChild(h); content.appendChild(await renderMarkdown(formulas, { unitColour: unit.colour }));
        }
        R.headings = [...content.querySelectorAll('h2')].map((h) => ({ id: h.id, text: h.textContent }));
        R.minutes = Math.max(1, Math.round((content.textContent.match(/\S+/g) || []).length / 200));
      }

      // ----- layout: scroll or pages -----
      const fraction = () => (prefs().mode === 'pages' ? (R.pages > 1 ? R.page / (R.pages - 1) : 0) : (rd.scrollHeight - rd.clientHeight > 0 ? rd.scrollTop / (rd.scrollHeight - rd.clientHeight) : 0));
      const foot = () => {
        let done;
        if (prefs().mode === 'pages') { done = R.pages > 1 ? (R.page + 1) / R.pages : 1; left.textContent = `${R.page + 1} of ${R.pages}`; }
        else { done = fraction(); left.textContent = `${Math.round(done * 100)}%`; }
        const mn = Math.ceil(R.minutes * (1 - done));
        right.textContent = mn > 0 ? `${mn} min left` : 'Done';
        bar.style.width = (done * 100).toFixed(1) + '%';
      };
      let saveT;
      const savePos = () => { clearTimeout(saveT); saveT = setTimeout(() => { const f = fraction(); store.set(posKey, f); store.set('reader.last', { cls: cls.id, stream: stream.id, sub: sub.id, ch: ch.id, title: ch.title, number: ch.number, subject: sub.name, colour: unit.colour, f, t: Date.now() }); }, 300); };
      const goTo = (n, animate = true) => {
        R.page = Math.max(0, Math.min(R.pages - 1, n));
        book.style.transition = animate && !reduced() ? '' : 'none';
        book.style.transform = `translate3d(${-R.page * R.W}px,0,0)`;
        foot(); savePos();
      };
      let typesetDone = false;
      const layout = (f = fraction()) => {
        rd.dataset.mode = prefs().mode;
        if (prefs().mode === 'pages' && !typesetDone && R.typesetAll) { typesetDone = true; R.typesetAll().then(() => layout(f)); }
        if (prefs().mode !== 'pages') {
          ['width', 'height', 'columnWidth', 'columnGap', 'transition', 'transform'].forEach((k) => { book.style[k] = ''; });
          R.pages = 1; R.page = 0;
          requestAnimationFrame(() => { rd.scrollTo({ top: f * (rd.scrollHeight - rd.clientHeight), behavior: 'instant' }); foot(); });
          return;
        }
        rd.scrollTo({ top: 0, behavior: 'instant' });
        const W = stage.clientWidth, H = stage.clientHeight, M = W < 520 ? 20 : 48;
        const colW = W - 2 * M;
        Object.assign(book.style, { width: colW + 'px', height: H + 'px', columnWidth: colW + 'px', columnGap: (2 * M) + 'px', transition: 'none', transform: 'translate3d(0,0,0)' });
        R.W = W;
        const pr = book.getBoundingClientRect(), er = el.querySelector('#rd-end').getBoundingClientRect();
        R.pages = Math.max(1, Math.floor((er.left - pr.left + 1) / W) + 1);
        goTo(Math.round(f * (R.pages - 1)), false);
      };
      const pageOf = (node) => Math.max(0, Math.floor((node.getBoundingClientRect().left - book.getBoundingClientRect().left + 2) / (R.W || 1)));
      const jumpTo = (id) => { const node = el.querySelector('#' + CSS.escape(id)); if (!node) return; if (prefs().mode === 'pages') goTo(pageOf(node)); else node.scrollIntoView({ block: 'start', behavior: reduced() ? 'auto' : 'smooth' }); };

      // first layout at the remembered position; again when fonts / maths settle and on resize
      const saved = store.get(posKey, 0);
      requestAnimationFrame(() => layout(saved));
      document.fonts?.ready.then(() => layout());
      let rt; const onResize = () => { clearTimeout(rt); rt = setTimeout(() => layout(), 120); };
      window.addEventListener('resize', onResize);
      const ro = new ResizeObserver(() => { if (prefs().mode === 'pages') { clearTimeout(rt); rt = setTimeout(() => layout(), 150); } });
      ro.observe(content);

      // scroll: progress, auto-hide bars, position
      let lastY = 0;
      rd.addEventListener('scroll', () => {
        if (prefs().mode === 'pages') return;
        const y = rd.scrollTop;
        if (y > lastY + 8 && y > 80) rd.classList.add('is-immersed'); else if (y < lastY - 8) rd.classList.remove('is-immersed');
        lastY = y; foot(); savePos();
      }, { passive: true });

      // tap: in Pages the left / right third turns a page, the middle toggles the bars; in Scroll a tap toggles the bars
      stage.addEventListener('click', (e) => {
        if (e.target.closest('a, button, select, input, textarea, summary')) return;
        if (prefs().mode === 'pages') {
          const x = (e.clientX - stage.getBoundingClientRect().left) / stage.clientWidth;
          if (x < 0.3) { goTo(R.page - 1); return; }
          if (x > 0.7) { goTo(R.page + 1); return; }
        }
        rd.classList.toggle('is-immersed');
      });
      let sx = null, sy = 0;
      stage.addEventListener('touchstart', (e) => { sx = e.touches.length > 1 ? null : e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
      stage.addEventListener('touchend', (e) => {
        if (sx == null || prefs().mode !== 'pages') return;
        const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) goTo(R.page + (dx < 0 ? 1 : -1));
      }, { passive: true });

      // ----- sheets -----
      el.querySelector('[data-contents]').addEventListener('click', () => {
        if (!R.headings.length) return;
        const s = openSheet({ title: 'Contents', content: `<div class="list">${R.headings.map((h) => `<button class="list__item" type="button" data-id="${esc(h.id)}"><span class="list__body"><span class="list__title">${esc(h.text)}</span></span><span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></button>`).join('')}</div>` });
        s.body.addEventListener('click', (e) => { const b = e.target.closest('[data-id]'); if (!b) return; s.close(); setTimeout(() => jumpTo(b.dataset.id), 60); });
      });
      el.querySelector('[data-aa]').addEventListener('click', () => openAa({ rd, relayout: () => layout(fraction()) }));

      // ----- full screen (immersive): browser full screen where allowed, screen kept awake where allowed -----
      const exitBtn = el.querySelector('[data-exit]'), fullBtn = el.querySelector('[data-full]');
      let wake = null;
      const isFull = () => !!(document.fullscreenElement || document.webkitFullscreenElement);
      const keepAwake = async () => { try { if ('wakeLock' in navigator && document.visibilityState === 'visible') wake = await navigator.wakeLock.request('screen'); } catch { wake = null; } };
      const setImmersive = (on) => {
        rd.classList.toggle('is-full', on); exitBtn.hidden = !on;
        fullBtn.innerHTML = icon(on ? 'collapse' : 'expand'); fullBtn.setAttribute('aria-label', on ? 'Exit full screen' : 'Full screen');
        if (on) { rd.classList.add('is-immersed'); keepAwake(); } else { rd.classList.remove('is-immersed'); wake?.release?.(); wake = null; }
        requestAnimationFrame(() => layout(fraction()));
      };
      const enter = async () => {
        const docEl = document.documentElement;
        const fs = docEl.requestFullscreen || docEl.webkitRequestFullscreen;
        if (fs) { try { await fs.call(docEl, { navigationUI: 'hide' }); } catch { /* iPhone Safari refuses; the in-page full view still applies */ } }
        setImmersive(true);
      };
      const leave = async () => { if (isFull()) { try { await (document.exitFullscreen?.() || document.webkitExitFullscreen?.()); } catch { /* ignore */ } } setImmersive(false); };
      fullBtn.addEventListener('click', () => (rd.classList.contains('is-full') ? leave() : enter()));
      exitBtn.addEventListener('click', leave);
      const onFsChange = () => { if (!isFull() && rd.classList.contains('is-full')) setImmersive(false); };
      document.addEventListener('fullscreenchange', onFsChange);
      document.addEventListener('webkitfullscreenchange', onFsChange);
      const onVis = () => { if (document.visibilityState === 'visible' && rd.classList.contains('is-full')) keepAwake(); };
      document.addEventListener('visibilitychange', onVis);

      // ----- keys -----
      const onKey = (e) => {
        if (/^(input|textarea|select)$/i.test(e.target.tagName) || document.querySelector('dialog[open]')) return;
        const pages = prefs().mode === 'pages';
        if (e.key === 'Escape') { if (rd.classList.contains('is-full')) leave(); else location.hash = base; }
        else if (pages && ['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); goTo(R.page + 1); }
        else if (pages && ['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); goTo(R.page - 1); }
        else if (!pages && e.key === 'ArrowRight' && next) location.hash = routeFor(cls.id, stream.id, sub.id, next.id, 'read');
        else if (!pages && e.key === 'ArrowLeft' && prev) location.hash = routeFor(cls.id, stream.id, sub.id, prev.id, 'read');
        else if (e.key === 'f') fullBtn.click();
      };
      document.addEventListener('keydown', onKey);

      return () => {
        document.removeEventListener('keydown', onKey); document.removeEventListener('fullscreenchange', onFsChange); document.removeEventListener('webkitfullscreenchange', onFsChange); document.removeEventListener('visibilitychange', onVis);
        window.removeEventListener('resize', onResize); ro.disconnect(); wake?.release?.();
        if (isFull()) document.exitFullscreen?.().catch(() => {});
        document.querySelector('meta[name="theme-color"]:not([media])')?.remove();
      };
    },
  };
}

/* ---------- Aa sheet: size · font · paper · layout ---------- */
function openAa({ rd, relayout }) {
  const p = prefs();
  const seg = (name, opts, cur) => `<div class="segmented" style="position:static" role="group" data-seg="${name}">${opts.map(([v, l]) => `<button class="segmented__btn" type="button" data-v="${v}" aria-selected="${v === cur}">${l}</button>`).join('')}</div>`;
  const s = openSheet({
    title: 'Text & page',
    content: `
      <div class="rd__size"><button class="btn btn--plain" type="button" data-step="-1" aria-label="Smaller text" style="font-size:.9rem">A</button><output id="rd-size-out" class="tnum">${p.size} pt</output><button class="btn btn--plain" type="button" data-step="1" aria-label="Larger text" style="font-size:1.25rem">A</button></div>
      <p class="list__header" style="padding-left:0">Font</p>${seg('font', [['serif', '<span class="rd__f-serif">Serif</span>'], ['sans', 'Sans']], p.font)}
      <p class="list__header" style="padding-left:0">Page</p>
      <div class="rd__papers" data-seg="paper">${PAPERS.map(([v, l]) => `<button class="rd__paper" type="button" data-v="${v}" aria-pressed="${v === p.paper}"><span class="rd__sw rd__sw--${v}">Aa</span>${l}</button>`).join('')}</div>
      <p class="list__header" style="padding-left:0">Layout</p>${seg('mode', [['scroll', 'Scroll'], ['pages', 'Pages']], p.mode)}
      <p class="t-footnote t-3 mt-4">Auto follows the app's light / dark setting. Pages: swipe or tap the edges to turn; ← → on a keyboard.</p>`,
  });
  const save = (patch) => { store.set('reader', { ...prefs(), ...patch }); };
  s.body.querySelectorAll('[data-step]').forEach((b) => b.addEventListener('click', () => {
    const cur = prefs().size, i = SIZES.indexOf(cur), j = Math.max(0, Math.min(SIZES.length - 1, (i < 0 ? 3 : i) + Number(b.dataset.step)));
    save({ size: SIZES[j] }); rd.style.setProperty('--rd-size', SIZES[j] + 'px'); s.body.querySelector('#rd-size-out').textContent = `${SIZES[j]} pt`; haptic(); relayout();
  }));
  s.body.addEventListener('click', (e) => {
    const b = e.target.closest('[data-seg] [data-v]'); if (!b) return;
    const name = b.closest('[data-seg]').dataset.seg, v = b.dataset.v;
    save({ [name]: v }); haptic();
    b.closest('[data-seg]').querySelectorAll('[data-v]').forEach((x) => { x.setAttribute(name === 'paper' ? 'aria-pressed' : 'aria-selected', String(x === b)); });
    if (name === 'paper') applyPaper(rd, v); else if (name === 'font') { rd.dataset.font = v; relayout(); } else if (name === 'mode') { rd.dataset.mode = v; relayout(); }
  });
}

function applyPaper(rd, paper) {
  rd.dataset.paper = paper;
  const dark = document.documentElement.dataset.theme === 'dark' || (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
  const eff = paper === 'auto' ? (dark ? 'dark' : 'light') : paper;
  const colours = { light: '#FFFFFF', sepia: '#F8F1E3', gray: '#48484A', dark: '#101418' };
  let meta = document.querySelector('meta[name="theme-color"]:not([media])');
  if (!meta) { meta = document.createElement('meta'); meta.name = 'theme-color'; document.head.appendChild(meta); }
  meta.content = colours[eff];
}
