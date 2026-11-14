#!/usr/bin/env node
// Minifies the vendored ESM libraries in place (see vendor/README.md). Run after upgrading a library.
import { build } from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';
const files = ['vendor/marked.esm.js', 'vendor/purify.es.mjs', 'vendor/katex/katex.mjs', 'vendor/katex/contrib/auto-render.mjs', 'vendor/katex/contrib/mhchem.mjs'];
for (const f of files) {
  await build({ entryPoints: [f], outfile: f, allowOverwrite: true, minify: true, format: 'esm', bundle: false, target: 'es2020', legalComments: 'none' });
  console.log('minified', f);
}
// KaTeX fonts: swap so text is never invisible while they load
const css = 'vendor/katex/katex.min.css';
writeFileSync(css, readFileSync(css, 'utf8').replace(/@font-face\{/g, '@font-face{font-display:swap;'));
console.log('font-display:swap added to', css);
