# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-27

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹92.5241 | -2.69% |
| EUR | ₹101.4199 | -4.30% |
| GBP | ₹121.1387 | -4.72% |
| AED | ₹25.1934 | -2.68% |
| SGD | ₹71.6281 | -3.57% |
| JPY | ₹0.5804 | -3.72% |
| CAD | ₹64.9224 | -4.48% |
| AUD | ₹61.3572 | -8.19% |
| CHF | ₹110.8402 | -3.79% |
| CNY | ₹13.8263 | -3.25% |
