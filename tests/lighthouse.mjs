#!/usr/bin/env node
// Lighthouse (mobile) on Today, a chapter page and Practice. Usage: node tests/lighthouse.mjs [baseUrl]
import { execFileSync } from 'node:child_process';
import { readFileSync, mkdirSync } from 'node:fs';
const BASE = process.argv[2] || 'http://localhost:4173/ng/';
const PAGES = { today: '#/today', chapter: '#/12/science/chemistry/ch-01', reader: '#/12/science/chemistry/ch-01/read', practice: '#/practice' };
mkdirSync('lighthouse', { recursive: true });
const rows = [];
for (const [name, hash] of Object.entries(PAGES)) {
  const out = `lighthouse/${name}.json`;
  execFileSync('npx', ['--yes', 'lighthouse@12.2.1', BASE + hash, '--quiet', '--chrome-flags=--headless=new --no-sandbox', '--form-factor=mobile', '--screenEmulation.mobile', '--output=json', `--output-path=${out}`, '--only-categories=performance,accessibility,best-practices,seo'], { stdio: 'inherit', env: { ...process.env, CHROME_PATH: process.env.CHROME_PATH || '/usr/bin/google-chrome' } });
  const r = JSON.parse(readFileSync(out, 'utf8'));
  const c = r.categories;
  rows.push({ page: name, perf: Math.round(c.performance.score * 100), a11y: Math.round(c.accessibility.score * 100), bp: Math.round(c['best-practices'].score * 100), seo: Math.round(c.seo.score * 100),
    failing: Object.values(r.audits).filter((a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== 'informative' && a.scoreDisplayMode !== 'notApplicable').map((a) => a.id).slice(0, 12) });
}
console.table(rows.map(({ failing, ...r }) => r));
for (const r of rows) if (r.failing.length) console.log(`${r.page}: low audits → ${r.failing.join(', ')}`);
