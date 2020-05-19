import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

export async function fetchMyApps() {
  const req = new Request(Url.MY_APPS, {
    method: "GET",
    credentials: "include",
  })
  return await fetchJsonAndParse(req)
}
