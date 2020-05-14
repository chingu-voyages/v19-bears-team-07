import React from "react"
import { Link } from "gatsby"

import { Router } from "@reach/router"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import SingleApp from "../client-pages/apps/single-app"
import { AppGrid } from "../components/app-grid"
import { mapApp } from "../shared/mappers"
import { fetchAllApps } from "../shared/fetch"
import GamesPage from "../client-pages/apps/games"
import ShoppingPage from "../client-pages/apps/shopping"
import ProductivityPage from "../client-pages/apps/productivity"

const AppPage = () => {
  return (
    <Layout>
      <SEO title="Apps" />
      <Router basepath={"/apps"}>
        <AllApps path={"/"}></AllApps>
        <GamesPage path={"/games"}></GamesPage>
        <ShoppingPage path={"/shopping"}></ShoppingPage>
        <ProductivityPage path={"/productivity"}></ProductivityPage>
        <SingleApp path={"/:appId"}></SingleApp>
      </Router>
    </Layout>
  )
}

export default AppPage

const AllApps = () => {
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const apps = await fetchApps()
      setApps(apps)
    })()
  }, [])

  return <AppGrid apps={apps}></AppGrid>
}

const fetchApps = async () => {
  const apps = await fetchAllApps()
  return apps.map(app => mapApp(app))
}
