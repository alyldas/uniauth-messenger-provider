# UniAuth Messenger Provider

[![GitHub Packages](https://img.shields.io/static/v1?label=GitHub%20Packages&message=%40alyldas%2Funiauth-messenger-provider&color=24292f&logo=github)](https://github.com/users/alyldas/packages/npm/package/uniauth-messenger-provider)

`@alyldas/uniauth-messenger-provider` contains SDK-free UniAuth provider adapters for signed
messenger WebApp launch data:

- Telegram Mini App `initData`;
- MAX WebApp `initData` / `WebAppData`.

The package validates the signed launch payload and maps the signed user into UniAuth
`ProviderIdentityAssertion`.

## Runtime Boundary

This package does not own bot setup, frontend bridge code, HTTP routes, cookies, session transport,
storage, or UI.

## Install

Configure the GitHub Packages registry for the package scope before installing:

```ini
@alyldas:registry=https://npm.pkg.github.com
```

GitHub Packages can require authentication for package reads. Use a token with `read:packages` in local npm config or CI secrets; do not commit tokens.

```bash
npm install @alyldas/uniauth-core @alyldas/uniauth-messenger-provider
```

## Telegram

```ts
import {
  TELEGRAM_MINI_APP_PROVIDER_ID,
  createTelegramMiniAppProvider,
} from '@alyldas/uniauth-messenger-provider/telegram'

providerRegistry.register(
  createTelegramMiniAppProvider({
    botToken: process.env.TELEGRAM_BOT_TOKEN!,
    maxAgeSeconds: 60 * 5,
  }),
)

const result = await auth.public.provider.signIn({
  provider: TELEGRAM_MINI_APP_PROVIDER_ID,
  finishInput: {
    payload: {
      initData: request.body.initData,
    },
  },
})
```

## MAX

```ts
import {
  MAX_WEBAPP_PROVIDER_ID,
  createMaxWebAppProvider,
} from '@alyldas/uniauth-messenger-provider/max'

providerRegistry.register(
  createMaxWebAppProvider({
    botToken: process.env.MAX_BOT_TOKEN!,
    maxAgeSeconds: 60 * 5,
  }),
)

const result = await auth.public.provider.signIn({
  provider: MAX_WEBAPP_PROVIDER_ID,
  finishInput: {
    payload: {
      url: request.body.url,
    },
  },
})
```

`createMaxWebAppProvider` accepts direct signed `initData` and URL fragments that contain
`WebAppData`.

## Root Import

The root entry point re-exports Telegram, MAX, and the shared validator:

```ts
import {
  createMaxWebAppProvider,
  createTelegramMiniAppProvider,
  validateSignedWebAppInitData,
} from '@alyldas/uniauth-messenger-provider'
```

## Security Notes

- Keep bot tokens in server-only bootstrap code.
- Set `maxAgeSeconds` for production sign-in endpoints.
- Do not use `initDataUnsafe` for authentication.
- Do not persist raw launch payloads unless the application has a separate audit policy.
- Exact `(provider, providerUserId)` matching stays owned by UniAuth core.
- Auto-link and merge decisions remain controlled by `AuthPolicy`.

## Local Checks

```bash
npm run check
```
