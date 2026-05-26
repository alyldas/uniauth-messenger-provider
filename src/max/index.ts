import type { AuthProvider } from '@alyldas/uniauth-core'
import { MAX_WEBAPP_PROVIDER_ID } from './constants.js'
import { normalizeMaxWebAppInitData } from '../shared/payload.js'
import {
  createMessengerWebAppProvider,
  normalizeMessengerWebAppProviderOptions,
  type MessengerWebAppProviderOptions,
} from '../shared/provider.js'
import { validateSignedWebAppInitData } from '../shared/signed-webapp.js'

export { MAX_WEBAPP_PROVIDER_ID, normalizeMaxWebAppInitData }
export { validateSignedWebAppInitData }
export type { MessengerWebAppProviderOptions }

export function createMaxWebAppProvider(options: MessengerWebAppProviderOptions): AuthProvider {
  const providerOptions = normalizeMessengerWebAppProviderOptions(options)

  return createMessengerWebAppProvider({
    ...providerOptions,
    defaultProviderId: MAX_WEBAPP_PROVIDER_ID,
    resolveInitData: normalizeMaxWebAppInitData,
  })
}
