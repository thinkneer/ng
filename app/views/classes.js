import { html, raw, icon, largeTitle, listItem, esc, toast, haptic, cover } from '../ui.js';
import { data, routeFor, streamless } from '../data.js';
import { store } from '../store.js';
import { access, classLocked, subjectAllowed } from '../access.js';

const streamName = (id) => ({ general: 'All subjects', science: 'Science', commerce: 'Commerce', humanities: 'Humanities' }[id] || id);

/** #/classes — pick a class. */
export async function classes() {
  if (classLocked()) return subjectsTab(); // the admin set this member's class
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
      <p class="t-footnote t-3 mt-6">Classes and subjects open as their material is ready; the ones marked Live have content now.</p>`,
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
  const shown = stream.subjects.filter((s) => subjectAllowed(cls.id, stream.id, s.id));
  const hidden = stream.subjects.length - shown.length;
  const title = streamless(cls.id) ? cls.name : `${cls.name} ${stream.name}`;
  return {
    title, largeTitle: true, tab: 'subjects', back: streamless(cls.id) ? '#/classes' : `#/${cls.id}`,
    html: html`${largeTitle(title, { eyebrow: live ? 'Subjects' : 'Coming soon' })}
      ${!live ? raw(`<div class="notice notice--warn mb-4">${icon('clock')}<div><strong>Coming soon.</strong> This class is set up but has no content yet. You can still choose it so the app is ready when material lands.</div></div>`) : ''}
      ${!isCurrent && !classLocked() ? raw(`<button class="btn btn--block mb-4" type="button" data-choose>${icon('check')} Make this my class</button>`) : raw(`<p class="t-2 t-subhead mb-4">Tap <span class="pin-demo">${icon('check')}</span> to drop a subject from Today, Practice, Recall and your plan; tap <span class="pin-demo pin-demo--off">${icon('plusSquare')}</span> to bring it back. Every subject stays readable here.</p>`)}
      <div class="shelf rise">
        ${shown.map((s) => {
          const paper = exams?.papers?.find((p) => p.subject === s.id);
          const chapters = s.units?.reduce((n, u) => n + u.chapters.length, 0) || 0;
          const liveS = s.status === 'live';
          return cover({ ...s, colour: s.colour || '7A8699', metaLeft: liveS ? (s.counts?.notes ? `${s.counts.notes}/${chapters} notes` : `${chapters} chapters`) : '' }, { href: liveS ? routeFor(cls.id, stream.id, s.id) : '#/more/request', sub: paper ? `Paper ${fmt(paper.date)}` : (liveS ? cls.name : 'Soon'), soon: !liveS, toggle: liveS && isCurrent ? { on: store.isMine(s.id) } : null });
        })}
      </div>
      ${hidden ? raw(`<p class="t-footnote t-2 mt-4">${hidden} more subject${hidden > 1 ? 's are' : ' is'} not open for you yet. Your admin decides which subjects you see.</p>`) : ''}
      ${raw(`<p class="t-footnote t-3 mt-4">Syllabus: rationalised CBSE ${esc(stream.subjects.find((s) => s.syllabus_year)?.syllabus_year || '')}. Links to NCERT and CBSE are on each subject page.</p>`)}`,
    mount(el) {
      const liveIds = shown.filter((x) => x.status === 'live').map((x) => x.id);
      el.addEventListener('click', (e) => {
        const b = e.target.closest('[data-toggle-subject]'); if (!b) return;
        e.preventDefault();
        const id = b.dataset.toggleSubject, name = stream.subjects.find((x) => x.id === id)?.name || id;
        const on = store.toggleSubject(id, liveIds);
        if (on === null) { toast('Keep at least one subject'); haptic('medium'); return; }
        b.setAttribute('aria-pressed', String(on)); b.innerHTML = icon(on ? 'check' : 'plusSquare');
        b.setAttribute('aria-label', `${on ? 'Remove' : 'Add'} ${name} ${on ? 'from' : 'to'} my subjects`);
        b.closest('.book-wrap').classList.toggle('is-off', !on); haptic(on ? 'success' : 'light');
        toast(on ? `${name} added to your subjects` : `${name} removed from Today and your plan`, { action: 'Undo', onAction: () => { store.toggleSubject(id, liveIds); location.reload(); } });
      });
      el.querySelector('[data-choose]')?.addEventListener('click', () => {
        store.setSettings({ class: cls.id, stream: stream.id, subjects: shown.filter((s) => s.status === 'live').map((s) => s.id) });
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
  r.actions = `${classLocked() ? '' : `<a class="icon-btn" href="#/classes" aria-label="Change class">${icon('layers')}</a>`}<button class="icon-btn" type="button" data-search aria-label="Search chapters">${icon('search')}</button>`;
  return r;
}

/** A class or subject the admin has not opened for this member. */
export async function locked(route) {
  const a = access();
  const { cls, subject } = await data.resolve(route.classId, route.streamId || undefined, route.subjectId || undefined).catch(() => ({}));
  const what = subject?.name || (route.subjectId ? 'This subject' : cls?.name || 'This class');
  const text = a.cls && String(route.classId) !== a.cls
    ? `Your admin has set your class to Class ${a.cls}. Ask them if you need another class.`
    : 'Your admin decides which subjects you see. Ask them on WhatsApp if you need this one opened.';
  return { title: 'Not open for you', tab: 'subjects', back: '#/subjects',
    html: html`<div class="empty">${raw(icon('lock'))}<h3 class="t-headline">${what} is not open for you yet</h3><p class="t-subhead mt-2">${text}</p><a class="btn btn--secondary mt-4" href="#/subjects">My subjects</a></div>` };
}

function fmt(iso) { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }); }
function notFound() { return { title: 'Not found', tab: 'subjects', html: html`<div class="empty">${raw(icon('alert'))}<h3 class="t-headline">No such class or stream</h3><a class="btn btn--secondary mt-4" href="#/classes">Choose a class</a></div>` }; }
export { streamName };
