import type { AuthProvider } from '@alyldas/uniauth-core'
import { TELEGRAM_MINI_APP_PROVIDER_ID } from './constants.js'
import {
  createMessengerWebAppProvider,
  normalizeMessengerWebAppProviderOptions,
  type MessengerWebAppProviderOptions,
} from '../shared/provider.js'
import { validateSignedWebAppInitData } from '../shared/signed-webapp.js'

export { TELEGRAM_MINI_APP_PROVIDER_ID }
export { validateSignedWebAppInitData }
export type { MessengerWebAppProviderOptions }

export function createTelegramMiniAppProvider(
  options: MessengerWebAppProviderOptions,
): AuthProvider {
  const providerOptions = normalizeMessengerWebAppProviderOptions(options)

  return createMessengerWebAppProvider({
    ...providerOptions,
    defaultProviderId: TELEGRAM_MINI_APP_PROVIDER_ID,
    resolveInitData: (value) => value,
  })
}
