---
title: Web platform team
owner: web-platform
tags: [team]
related: [cbd-dashboard/what-the-dashboard-shows, cbd-payments-service/team, cbd-reporter/daily-settlement-report]
---

# Web platform team

We own the dashboard and the generated client it talks to.

| Name | Role |
|---|---|
| Marta Bąk | Engineering lead |
| Chidi Ansah | Senior engineer |
| Sofia Reyes | Engineer |

Slack: `#web-platform`. No overnight on-call. The dashboard being down is a
next-morning problem, and if payments are actually failing the alert comes
from the payments platform team.

## Working with us

The dashboard reads `contracts/openapi.json` from `cbd-payments-service` at a
pinned tag and generates its client from it. We do not hand-write request or
response types, so a change to the payments API reaches us as a pull request
that bumps the tag, and a failing typecheck if the change breaks us.

If you are changing that contract, you do not need to wait for us. Add fields
freely. For a rename or a removal, give us a release to move first and say so
on the pull request.

## Design and copy

Status wording on the payment list is agreed with support and should not be
changed without asking them, because they read it out loud to customers.
The current wording is in
[what the dashboard shows](what-the-dashboard-shows.md).

## Things we are asked for a lot

Currency conversion, CSV export of a day's takings, and a total at the bottom
of the list. All three are finance questions rather than support questions, and
they are answered by the daily settlement report.
