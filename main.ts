import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One single line that makes office life funny. The laugh lands in the
// last few words.
const line =
  "The Monday meeting could have been an email, but then we'd have nothing to schedule a meeting about.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
