import { html, raw, icon, largeTitle, listItem, esc, toast, haptic, cover } from '../ui.js';
import { data, routeFor, streamless } from '../data.js';
import { store } from '../store.js';

const streamName = (id) => ({ general: 'All subjects', science: 'Science', commerce: 'Commerce', humanities: 'Humanities' }[id] || id);

/** #/classes — pick a class. */
export async function classes() {
  const idx = await data.index();
  const chosen = store.settings.class;
  return {
    title: 'Choose your class', largeTitle: true, tab: 'subjects', back: chosen ? '#/subjects' : null,
    html: html`${largeTitle('Choose your class', { eyebrow: 'CBSE' })}
      <p class="t-2 t-subhead mb-4">Your class sets the subjects and the plan you see. Change it any time in More → Settings.</p>
      <div class="option-grid">
        ${idx.classes.map((c) => raw(`<a class="option pressable" href="${c.status === 'live' ? `#/${c.id}` : `#/${c.id}`}" ${chosen === c.id ? 'aria-pressed="true"' : ''}>
          <span class="num">${c.id}</span>
          <span><span class="t-subhead" style="font-weight:600">${esc(c.name)}</span><br>
          ${c.status === 'live' ? `<span class="badge badge--live">Live</span>` : `<span class="badge badge--soon">Coming soon</span>`}${c.board_year ? ` <span class="badge">Board year</span>` : ''}</span>
        </a>`))}
      </div>
      <p class="t-footnote t-3 mt-6">Only Class 12 Science has content right now. Other classes open as their material is ready.</p>`,
  };
}

/** #/11 or #/12 — pick a stream. */
export async function streams(route) {
  const { cls } = await data.resolve(route.classId);
  if (!cls) return notFound();
  if (streamless(cls.id)) return subjectsOf({ ...route, streamId: 'general' });
  return {
    title: `${cls.name}`, largeTitle: true, tab: 'subjects', back: '#/classes',
    html: html`${largeTitle(cls.name, { eyebrow: 'Choose your stream' })}
      <div class="list">
        ${cls.streams.map((s) => listItem({
          href: `#/${cls.id}/${s.id}`, title: s.name,
          sub: s.subjects.map((x) => x.short).join(' · '),
          leading: icon('layers'), leadingStyle: s.status === 'live' ? '' : 'background:var(--surface-2);color:var(--text-2)',
          trailing: s.status === 'live' ? '<span class="badge badge--live">Live</span>' : '<span class="badge badge--soon">Coming soon</span>',
        }))}
      </div>`,
  };
}

/** #/12/science or #/10 — subject list for a class (+ stream). Also sets this as the student's class. */
export async function subjectsOf(route) {
  const { cls, stream } = await data.resolve(route.classId, route.streamId);
  if (!cls || !stream) return notFound();
  const exams = await data.examsFor(cls.id, stream.id).catch(() => null);
  const live = stream.status === 'live';
  const settings = store.settings;
  const isCurrent = settings.class === cls.id && settings.stream === stream.id;
  const title = streamless(cls.id) ? cls.name : `${cls.name} ${stream.name}`;
  return {
    title, largeTitle: true, tab: 'subjects', back: streamless(cls.id) ? '#/classes' : `#/${cls.id}`,
    html: html`${largeTitle(title, { eyebrow: live ? 'Subjects' : 'Coming soon' })}
      ${!live ? raw(`<div class="notice notice--warn mb-4">${icon('clock')}<div><strong>Coming soon.</strong> This class is set up but has no content yet. You can still choose it so the app is ready when material lands.</div></div>`) : ''}
      ${!isCurrent ? raw(`<button class="btn btn--block mb-4" type="button" data-choose>${icon('check')} Make this my class</button>`) : raw(`<div class="notice mb-4">${icon('check')}<div>This is your class. Subjects below are what Today and Practice use.</div></div>`)}
      <div class="shelf rise">
        ${stream.subjects.map((s) => {
          const paper = exams?.papers?.find((p) => p.subject === s.id);
          const chapters = s.units?.reduce((n, u) => n + u.chapters.length, 0) || 0;
          const liveS = s.status === 'live';
          return cover({ ...s, colour: s.colour || '7A8699', metaLeft: liveS ? (s.counts?.notes ? `${s.counts.notes}/${chapters} notes` : `${chapters} chapters`) : '' }, { href: liveS ? routeFor(cls.id, stream.id, s.id) : '#/more/request', sub: paper ? `Paper ${fmt(paper.date)}` : (liveS ? cls.name : 'Soon'), soon: !liveS });
        })}
      </div>
      ${raw(`<p class="t-footnote t-3 mt-4">Syllabus: rationalised CBSE ${esc(stream.subjects.find((s) => s.syllabus_year)?.syllabus_year || '')}. Links to NCERT and CBSE are on each subject page.</p>`)}`,
    mount(el) {
      el.querySelector('[data-choose]')?.addEventListener('click', () => {
        store.setSettings({ class: cls.id, stream: stream.id, subjects: stream.subjects.filter((s) => s.status === 'live').map((s) => s.id) });
        haptic('success');
        toast(`${title} is now your class`, { action: 'Today', onAction: () => { location.hash = '#/today'; } });
        location.hash = '#/today';
      });
    },
  };
}

/** Tab "Subjects": the student's own class, or the class picker. */
export async function subjectsTab() {
  const s = store.settings;
  if (!s.class) return classes();
  const r = await subjectsOf({ classId: s.class, streamId: s.stream || 'general' });
  r.back = null;
  r.actions = `<a class="icon-btn" href="#/classes" aria-label="Change class">${icon('layers')}</a><button class="icon-btn" type="button" data-search aria-label="Search chapters">${icon('search')}</button>`;
  return r;
}

function fmt(iso) { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }); }
function notFound() { return { title: 'Not found', tab: 'subjects', html: html`<div class="empty">${raw(icon('alert'))}<h3 class="t-headline">No such class or stream</h3><a class="btn btn--secondary mt-4" href="#/classes">Choose a class</a></div>` }; }
export { streamName };
