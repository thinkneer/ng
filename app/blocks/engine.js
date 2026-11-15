// Block engine: mounts ```ng-<type> blocks inside a rendered .prose.
// Each block gets its header at once (no layout jump), then its module is imported lazily when it nears the
// viewport; anything still waiting is finished in idle time so printing always shows every block (static frame).
import { ensureCss } from '../ui.js';
import { normalise } from './parse.js';
import { head } from './kit.js';

const MODULES = {
  figure: () => import('./figure.js'), graph: () => import('./graph.js'), steps: () => import('./steps.js'),
  numerical: () => import('./numerical.js'), mnemonic: () => import('./mnemonic.js'), draw: () => import('./draw.js'),
  derive: () => import('./derive.js'), explain: () => import('./explain.js'), compare: () => import('./compare.js'), fill: () => import('./fill.js'), video: () => import('./video.js'),
};

/** ctx: { key: "<subject>/<chapter>", src: whole Markdown source (svg refs, "In one breath"), base: chapter route } */
export async function mountBlocks(root, blocks, ctx = {}) {
  const els = [...root.querySelectorAll('.ngb[data-ngb]')];
  if (!els.length) return;
  for (const el of els) { // the renderer already wrote the header; older callers may not have
    const b = blocks[Number(el.dataset.ngb)]; if (!b || el.querySelector('.ngb__body')) continue;
    el.classList.add(`ngb--${b.type}`);
    el.innerHTML = `${head(b.type, b.spec.title)}<div class="ngb__body ngb__body--wait"></div>`;
  }
  await ensureCss();
  const run = async (el) => {
    if (el._ngb) return el._ngb;
    const b = blocks[Number(el.dataset.ngb)];
    el._ngb = (async () => {
      try {
        const load = MODULES[b.type];
        if (!load) throw new Error(`unknown block ng-${b.type}`);
        const mod = await load();
        const body = el.querySelector('.ngb__body');
        await mod.render(body, normalise(b.type, b.spec), { ...ctx, el });
        body.classList.remove('ngb__body--wait');
        el.classList.add('is-ready');
      } catch (e) {
        console.warn('[ngb]', b?.type, e);
        const body = el.querySelector('.ngb__body'); body.classList.remove('ngb__body--wait');
        body.innerHTML = `<p class="t-footnote t-2">This interactive part could not load${navigator.onLine ? '' : ' offline yet'}.</p>`;
      }
    })();
    return el._ngb;
  };
  // Only blocks near the screen render (after the first paint, in idle time); the Print buttons call
  // root._renderAll() first so a printout always has every block as a static frame.
  root._renderAll = () => Promise.all(els.map(run));
  const idle = (fn) => (window.requestIdleCallback ? requestIdleCallback(fn, { timeout: 1500 }) : setTimeout(fn, 200));
  idle(() => {
    if (!('IntersectionObserver' in window)) { root._renderAll(); return; }
    const io = new IntersectionObserver((entries) => { for (const e of entries) if (e.isIntersecting) { io.unobserve(e.target); run(e.target); } }, { rootMargin: '200px 0px' });
    for (const el of els) io.observe(el);
  });
}

/** Render every block on the page, then print (chapter / reader Print buttons). */
export async function printWithBlocks() {
  await Promise.all([...document.querySelectorAll('.prose')].map((p) => p._renderAll?.()));
  await new Promise((r) => setTimeout(r, 120));
  window.print();
}
