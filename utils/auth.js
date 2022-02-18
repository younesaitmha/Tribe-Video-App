const AUTH_TOKEN_KEY = 'AUTH_TOKEN'

export function getLocalStorage() {
  if (
    typeof window !== 'undefined' &&
    'localStorage' in window &&
    window.localStorage !== null
  ) {
    return window.localStorage
  }

  throw Error(
    'Window is not defined, make sure to call getLocalStorage on the client.'
  )
}

export const getAuthToken = () => getLocalStorage().getItem(AUTH_TOKEN_KEY)

export function setAuthToken(token) {
  return getLocalStorage().setItem(AUTH_TOKEN_KEY, token)
}

export function removeAuthToken() {
  getLocalStorage().removeItem(AUTH_TOKEN_KEY)
}
