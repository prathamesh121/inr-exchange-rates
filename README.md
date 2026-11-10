# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-10

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹93.932 | -1.21% |
| EUR | ₹105.1967 | -0.74% |
| GBP | ₹126.0398 | -0.87% |
| AED | ₹25.5748 | -1.20% |
| SGD | ₹73.3891 | -1.20% |
| JPY | ₹0.5944 | -1.39% |
| CAD | ₹66.5646 | -2.06% |
| AUD | ₹64.8593 | -2.95% |
| CHF | ₹114.6 | -0.53% |
| CNY | ₹14.0679 | -1.56% |
