# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-09

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹94.0468 | -1.09% |
| EUR | ₹104.6572 | -1.25% |
| GBP | ₹125.4548 | -1.33% |
| AED | ₹25.6108 | -1.07% |
| SGD | ₹73.1797 | -1.49% |
| JPY | ₹0.5929 | -1.64% |
| CAD | ₹66.5159 | -2.14% |
| AUD | ₹64.5995 | -3.34% |
| CHF | ₹114.4951 | -0.62% |
| CNY | ₹14.1671 | -0.87% |
