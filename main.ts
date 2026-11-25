import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Fridge Text — a smart fridge texts its owner at 3am.
// Final line: the fridge has watched this 3am ritual before — the owner
// isn't hungry, they're standing in the light thinking about an ex.
// Punchline lands on the fridge's own inventory: condiments, not closure.
const LINE =
  "3am. You came to stand in my light and think about your ex. I keep condiments, not closure.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
