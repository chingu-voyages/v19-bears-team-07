import fetchJsonAndParse from "./fetchJsonAndParse"
import testApps from "../../fixtures/testApps"
import * as Url from "../urls"

const getAllApps = async queryParams => {
  let queryString = queryParams
    ? Object.entries(queryParams).reduce((acc, [key, value]) => {
        return acc + `${key.toString()}=${value}&`
      }, "")
    : ""

  const url = `${Url.APPS}?${queryString}`

  try {
    const request = new Request(url, {
      method: "GET",
      credentials: "include",
    })
    const allAppsData = await fetchJsonAndParse(request)
    return allAppsData
  } catch (e) {
    return testApps
  }
}

export default getAllApps
