import React from "react"
import { Router } from "@reach/router"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo"
import SingleApp from "./apps/single-app"
import AppGrid from "../components/AppGrid/AppGrid"
import * as forFrontend from "../shared/convertForFrontend"
import getAllApps from "../shared/fetchActions/getAllApps"
import GamesPage from "./apps/games"
import ShoppingPage from "./apps/shopping"
import ProductivityPage from "./apps/productivity"

const AllApps = () => {
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const appsData = await getAllApps()
      const apps = appsData.map(forFrontend.convertApp)
      setApps(apps)
    })()
  }, [])

  return <AppGrid apps={apps}></AppGrid>
}

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
