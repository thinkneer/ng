// localStorage-backed settings and per-nickname progress (device-first). Tiny pub/sub.
const PREFIX = 'ng.';
const listeners = new Set();

function read(key, fallback) {
  try { const v = localStorage.getItem(PREFIX + key); return v == null ? fallback : JSON.parse(v); } catch { return fallback; }
}
function write(key, value) {
  try { if (value === undefined) localStorage.removeItem(PREFIX + key); else localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch { /* storage may be unavailable */ }
  for (const fn of listeners) fn(key, value);
}

export const store = {
  get: read,
  set: write,
  subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },

  // ---- settings ----
  get settings() { return read('settings', { class: null, stream: null, subjects: [] }); },
  setSettings(patch) { write('settings', { ...this.settings, ...patch }); },
  get theme() { try { return localStorage.getItem(PREFIX + 'theme') || 'auto'; } catch { return 'auto'; } },
  set theme(v) { try { v === 'auto' ? localStorage.removeItem(PREFIX + 'theme') : localStorage.setItem(PREFIX + 'theme', v); } catch { /* ignore */ } for (const fn of listeners) fn('theme', v); },

  // ---- my subjects: settings.subjects = explicit list; empty = all live subjects ----
  isMine(id) { const l = this.settings.subjects || []; return !l.length || l.includes(id); },
  /** Add or remove one subject. Returns the new state, or null when it would leave none. */
  toggleSubject(id, liveIds) {
    const cur = this.settings.subjects?.length ? [...this.settings.subjects] : [...liveIds];
    const on = cur.includes(id);
    const next = on ? cur.filter((x) => x !== id) : [...cur, id];
    if (!next.length) return null;
    this.setSettings({ subjects: next.length === liveIds.length && liveIds.every((x) => next.includes(x)) ? [] : next });
    return !on;
  },

  // ---- user ----
  get nickname() { return read('session', null)?.nickname || 'guest'; },

  // ---- progress (per nickname) ----
  progress() {
    const key = `progress.${this.nickname}`;
    return read(key, { version: 1, tracker: {}, plan_ticks: {}, attempts: [], mistakes: [], bookmarks: [], my_notes: {} });
  },
  saveProgress(patch) {
    const key = `progress.${this.nickname}`;
    const next = typeof patch === 'function' ? patch(this.progress()) : { ...this.progress(), ...patch };
    next.updated = new Date().toISOString();
    write(key, next);
    return next;
  },
  myNote(chapterKey) { return this.progress().my_notes?.[chapterKey] || ''; },
  setMyNote(chapterKey, text) {
    this.saveProgress((p) => { p.my_notes = { ...(p.my_notes || {}) }; if (text.trim()) p.my_notes[chapterKey] = text; else delete p.my_notes[chapterKey]; return p; });
  },
  tracker(chapterKey) { return this.progress().tracker?.[chapterKey] || {}; },
  setTracker(chapterKey, patch) {
    this.saveProgress((p) => { p.tracker = { ...(p.tracker || {}) }; p.tracker[chapterKey] = { ...(p.tracker[chapterKey] || {}), ...patch, updated: new Date().toISOString() }; return p; });
  },

  // ---- misc flags ----
  flag(name) { return read(`flag.${name}`, false); },
  setFlag(name, v = true) { write(`flag.${name}`, v); },
};
