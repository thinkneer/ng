import { html, raw, icon, largeTitle, ring, esc, today as todayDate, parseDate, daysBetween, fmtDate, plural } from '../ui.js';
import { data, routeFor } from '../data.js';
import { store } from '../store.js';
import { pwa } from '../pwa.js';

function greeting() {
  const h = new Date().getHours();
  return h < 5 ? 'Late night' : h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
}

export async function today() {
  const s = store.settings;
  if (!s.class) return welcome();
  const [subjects, exams] = await Promise.all([data.liveSubjects(s.class, s.stream), data.examsFor(s.class, s.stream).catch(() => null)]);
  const mine = subjects.filter((x) => !s.subjects?.length || s.subjects.includes(x.id));
  const t0 = todayDate();
  const papers = (exams?.papers || []).filter((p) => mine.some((m) => m.id === p.subject)).map((p) => ({ ...p, days: daysBetween(t0, parseDate(p.date)) })).filter((p) => p.days >= 0).sort((a, b) => a.days - b.days);
  const next = papers[0];
  const nextSubj = next && mine.find((m) => m.id === next.subject);
  const progress = store.progress();
  const chapterTotal = mine.reduce((n, sub) => n + data.allChapters(sub).length, 0);
  const done = mine.reduce((n, sub) => n + data.allChapters(sub).filter((c) => progress.tracker?.[`${sub.id}/${c.id}`]?.R1).length, 0);
  const pct = chapterTotal ? (done / chapterTotal) * 100 : 0;
  const todayStr = fmtDate(t0, { weekday: 'long', day: 'numeric', month: 'long' });

  return {
    title: 'Today', largeTitle: true, tab: 'today',
    html: html`${largeTitle(greeting(), { eyebrow: todayStr })}
      ${next ? raw(`
      <a class="card card--hero pressable" href="#/plan" style="--unit:#${nextSubj?.colour || '1F5FAD'}">
        <div class="row row--between">
          <div>
            <div class="t-footnote" style="opacity:.85;font-weight:600;text-transform:uppercase;letter-spacing:.04em">Next paper · ${esc(next.name)}</div>
            <div class="stat__value tnum" style="font-size:3.25rem;margin-top:.25rem">${next.days === 0 ? 'Today' : next.days}</div>
            <div class="t-subhead" style="opacity:.9">${next.days === 0 ? 'All the best.' : `${next.days === 1 ? 'day' : 'days'} left · ${fmtDate(next.date, { weekday: 'short', day: 'numeric', month: 'short' })}`}</div>
          </div>
          ${icon('arrowRight', { size: 28 })}
        </div>
      </a>`) : raw(`<div class="card"><div class="t-headline">No upcoming papers</div><p class="t-2 t-subhead mt-2">Your board papers are done, or no dates are loaded for this class yet.</p></div>`)}

      <div class="section-head"><h2>Your plan</h2><a href="#/plan">Open</a></div>
      <div class="card">
        <div class="row">
          ${ring(pct, `${done}/${chapterTotal}`, 'revised', '4.75rem')}
          <div class="grow">
            <div class="t-headline">Board_Plan_2027 is on its way</div>
            <p class="t-2 t-footnote mt-2">The day-by-day plan lands in the next update. Until then, tick chapters in <a href="#/progress">Progress</a> and work from the subject pages.</p>
          </div>
        </div>
      </div>

      ${papers.length > 1 ? raw(`<div class="section-head"><h2>Days left</h2></div><div class="stats">${papers.map((p) => `<div class="stat" style="--unit:#${mine.find((m) => m.id === p.subject)?.colour}"><div class="stat__value tnum" style="color:var(--unit)">${p.days}</div><div class="stat__label">${esc(p.name)} · ${fmtDate(p.date, { day: 'numeric', month: 'short' })}</div></div>`).join('')}</div>`) : ''}

      <div class="section-head"><h2>Your subjects</h2><a href="#/subjects">All</a></div>
      <div class="list">
        ${mine.map((sub) => {
          const chapters = data.allChapters(sub);
          const withNotes = chapters.filter((c) => c.items?.notes).length;
          return raw(`<a class="list__item has-leading pressable" href="${routeFor(s.class, s.stream, sub.id)}">
            <span class="list__leading" style="--unit:#${sub.colour}">${esc(sub.short.slice(0, 2))}</span>
            <span class="list__body"><span class="list__title">${esc(sub.name)}</span><span class="list__sub">${plural(chapters.length, 'chapter')}${withNotes ? ` · notes for ${withNotes}` : ' · notes coming'}</span></span>
            <span class="list__trailing">${icon('chevronRight', { class: 'chev' })}</span></a>`);
        })}
      </div>
      ${pwa.installable && !store.flag('install-dismissed') ? raw(`<div class="card mt-6 install-banner" id="install-card"><div class="row"><span class="list__leading list__leading--soft">${icon('install')}</span><div class="grow"><div class="t-headline">Install ng on this device</div><div class="t-2 t-footnote">Opens full-screen and works offline.</div></div></div><div class="row mt-4"><button class="btn btn--sm" type="button" data-install>Install</button><button class="btn btn--sm btn--ghost" type="button" data-install-later>Not now</button></div></div>`) : ''}
      <p class="t-footnote t-3 mt-8">Board dates from the CBSE date sheet${exams?.date_checked ? `, checked ${fmtDate(exams.date_checked, { day: 'numeric', month: 'short', year: 'numeric' })}` : ''}. Recheck on cbse.gov.in.</p>`,
    mount(el) {
      el.querySelector('[data-install]')?.addEventListener('click', () => pwa.promptInstall());
      el.querySelector('[data-install-later]')?.addEventListener('click', () => { store.setFlag('install-dismissed', true); el.querySelector('#install-card')?.remove(); });
    },
  };
}

async function welcome() {
  const idx = await data.index();
  return {
    title: 'ng', largeTitle: true, tab: 'today',
    html: html`${largeTitle('Board prep that fits in your pocket', { eyebrow: 'Free · no login' })}
      <p class="t-2 mb-4">Must-have notes, formula sheets, practice by question type, timed papers and a day-by-day plan to your last paper. Pick your class to start.</p>
      <div class="option-grid">
        ${idx.classes.map((c) => raw(`<a class="option pressable" href="#/${c.id}">
          <span class="num">${c.id}</span>
          <span><span class="t-subhead" style="font-weight:600">${esc(c.name)}</span><br>${c.status === 'live' ? '<span class="badge badge--live">Live</span>' : '<span class="badge badge--soon">Coming soon</span>'}</span></a>`))}
      </div>
      <div class="list mt-6">
        ${raw(`<div class="list__item"><span class="list__leading list__leading--soft">${icon('book')}</span><span class="list__body"><span class="list__title">Notes written for marks</span><span class="list__sub">Most-repeated questions, answer skeletons with step marks, traps</span></span></div>`)}
        ${raw(`<div class="list__item"><span class="list__leading list__leading--soft">${icon('timer')}</span><span class="list__body"><span class="list__title">Practice and timed papers</span><span class="list__sub">On the CBSE 2026–27 pattern, with marking schemes</span></span></div>`)}
        ${raw(`<div class="list__item"><span class="list__leading list__leading--soft">${icon('plan')}</span><span class="list__body"><span class="list__title">Board_Plan_2027</span><span class="list__sub">Rebuilds itself for the subjects you pick</span></span></div>`)}
      </div>
      <p class="t-footnote t-3 mt-6">Everything saves on your device. Nothing here asks for your name, email or school.</p>`,
  };
}
