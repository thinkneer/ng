// Admin-only: edit data/users.json in the repo through the GitHub API.
// The key (a fine-grained token limited to this repository's contents) is kept only on the admin's device.
const OWNER = 'thinkneer', REPO = 'ng', PATH = 'data/users.json', BRANCH = 'main';
const KEY = 'ng.admin.token';
const API = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`;

export const token = {
  get: () => { try { return localStorage.getItem(KEY) || ''; } catch { return ''; } },
  set: (t) => { try { localStorage.setItem(KEY, t.trim()); } catch { /* ignore */ } },
  clear: () => { try { localStorage.removeItem(KEY); } catch { /* ignore */ } },
};

const headers = () => ({ Authorization: `Bearer ${token.get()}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' });
const decode = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\n/g, '')), (c) => c.charCodeAt(0)));
const encode = (s) => { const bytes = new TextEncoder().encode(s); let bin = ''; for (const b of bytes) bin += String.fromCharCode(b); return btoa(bin); };

async function read() {
  const r = await fetch(`${API}?ref=${BRANCH}&t=${Date.now()}`, { headers: headers(), cache: 'no-store' });
  if (r.status === 401 || r.status === 403) throw new Error('The GitHub key was refused. Check it has Contents: Read and write on thinkneer/ng, or paste a new one.');
  if (!r.ok) throw new Error(`GitHub said ${r.status} while reading the member list.`);
  const j = await r.json();
  return { sha: j.sha, data: JSON.parse(decode(j.content)) };
}

/** Read users.json, apply change(data) → returns commit message, write it back. Retries once on a conflict. */
export async function updateUsers(change) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const { sha, data } = await read();
    const message = change(data);
    const body = JSON.stringify({ message: `${message}\n\nvia admin dashboard`, content: encode(JSON.stringify(data, null, 2) + '\n'), sha, branch: BRANCH });
    const r = await fetch(API, { method: 'PUT', headers: { ...headers(), 'Content-Type': 'application/json' }, body });
    if (r.ok) return data;
    if (r.status === 409 && attempt === 0) continue; // someone else changed it; read again
    if (r.status === 401 || r.status === 403) throw new Error('The GitHub key can’t write. It needs Contents: Read and write on thinkneer/ng.');
    throw new Error(`GitHub said ${r.status} while saving.`);
  }
  throw new Error('The member list changed while saving. Try again.');
}
export async function testKey() { await read(); return true; }
