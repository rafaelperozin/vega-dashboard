export const assets = [
  { id: '1', name: 'Bitcoin', type: 'crypto' },
  { id: '2', name: 'Apple Inc', type: 'stock' },
  { id: '3', name: 'US Dollar', type: 'fiat' }
];

export const prices = [
  { id: '1', asset: 'Bitcoin', price: 45000 },
  { id: '2', asset: 'Apple Inc', price: 150 },
  { id: '3', asset: 'US Dollar', price: 1 }
];

export const portfolios = [
  {
    id: 'uuid-123',
    asOf: '2023-01-01T00:00:00Z',
    positions: [
      { id: 1, asset: 'Bitcoin', quantity: 2, asOf: '2023-01-01T00:00:00Z', price: 45000 },
      { id: 2, asset: 'Apple Inc', quantity: 10, asOf: '2023-01-01T00:00:00Z', price: 150 }
    ]
  }
];
