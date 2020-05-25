import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const postApp = async values => {
  const request = new Request(Url.APPS, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const parsed = await fetchJsonAndParse(request)
  return parsed
}

export default postApp
