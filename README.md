# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-08

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹94.1176 | -1.02% |
| EUR | ₹105.031 | -0.89% |
| GBP | ₹125.9129 | -0.97% |
| AED | ₹25.6266 | -1.00% |
| SGD | ₹73.3999 | -1.19% |
| JPY | ₹0.5942 | -1.43% |
| CAD | ₹66.7958 | -1.72% |
| AUD | ₹64.6789 | -3.22% |
| CHF | ₹114.8633 | -0.30% |
| CNY | ₹14.1671 | -0.87% |
