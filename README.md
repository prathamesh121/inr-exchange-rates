# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-22

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹92.885 | -2.31% |
| EUR | ₹101.916 | -3.83% |
| GBP | ₹121.6693 | -4.31% |
| AED | ₹25.2934 | -2.29% |
| SGD | ₹71.9942 | -3.08% |
| JPY | ₹0.5839 | -3.14% |
| CAD | ₹64.8172 | -4.63% |
| AUD | ₹61.6029 | -7.82% |
| CHF | ₹110.3753 | -4.19% |
| CNY | ₹13.9476 | -2.40% |
