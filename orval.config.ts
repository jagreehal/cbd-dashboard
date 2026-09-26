import { defineConfig } from 'orval';

// The only thing shared with cbd-payments-service: its committed contract, at
// a tag. Upgrading is a one-line PR that changes this version.
const PAYMENTS_CONTRACT = 'v1.0.0';

export default defineConfig({
  payments: {
    input: {
      target: `https://raw.githubusercontent.com/jagreehal/cbd-payments-service/${PAYMENTS_CONTRACT}/contracts/openapi.json`,
    },
    output: {
      mode: 'single',
      target: './src/generated/payments.ts',
      client: 'fetch',
      mock: false,
      baseUrl: 'http://localhost:4000',
    },
  },
});
