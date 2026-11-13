# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-13

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹94.0822 | -1.05% |
| EUR | ₹104.0691 | -1.80% |
| GBP | ₹124.5485 | -2.04% |
| AED | ₹25.6187 | -1.03% |
| SGD | ₹73.0887 | -1.61% |
| JPY | ₹0.5885 | -2.37% |
| CAD | ₹65.95 | -2.97% |
| AUD | ₹64.119 | -4.06% |
| CHF | ₹112.7269 | -2.15% |
| CNY | ₹14.0371 | -1.78% |
