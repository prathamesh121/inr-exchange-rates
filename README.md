# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-23

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹92.7558 | -2.45% |
| EUR | ₹101.657 | -4.08% |
| GBP | ₹121.3298 | -4.57% |
| AED | ₹25.2564 | -2.43% |
| SGD | ₹71.8391 | -3.29% |
| JPY | ₹0.5836 | -3.19% |
| CAD | ₹64.6454 | -4.89% |
| AUD | ₹61.5612 | -7.89% |
| CHF | ₹110.2657 | -4.29% |
| CNY | ₹13.9476 | -2.40% |
