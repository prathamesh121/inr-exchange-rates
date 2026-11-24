# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-24

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹92.9973 | -2.19% |
| EUR | ₹101.4713 | -4.25% |
| GBP | ₹121.3003 | -4.60% |
| AED | ₹25.3222 | -2.18% |
| SGD | ₹71.958 | -3.13% |
| JPY | ₹0.5841 | -3.10% |
| CAD | ₹64.7082 | -4.79% |
| AUD | ₹61.6295 | -7.78% |
| CHF | ₹110.4728 | -4.11% |
| CNY | ₹13.8889 | -2.81% |
