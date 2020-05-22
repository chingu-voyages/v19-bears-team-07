export const BACKEND_HOST = process.env.GATSBY_BACKEND_URL // this is defined in the .env.* files in the root folder.
//export const BACKEND_HOST = "http://localhost:3000"
export const SIGN_IN = `${BACKEND_HOST}/auth/sign_in`
export const CHECK_LOGGED_IN = `${BACKEND_HOST}/test_login/is_logged_in`
export const LOG_OUT = `${BACKEND_HOST}/auth/sign_out`
export const ALL_APPS = `${BACKEND_HOST}/apps`
export const MY_APPS = `${BACKEND_HOST}/me/apps`
export const ALL_USERS = `${BACKEND_HOST}/users`

export const singleApp = appId => `${BACKEND_HOST}/apps/${appId}`
export const singlePortfolio = userId =>
  `${BACKEND_HOST}/users/${userId}/portfolio`
export const singleUser = userId => `${BACKEND_HOST}/users/${userId}`
