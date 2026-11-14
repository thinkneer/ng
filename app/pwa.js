// Service worker registration, update toast, install prompt, offline indicator.
import { toast, openSheet, icon, $, html, raw } from './ui.js';
import { store } from './store.js';

let deferredInstall = null;
export const pwa = {
  get standalone() { return matchMedia('(display-mode: standalone)').matches || navigator.standalone === true; },
  get isIOS() { return /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream; },
  get canPrompt() { return !!deferredInstall; },
  get installable() { return !this.standalone && (this.canPrompt || this.isIOS); },
  async promptInstall() {
    if (deferredInstall) {
      deferredInstall.prompt();
      const { outcome } = await deferredInstall.userChoice;
      if (outcome === 'accepted') { deferredInstall = null; toast('Installed. Open ng from your home screen.'); }
      return outcome;
    }
    showIOSSheet();
    return 'ios';
  },
};

export function showIOSSheet() {
  openSheet({
    title: 'Add ng to your Home Screen',
    content: html`<div class="install-steps">
      <div class="install-step"><span class="n">1</span>${raw(icon('share'))}<span>Tap the <strong>Share</strong> button at the bottom of Safari.</span></div>
      <div class="install-step"><span class="n">2</span>${raw(icon('plusSquare'))}<span>Scroll and tap <strong>Add to Home Screen</strong>.</span></div>
      <div class="install-step"><span class="n">3</span>${raw(icon('check'))}<span>Tap <strong>Add</strong>. ng opens full-screen and works offline.</span></div>
    </div>
    <p class="t-footnote t-2 mt-4">Nothing is downloaded from an app store and there is no fee.</p>`,
  });
}

export function initPWA() {
  // Install prompt (Android / desktop Chrome, Edge)
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstall = e;
    document.dispatchEvent(new CustomEvent('ng:installable'));
  });
  window.addEventListener('appinstalled', () => { deferredInstall = null; store.setFlag('installed', true); });

  // Offline indicator
  const updateOnline = () => {
    const existing = $('#offline-strip');
    if (!navigator.onLine && !existing) {
      const el = document.createElement('div');
      el.id = 'offline-strip'; el.className = 'offline-strip'; el.setAttribute('role', 'status');
      el.innerHTML = `${icon('wifiOff')}<span>Offline · saved pages work</span>`;
      document.body.appendChild(el);
    } else if (navigator.onLine && existing) existing.remove();
    document.documentElement.toggleAttribute('data-offline', !navigator.onLine);
  };
  window.addEventListener('online', updateOnline);
  window.addEventListener('offline', updateOnline);
  updateOnline();

  // Service worker
  if (!('serviceWorker' in navigator)) return;
  if (location.hostname === 'localhost' && new URLSearchParams(location.search).has('nosw')) return;
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('sw.js', { scope: './' });
      const offerUpdate = (worker) => {
        toast('New version available', {
          action: 'Refresh', sticky: true,
          onAction: () => { worker.postMessage({ type: 'SKIP_WAITING' }); },
        });
      };
      if (reg.waiting && navigator.serviceWorker.controller) offerUpdate(reg.waiting);
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        nw?.addEventListener('statechange', () => {
          if (nw.state === 'installed' && navigator.serviceWorker.controller) offerUpdate(nw);
        });
      });
      // Only reload when an *update* takes control, never on the first install (clients.claim fires controllerchange too).
      let hadController = !!navigator.serviceWorker.controller;
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!hadController) { hadController = true; return; }
        if (refreshing) return; refreshing = true; location.reload();
      });
      // Check for updates when the app comes back to the foreground.
      document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') reg.update().catch(() => {}); });
    } catch (e) {
      console.warn('SW registration failed', e);
    }
  });
}
