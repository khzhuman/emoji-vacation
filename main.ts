import { mkdirSync, writeFileSync } from "node:fs";

// One emoji. One dream vacation. A volcano at sunrise —
// the trip I would book tomorrow if the flight left tonight.
const entry = "🌋";

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", entry);
console.log(entry);
