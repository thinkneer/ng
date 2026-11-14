#!/usr/bin/env node
// Screenshots of the key screens at phone/tablet/PC sizes in light and dark.
// Usage: node scripts/serve.mjs 4173 --test & node tests/screenshots.mjs [baseUrl]   (default http://localhost:4173/ng/)
// Env: BROWSERS=chromium,webkit (default: chromium; falls back to system Chrome when the Playwright build is missing)
import { mkdirSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const pw = require('playwright');

const BASE = process.argv[2] || 'http://localhost:4173/ng/';
const OUT = process.env.OUT || new URL('../docs/screenshots/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const SIZES = [
  { name: 'iphone-375', width: 375, height: 812, mobile: true },
  { name: 'iphone-390', width: 390, height: 844, mobile: true },
  { name: 'tablet-768', width: 768, height: 1024, mobile: true },
  { name: 'pc-1440', width: 1440, height: 900, mobile: false },
];
const SCREENS = [
  { name: 'signin', hash: '#/today', fresh: true },
  { name: 'request', hash: '#/request', fresh: true },
  { name: 'today', hash: '#/today' },
  { name: 'subjects', hash: '#/subjects' },
  { name: 'physics', hash: '#/12/science/physics' },
  { name: 'chapter', hash: '#/12/science/chemistry/ch-01' },
  { name: 'reader', hash: '#/12/science/chemistry/ch-01/read' },
  { name: 'recall', hash: '#/12/science/chemistry/ch-01/recall' },
  { name: 'cards', hash: '#/12/science/chemistry/ch-02/cards' },
  { name: 'formulas', hash: '#/12/science/chemistry/formulas' },
  { name: 'practice', hash: '#/practice' },
  { name: 'progress', hash: '#/progress' },
  { name: 'plan', hash: '#/plan' },
  { name: 'more', hash: '#/more' },
];
const SETTINGS = JSON.stringify({ class: '12', stream: 'science', subjects: ['physics', 'chemistry', 'maths', 'biology', 'english-core'] });
const browsers = (process.env.BROWSERS || 'chromium').split(',');
const failures = [];

for (const bname of browsers) {
  let browser;
  try {
    browser = await pw[bname].launch();
  } catch (e) {
    if (bname === 'chromium' && existsSync('/usr/bin/google-chrome')) browser = await pw.chromium.launch({ executablePath: '/usr/bin/google-chrome' });
    else { console.warn(`skip ${bname}: ${e.message.split('\n')[0]}`); continue; }
  }
  for (const size of SIZES) {
    for (const scheme of ['light', 'dark']) {
      const ctx = await browser.newContext({
        viewport: { width: size.width, height: size.height }, deviceScaleFactor: 2, isMobile: size.mobile && bname !== 'webkit' ? true : false, hasTouch: size.mobile,
        colorScheme: scheme, serviceWorkers: 'block',
      });
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
      for (const screen of SCREENS) {
        await page.goto(BASE + '?nosw', { waitUntil: 'load' });
        await page.evaluate(() => localStorage.clear());
        // signed-in screens: the local server (--test) injects a session for the test member on ?autologin
        await page.goto(BASE + (screen.fresh ? '?nosw' : '?nosw&autologin') + screen.hash, { waitUntil: 'networkidle' });
        await page.waitForSelector('#view .large-title, #view h1, #view .empty', { timeout: 8000 }).catch(() => {});
        await page.waitForTimeout(['chapter', 'reader', 'recall', 'formulas', 'cards'].includes(screen.name) ? 1500 : 350);
        const file = `${OUT}${bname}-${size.name}-${scheme}-${screen.name}.png`;
        await page.screenshot({ path: file, fullPage: false });
      }
      if (errors.length) failures.push(`${bname} ${size.name} ${scheme}: ${[...new Set(errors)].join(' | ')}`);
      await ctx.close();
    }
  }
  await browser.close();
  console.log(`${bname}: done`);
}
if (failures.length) { console.error('Console errors:\n' + failures.join('\n')); process.exitCode = 1; }
console.log(`screenshots in ${OUT}`);
