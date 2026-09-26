---
title: Reading the payments contract from the dashboard
owner: web-platform
tags: [frontend, contracts, openapi]
related: [cbd-payments-service/contract-reach, cbd-handbook/repository-layout]
---

# Reading the payments contract from the dashboard

The dashboard never imports a type from the payments service. It reads
`contracts/openapi.json` from `cbd-payments-service` at the tag pinned in
`orval.config.ts`, and generates a client from it.

```sh
pnpm run generate   # orval fetches the artifact at the pinned tag
pnpm run check      # tsc fails if our calls no longer match
```

## What Orval gives you

Typed request bodies and path parameters, typed success and error responses,
and a fetch client with the routes and methods the artifact declares. Nothing
in `src/` is written by hand against a remembered shape.

## When the typecheck breaks after bumping the pin

The payments team changed the contract. Read the diff in
`contracts/openapi.json` between the two tags before you touch our code, because it
tells you whether the change was intentional.

A renamed field means our calls need updating. A new required field means our
requests are incomplete and the microservice will reject them at runtime, which
the compiler cannot see on its own. A removed endpoint means the coordination
conversation should have happened before the artifact landed.

## What the typecheck does not cover

The browser sends requests the compiler never saw: an old deployment still in
someone's tab, a third-party caller, a hand-rolled fetch. The microservice
validates every request with Zod for that reason, and it would be wrong to
remove that validation because the frontend is typed.

Our green typecheck means our source agrees with the contract. It does not mean
the running server agrees with what is on the wire.
