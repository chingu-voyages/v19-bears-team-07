import fetchJsonAndParse from "./fetchJsonAndParse"
import testApps from "../../fixtures/testApps"
import * as Url from "../urls"

const getSingleApp = async appId => {
  try {
    const request = new Request(Url.singleApp(appId), {
      method: "GET",
      credentials: "include",
    })
    const singleAppData = fetchJsonAndParse(request)
    return singleAppData
  } catch (e) {
    return testApps[0]
  }
}

export default getSingleApp
