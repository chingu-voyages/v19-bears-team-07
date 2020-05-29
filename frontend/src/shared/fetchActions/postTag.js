import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const postTag = async values => {
  const request = new Request(Url.TAGS, {
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

export default postTag
