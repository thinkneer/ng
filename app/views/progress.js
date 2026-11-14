// Progress: one simple row per subject — chapters read and recall cards learnt. Detail lives at the foot of each chapter's Must know.
import { html, raw, icon, largeTitle, esc, emptyState, toast } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';

export async function progress() {
  const s = store.settings;
  if (!s.class) return { title: 'Progress', largeTitle: true, tab: 'progress', html: html`${largeTitle('Progress')}${emptyState({ icon: 'progress', title: 'Choose your class first', action: '<a class="btn" href="#/classes">Choose class</a>' })}` };
  const subjects = (await data.liveSubjects(s.class, s.stream)).filter((x) => store.isMine(x.id));
  const p = store.progress();
  const recall = p.recall || {};
  // A chapter counts as read when it is ticked Learnt, or the reader reached the end of it.
  const isRead = (sub, c) => !!p.tracker?.[`${sub.id}/${c.id}`]?.L || (store.get(`reader.pos.${sub.id}/${c.id}`, 0) >= 0.95);
  const rows = subjects.map((sub) => {
    const chapters = data.allChapters(sub);
    const read = chapters.filter((c) => isRead(sub, c)).length;
    let learnt = 0, seen = 0;
    for (const x of Object.values(recall)) if (x.key?.startsWith(sub.id + '/')) { seen++; if (x.box >= 1) learnt++; }
    const paper = Object.entries(p.paper || {}).filter(([k]) => k.startsWith(sub.id + '/')).reduce((n, [, m]) => n + Object.keys(m).length, 0);
    return { sub, chapters: chapters.length, read, learnt, seen, paper };
  });
  const totals = rows.reduce((a, r) => ({ read: a.read + r.read, chapters: a.chapters + r.chapters, learnt: a.learnt + r.learnt }), { read: 0, chapters: 0, learnt: 0 });

  return {
    title: 'Progress', largeTitle: true, tab: 'progress',
    actions: `<button class="icon-btn" type="button" data-export aria-label="Export progress" title="Export progress JSON">${icon('download')}</button><button class="icon-btn" type="button" data-import aria-label="Import progress" title="Import progress JSON">${icon('upload')}</button>`,
    html: html`${largeTitle('Progress', { eyebrow: `${totals.read} of ${totals.chapters} chapters read · ${totals.learnt} recall cards learnt` })}
      <div class="list">
        ${rows.map(({ sub, chapters, read, learnt, seen, paper }) => raw(`<a class="list__item has-leading pressable" href="${routeFor(s.class, s.stream, sub.id)}" style="--unit:#${sub.colour}">
            <span class="list__leading">${esc((sub.short || sub.name).slice(0, 2))}</span>
            <span class="list__body"><span class="list__title">${esc(sub.name)}</span><span class="list__sub">${read}/${chapters} chapters read · ${learnt} recall card${learnt === 1 ? '' : 's'} learnt${seen > learnt ? ` of ${seen} seen` : ''}${paper ? ` · ${paper} on paper` : ''}</span></span>
            <span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></a>`))}
      </div>
      <p class="t-footnote t-2 mt-4">A chapter counts as read when you tick <strong>L</strong> at the foot of its Must know, or finish it in reading mode. A card is learnt once you have got it right in Recall. "On paper" counts diagrams, derivations and numericals ticked Done in a chapter's Practice on paper. Saved on this device; export from the top right to move it.</p>`,
    mount() {
      document.querySelector('[data-export]')?.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify({ ...store.progress(), nickname: store.nickname, version: 1, synced_on: new Date().toISOString() }, null, 2)], { type: 'application/json' });
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `ng-progress-${new Date().toISOString().slice(0, 10)}.json`; a.click(); URL.revokeObjectURL(a.href);
      });
      document.querySelector('[data-import]')?.addEventListener('click', () => {
        const inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'application/json';
        inp.onchange = async () => { try { const j = JSON.parse(await inp.files[0].text()); if (!j.tracker && !j.my_notes && !j.recall) throw new Error('not a progress file'); const before = store.progress(); store.saveProgress({ ...before, ...j, tracker: { ...before.tracker, ...j.tracker }, my_notes: { ...before.my_notes, ...j.my_notes }, recall: { ...before.recall, ...j.recall }, highlights: { ...before.highlights, ...j.highlights } }); toast('Progress imported', { action: 'Undo', onAction: () => store.saveProgress(before) }); location.reload(); } catch (err) { toast('Could not import: ' + err.message); } };
        inp.click();
      });
    },
  };
}
