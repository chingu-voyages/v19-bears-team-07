import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo"
import "bootstrap/dist/css/bootstrap.min.css"

import AppGrid from "../components/AppGrid/AppGrid"
import AppCarousel from "../components/AppCarousel/AppCarousel"
import getAllApps from "../shared/fetchActions/getAllApps"
import * as forFrontend from "../shared/convertForFrontend"

const IndexPage = () => {
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const appsData = await getAllApps()
      const apps = appsData.map(forFrontend.convertApp)
      setApps(apps)
    })()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <AppCarousel apps={apps} />
      <AppGrid apps={apps} />
    </Layout>
  )
}

export default IndexPage
