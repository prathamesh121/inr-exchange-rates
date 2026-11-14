# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-14

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹94.2863 | -0.84% |
| EUR | ₹103.9933 | -1.87% |
| GBP | ₹124.533 | -2.05% |
| AED | ₹25.6746 | -0.82% |
| SGD | ₹73.1315 | -1.55% |
| JPY | ₹0.5892 | -2.26% |
| CAD | ₹66.0502 | -2.82% |
| AUD | ₹63.9836 | -4.26% |
| CHF | ₹112.3722 | -2.46% |
| CNY | ₹14.0934 | -1.38% |
