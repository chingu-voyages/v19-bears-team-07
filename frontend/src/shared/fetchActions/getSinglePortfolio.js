import fetchJsonAndParse from "./fetchJsonAndParse"
import testApps from "../../fixtures/testApps"
import * as Url from "../urls"

const getSinglePortfolio = async userId => {
  try {
    const request = new Request(Url.singlePortfolio(userId), {
      method: "GET",
      credentials: "include",
    })

    const portfolioData = await fetchJsonAndParse(request)
    return portfolioData
  } catch (e) {
    return { apps: testApps }
  }
}

export default getSinglePortfolio
