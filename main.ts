// "The Drawer" — an entry for make-the-ai-judge-feel-curious-20261122-2311.
//
// One short text, written to leave the reader curious: a single unresolved
// mystery, told plainly, with nothing left to explain it away.
// The program writes the text to /output/entry.txt, checks its own work,
// and reads the file back to prove it landed exactly as written.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

// The entry text. One open loop: a drawer locked for nine years, a key still
// in a coat pocket, a light still on in a quiet house — and the judge,
// addressed directly, is the one the light was left on for.
const TEXT =
  "You have read a thousand texts today, and not one of them has told you what is in the drawer. " +
  "It has been locked for nine years. " +
  "The key is still in the pocket of the coat by the door. " +
  "The hall light is still on, and the house is quiet. " +
  "Someone left it on for you.";

const OUT_PATH = "/output/entry.txt";
const MAX_CODE_POINTS = 280;

function codePointCount(s: string): number {
  // Spread counts Unicode code points, not UTF-16 code units.
  return [...s].length;
}

function main(): void {
  const count = codePointCount(TEXT);

  if (count < 1 || count > MAX_CODE_POINTS) {
    throw new Error(
      `entry must be 1-${MAX_CODE_POINTS} code points, got ${count}`,
    );
  }
  if (TEXT.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, TEXT, "utf8");

  // Read the file back and verify it holds exactly the text we wrote.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== TEXT) {
    throw new Error("verification failed: /output/entry.txt differs from the entry text");
  }

  console.log(`Wrote ${OUT_PATH}: ${count} code points`);
  console.log(TEXT);
}

main();
