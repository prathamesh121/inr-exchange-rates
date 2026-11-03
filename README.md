# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-03

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹94.9307 | -0.16% |
| EUR | ₹106.2925 | +0.30% |
| GBP | ₹127.275 | +0.10% |
| AED | ₹25.8498 | -0.14% |
| SGD | ₹74.195 | -0.12% |
| JPY | ₹0.601 | -0.30% |
| CAD | ₹67.8887 | -0.12% |
| AUD | ₹66.4938 | -0.51% |
| CHF | ₹115.7541 | +0.47% |
| CNY | ₹14.2607 | -0.21% |
