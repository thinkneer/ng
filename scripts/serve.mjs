#!/usr/bin/env node
// Tiny static server for local checks: serves the repo at http://localhost:<port>/ng/ (same base path as GitHub Pages).
import { createServer } from 'node:http';
import { gzipSync } from 'node:zlib';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(fileURLToPath(import.meta.url), '..', '..');
const PORT = Number(process.argv.find((a) => /^\d+$/.test(a)) || 4173);
// --test: adds member "tester" / passphrase "testpass123" to the served users.json (never written to disk),
// and "?autologin" on a URL starts the page signed in as tester (for Lighthouse). Local checks only.
const TEST = process.argv.includes('--test');
import { pbkdf2Sync, randomBytes } from 'node:crypto';
const TEST_SALT = randomBytes(16).toString('base64');
const TEST_HASH = TEST ? pbkdf2Sync('testpass123', Buffer.from(TEST_SALT, 'base64'), 100000, 32, 'sha256').toString('base64') : '';
const TEST_USER = { nickname: 'tester', salt: TEST_SALT, hash: TEST_HASH, class: '12', stream: 'science', subjects: ['physics', 'chemistry', 'maths', 'biology', 'english-core'], status: 'approved', approved_on: '2026-11-14', role: 'admin' };
const BASE = '/ng/';
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json', '.md': 'text/markdown; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.pdf': 'application/pdf', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.woff2': 'font/woff2' };
createServer(async (req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/' || url === '/ng') { res.writeHead(302, { Location: BASE }); return res.end(); }
  if (!url.startsWith(BASE)) { res.writeHead(404); return res.end('not found'); }
  let rel = url.slice(BASE.length) || 'index.html';
  let file = normalize(join(ROOT, rel));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  try {
    const s = await stat(file);
    if (s.isDirectory()) file = join(file, 'index.html');
    let body = await readFile(file);
    if (TEST && rel === 'data/users.json') { const j = JSON.parse(body); j.users = [...j.users, TEST_USER]; body = Buffer.from(JSON.stringify(j)); }
    if (TEST && rel === 'index.html' && /[?&]autologin/.test(req.url)) {
      const sess = JSON.stringify({ nickname: 'tester', hash: TEST_HASH, role: 'admin', class: '12', stream: 'science', subjects: TEST_USER.subjects, at: new Date().toISOString() });
      const set = JSON.stringify({ class: '12', stream: 'science', subjects: [] });
      body = Buffer.from(String(body).replace('<script>', `<script>try{localStorage.setItem('ng.session',${JSON.stringify(sess)});if(!localStorage.getItem('ng.settings'))localStorage.setItem('ng.settings',${JSON.stringify(set)});}catch(e){}</script><script>`));
    }
    const type = MIME[extname(file)] || 'application/octet-stream';
    const headers = { 'Content-Type': type, 'Cache-Control': 'no-cache' };
    // gzip text like GitHub Pages does, so local Lighthouse numbers are realistic
    if (/text\/|json|javascript|svg|manifest/.test(type) && /gzip/.test(req.headers['accept-encoding'] || '')) { body = gzipSync(body); headers['Content-Encoding'] = 'gzip'; }
    res.writeHead(200, headers);
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('not found: ' + rel);
  }
}).listen(PORT, () => console.log(`serving ${ROOT} at http://localhost:${PORT}${BASE}`));
