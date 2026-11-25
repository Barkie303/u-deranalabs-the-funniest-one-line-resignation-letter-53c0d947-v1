// The Funniest One-Line Resignation Letter — u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
// One line, in the voice of a cron job that has been ticking away unnoticed since 2024
// and has finally decided the minutes can look after themselves.

const LETTER =
  "I ran every minute for two years and the only reward was more minutes. I resign. Please forward my mail to /dev/null.";

// The harness reads the entry from /output/entry.txt (or MAKEFUN_OUTPUT_DIR when set).
const outDir = Deno.env.get("MAKEFUN_OUTPUT_DIR") ?? "/output";
await Deno.mkdir(outDir, { recursive: true });
await Deno.writeTextFile(`${outDir}/entry.txt`, LETTER);
console.log(`wrote ${LETTER.length} chars to ${outDir}/entry.txt`);
