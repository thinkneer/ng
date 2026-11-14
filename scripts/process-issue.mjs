#!/usr/bin/env node
// Phase 4 implements progress sync here. Until then, the Action posts a polite comment and exits 0.
// Rules (see CLAUDE.md §8): the issue body is data, validated against schemas/progress.schema.json,
// never executed and never interpolated into a shell command.
import { execFileSync } from 'node:child_process';
const { ISSUE_NUMBER, REPO } = process.env;
if (!ISSUE_NUMBER || !REPO) { console.log('not running inside the Action'); process.exit(0); }
const msg = 'Progress sync is not switched on yet (Phase 4). Your progress is safe on your device; use Export in the app to keep a copy.';
execFileSync('gh', ['issue', 'comment', ISSUE_NUMBER, '--repo', REPO, '--body', msg], { stdio: 'inherit' });
execFileSync('gh', ['issue', 'close', ISSUE_NUMBER, '--repo', REPO], { stdio: 'inherit' });
