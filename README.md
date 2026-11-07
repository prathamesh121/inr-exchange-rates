# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-07

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹94.1354 | -1.00% |
| EUR | ₹104.9759 | -0.94% |
| GBP | ₹125.8336 | -1.03% |
| AED | ₹25.6338 | -0.98% |
| SGD | ₹73.3891 | -1.20% |
| JPY | ₹0.5941 | -1.44% |
| CAD | ₹66.7512 | -1.79% |
| AUD | ₹64.6789 | -3.22% |
| CHF | ₹114.8106 | -0.34% |
| CNY | ₹14.1671 | -0.87% |
