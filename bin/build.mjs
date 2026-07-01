#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const viteBin = resolve(__dirname, '../node_modules/.bin/vite');

const proc = spawn(viteBin, ['build'], { stdio: ['inherit', 'pipe', 'pipe'] });

function stripAnsi(s) {
    return s.replace(/\x1B\[\d+m/g, '');
}

proc.stdout.on('data', (chunk) => process.stdout.write(chunk));

proc.stderr.on('data', (chunk) => {
    const lines = chunk.toString().split('\n');
    const filtered = lines.filter((l) => {
        const clean = stripAnsi(l).trimStart();
        const trimmed = clean.replace(/\x1B\[\d+m/g, '').trim();
        if (trimmed.startsWith('Found ') && trimmed.includes('warnings while optimizing')) return false;
        if (trimmed.startsWith('Issue #')) return false;
        if (/^[│┆]/.test(stripAnsi(l).trimStart())) return false;
        return true;
    });
    if (filtered.length > 0) process.stderr.write(filtered.join('\n'));
});

proc.on('exit', (code) => process.exit(code ?? 1));
