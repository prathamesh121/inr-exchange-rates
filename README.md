# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-19

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹93.5104 | -1.66% |
| EUR | ₹102.501 | -3.28% |
| GBP | ₹122.9861 | -3.27% |
| AED | ₹25.4647 | -1.63% |
| SGD | ₹72.469 | -2.44% |
| JPY | ₹0.5864 | -2.72% |
| CAD | ₹65.2571 | -3.99% |
| AUD | ₹62.8457 | -5.96% |
| CHF | ₹110.9016 | -3.74% |
| CNY | ₹14.0205 | -1.89% |
