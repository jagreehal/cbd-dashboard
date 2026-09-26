# cbd-dashboard

TypeScript consumer. Orval generates a typed client from the
cbd-payments-service `contracts/openapi.json` at the tag in
[`orval.config.ts`](orval.config.ts). The dashboard imports no payments source
and shares no package with that team.

```sh
pnpm install
pnpm run generate     # fetch the pinned contract, regenerate src/generated
pnpm run check        # tsc fails if our calls no longer match
```

To adopt a new payments contract, open a PR that changes `PAYMENTS_CONTRACT`.
A breaking contract turns that PR red here, before anything ships.

## The six repositories

| Repo | Role |
|---|---|
| [cbd-handbook](https://github.com/jagreehal/cbd-handbook) | Owns the convention: docs frontmatter schema, docs check, company policy |
| [cbd-payments-service](https://github.com/jagreehal/cbd-payments-service) | TypeScript producer: OpenAPI, event JSON Schemas, runbook |
| [cbd-dashboard](https://github.com/jagreehal/cbd-dashboard) | TypeScript consumer: generates a typed client from the pinned OpenAPI |
| [cbd-reporter](https://github.com/jagreehal/cbd-reporter) | Python consumer: validates events against the pinned JSON Schemas |
| [cbd-docs-site](https://github.com/jagreehal/cbd-docs-site) | Aggregator: [docs index](https://jagreehal.github.io/cbd-docs-site/) over the enrolled repos |
| [cbd-catalog](https://github.com/jagreehal/cbd-catalog) | Aggregator: [EventCatalog](https://jagreehal.github.io/cbd-catalog/) over the enrolled repos |

Consumers fetch committed artifacts over HTTPS at a pinned tag. The
aggregators find publishers by the `cbd-publisher` GitHub topic.
