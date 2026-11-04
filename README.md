# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-04

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹94.8317 | -0.27% |
| EUR | ₹106.0221 | +0.04% |
| GBP | ₹127.1456 | +0.00% |
| AED | ₹25.8224 | -0.25% |
| SGD | ₹73.9864 | -0.40% |
| JPY | ₹0.5985 | -0.71% |
| CAD | ₹67.7415 | -0.33% |
| AUD | ₹66.1113 | -1.08% |
| CHF | ₹115.5936 | +0.34% |
| CNY | ₹14.2544 | -0.25% |
