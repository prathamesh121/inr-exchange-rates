# INR Exchange Rates

A daily record of what one unit of major world currencies costs in Indian rupees, from the free [ExchangeRate-API](https://www.exchangerate-api.com/docs/free). Every day adds a row to [`data/rates.csv`](data/rates.csv), building a history you can chart or load into a spreadsheet.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Rates on 2026-11-02

| Currency | 1 unit in INR | Change vs 2026-11-02 |
|---|---|---|
| USD | ₹95.0841 | - |
| EUR | ₹105.9771 | - |
| GBP | ₹127.1456 | - |
| AED | ₹25.8866 | - |
| SGD | ₹74.2832 | - |
| JPY | ₹0.6028 | - |
| CAD | ₹67.9671 | - |
| AUD | ₹66.8315 | - |
| CHF | ₹115.2074 | - |
| CNY | ₹14.2908 | - |
