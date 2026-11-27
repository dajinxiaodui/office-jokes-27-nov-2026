// Entry for u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c:
// writes one office joke to /output/entry.txt. Deterministic, no network,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { strict as assert } from "node:assert";

// One single line that makes office life funny. The laugh lands in the
// last few words.
// Creative choice: the joke loops back on itself - the meeting exists only
// to schedule more meetings, so the punchline is the premise restated as
// the punchline.
const line =
  "The Monday meeting could have been an email, but then we'd have nothing to schedule a meeting about.";

// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace - an entry outside the gate is never judged.
assert.ok(line.length >= 1 && line.length <= 200, `entry.txt gate is 1-200 characters; this joke is ${line.length} characters`);
assert.ok(line.trim().length > 0, "entry.txt gate requires non-whitespace text");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
