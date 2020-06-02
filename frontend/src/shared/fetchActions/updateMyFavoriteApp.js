import * as Url from "../urls"

/**
 * Updates an app to be a favorite, or not a favorite
 *
 * @appId the app's id
 * @isFavorite boolean. Whether to favorite or unfavorite the app
 */
const updateMyFavoriteApp = async (appId, isFavorite) => {
  const req = new Request(Url.myFavoriteApp(appId), {
    method: isFavorite ? "PUT" : "DELETE",
    credentials: "include",
  })

  const response = await fetch(req)
  return response
}

export default updateMyFavoriteApp
