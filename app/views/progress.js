import { html, raw, icon, largeTitle, esc, emptyState, ring, haptic, toast } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';

const COLS = ['L', 'R1', 'PYQ', 'R2', 'E'];

export async function progress() {
  const s = store.settings;
  if (!s.class) return { title: 'Progress', largeTitle: true, tab: 'progress', html: html`${largeTitle('Progress')}${emptyState({ icon: 'progress', title: 'Choose your class first', action: '<a class="btn" href="#/classes">Choose class</a>' })}` };
  const subjects = (await data.liveSubjects(s.class, s.stream)).filter((x) => store.isMine(x.id));
  const p = store.progress();
  const rows = subjects.map((sub) => ({ sub, chapters: data.allChapters(sub) }));
  const total = rows.reduce((n, r) => n + r.chapters.length, 0);
  const count = (k) => rows.reduce((n, r) => n + r.chapters.filter((c) => p.tracker?.[`${r.sub.id}/${c.id}`]?.[k]).length, 0);
  const low = rows.flatMap((r) => r.chapters.filter((c) => { const t = p.tracker?.[`${r.sub.id}/${c.id}`]; return t?.confidence && t.confidence <= 2; }).map((c) => ({ sub: r.sub, c })));

  return {
    title: 'Progress', largeTitle: true, tab: 'progress', wide: true,
    actions: `<button class="icon-btn" type="button" data-export aria-label="Export progress" title="Export progress JSON">${icon('download')}</button><button class="icon-btn" type="button" data-import aria-label="Import progress" title="Import progress JSON">${icon('upload')}</button>`,
    html: html`${largeTitle('Progress', { eyebrow: 'Chapter tracker · saved on this device' })}
      <div class="card mb-4"><div class="row" style="justify-content:space-around;flex-wrap:wrap;gap:var(--s-4)">
        ${raw(COLS.map((k) => String(ring(total ? (count(k) / total) * 100 : 0, String(count(k)), k, '4.25rem'))).join(''))}
      </div><p class="t-footnote t-3 center mt-3">L learnt · R1 revised once · PYQ past-paper set done · R2 revised again · E exam-ready · of ${total} chapters</p></div>
      ${low.length ? raw(`<div class="notice notice--warn mb-4">${icon('flag')}<div><strong>Low confidence (≤2):</strong> ${low.map(({ sub, c }) => `<a href="${routeFor(s.class, s.stream, sub.id, c.id)}">${esc(sub.short)} ${c.number}</a>`).join(', ')}. These get extra slots in your plan.</div></div>`) : ''}
      ${rows.map(({ sub, chapters }) => raw(`
        <div class="list__header"><span>${esc(sub.name)}</span><span class="count">${chapters.filter((c) => p.tracker?.[`${sub.id}/${c.id}`]?.R1).length}/${chapters.length} revised</span></div>
        <div class="list">${chapters.map((c) => {
          const key = `${sub.id}/${c.id}`; const t = p.tracker?.[key] || {};
          return `<div class="list__item has-leading list__item--stack" style="--unit:#${c.unitObj.colour}">
            <a class="list__leading" href="${routeFor(s.class, s.stream, sub.id, c.id)}" aria-label="Open chapter ${c.number}">${c.number}</a>
            <a class="list__body" href="${routeFor(s.class, s.stream, sub.id, c.id)}" style="color:inherit"><span class="list__title">${esc(c.title)}</span></a>
            <span class="list__controls" data-key="${key}">
              ${COLS.map((k) => `<button class="chip" type="button" data-k="${k}" aria-pressed="${!!t[k]}" aria-label="${k} for chapter ${c.number}" style="min-height:1.75rem;padding:0 .5rem;font-size:.7rem">${k}</button>`).join('')}
              <select data-conf aria-label="Confidence for chapter ${c.number}" style="width:auto;min-height:1.75rem;padding:0 1.4rem 0 .4rem;font-size:.75rem;border-radius:999px"><option value="">–</option>${[1, 2, 3, 4, 5].map((n) => `<option value="${n}" ${t.confidence === n ? 'selected' : ''}>${n}</option>`).join('')}</select>
            </span></div>`;
        }).join('')}</div>`))}
      <div class="card mt-6"><div class="t-headline">Your data, your device</div><p class="t-2 t-subhead mt-2">Everything here is stored in this browser. Use the export button (top right) to save a JSON file and import it on another device. Accounts and sync come later and stay nickname-only.</p></div>`,
    mount(el) {
      el.addEventListener('click', (e) => {
        const b = e.target.closest('[data-k]'); if (!b) return;
        const key = b.closest('[data-key]').dataset.key; const on = b.getAttribute('aria-pressed') !== 'true';
        store.setTracker(key, { [b.dataset.k]: on }); b.setAttribute('aria-pressed', String(on)); haptic(on ? 'success' : 'light');
      });
      el.addEventListener('change', (e) => { const sel = e.target.closest('[data-conf]'); if (!sel) return; store.setTracker(sel.closest('[data-key]').dataset.key, { confidence: sel.value ? Number(sel.value) : undefined }); });
      document.querySelector('[data-export]')?.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify({ ...store.progress(), nickname: store.nickname, version: 1, synced_on: new Date().toISOString() }, null, 2)], { type: 'application/json' });
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `ng-progress-${new Date().toISOString().slice(0, 10)}.json`; a.click(); URL.revokeObjectURL(a.href);
      });
      document.querySelector('[data-import]')?.addEventListener('click', () => {
        const inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'application/json';
        inp.onchange = async () => { try { const j = JSON.parse(await inp.files[0].text()); if (!j.tracker && !j.my_notes) throw new Error('not a progress file'); const before = store.progress(); store.saveProgress({ ...before, ...j, tracker: { ...before.tracker, ...j.tracker }, my_notes: { ...before.my_notes, ...j.my_notes } }); toast('Progress imported', { action: 'Undo', onAction: () => store.saveProgress(before) }); location.reload(); } catch (err) { toast('Could not import: ' + err.message); } };
        inp.click();
      });
    },
  };
}
