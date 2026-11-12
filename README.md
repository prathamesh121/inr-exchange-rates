# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-12

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹93.8527 | -1.30% |
| EUR | ₹104.1667 | -1.71% |
| GBP | ₹124.6106 | -1.99% |
| AED | ₹25.5565 | -1.28% |
| SGD | ₹73.0567 | -1.65% |
| JPY | ₹0.5877 | -2.50% |
| CAD | ₹65.8285 | -3.15% |
| AUD | ₹64.2963 | -3.79% |
| CHF | ₹112.7777 | -2.11% |
| CNY | ₹14.0617 | -1.60% |
