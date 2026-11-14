import { store } from './store.js';

const mq = matchMedia('(prefers-color-scheme: dark)');

export function applyTheme(mode = store.theme) {
  const root = document.documentElement;
  if (mode === 'light' || mode === 'dark') root.setAttribute('data-theme', mode); else root.removeAttribute('data-theme');
  const dark = mode === 'dark' || (mode === 'auto' && mq.matches);
  // Keep the browser chrome / iOS status bar in step with the page.
  for (const m of document.querySelectorAll('meta[name="theme-color"]')) {
    if (!m.media) m.content = dark ? '#0E0F13' : '#F2F2F7';
  }
  const sb = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  if (sb) sb.content = dark ? 'black-translucent' : 'default';
}
export function effectiveTheme() { const t = store.theme; return t === 'auto' ? (mq.matches ? 'dark' : 'light') : t; }
export function initTheme() {
  applyTheme();
  mq.addEventListener('change', () => applyTheme());
}
