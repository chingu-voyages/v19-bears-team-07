import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const putApp = async values => {
  const request = new Request(Url.singleApp(values.id), {
    method: "PUT",
    credentials: "include",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const parsed = await fetchJsonAndParse(request)
  return parsed
}

export default putApp
