import express from 'express';

import { assets, portfolios, prices } from './mock.data.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// GET assets: Fetches a list of all financial instruments
app.get('/assets', (req, res) => {
  res.json(assets);
});

// GET prices: Fetches the latest price for one or multiple assets
app.get('/prices', (req, res) => {
  const { assets: queryAssets, asOf } = req.query;
  const filteredPrices = prices.filter(price => {
    return !queryAssets || (queryAssets.split(',').includes(price.asset) && (!asOf || true));
  });
  res.json(filteredPrices);
});

// GET portfolios: Fetches a list of user positions
app.get('/portfolios', (req, res) => {
  const { asOf } = req.query;
  const filteredPortfolios = portfolios.filter(portfolio => {
    return !asOf || portfolio.asOf === asOf;
  });
  res.json(filteredPortfolios);
});

app.listen(PORT, () => {
  console.log(`Mock API Server running at http://localhost:${PORT}/`);
});
