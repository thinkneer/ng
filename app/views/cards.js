// Cards deck: one card per screen, swipe / buttons for prev-next, tap to flip, heart = My cards, print as a 2×3 grid.
// Recall mode on the same deck: swipe right = got it, left = again (same Leitner store and ids as Recall).
// Routes: …/<subject>/<chapter>/cards · …/<subject>/cards/<unitId> · #/cards/today · #/cards/mine
import { html, raw, icon, esc, emptyState, haptic, toast, ensureCss } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';
import { chapterCards, unitCards, cardsByUid, isMine, toggleMine, myCards } from '../cards.js';
import { answer, session, summary, cardState } from '../recall.js';

export async function chapterDeck({ cls, stream, sub, unit, ch }) {
  const cards = await chapterCards(sub, ch, unit);
  return deck({ title: `Ch ${ch.number} · ${ch.title}`, cards, back: routeFor(cls.id, stream.id, sub.id, ch.id), colour: unit.colour, empty: 'This chapter’s cards are being drawn' });
}
export async function unitDeck({ cls, stream, sub, unitId }) {
  const unit = sub.units.find((u) => u.id === unitId);
  if (!unit) return deck({ title: 'Cards', cards: [], back: routeFor(cls.id, stream.id, sub.id) });
  const cards = await unitCards(sub, unit);
  return deck({ title: `Unit ${unit.id} · ${unit.name}`, cards, back: routeFor(cls.id, stream.id, sub.id), colour: unit.colour, empty: 'Cards for this unit are being drawn' });
}
/** #/cards/today (the chapter being read + due cards, Recall mode) and #/cards/mine (hearted). */
export async function cardsRoute(route) {
  const s = store.settings;
  const subjects = s.class ? (await data.liveSubjects(s.class, s.stream)).filter((x) => store.isMine(x.id)) : [];
  if (route.sub === 'mine') {
    const cards = await cardsByUid(myCards(), subjects);
    return deck({ title: 'My cards', cards, back: '#/today', empty: 'No saved cards yet', emptyText: 'Tap the heart on any card to keep it here.' });
  }
  const due = summary().cardsDueIds;
  const last = store.get('reader.last', null);
  let current = [];
  if (last) {
    const sub = subjects.find((x) => x.id === last.sub);
    const { unit, chapter } = sub ? data.chapterOf(sub, last.ch) : {};
    if (chapter) current = await chapterCards(sub, chapter, unit);
  }
  const dueCards = await cardsByUid(due, subjects);
  const seen = new Set(); const cards = [];
  for (const c of [...dueCards, ...session(current, { max: 15 })]) if (!seen.has(c.uid)) { seen.add(c.uid); cards.push(c); }
  return deck({ title: 'Cards for today', cards, back: '#/today', recall: true, empty: 'No cards for today', emptyText: 'Open a chapter and tap its coloured number to go through its cards.' });
}

/** The swipe deck. `start` opens at that card; `plain` hides Recall mode and the heart (decks outside the chapters, e.g. Mind tools). */
export function deck({ title, cards, back, colour, recall = false, empty, emptyText, start = 0, plain = false }) {
  return {
    title, tab: 'today', fullscreen: true, unitColour: colour,
    html: html`<div class="rc dk" id="dk" style="${colour ? `--unit:#${colour}` : ''}">
      <header class="rc__top dk__top">
        <a class="icon-btn" href="${back}" aria-label="Close">${raw(icon('x'))}</a>
        <div class="rc__title"><span class="dk__name truncate">${title}</span><span id="dk-count" class="tnum dk__count"></span></div>
        <div class="dk__tools">
          <button class="chip chip--outline dk__mode" type="button" data-mode ${plain ? 'hidden' : ''} aria-pressed="${recall}" title="Recall mode: right = got it, left = again">${raw(icon('bolt'))}<span>Recall</span></button>
          <button class="icon-btn hide-phone" type="button" data-print aria-label="Print cards (6 per page)" title="Print (6 per A4 page)">${raw(icon('print'))}</button>
        </div>
      </header>
      <div class="rc__track"><span id="dk-bar"></span></div>
      <main class="rc__stage dk__stage" id="dk-stage"></main>
      <footer class="rc__foot" id="dk-foot"></footer>
    </div>`,
    async mount(el) {
      await ensureCss();
      const stage = el.querySelector('#dk-stage'), foot = el.querySelector('#dk-foot'), count = el.querySelector('#dk-count'), bar = el.querySelector('#dk-bar');
      const modeBtn = el.querySelector('[data-mode]');
      if (!cards.length) { modeBtn.hidden = true; el.querySelector('[data-print]').hidden = true; stage.innerHTML = String(emptyState({ icon: 'cards', title: empty || 'No cards yet', text: emptyText || 'Each chapter gets 8–15 picture cards: key diagrams, formulas in words, process frames.', action: `<a class="btn btn--secondary" href="${back}">Back</a>` })); return; }
      const { cleanSvg, texHTML, inlineHTML } = await import('../markdown.js');
      let mode = recall ? 'recall' : 'browse';
      let list = mode === 'recall' ? session(cards, { max: 40 }) : cards;
      let i = Math.min(Math.max(0, start | 0), list.length - 1), flipped = false; const res = { got: 0, again: 0 };
      const cache = new Map();

      async function face(c) {
        if (cache.has(c.uid)) return cache.get(c.uid);
        const visual = c.tex
          ? `<div class="dk__tex">${await texHTML(c.tex)}</div>${c.legend?.length ? `<ul class="dk__legend">${(await Promise.all(c.legend.map(async (l, k) => { const [sym, ...rest] = l.split('='); return `<li style="--k:${k}"><span class="dk__sym">${await texHTML(sym.trim(), false)}</span><span>${esc(rest.join('=').trim())}</span></li>`; }))).join('')}</ul>` : ''}`
          : `<div class="dk__svg">${await cleanSvg(c.svg)}</div>`;
        const backNode = await inlineHTML(c.back);
        const out = { visual, back: backNode.innerHTML };
        cache.set(c.uid, out);
        return out;
      }
      const stars = (n) => (n ? `<span class="stars" aria-label="${n} star${n > 1 ? 's' : ''} (estimate)">${'★'.repeat(n)}</span>` : '');
      const kindLabel = { figure: 'Diagram', formula: 'Formula', process: 'Process', event: 'Event', mnemonic: 'Memory trick', compare: 'Compare', mind: 'Mind tool' };

      async function show() {
        const c = list[i]; flipped = false;
        const f = await face(c);
        const st = cardState(c.uid);
        count.textContent = `${i + 1} of ${list.length}`;
        bar.style.width = (((i) / list.length) * 100).toFixed(1) + '%';
        stage.innerHTML = `<article class="dk__card" style="--unit:#${c.colour}" aria-roledescription="card">
            <div class="dk__meta"><span class="chip chip--unit">${c.chapterNumber ? `Ch ${c.chapterNumber} · ` : ''}${esc(kindLabel[c.kind] || c.kind)}</span>${stars(c.stars)}<span class="grow"></span>${mode === 'recall' ? `<span class="t-footnote t-3">${st ? `box ${st.box + 1}` : 'new'}</span>` : ''}
              ${plain ? '' : `<button class="icon-btn dk__heart" type="button" data-heart aria-pressed="${isMine(c.uid)}" aria-label="${isMine(c.uid) ? 'Remove from' : 'Save to'} My cards">${icon('heart')}</button>`}</div>
            <div class="dk__flip" id="dk-flip" role="button" tabindex="0" aria-pressed="false">
              <div class="dk__face dk__front">${f.visual}<h2 class="dk__title">${esc(c.title)}</h2><p class="dk__hint">Tap to flip</p></div>
              <div class="dk__face dk__back" aria-hidden="true"><h2 class="dk__title dk__title--sm">${esc(c.title)}</h2><div class="dk__text${c.dense ? ' dk__text--dense' : ''}">${f.back}</div>${c.tags?.length ? `<div class="chips mt-4">${c.tags.map((t) => `<span class="badge">${esc(t)}</span>`).join('')}</div>` : ''}</div>
            </div>
          </article>`;
        renderFoot();
        // warm the next card
        if (list[i + 1]) face(list[i + 1]);
      }
      function renderFoot() {
        if (mode === 'recall') {
          foot.innerHTML = `<div class="rc__btns"><button class="btn btn--plain" type="button" data-grade="0">${icon('x')} Again <span class="kbd only-desktop">1</span></button><button class="btn" type="button" data-grade="1">${icon('check')} Got it <span class="kbd only-desktop">2</span></button></div><p class="dk__swipe t-footnote t-3">Swipe right = got it · left = again</p>`;
          return;
        }
        const dots = list.length <= 20 ? `<div class="dk__dots" aria-hidden="true">${list.map((_, k) => `<span${k === i ? ' class="is-on"' : ''}></span>`).join('')}</div>` : `<span class="t-footnote t-2 tnum">${i + 1} / ${list.length}</span>`;
        foot.innerHTML = `<div class="dk__nav"><button class="btn btn--plain" type="button" data-prev ${i === 0 ? 'disabled' : ''} aria-label="Previous card">${icon('chevronLeft')}</button>${dots}${i < list.length - 1 ? `<button class="btn btn--plain" type="button" data-next aria-label="Next card">${icon('chevronRight')}</button>` : `<a class="btn" href="${back}">Done</a>`}</div>`;
      }
      function flip(to = !flipped) {
        const fl = stage.querySelector('#dk-flip'); if (!fl) return;
        flipped = to; fl.classList.toggle('is-flipped', flipped); fl.setAttribute('aria-pressed', String(flipped));
        fl.querySelector('.dk__front').setAttribute('aria-hidden', String(flipped)); fl.querySelector('.dk__back').setAttribute('aria-hidden', String(!flipped));
        haptic();
      }
      const go = (d) => { const j = i + d; if (j < 0 || j >= list.length) return; i = j; show(); };
      function grade(got) {
        const c = list[i]; answer({ id: c.uid, key: c.key, deck: c.deck }, got); haptic(got ? 'success' : 'medium');
        got ? res.got++ : res.again++;
        if (i < list.length - 1) { i++; show(); } else finish();
      }
      function finish() {
        bar.style.width = '100%'; count.textContent = 'Done';
        stage.innerHTML = `<div class="rc__card center"><div class="rc__big tnum">${res.got}<span class="t-2" style="font-size:.5em"> / ${list.length}</span></div>
          <div class="t-headline mt-2">${res.again === 0 ? 'Clean sweep.' : res.again <= 3 ? 'Nearly there.' : 'Those will come back tomorrow.'}</div>
          <p class="t-2 t-subhead mt-2">${res.again} to see again tomorrow · the rest return in 3 days or later.</p></div>`;
        foot.innerHTML = `<div class="rc__btns"><button class="btn btn--plain" type="button" data-restart>Go again</button><a class="btn" href="${back}">Done</a></div>`;
      }
      function setMode(m) {
        mode = m; modeBtn.setAttribute('aria-pressed', String(m === 'recall'));
        list = m === 'recall' ? session(cards, { max: 40 }) : cards; i = 0; res.got = res.again = 0; show();
      }

      // ----- input: taps, buttons, swipes, keys -----
      foot.addEventListener('click', (e) => {
        if (e.target.closest('[data-prev]')) go(-1);
        else if (e.target.closest('[data-next]')) go(1);
        else if (e.target.closest('[data-grade]')) grade(e.target.closest('[data-grade]').dataset.grade === '1');
        else if (e.target.closest('[data-restart]')) setMode(mode);
      });
      modeBtn.addEventListener('click', () => setMode(mode === 'recall' ? 'browse' : 'recall'));
      el.querySelector('[data-print]').addEventListener('click', () => printCards(cards, title));
      stage.addEventListener('click', (e) => {
        const h = e.target.closest('[data-heart]');
        if (h) { const c = list[i]; const on = toggleMine(c.uid); h.setAttribute('aria-pressed', String(on)); h.setAttribute('aria-label', `${on ? 'Remove from' : 'Save to'} My cards`); haptic(on ? 'success' : 'light'); toast(on ? 'Saved to My cards' : 'Removed from My cards', { duration: 1600 }); }
      });
      stage.addEventListener('keydown', (e) => { if (e.target.id === 'dk-flip' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); flip(); } });
      let sx = 0, sy = 0, dx = 0, tracking = false, moved = false;
      stage.addEventListener('pointerdown', (e) => { if (e.target.closest('button, a') || !e.target.closest('.dk__card')) return; tracking = true; moved = false; sx = e.clientX; sy = e.clientY; dx = 0; });
      stage.addEventListener('pointermove', (e) => {
        if (!tracking) return; dx = e.clientX - sx; const dy = e.clientY - sy;
        if (!moved && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) moved = true;
        if (moved) { const card = stage.querySelector('.dk__card'); if (card) { card.style.transform = `translateX(${dx}px) rotate(${dx / 40}deg)`; card.dataset.lean = mode === 'recall' ? (dx > 40 ? 'got' : dx < -40 ? 'again' : '') : ''; } }
      });
      const end = (e) => {
        if (!tracking) return; tracking = false;
        const card = stage.querySelector('.dk__card');
        if (!moved) { if (e.type === 'pointerup' && e.target.closest('.dk__flip')) flip(); return; }
        if (card) { card.style.transform = ''; card.dataset.lean = ''; }
        if (Math.abs(dx) < 70) return;
        if (mode === 'recall') grade(dx > 0); else go(dx < 0 ? 1 : -1);
      };
      stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', end);
      const onKey = (e) => {
        if (/^(input|textarea|select)$/i.test(e.target.tagName) || document.querySelector('dialog[open]')) return;
        if (e.key === 'ArrowRight') { e.preventDefault(); mode === 'recall' ? grade(true) : go(1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); mode === 'recall' ? grade(false) : go(-1); }
        else if ((e.key === ' ' || e.key === 'Enter') && e.target.id !== 'dk-flip' && !e.target.closest('button, a')) { e.preventDefault(); flip(); }
        else if (mode === 'recall' && e.key === '1') grade(false);
        else if (mode === 'recall' && e.key === '2') grade(true);
        else if (e.key === 'Escape') location.hash = back;
      };
      document.addEventListener('keydown', onKey);
      show();
      return () => document.removeEventListener('keydown', onKey);
    },
  };
}

/** Print every card of the deck: 6 per A4 page (2 × 3), front visual + title + back lines. */
export async function printCards(cards, title) {
  await ensureCss();
  const { cleanSvg, texHTML, inlineHTML } = await import('../markdown.js');
  const cells = [];
  for (const c of cards) {
    const visual = c.tex ? `<div class="dk__tex">${await texHTML(c.tex)}</div>` : `<div class="dk__svg">${await cleanSvg(c.svg)}</div>`;
    cells.push(`<div class="pc__cell" style="--unit:#${c.colour}">${visual}<div class="pc__title">${esc(c.title)}</div><div class="pc__back">${(await inlineHTML(c.back)).innerHTML}</div></div>`);
  }
  const pages = []; for (let k = 0; k < cells.length; k += 6) pages.push(`<section class="pc__page">${cells.slice(k, k + 6).join('')}</section>`);
  const host = document.createElement('div'); host.id = 'print-host'; host.className = 'pc';
  host.innerHTML = `<h1 class="pc__h">${esc(title)} · cards</h1>${pages.join('')}`;
  document.body.appendChild(host); document.documentElement.classList.add('is-printing-extra');
  const done = () => { host.remove(); document.documentElement.classList.remove('is-printing-extra'); window.removeEventListener('afterprint', done); };
  window.addEventListener('afterprint', done);
  setTimeout(() => window.print(), 50);
}
