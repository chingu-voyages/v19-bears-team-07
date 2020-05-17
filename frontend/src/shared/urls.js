export const BACKEND_HOST = "http://localhost:3000"
export const SIGN_IN_URL = `${BACKEND_HOST}/auth/sign_in`
export const CHECK_LOGGED_IN_URL = `${BACKEND_HOST}/test_login/is_logged_in`
export const LOG_OUT_URL = `${BACKEND_HOST}/auth/sign_out`
export const ALL_APPS = `${BACKEND_HOST}/apps`
export const MY_APPS = `${BACKEND_HOST}/me/apps`
export const singleApp = appId => `${BACKEND_HOST}/apps/${appId}`
export const singlePortfolio = userId =>
  `${BACKEND_HOST}/users/${userId}/portfolio`
export const singleUser = userId => `${BACKEND_HOST}/users/${userId}`
export const ALL_USERS = `${BACKEND_HOST}/users`
