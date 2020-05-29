import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const getMyFavoriteApps = async () => {
  const req = new Request(Url.MY_FAVORITE_APPS, {
    method: "GET",
    credentials: "include",
  })
  const apps = await fetchJsonAndParse(req)
  return apps.map(app => {
    app.is_favorite = true
    return app
  })
}

export default getMyFavoriteApps
