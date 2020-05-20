import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const getMyApps = async () => {
  const req = new Request(Url.MY_APPS, {
    method: "GET",
    credentials: "include",
  })
  return await fetchJsonAndParse(req)
}

export default getMyApps
