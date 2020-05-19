import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const getAllUsers = async () => {
  const request = new Request(Url.ALL_USERS, {
    method: "GET",
    credentials: "include",
  })
  const allUsersData = await fetchJsonAndParse(request)
  return allUsersData
}

export default getAllUsers
