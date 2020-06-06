import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const getCommentsForApp = async appId => {
  const req = new Request(Url.commentsForApp(appId), {
    method: "GET",
    credentials: "include",
  })
  return await fetchJsonAndParse(req)
}

export default getCommentsForApp
