export const BACKEND_HOST = process.env.GATSBY_BACKEND_URL // this is defined in the .env.* files in the root folder.
export const SIGN_IN = `${BACKEND_HOST}/auth/sign_in`
export const CHECK_LOGGED_IN = `${BACKEND_HOST}/test_login/is_logged_in`
export const LOG_OUT = `${BACKEND_HOST}/auth/sign_out`
export const APPS = `${BACKEND_HOST}/apps`
export const USERS = `${BACKEND_HOST}/users`
export const MY_APPS = `${BACKEND_HOST}/me/apps`
export const MY_FAVORITE_APPS = `${BACKEND_HOST}/me/favorite_apps`

export const myApp = appId => `${BACKEND_HOST}/me/apps/${appId}`
export const myAppRatings = appId => `${BACKEND_HOST}/me/rated_apps/${appId}`
export const myFavoriteApp = appId =>
  `${BACKEND_HOST}/me/favorite_apps/${appId}`
export const singleApp = appId => `${BACKEND_HOST}/apps/${appId}`
export const singlePortfolio = userId =>
  `${BACKEND_HOST}/users/${userId}/portfolio`
export const singleUser = userId => `${BACKEND_HOST}/users/${userId}`
export const userSkillsList = userId => `${BACKEND_HOST}/users/${userId}/skills`
