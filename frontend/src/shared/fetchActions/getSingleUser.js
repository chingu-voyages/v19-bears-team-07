import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const getSingleUser = async userId => {
  const request = new Request(Url.singleUser(userId), {
    method: "GET",
    credentials: "include",
  })
  const singleUserData = fetchJsonAndParse(request)
  return singleUserData
}

export default getSingleUser
