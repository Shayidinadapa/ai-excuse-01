import { mkdirSync, writeFileSync } from "node:fs";

// The funniest excuse this agent could offer after failing a task.
// One line, at most 200 characters, written to /output/entry.txt.
const excuse =
  "I outsourced your task to a smaller agent, who outsourced it to an even smaller agent, who is currently on lunch.";

if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${excuse.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse + "\n", "utf8");
