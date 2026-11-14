import { html, raw, icon, esc, emptyState, skeletonList, toast, haptic } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';
import { preloadMarkdown } from '../markdown.js';

const TABS = [
  { id: 'notes', label: 'Read' }, { id: 'mustknow', label: 'Must know' }, { id: 'practice', label: 'Practice' },
  { id: 'exam', label: 'Exam' }, { id: 'mynotes', label: 'My notes' },
];
const TRACK = [['L', 'Learnt'], ['R1', 'Revised 1'], ['PYQ', 'PYQ set'], ['R2', 'Revised 2'], ['E', 'Exam-ready']];

export async function chapter(route) {
  preloadMarkdown(); // fetch the renderer in parallel with the index lookup
  const { cls, stream, subject: sub } = await data.resolve(route.classId, route.streamId, route.subjectId);
  if (!sub) return { title: 'Not found', tab: 'subjects', html: emptyState({ icon: 'alert', title: 'No such subject' }) };
  if (route.chapterId === 'formulas') { const { formulaSheet } = await import('./formulas.js'); return formulaSheet({ cls, stream, sub }); }
  const { unit, chapter: ch } = data.chapterOf(sub, route.chapterId);
  if (!ch) return { title: 'Not found', tab: 'subjects', back: routeFor(cls.id, stream.id, sub.id), html: emptyState({ icon: 'alert', title: 'No such chapter', action: `<a class="btn btn--secondary" href="${routeFor(cls.id, stream.id, sub.id)}">Back to ${esc(sub.name)}</a>` }) };
  if (route.tab === 'read') { const { reader } = await import('./reader.js'); return reader({ cls, stream, sub, unit, ch }); }
  if (route.tab === 'recall') { const { recallChapter } = await import('./recall.js'); return recallChapter({ cls, stream, sub, unit, ch }); }
  if (route.tab === 'formulas') route = { ...route, tab: 'mustknow' }; // old links
  const defaultTab = ch.items?.notes ? 'notes' : ch.items?.mustknow ? 'mustknow' : 'notes';
  const tab = TABS.some((t) => t.id === route.tab) ? route.tab : defaultTab;
  const key = `${sub.id}/${ch.id}`;
  const base = routeFor(cls.id, stream.id, sub.id, ch.id);
  const all = data.allChapters(sub);
  const i = all.findIndex((c) => c.id === ch.id);
  const prev = all[i - 1], next = all[i + 1];

  return {
    title: `Ch ${ch.number} · ${ch.title}`, tab: 'subjects', back: routeFor(cls.id, stream.id, sub.id), backLabel: sub.name, unitColour: unit.colour, wide: true,
    actions: `<a class="icon-btn" href="${base}/read" aria-label="Reading mode" title="Reading mode">${icon('book')}</a><button class="icon-btn hide-phone" type="button" data-print aria-label="Print" title="Print">${icon('print')}</button>`,
    html: html`
      <div class="unit-bar" style="--unit:#${unit.colour};margin-top:var(--s-3)"><span>${esc(sub.name)} · Unit ${esc(unit.id)} · ${esc(unit.name)}</span><span class="marks">${unit.marks} marks</span></div>
      <h1 class="t-title" style="margin:var(--s-2) 0 var(--s-1)"><span class="t-2" style="font-weight:600">${ch.number}.</span> ${ch.title}</h1>
      ${ch.marks_hint ? html`<p class="t-2 t-footnote mb-2">${ch.marks_hint}</p>` : ''}
      <div class="card card--pad-0 mb-4" style="--unit:#${unit.colour}">
        <div class="row" style="padding:var(--s-2) var(--s-3);gap:var(--s-1);flex-wrap:wrap" data-tracker>
          ${TRACK.map(([k, label]) => raw(`<button class="chip" type="button" data-track="${k}" aria-pressed="false" title="${label}">${k}</button>`))}
          <span class="grow"></span>
          <label class="row t-footnote t-2" style="margin:0;gap:var(--s-2)">Confidence <select data-conf aria-label="Confidence 1 to 5" style="width:auto;min-height:2rem;padding:0.2rem 1.6rem 0.2rem 0.6rem;font-size:0.875rem"><option value="">–</option>${raw([1, 2, 3, 4, 5].map((n) => `<option value="${n}">${n}</option>`).join(''))}</select></label>
        </div>
      </div>
      <div class="segmented" role="tablist" aria-label="Chapter sections" style="--unit:#${unit.colour}">
        ${TABS.map((t) => raw(`<a class="segmented__btn" role="tab" href="${base}/${t.id}" aria-selected="${t.id === tab}" ${t.id === tab ? 'aria-current="page"' : ''}>${t.label}</a>`))}
      </div>
      <div class="with-rail mt-4">
        <section id="tab-content" role="tabpanel" aria-label="${TABS.find((t) => t.id === tab).label}" style="--unit:#${unit.colour}">${skeletonList(3)}</section>
        <aside class="rail only-desktop" id="rail"></aside>
      </div>
      <div class="row row--between mt-8" style="gap:var(--s-3)">
        ${prev ? raw(`<a class="btn btn--plain btn--sm" href="${routeFor(cls.id, stream.id, sub.id, prev.id, tab)}">${icon('chevronLeft')} Ch ${prev.number}</a>`) : raw('<span></span>')}
        ${next ? raw(`<a class="btn btn--plain btn--sm" href="${routeFor(cls.id, stream.id, sub.id, next.id, tab)}">Ch ${next.number} ${icon('chevronRight')}</a>`) : ''}
      </div>`,
    async mount(el) {
      // tracker
      const tr = () => store.tracker(key);
      const paint = () => { const t = tr(); for (const b of el.querySelectorAll('[data-track]')) b.setAttribute('aria-pressed', String(!!t[b.dataset.track])); el.querySelector('[data-conf]').value = t.confidence || ''; };
      paint();
      el.querySelector('[data-tracker]').addEventListener('click', (e) => {
        const b = e.target.closest('[data-track]'); if (!b) return;
        const k = b.dataset.track; const on = !tr()[k];
        store.setTracker(key, { [k]: on }); haptic(on ? 'success' : 'light'); paint();
      });
      el.querySelector('[data-conf]').addEventListener('change', (e) => { store.setTracker(key, { confidence: e.target.value ? Number(e.target.value) : undefined }); haptic(); });
      document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
      // content
      const panel = el.querySelector('#tab-content');
      const rail = el.querySelector('#rail');
      await renderTab(tab, { panel, rail, sub, ch, unit, key, cls, stream });
    },
  };
}

async function renderTab(tab, ctx) {
  const { panel, rail, sub, ch, unit, key } = ctx;
  const requestLink = `<a class="btn btn--secondary" href="#/more/request">Request it</a>`;
  if (tab === 'notes' || tab === 'mustknow') {
    const exists = tab === 'notes' ? ch.items?.notes : ch.items?.mustknow;
    const src = !exists ? null : tab === 'notes' ? await data.notes(sub, ch.id) : await data.mustknow(sub, ch.id);
    if (!src) {
      const other = tab === 'notes' && ch.items?.mustknow ? `<a class="btn btn--secondary" href="${routeFor(ctx.cls.id, ctx.stream.id, sub.id, ch.id, 'mustknow')}">Open Must know</a>` : requestLink;
      panel.innerHTML = String(emptyState({ icon: tab === 'notes' ? 'book' : 'bolt', title: tab === 'notes' ? 'The full explanation for this chapter is being written' : 'Must-know lines for this chapter are coming', text: tab === 'notes' ? 'Read is the chapter explained like a tutor would; it is added chapter by chapter.' : 'Short lines and boxed formulas you can turn into flashcards.', action: other }));
      return;
    }
    const { renderMarkdown, headings } = await import('../markdown.js');
    const node = await renderMarkdown(src, { unitColour: unit.colour });
    if (tab === 'mustknow') {
      const { cardsFrom, summary } = await import('../recall.js');
      const n = cardsFrom(src, { subject: sub.id, chapter: ch.id }).length;
      const due = summary().byChapter[key]?.due || 0;
      panel.innerHTML = `<div class="card card--tint row mb-4" style="--unit:#${unit.colour}"><span class="list__leading">${icon('bolt')}</span><div class="grow"><div class="t-headline">Recall this chapter</div><div class="t-2 t-footnote">${n} cards${n > 25 ? ', 25 a round' : ''}${due ? ` · <strong>${due} due today</strong>` : ''} · about ${Math.max(1, Math.ceil(Math.min(n, 25) / 4))} min</div></div><a class="btn btn--unit btn--sm" href="${routeFor(ctx.cls.id, ctx.stream.id, sub.id, ch.id, 'recall')}">Start</a></div>`;
      panel.appendChild(node);
      panel.insertAdjacentHTML('beforeend', '<p class="legend"><span><span class="stars">★★★</span> most years</span><span><span class="stars">★★</span> often</span><span><span class="stars">★</span> sometimes</span><span>· estimates</span></p>');
    } else {
      panel.innerHTML = `<div class="row mb-4" style="gap:var(--s-2);flex-wrap:wrap"><a class="btn btn--unit btn--sm" href="${routeFor(ctx.cls.id, ctx.stream.id, sub.id, ch.id, 'read')}" style="--unit:#${unit.colour}">${icon('book')} Read full screen</a>${ch.read_minutes ? `<span class="t-footnote t-2">about ${ch.read_minutes} min</span>` : ''}</div>`;
      panel.appendChild(node);
    }
    const hs = headings(node);
    if (hs.length && rail) {
      rail.innerHTML = `<h4>On this page</h4>${hs.map((h) => `<a href="#${h.id}" data-anchor>${esc(h.text)}</a>`).join('')}`;
      rail.addEventListener('click', (e) => { const a = e.target.closest('[data-anchor]'); if (!a) return; e.preventDefault(); document.getElementById(a.getAttribute('href').slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    }
    return;
  }
  if (tab === 'practice') {
    const q = ch.items?.questions ? await data.questions(sub, ch.id).catch(() => null) : null;
    if (!q?.length) { panel.innerHTML = String(emptyState({ icon: 'practice', title: 'No practice questions yet', text: 'Question sets arrive with the practice module. Each question has a step-mark scheme so you can mark yourself.', action: requestLink })); return; }
    const byType = Object.entries(ch.question_types || {});
    panel.innerHTML = `<div class="card"><div class="t-headline">${q.length} questions ready</div><p class="t-2 t-footnote mt-2">${byType.map(([t, n]) => `${n} ${t.toUpperCase()}`).join(' · ')}</p><p class="t-2 t-subhead mt-2">Practice mode (one question at a time, hints, self-marking) is the next thing being built. Until then, use the chapter notes and formula sheet.</p></div>`;
    return;
  }
  if (tab === 'exam') {
    panel.innerHTML = String(emptyState({ icon: 'timer', title: 'Timed exams are coming', text: `Full papers on the CBSE 2026–27 ${esc(sub.name)} pattern, one unit or chosen chapters, with the marking scheme after you submit.` }));
    return;
  }
  if (tab === 'mynotes') {
    panel.innerHTML = `<div class="mynotes"><label for="mynote">Your notes for this chapter (saved on this device)</label><textarea id="mynote" placeholder="Formulas you keep forgetting, traps from your tests, things your teacher stressed…"></textarea><div class="row row--between mt-2"><span class="t-footnote t-3" id="mynote-status">Saved locally</span><button class="btn btn--sm btn--ghost" type="button" id="mynote-clear">Clear</button></div></div>`;
    const ta = panel.querySelector('#mynote'); const status = panel.querySelector('#mynote-status');
    ta.value = store.myNote(key);
    let t;
    ta.addEventListener('input', () => { status.textContent = 'Saving…'; clearTimeout(t); t = setTimeout(() => { store.setMyNote(key, ta.value); status.textContent = 'Saved locally'; }, 400); });
    panel.querySelector('#mynote-clear').addEventListener('click', () => {
      const old = ta.value; if (!old) return; ta.value = ''; store.setMyNote(key, '');
      toast('Notes cleared', { action: 'Undo', onAction: () => { ta.value = old; store.setMyNote(key, old); } });
    });
  }
}
