---
title: What the dashboard shows
owner: web-platform
tags: [product, dashboard, payments]
related: [cbd-payments-service/how-payments-work, cbd-payments-service/runbook, cbd-reporter/daily-settlement-report]
---

# What the dashboard shows

Support and finance use this screen to answer one question quickly: what
happened to this payment?

## The list

Every payment the service knows about, newest first, with its amount, currency,
and status. Support searches by payment id, which customers can read off their
receipt.

Amounts render in the payment's own currency. The dashboard does not convert,
because a converted figure would need an exchange rate and a timestamp, and
neither is in the contract.

## Statuses, in the words we use with customers

| Status | What support says |
|---|---|
| `processing` | Taken, waiting on the bank |
| `completed` | Money moved |
| `failed` | Did not go through, they can try again |

`processing` for more than a few minutes is not normal. That is an engineering
question, and the payments runbook covers it.

## What this screen is not

It is not a ledger and it is not a source of truth for finance. It reads the
payments API, which reports current state. Finance reconciles from the event
stream, which reports what happened and when. Those two disagree in the minutes
around midnight and around a settlement, and finance is right.

Anyone asking the dashboard to total a day's takings should be pointed at the daily
settlement report instead.

## £0.00 is a bug, never a real payment

The API rejects a zero or negative amount, so a payment cannot legitimately be
worth nothing. A row showing £0.00 means the dashboard is reading a field the
service stopped sending.

That happened once, on a Monday morning, and it is why the client is generated
from a committed contract rather than written by hand. See
[reading the payments contract](reading-the-contract.md).
