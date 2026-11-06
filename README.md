# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-06

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹94.5358 | -0.58% |
| EUR | ₹106.067 | +0.08% |
| GBP | ₹127.2103 | +0.05% |
| AED | ₹25.742 | -0.56% |
| SGD | ₹73.9645 | -0.43% |
| JPY | ₹0.5974 | -0.90% |
| CAD | ₹67.5813 | -0.57% |
| AUD | ₹65.8025 | -1.54% |
| CHF | ₹115.6872 | +0.42% |
| CNY | ₹14.1649 | -0.88% |
