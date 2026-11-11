# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-11

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹93.9585 | -1.18% |
| EUR | ₹105.0862 | -0.84% |
| GBP | ₹125.6755 | -1.16% |
| AED | ₹25.582 | -1.18% |
| SGD | ₹73.3622 | -1.24% |
| JPY | ₹0.5928 | -1.66% |
| CAD | ₹66.3174 | -2.43% |
| AUD | ₹64.6287 | -3.30% |
| CHF | ₹114.0901 | -0.97% |
| CNY | ₹14.0756 | -1.51% |
