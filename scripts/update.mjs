// Records how many rupees one unit of major currencies costs today, building a daily CSV history.
import { readFile, writeFile } from "node:fs/promises";

const CURRENCIES = ["USD", "EUR", "GBP", "AED", "SGD", "JPY", "CAD", "AUD", "CHF", "CNY"];
const CSV = "data/rates.csv";

const res = await fetch("https://open.er-api.com/v6/latest/INR");
if (!res.ok) throw new Error(`Rate API failed: ${res.status}`);
const body = await res.json();
if (body.result !== "success") throw new Error(`Rate API error: ${JSON.stringify(body)}`);

// The API gives "1 INR = x FOO"; flip it to "1 FOO = y INR", which is how rates are usually quoted.
const date = new Date(body.time_last_update_unix * 1000).toISOString().slice(0, 10);
const inr = Object.fromEntries(CURRENCIES.map((c) => [c, +(1 / body.rates[c]).toFixed(4)]));

let csv = await readFile(CSV, "utf8").catch(() => `date,${CURRENCIES.join(",")}\n`);
const lines = csv.trim().split("\n");
if (lines.some((l) => l.startsWith(`${date},`))) {
  console.log(`Already have rates for ${date}`);
  process.exit(0);
}
csv = `${lines.join("\n")}\n${date},${CURRENCIES.map((c) => inr[c]).join(",")}\n`;
await writeFile(CSV, csv);

// Compare with the oldest row from the last ~30 entries.
const history = csv.trim().split("\n").slice(1);
const base = history.at(-31) ?? history[0];
const baseRates = Object.fromEntries(base.split(",").slice(1).map((v, i) => [CURRENCIES[i], +v]));
const pct = (c) => {
  if (history.length < 2) return "-";
  const d = ((inr[c] - baseRates[c]) / baseRates[c]) * 100;
  return `${d >= 0 ? "+" : ""}${d.toFixed(2)}%`;
};

const marker = "<!-- latest -->";
const readme = await readFile("README.md", "utf8");
const table = ["| Currency | 1 unit in INR | Change vs " + base.split(",")[0] + " |", "|---|---|---|"].concat(
  CURRENCIES.map((c) => `| ${c} | ₹${inr[c]} | ${pct(c)} |`),
);
await writeFile("README.md", `${readme.split(marker)[0]}${marker}\n## Rates on ${date}\n\n${table.join("\n")}\n`);
console.log(`Saved rates for ${date}`);
