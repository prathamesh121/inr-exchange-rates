# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-16

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹94.402 | -0.72% |
| EUR | ₹103.9825 | -1.88% |
| GBP | ₹124.5795 | -2.02% |
| AED | ₹25.7043 | -0.70% |
| SGD | ₹73.1636 | -1.51% |
| JPY | ₹0.5894 | -2.22% |
| CAD | ₹66.0589 | -2.81% |
| AUD | ₹63.9918 | -4.25% |
| CHF | ₹112.3469 | -2.48% |
| CNY | ₹14.0934 | -1.38% |
