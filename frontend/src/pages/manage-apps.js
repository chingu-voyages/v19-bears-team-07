import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import SingleAppEdit from "./apps/single-app-edit"
import { Router } from "@reach/router"
import "bootstrap/dist/css/bootstrap.min.css"

const ManageAppsPage = () => (
  <Layout>
    <SEO title="Manage Apps" />
    <h1>manage apps</h1>
    <Router basepath={"/manage-apps"}>
      <AllApps path={"/"}></AllApps>
      <SingleAppEdit path={"/:appId/edit"} />
    </Router>
  </Layout>
)

export default ManageAppsPage

const AllApps = () => {
  return <span>All Apps are here</span>
}
