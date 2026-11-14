import { html, raw, icon, esc, emptyState, skeletonList, toast, haptic, openSheet, unitBar } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';
import { preloadMarkdown } from '../markdown.js';

// Three tabs only: Read (full notes), Must know (recall lines), Practice (questions). Highlights + My notes live in a sheet.
const TABS = [{ id: 'notes', label: 'Read' }, { id: 'mustknow', label: 'Must know' }, { id: 'practice', label: 'Practice' }];
const TRACK = [['L', 'Learnt'], ['R1', 'Revised 1'], ['PYQ', 'PYQ set'], ['R2', 'Revised 2'], ['E', 'Exam-ready']];

export async function chapter(route) {
  preloadMarkdown(); // fetch the renderer in parallel with the index lookup
  const { cls, stream, subject: sub } = await data.resolve(route.classId, route.streamId, route.subjectId);
  if (!sub) return { title: 'Not found', tab: 'subjects', html: emptyState({ icon: 'alert', title: 'No such subject' }) };
  if (route.chapterId === 'formulas' && route.tab === 'drill') { const { recallFormulas } = await import('./recall.js'); return recallFormulas({ cls, stream, sub }); }
  if (route.chapterId === 'formulas') { const { formulaSheet } = await import('./formulas.js'); return formulaSheet({ cls, stream, sub }); }
  if (route.chapterId === 'cards') { const { unitDeck } = await import('./cards.js'); return unitDeck({ cls, stream, sub, unitId: route.tab }); }
  if (route.chapterId === 'exam') { const [{ examRoute }] = await Promise.all([import('./exam.js'), import('../exam-builder.js'), data.pattern(cls.id, sub.id).catch(() => null)]); return examRoute({ cls, stream, sub, paperId: route.tab, extra: route.extra }); }
  if (route.chapterId === 'exam-eve') { const { examEve } = await import('./exameve.js'); return examEve({ cls, stream, sub }); }
  const { unit, chapter: ch } = data.chapterOf(sub, route.chapterId);
  if (!ch) return { title: 'Not found', tab: 'subjects', back: routeFor(cls.id, stream.id, sub.id), html: emptyState({ icon: 'alert', title: 'No such chapter', action: `<a class="btn btn--secondary" href="${routeFor(cls.id, stream.id, sub.id)}">Back to ${esc(sub.name)}</a>` }) };
  if (route.tab === 'read') { const { reader } = await import('./reader.js'); return reader({ cls, stream, sub, unit, ch }); }
  if (route.tab === 'paper') { const { paperChapter } = await import('./paper.js'); return paperChapter({ cls, stream, sub, unit, ch }); }
  if (route.tab === 'cards') { const { chapterDeck } = await import('./cards.js'); return chapterDeck({ cls, stream, sub, unit, ch }); }
  if (route.tab === 'recall') { const { recallChapter } = await import('./recall.js'); return recallChapter({ cls, stream, sub, unit, ch }); }
  if (route.tab === 'quiz') { const { quizChapter } = await import('./quiz.js'); return quizChapter({ cls, stream, sub, unit, ch, type: route.extra || 'all' }); }
  if (route.tab === 'formulas') route = { ...route, tab: 'mustknow' }; // old links
  if (route.tab === 'mynotes') route = { ...route, tab: null, openHighlights: true }; // old links: the sheet now
  const defaultTab = ch.items?.notes ? 'notes' : ch.items?.mustknow ? 'mustknow' : 'notes';
  const tab = TABS.some((t) => t.id === route.tab) ? route.tab : defaultTab;
  const key = `${sub.id}/${ch.id}`;
  const base = routeFor(cls.id, stream.id, sub.id, ch.id);
  const all = data.allChapters(sub);
  const i = all.findIndex((c) => c.id === ch.id);
  const prev = all[i - 1], next = all[i + 1];
  const ctx = { sub, ch, unit, key, cls, stream, base };

  return {
    title: `Ch ${ch.number} · ${ch.title}`, tab: 'subjects', back: routeFor(cls.id, stream.id, sub.id), backLabel: sub.name, unitColour: unit.colour, wide: true,
    actions: `<a class="icon-btn" href="${base}/read" aria-label="Reading mode" title="Reading mode">${icon('book')}</a>${['figure', 'draw', 'derive', 'numerical'].some((t) => ch.blocks?.[t]) ? `<a class="icon-btn" href="${base}/paper" aria-label="Practice on paper" title="Practice on paper">${icon('paper')}</a>` : ''}<button class="icon-btn" type="button" data-highlights aria-label="Highlights and my notes" title="Highlights and my notes">${icon('highlight')}</button><button class="icon-btn hide-phone" type="button" data-print aria-label="Print" title="Print">${icon('print')}</button>`,
    html: html`
      ${raw(unitBar(unit, { href: unit.chapters.some((c) => c.items?.cards) ? routeFor(cls.id, stream.id, sub.id, 'cards', unit.id) : null, label: `${esc(sub.name)} · Unit ${esc(unit.id)} · ${esc(unit.name)}`, style: 'margin-top:var(--s-3)' }))}
      <h1 class="t-title" style="margin:var(--s-2) 0 var(--s-3)"><span class="t-2" style="font-weight:600">${ch.number}.</span> ${ch.title}</h1>
      <div class="segmented" role="tablist" aria-label="Chapter sections" style="--unit:#${unit.colour}">
        ${TABS.map((t) => raw(`<a class="segmented__btn" role="tab" href="${base}/${t.id}" aria-selected="${t.id === tab}" ${t.id === tab ? 'aria-current="page"' : ''}>${t.label}</a>`))}
      </div>
      <div class="with-rail mt-4">
        <section id="tab-content" role="tabpanel" aria-label="${TABS.find((t) => t.id === tab).label}" style="--unit:#${unit.colour};min-height:100vh">${skeletonList(3)}</section>
        <aside class="rail only-desktop" id="rail"></aside>
      </div>
      <div class="row row--between mt-8" style="gap:var(--s-3)">
        ${prev ? raw(`<a class="btn btn--plain btn--sm" href="${routeFor(cls.id, stream.id, sub.id, prev.id, tab)}">${icon('chevronLeft')} Ch ${prev.number}</a>`) : raw('<span></span>')}
        ${next ? raw(`<a class="btn btn--plain btn--sm" href="${routeFor(cls.id, stream.id, sub.id, next.id, tab)}">Ch ${next.number} ${icon('chevronRight')}</a>`) : ''}
      </div>`,
    async mount(el) {
      document.querySelector('[data-print]')?.addEventListener('click', async () => { const { printWithBlocks } = await import('../blocks/engine.js'); printWithBlocks(); });
      document.querySelector('[data-highlights]')?.addEventListener('click', () => openHighlights(ctx));
      if (route.openHighlights) setTimeout(() => openHighlights(ctx), 50);
      const panel = el.querySelector('#tab-content');
      const rail = el.querySelector('#rail');
      await renderTab(tab, { ...ctx, panel, rail });
      panel.style.minHeight = ''; // held the page height while loading so the Ch ‹ › row didn't jump
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
    const node = await renderMarkdown(src, { unitColour: unit.colour, ctx: { key, base: ctx.base, layer: tab } });
    const { attach } = await import('../highlights.js');
    attach(node, `${sub.id}/${ch.id}/${tab}`);
    if (tab === 'mustknow') {
      const { cardsFrom, summary } = await import('../recall.js');
      const n = cardsFrom(src, { subject: sub.id, chapter: ch.id }).length;
      const due = summary().byChapter[key]?.due || 0;
      panel.innerHTML = `<div class="card card--tint row mb-4" style="--unit:#${unit.colour}"><span class="list__leading">${icon('bolt')}</span><div class="grow"><div class="t-headline">Recall this chapter</div><div class="t-2 t-footnote">${n} lines${n > 25 ? ', 25 a round' : ''}${due ? ` · <strong>${due} due today</strong>` : ''} · about ${Math.max(1, Math.ceil(Math.min(n, 25) / 4))} min</div></div><a class="btn btn--unit btn--sm" href="${routeFor(ctx.cls.id, ctx.stream.id, sub.id, ch.id, 'recall')}">Start</a></div>${ch.items?.cards ? `<div class="row mb-4" style="gap:var(--s-2)">${cardsButton(ctx)}</div>` : ''}`;
      panel.appendChild(node);
      panel.insertAdjacentHTML('beforeend', '<p class="legend"><span><span class="stars">★★★</span> most years</span><span><span class="stars">★★</span> often</span><span><span class="stars">★</span> sometimes</span><span>· estimates</span></p>');
      panel.insertAdjacentHTML('beforeend', progressSection(key));
      mountProgress(panel, key);
    } else {
      panel.innerHTML = `<div class="row mb-4" style="gap:var(--s-2);flex-wrap:wrap"><a class="btn btn--unit btn--sm" href="${routeFor(ctx.cls.id, ctx.stream.id, sub.id, ch.id, 'read')}" style="--unit:#${unit.colour}">${icon('book')} Read full screen</a>${cardsButton(ctx)}${ch.read_minutes ? `<span class="t-footnote t-2">about ${ch.read_minutes} min</span>` : ''}</div>`;
      const breath = breathMarkdown(src);
      if (breath.count) {
        const open = !!store.get('breath.open', false);
        const det = document.createElement('details'); det.className = 'breath'; det.open = open;
        det.innerHTML = `<summary><span class="breath__title">${icon('bolt')} 2-minute version</span><span class="t-footnote t-2">${breath.count} sections · tap to ${open ? 'hide' : 'show'}</span></summary>`;
        const b = await renderMarkdown(breath.md, { unitColour: unit.colour, eager: true }); b.classList.add('breath__body'); det.appendChild(b);
        attach(b, `${sub.id}/${ch.id}/breath`);
        det.addEventListener('toggle', () => { store.set('breath.open', det.open); det.querySelector('summary .t-footnote').textContent = `${breath.count} sections · tap to ${det.open ? 'hide' : 'show'}`; });
        panel.appendChild(det);
      }
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
    if (!q?.length) { panel.innerHTML = String(emptyState({ icon: 'practice', title: 'No practice questions yet', text: 'Each question comes with a hint, a model answer and a step-mark scheme so you can mark yourself.', action: requestLink })); return; }
    const { TYPE_LABEL } = await import('./quiz.js');
    const counts = {}; for (const x of q) counts[x.type] = (counts[x.type] || 0) + 1;
    const order = ['mcq', 'ar', 'case', 'vsa2', 'sa3', 'la5'].filter((t) => counts[t]);
    const attempts = store.progress().attempts || [];
    const done = new Set(attempts.filter((a) => a.key === key).map((a) => a.id)).size;
    const wrong = store.mistakes().filter((m) => m.key === key).length;
    const quiz = (t) => routeFor(ctx.cls.id, ctx.stream.id, sub.id, ch.id, 'quiz') + '/' + t;
    panel.innerHTML = `<div class="card card--tint mb-4" style="--unit:#${unit.colour}">
        <div class="row"><span class="list__leading">${icon('practice')}</span><div class="grow"><div class="t-headline">${q.length} questions</div><div class="t-2 t-footnote">${done ? `${done} attempted` : 'One at a time, hint first, mark yourself'}${wrong ? ` · <strong>${wrong} in Mistakes</strong>` : ''}</div></div><a class="btn btn--unit btn--sm" href="${quiz('all')}">Start</a></div>
      </div>
      <div class="list__header" style="padding-left:0">By type</div>
      <div class="list">${order.map((t) => `<a class="list__item has-leading pressable" href="${quiz(t)}" style="--unit:#${unit.colour}"><span class="list__leading">${counts[t]}</span><span class="list__body"><span class="list__title">${TYPE_LABEL[t]}</span><span class="list__sub">${{ mcq: '1 mark · marked for you', ar: 'Assertion–Reason · 1 mark · marked for you', case: 'Case / source-based · 4 marks · mark yourself', vsa2: 'Very short answer · mark yourself', sa3: 'Short answer · step marks', la5: 'Long answer · step marks' }[t]}</span></span><span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></a>`).join('')}</div>
      ${wrong ? `<div class="list mt-4"><a class="list__item has-leading pressable" href="#/practice/retry" style="--unit:var(--danger)"><span class="list__leading">${icon('flag')}</span><span class="list__body"><span class="list__title">Retry mistakes</span><span class="list__sub">All chapters in your Mistakes list</span></span><span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></a></div>` : ''}`;
  }
}

/** "Cards" button at the top of Read and Must know (only when the chapter has a deck). */
function cardsButton({ cls, stream, sub, ch, unit }) {
  if (!ch.items?.cards) return '';
  return `<a class="btn btn--plain btn--sm" href="${routeFor(cls.id, stream.id, sub.id, ch.id, 'cards')}" style="--unit:#${unit.colour}">${icon('cards')} Cards <span class="t-2 tnum">${ch.cards}</span></a>`;
}

/* ---------- 2-minute version: the "In one breath" paragraphs of notes.md, in order ---------- */
function breathMarkdown(src) {
  const out = []; let heading = '';
  for (const raw of src.replace(/\r\n/g, '\n').split('\n')) {
    const h = raw.match(/^##\s+(.+)$/); if (h) { heading = h[1].trim(); continue; }
    const m = raw.match(/^\*\*In one breath:\*\*\s*(.+)$/);
    if (m) out.push(`- **${heading.replace(/\*\*/g, '')}** — ${m[1].trim()}`);
  }
  return { md: out.join('\n'), count: out.length };
}

/* ---------- Progress (small section at the foot of Must know) ---------- */
function progressSection(key) {
  const t = store.tracker(key);
  return `<div class="card mt-6" data-tracker>
    <div class="t-headline">Progress</div>
    <div class="row mt-3" style="gap:var(--s-1);flex-wrap:wrap">${TRACK.map(([k, label]) => `<button class="chip" type="button" data-track="${k}" aria-pressed="${!!t[k]}" title="${label}">${k}</button>`).join('')}<span class="grow"></span>
      <label class="row t-footnote t-2" style="margin:0;gap:var(--s-2)">Confidence <select data-conf aria-label="Confidence 1 to 5" style="width:auto;min-height:2rem;padding:0.2rem 1.6rem 0.2rem 0.6rem;font-size:0.875rem"><option value="">–</option>${[1, 2, 3, 4, 5].map((n) => `<option value="${n}" ${t.confidence === n ? 'selected' : ''}>${n}</option>`).join('')}</select></label></div>
    <p class="t-footnote t-3 mt-2">L learnt · R1, R2 revised · PYQ past-paper set done · E exam-ready</p>
  </div>`;
}
function mountProgress(panel, key) {
  const box = panel.querySelector('[data-tracker]'); if (!box) return;
  box.addEventListener('click', (e) => {
    const b = e.target.closest('[data-track]'); if (!b) return;
    const on = !store.tracker(key)[b.dataset.track];
    store.setTracker(key, { [b.dataset.track]: on }); b.setAttribute('aria-pressed', String(on)); haptic(on ? 'success' : 'light');
  });
  box.querySelector('[data-conf]').addEventListener('change', (e) => { store.setTracker(key, { confidence: e.target.value ? Number(e.target.value) : undefined }); haptic(); });
}

/* ---------- Highlights + My notes sheet ---------- */
async function openHighlights({ key, sub, ch, cls, stream }) {
  const { listForChapter, jumpTo } = await import('../highlights.js');
  const hs = listForChapter(key);
  const layerName = { notes: 'Read', mustknow: 'Must know', formulas: 'Formula sheet', breath: '2-minute version', exameve: 'Exam eve' };
  const list = hs.length
    ? `<div class="list">${hs.map((h) => { const layer = h.layer.split('/').pop(); const target = layer === 'formulas' ? routeFor(cls.id, stream.id, sub.id, 'formulas') : layer === 'exameve' ? routeFor(cls.id, stream.id, sub.id, 'exam-eve') : routeFor(cls.id, stream.id, sub.id, ch.id, layer === 'breath' ? 'notes' : layer); return `<a class="list__item hl-item" href="${target}" data-jump="${esc(h.id)}"><span class="hl-item__bar hl-bg--${h.color}"></span><span class="list__body"><span class="list__title hl-item__q">${esc(h.exact)}</span>${h.note ? `<span class="list__sub hl-item__n">${esc(h.note)}</span>` : ''}<span class="list__sub">${layerName[layer] || layer}</span></span><span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></a>`; }).join('')}</div>`
    : `<div class="notice">${icon('highlight')}<div>Select any words in Read, Must know or the formula sheet, then pick a colour. Add a note if you like. They collect here.</div></div>`;
  const s = openSheet({
    title: 'Highlights', closeLabel: 'Done',
    content: `${list}
      <div class="list__header" style="padding-left:0;margin-top:var(--s-4)">My notes</div>
      <div class="mynotes"><label for="mynote" class="sr-only">Your notes for this chapter</label><textarea id="mynote" rows="5" placeholder="Formulas you keep forgetting, traps from your tests, things your teacher stressed…"></textarea>
      <div class="row row--between mt-2"><span class="t-footnote t-3" id="mynote-status">Saved on this device</span><button class="btn btn--sm btn--ghost" type="button" id="mynote-clear">Clear</button></div></div>`,
  });
  s.body.addEventListener('click', (e) => { const a = e.target.closest('[data-jump]'); if (!a) return; s.close(); jumpTo(a.dataset.jump, a.getAttribute('href')); e.preventDefault(); });
  const ta = s.body.querySelector('#mynote'); const status = s.body.querySelector('#mynote-status');
  ta.value = store.myNote(key);
  let t;
  ta.addEventListener('input', () => { status.textContent = 'Saving…'; clearTimeout(t); t = setTimeout(() => { store.setMyNote(key, ta.value); status.textContent = 'Saved on this device'; }, 400); });
  s.body.querySelector('#mynote-clear').addEventListener('click', () => {
    const old = ta.value; if (!old) return; ta.value = ''; store.setMyNote(key, '');
    toast('Notes cleared', { action: 'Undo', onAction: () => { store.setMyNote(key, old); } });
  });
}
