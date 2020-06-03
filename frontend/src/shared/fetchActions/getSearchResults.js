import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const getSearchResults = async ({ q }) => {
  let queryString = "?q="
  if (q) {
    const params = q.split(" ").join("+")
    queryString = queryString + params
  }

  const url = Url.SEARCH + queryString

  const request = new Request(url, {
    method: "GET",
    credentials: "include",
  })
  const searchResults = await fetchJsonAndParse(request)
  return searchResults
}

export default getSearchResults
