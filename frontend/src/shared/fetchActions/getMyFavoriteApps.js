import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const getMyFavoriteApps = async () => {
  const req = new Request(Url.MY_FAVORITE_APPS, {
    method: "GET",
    credentials: "include",
  })
  return await fetchJsonAndParse(req)
}

export default getMyFavoriteApps
