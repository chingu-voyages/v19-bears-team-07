import fetchJsonAndParse from "./fetchJsonAndParse"
import testApps from "../../fixtures/testApps"
import * as Url from "../urls"

const getAllApps = async () => {
  try {
    const request = new Request(Url.APPS, {
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
