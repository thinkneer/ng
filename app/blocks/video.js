// ng-video: one short YouTube video for exactly this topic, played inside the page.
// Nothing loads from YouTube until the student taps Play (saves data, no tracking before that); then the
// privacy-enhanced player (youtube-nocookie.com) opens in place at the chosen start, with no related videos
// from other channels at the end. Offline it says so. A printout shows the title and the link as text.
import { esc, icon, haptic, md } from './kit.js';

const fmt = (s) => (s == null ? '' : `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`);

export async function render(body, spec) {
  const watch = `https://www.youtube.com/watch?v=${spec.vid}${spec.from ? `&t=${spec.from}s` : ''}`;
  const span = spec.from != null || spec.to != null ? `${fmt(spec.from ?? 0)}${spec.to != null ? `–${fmt(spec.to)}` : ' on'}` : '';
  const note = spec.note ? await md(spec.note) : '';
  body.innerHTML = `<div class="ngv">
      <div class="ngv__frame">
        <button class="ngv__play" type="button" aria-label="Play video: ${esc(spec.title)}">
          <span class="ngv__btn">${icon('play')}</span>
          <span class="ngv__cap">Tap to play${span ? ` · ${esc(span)}` : ''}</span>
        </button>
      </div>
      <div class="ngv__meta t-footnote t-2">${esc(spec.channel)} · YouTube${span ? ` · ${esc(span)}` : ''}</div>
      ${note ? `<div class="ngv__note">${note}</div>` : ''}
      <p class="print-only t-footnote">Video: ${esc(spec.title)} (${esc(spec.channel)}): ${esc(watch)}</p>
    </div>`;
  const frame = body.querySelector('.ngv__frame');
  body.querySelector('.ngv__play').addEventListener('click', () => {
    if (!navigator.onLine) { frame.querySelector('.ngv__cap').textContent = 'Videos need the internet. Connect and tap again.'; haptic('medium'); return; }
    const q = new URLSearchParams({ autoplay: '1', rel: '0', playsinline: '1', modestbranding: '1' });
    if (spec.from) q.set('start', String(spec.from));
    if (spec.to) q.set('end', String(spec.to));
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(spec.vid)}?${q}" title="${esc(spec.title)}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    haptic();
  });
}
