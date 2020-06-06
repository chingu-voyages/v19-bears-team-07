import React from "react"
import SEO from "../../components/Seo/Seo"
import AppGrid from "../../components/AppGrid/PublicAppGrid"
import getAllApps from "../../shared/fetchActions/getAllApps"
import * as forFrontend from "../../shared/convertForFrontend"

const ShoppingPage = () => {
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const appsData = await getAllApps({
        category: 4,
      })
      const apps = appsData.map(forFrontend.convertApp)
      setApps(apps)
    })()
  }, [])

  const appUrls = apps.map(app => app.url)

  return (
    <React.Fragment>
      <SEO title="shopping" />
      <h1>shopping</h1>
      <AppGrid apps={apps} appUrls={appUrls} />
    </React.Fragment>
  )
}

export default ShoppingPage
