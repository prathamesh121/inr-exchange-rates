# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-20

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹93.3707 | -1.80% |
| EUR | ₹102.48 | -3.30% |
| GBP | ₹122.474 | -3.67% |
| AED | ₹25.4246 | -1.78% |
| SGD | ₹72.2909 | -2.68% |
| JPY | ₹0.5836 | -3.19% |
| CAD | ₹65.1721 | -4.11% |
| AUD | ₹62.3325 | -6.73% |
| CHF | ₹110.6684 | -3.94% |
| CNY | ₹14.0142 | -1.94% |
