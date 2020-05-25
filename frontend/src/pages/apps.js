import React from "react"
import { Router } from "@reach/router"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import AppGrid from "../components/AppGrid/PublicAppGrid"
import GamesPage from "./apps/games"
import ShoppingPage from "./apps/shopping"
import ProductivityPage from "./apps/productivity"
import SingleApp from "./apps/single-app"

import getAllApps from "../shared/fetchActions/getAllApps"
import * as forFrontend from "../shared/convertForFrontend"

const AppPage = () => {
  return (
    <Layout>
      <SEO title="Apps" />
      <Router basepath={"/apps"}>
        <RenderAllApps path={"/"} />
        <GamesPage path={"/games"} />
        <ShoppingPage path={"/shopping"} />
        <ProductivityPage path={"/productivity"} />
        <SingleApp path={"/:appId"} />
      </Router>
    </Layout>
  )
}

const RenderAllApps = () => {
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const appsData = await getAllApps()
      const apps = appsData.map(forFrontend.convertApp)
      setApps(apps)
    })()
  }, [])

  const appUrls = apps.map(app => app.url)
  return <AppGrid apps={apps} appUrls={appUrls} />
}

export default AppPage
