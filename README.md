# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-26

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹92.3446 | -2.88% |
| EUR | ₹101.0714 | -4.63% |
| GBP | ₹120.7146 | -5.06% |
| AED | ₹25.1427 | -2.87% |
| SGD | ₹71.4286 | -3.84% |
| JPY | ₹0.5795 | -3.87% |
| CAD | ₹64.7836 | -4.68% |
| AUD | ₹60.9719 | -8.77% |
| CHF | ₹110.9878 | -3.66% |
| CNY | ₹13.9396 | -2.46% |
