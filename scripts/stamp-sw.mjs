#!/usr/bin/env node
// Replaces the CACHE_VERSION placeholder in sw.js with a build stamp so every deploy ships a fresh cache.
import { readFileSync, writeFileSync } from 'node:fs';
const sha = (process.env.GITHUB_SHA || '').slice(0, 8) || new Date().toISOString().replace(/\D/g, '').slice(0, 12);
const path = new URL('../sw.js', import.meta.url);
const src = readFileSync(path, 'utf8');
const out = src.replace(/const CACHE_VERSION = '[^']*';/, `const CACHE_VERSION = 'v-${sha}';`);
writeFileSync(path, out);
console.log(`sw.js stamped with v-${sha}`);
