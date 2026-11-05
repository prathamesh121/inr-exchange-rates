# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-05

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹94.6163 | -0.49% |
| EUR | ₹106.2473 | +0.25% |
| GBP | ₹127.486 | +0.27% |
| AED | ₹25.7652 | -0.47% |
| SGD | ₹73.9919 | -0.39% |
| JPY | ₹0.5971 | -0.95% |
| CAD | ₹67.7645 | -0.30% |
| AUD | ₹66.2734 | -0.84% |
| CHF | ₹115.8346 | +0.54% |
| CNY | ₹14.2003 | -0.63% |
