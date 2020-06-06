import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const getAllUsers = async queryParams => {
  let queryString = queryParams
    ? Object.entries(queryParams).reduce((acc, [key, value]) => {
        return acc + `${key}=${value}&`
      }, "")
    : ""

  const url = `${Url.USERS}?${queryString}`
  const request = new Request(url, {
    method: "GET",
    credentials: "include",
  })
  const allUsersData = await fetchJsonAndParse(request)
  return allUsersData
}

export default getAllUsers
