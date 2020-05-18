import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

import { AppGrid } from "../components/AppGrid/AppGrid"
import { AppCarousel } from "../components/AppCarousel/AppCarousel"
import { fetchAllApps } from "../shared/fetch"
import { mapApp } from "../shared/mappers"

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
