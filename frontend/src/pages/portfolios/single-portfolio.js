import React from "react"
import AppGrid from "../../components/AppGrid/AppGrid"
import getSinglePortfolio from "../../shared/fetchActions/getSinglePortfolio"
import * as forFrontend from "../../shared/convertForFrontend"

const SinglePortfolio = ({ userId }) => {
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const { apps: appsData } = await getSinglePortfolio(userId)
      const apps = appsData.map(forFrontend.convertApp)
      setApps(apps)
    })()
  }, [userId])

  const appUrls = apps.map(app => app.url)
  return (
    <div className="APortfolioPage-container">
      <h2>Apps</h2>
      <AppGrid apps={apps} appUrls={appUrls}></AppGrid>
    </div>
  )
}

export default SinglePortfolio
