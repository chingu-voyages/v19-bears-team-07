import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

import { AppGrid } from "../components/app-grid"
import { AppCarousel } from "../components/app-carousel"
import { fetchAllApps } from "../helpers/fetch"
import { mapApp } from "../helpers/mappers"

const IndexPage = () => {
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const apps = await fetchApps()
      setApps(apps)
    })()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <AppCarousel apps={apps}></AppCarousel>
      <AppGrid apps={apps}></AppGrid>
    </Layout>
  )
}

export default IndexPage

const fetchApps = async () => {
  const apps = await fetchAllApps()
  return apps.map(mapApp)
}
