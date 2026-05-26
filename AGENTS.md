# UniAuth Messenger Provider Rules

## Ownership Boundary

This repository implements messenger login providers for UniAuth.

It may own:

- Telegram Mini App init data validation
- MAX WebApp init data validation
- provider assertion mapping
- shared signed WebApp payload validation

It must not own:

- UniAuth core auth policy
- database access
- HTTP routes
- UI
- provider token persistence

## Public API

Use public `@alyldas/uniauth-core` contracts only. Do not import private core internals.

## Local Core Setup

Before running provider tests against local UniAuth, build `../uniauth-core` first:

```sh
cd ../uniauth-core
npm install
npm run build
```

Then return to this repository and run:

```sh
npm install
npm run check
```

## Expected Checks

Run `npm run check` before publishing or committing provider changes.
