import fetchJsonAndParse from "./fetchJsonAndParse"
import testApps from "../../fixtures/testApps"
import * as Url from "../urls"

const getMyApp = async appId => {
  try {
    const request = new Request(Url.myApp(appId), {
      method: "GET",
      credentials: "include",
    })
    const myAppData = fetchJsonAndParse(request)
    return myAppData
  } catch (e) {
    return testApps[0]
  }
}

export default getMyApp
