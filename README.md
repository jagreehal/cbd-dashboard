# cbd-dashboard

TypeScript consumer. Orval generates a typed client from cbd-payments-service's
`contracts/openapi.json` at the tag pinned in [`orval.config.ts`](orval.config.ts).
No payments source, no shared package.

```sh
pnpm install
pnpm run generate     # fetch the pinned contract, regenerate src/generated
pnpm run check        # tsc fails if our calls no longer match
```

Adopting a new payments contract is a PR that changes `PAYMENTS_CONTRACT`. If
the new contract breaks us, that PR goes red here, before anything ships.

## The six repositories

| Repo | Role |
|---|---|
| [cbd-handbook](https://github.com/jagreehal/cbd-handbook) | Owns the convention: docs frontmatter schema, docs checker, company policy |
| [cbd-payments-service](https://github.com/jagreehal/cbd-payments-service) | TypeScript producer: OpenAPI + event JSON Schemas + runbook |
| [cbd-dashboard](https://github.com/jagreehal/cbd-dashboard) | TypeScript consumer: typed client generated from the pinned OpenAPI |
| [cbd-reporter](https://github.com/jagreehal/cbd-reporter) | Python consumer: validates events against the pinned JSON Schemas |
| [cbd-docs-site](https://github.com/jagreehal/cbd-docs-site) | Aggregator: [one docs index](https://jagreehal.github.io/cbd-docs-site/) over every enrolled repo |
| [cbd-catalog](https://github.com/jagreehal/cbd-catalog) | Aggregator: [EventCatalog](https://jagreehal.github.io/cbd-catalog/) over every enrolled repo |

No repository imports another's source. Consumers read committed artifacts
at pinned tags over HTTPS; aggregators discover publishers by the
`cbd-publisher` GitHub topic.
