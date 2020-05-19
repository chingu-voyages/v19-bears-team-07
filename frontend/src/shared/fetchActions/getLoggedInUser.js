import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const getLoggedInUser = async () => {
  const request = new Request(Url.CHECK_LOGGED_IN, {
    method: "GET",
    credentials: "include",
  })
  const loggedInUserData = await fetchJsonAndParse(request)
  return loggedInUserData
}

export default getLoggedInUser
