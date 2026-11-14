import { html, raw, icon, largeTitle, esc, fmtDate, parseDate, daysBetween, today } from '../ui.js';
import { data, routeFor, streamless } from '../data.js';
import { store } from '../store.js';

export async function subject(route) {
  const { cls, stream, subject: sub } = await data.resolve(route.classId, route.streamId, route.subjectId);
  if (!sub || sub.status !== 'live') {
    return { title: 'Coming soon', tab: 'subjects', back: `#/${route.classId}${streamless(route.classId) ? '' : '/' + route.streamId}`,
      html: html`<div class="empty">${raw(icon('clock'))}<h3 class="t-headline">${sub ? sub.name : 'This subject'} is coming soon</h3><p class="t-subhead mt-2">Content is added subject by subject. Ask for it from More → Request something.</p><a class="btn btn--secondary" href="#/more/request">Request it</a></div>` };
  }
  const progress = store.progress();
  const t0 = today();
  const days = sub.exam_date ? daysBetween(t0, parseDate(sub.exam_date)) : null;
  const totalChapters = data.allChapters(sub).length;
  const withNotes = data.allChapters(sub).filter((c) => c.items?.notes).length;
  const back = streamless(cls.id) ? `#/${cls.id}` : `#/${cls.id}/${stream.id}`;
  const groups = {};
  for (const u of sub.units) { const g = u.marks_group || u.id; (groups[g] ||= []).push(u); }

  return {
    title: sub.name, largeTitle: true, tab: 'subjects', back, backLabel: streamless(cls.id) ? cls.name : stream.name, unitColour: sub.colour, wide: true,
    html: html`${largeTitle(sub.name, { eyebrow: `${cls.name} · ${sub.theory_marks} + ${sub.internal_marks} marks` })}
      <div class="stats mb-4">
        ${days != null && days >= 0 ? raw(`<div class="stat"><div class="stat__value tnum" style="color:#${sub.colour}">${days}</div><div class="stat__label">days to paper · ${fmtDate(sub.exam_date, { day: 'numeric', month: 'short' })}</div></div>`) : ''}
        ${raw(`<div class="stat"><div class="stat__value tnum">${totalChapters}</div><div class="stat__label">chapters</div></div>`)}
        ${raw(`<div class="stat"><div class="stat__value tnum">${withNotes}</div><div class="stat__label">with notes</div></div>`)}
      </div>
      ${sub.units.map((u) => raw(`
        <div class="unit-bar" style="--unit:#${u.colour}"><span>Unit ${esc(u.id)} · ${esc(u.name)}</span><span class="marks">${u.marks_group ? `Units ${esc(u.marks_group)} · ` : ''}${u.marks} marks</span></div>
        <div class="list">
          ${u.chapters.map((c) => {
            const key = `${sub.id}/${c.id}`;
            const tr = progress.tracker?.[key] || {};
            const avail = [c.items?.notes && 'Notes', c.items?.formulas && 'Formulas', c.items?.questions && `${c.questions} Qs`].filter(Boolean);
            const conf = tr.confidence ? `<span class="badge" title="Your confidence">${tr.confidence}/5</span>` : '';
            return `<a class="list__item has-leading pressable" href="${routeFor(cls.id, stream.id, sub.id, c.id)}">
              <span class="list__leading" style="--unit:#${u.colour}">${c.number}</span>
              <span class="list__body"><span class="list__title">${esc(c.title)}</span><span class="list__sub">${avail.length ? avail.join(' · ') : 'Content coming'}${c.marks_hint ? ' · ' + esc(c.marks_hint) : ''}</span></span>
              <span class="list__trailing">${tr.R1 ? `<span class="badge badge--live" title="Revised once">R1</span>` : ''}${conf}${icon('chevronRight', { class: 'chev' })}</span></a>`;
          }).join('')}
        </div>`))}
      ${sub.not_in_syllabus?.length ? raw(`<div class="card mt-6"><div class="t-headline">Not in boards (2026–27)</div><p class="t-2 t-footnote mt-2">${sub.not_in_syllabus.map(esc).join(' · ')}</p></div>`) : ''}
      <div class="list mt-6">
        ${raw(`<a class="list__item has-leading" href="${esc(sub.links?.ncert || 'https://ncert.nic.in/textbook.php')}" target="_blank" rel="noopener"><span class="list__leading list__leading--soft">${icon('book')}</span><span class="list__body"><span class="list__title">NCERT textbook</span><span class="list__sub">ncert.nic.in</span></span><span class="list__trailing">${icon('external', { class: 'chev' })}</span></a>`)}
        ${raw(`<a class="list__item has-leading" href="${esc(sub.links?.sample_paper || 'https://cbseacademic.nic.in/')}" target="_blank" rel="noopener"><span class="list__leading list__leading--soft">${icon('pdf')}</span><span class="list__body"><span class="list__title">CBSE syllabus & sample paper</span><span class="list__sub">cbseacademic.nic.in</span></span><span class="list__trailing">${icon('external', { class: 'chev' })}</span></a>`)}
      </div>
      <p class="legend">${raw('<span><span class="stars">★★★</span> most years</span><span><span class="stars">★★</span> often</span><span><span class="stars">★</span> sometimes</span><span>· stars are estimates</span>')}</p>`,
  };
}
