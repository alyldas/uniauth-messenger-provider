import { UniAuthError, UniAuthErrorCode } from '@alyldas/uniauth-core'

const SIGNED_WEBAPP_INIT_DATA_ERROR = 'Invalid signed WebApp init data.'

export function invalidInput(message: string): UniAuthError {
  return new UniAuthError(UniAuthErrorCode.InvalidInput, message)
}

export function invalidSignedWebAppInitData(): UniAuthError {
  return invalidInput(SIGNED_WEBAPP_INIT_DATA_ERROR)
}
