# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-25

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹92.9282 | -2.27% |
| EUR | ₹101.8019 | -3.94% |
| GBP | ₹121.6841 | -4.30% |
| AED | ₹25.3049 | -2.25% |
| SGD | ₹72.0305 | -3.03% |
| JPY | ₹0.5835 | -3.20% |
| CAD | ₹64.8677 | -4.56% |
| AUD | ₹61.6447 | -7.76% |
| CHF | ₹110.9508 | -3.69% |
| CNY | ₹13.9377 | -2.47% |
