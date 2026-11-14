// Supabase client (lazy). The app runs in "db mode" when data/supabase.json has a url + key; otherwise the
// static nickname/passphrase flow is used (that is also what the local test server serves, so the quality
// checks never touch the network). The publishable key is safe to ship; row-level security does the guarding.
const V = new URL('../vendor/', import.meta.url).href;
let cfgP = null, client = null;

export function config() {
  cfgP ||= fetch('data/supabase.json', { cache: 'no-cache' }).then((r) => (r.ok ? r.json() : {})).catch(() => ({}));
  return cfgP;
}
export async function enabled() { const c = await config(); return !!(c.url && c.key); }

/** The supabase-js client, or null when the site runs without a database. */
export async function db() {
  if (client) return client;
  const c = await config();
  if (!c.url || !c.key) return null;
  const { createClient } = await import(`${V}supabase.mjs`);
  client = createClient(c.url, c.key, {
    auth: { flowType: 'pkce', persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: 'ng.sb' },
    realtime: { params: { eventsPerSecond: 5 } },
  });
  return client;
}

/** Current auth user id, or null. */
export async function uid() { const c = await db(); if (!c) return null; const { data } = await c.auth.getSession(); return data.session?.user?.id || null; }

/** Load my profile row (nickname, role, status, class, stream, subjects). */
export async function myProfile() {
  const c = await db(); if (!c) return null;
  const id = await uid(); if (!id) return null;
  const { data, error } = await c.from('profiles').select('id, nickname, role, status, class, stream, subjects').eq('id', id).maybeSingle();
  if (error) throw error;
  return data;
}

/** One-line error text for toasts. */
export const errText = (e) => { const m = String(e?.message || e || 'Something went wrong'); return /failed to fetch|networkerror|load failed/i.test(m) ? 'Could not reach the sign-in service. Check your connection and try again.' : m.slice(0, 160); };
