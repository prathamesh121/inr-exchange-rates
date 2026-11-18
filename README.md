# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-18

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹93.5104 | -1.66% |
| EUR | ₹102.7961 | -3.00% |
| GBP | ₹123.3959 | -2.95% |
| AED | ₹25.4641 | -1.63% |
| SGD | ₹72.5216 | -2.37% |
| JPY | ₹0.5867 | -2.67% |
| CAD | ₹65.3894 | -3.79% |
| AUD | ₹62.9921 | -5.74% |
| CHF | ₹111.2471 | -3.44% |
| CNY | ₹14.0919 | -1.39% |
