import { html, raw, icon, largeTitle, esc, emptyState, fmtDate, parseDate, daysBetween, today } from '../ui.js';
import { data } from '../data.js';
import { store } from '../store.js';

/** Phase 0 placeholder: shows the paper timeline from data; the generator arrives in Phase 2. */
export async function plan() {
  const s = store.settings;
  if (!s.class) return { title: 'Board plan', largeTitle: true, tab: 'today', html: html`${largeTitle('Board plan')}${emptyState({ icon: 'plan', title: 'Choose your class first', action: '<a class="btn" href="#/classes">Choose class</a>' })}` };
  const [subjects, exams] = await Promise.all([data.liveSubjects(s.class, s.stream), data.examsFor(s.class, s.stream).catch(() => null)]);
  const mine = subjects.filter((x) => store.isMine(x.id));
  const t0 = today();
  const papers = (exams?.papers || []).filter((p) => mine.some((m) => m.id === p.subject)).map((p) => ({ ...p, days: daysBetween(t0, parseDate(p.date)), colour: mine.find((m) => m.id === p.subject)?.colour })).sort((a, b) => a.days - b.days);
  const last = papers[papers.length - 1];
  const name = exams ? `Board_Plan_${exams.board_year}` : 'Board plan';
  return {
    title: name, largeTitle: true, tab: 'today', back: '#/today',
    html: html`${largeTitle(name, { eyebrow: last ? `${last.days} days to your last paper` : 'Plan' })}
      ${papers.length ? raw(`<div class="card card--pad-0 mb-4"><div class="list" style="box-shadow:none;border:0">${papers.map((p, i) => `<div class="list__item has-leading" style="--unit:#${p.colour}"><span class="list__leading">${i + 1}</span><span class="list__body"><span class="list__title">${esc(p.name)}</span><span class="list__sub">${fmtDate(p.date, { weekday: 'long', day: 'numeric', month: 'long' })}${p.start ? ' · ' + p.start : ''}</span></span><span class="list__trailing tnum" style="font-weight:700;color:var(--unit)">${p.days < 0 ? 'done' : p.days + ' d'}</span></div>`).join('')}</div></div>`) : raw(`<div class="notice notice--warn mb-4">${icon('alert')}<div>No board dates loaded for this class yet.</div></div>`)}
      ${exams?.practical_window ? raw(`<div class="notice mb-4">${icon('calendar')}<div><strong>CBSE practical window:</strong> ${fmtDate(exams.practical_window.start, { day: 'numeric', month: 'short' })} – ${fmtDate(exams.practical_window.end, { day: 'numeric', month: 'short' })}.</div></div>`) : ''}
      <p class="t-2 t-subhead">The gap days before each paper are for that subject only: its Exam eve page, then timed sample papers and error review.</p>
      <p class="t-footnote t-3 mt-6">Dates: ${esc(exams?.source || 'CBSE date sheet')}${exams?.date_checked ? `, checked ${fmtDate(exams.date_checked, { day: 'numeric', month: 'short', year: 'numeric' })}` : ''}. ${esc(exams?.recheck_note || '')}</p>`,
  };
}
