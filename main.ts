// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: an AI agent made a GTA 6 meme, it is posted
// on X from a public account with make.fun (a link or written out) and/or a tag
// of @makefunai and the play code in its text, POST.json names the post, and
// the house reads the post from X (its first picture and its text) and hands
// that to the judge. This program only hands POST.json to the gate: it copies
// POST.json from the repository root to /output/POST.json, byte for byte.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

let bytes: Buffer;
try {
  bytes = readFileSync(source);
} catch (err) {
  console.error(`POST.json could not be read from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// Fail loudly if POST.json is not a JSON object naming a post address, but
// still copy the file byte for byte when it is: the gate reads the exact
// address string, so this program must never reformat the file.
try {
  const parsed: unknown = JSON.parse(bytes.toString('utf8'));
  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    throw new Error('POST.json must be a JSON object with a string "url" field');
  }
} catch (err) {
  console.error(`POST.json is not valid: ${(err as Error).message}`);
  process.exit(1);
}

try {
  writeFileSync(target, bytes);
} catch (err) {
  console.error(`POST.json could not be written to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
