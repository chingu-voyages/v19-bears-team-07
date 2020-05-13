import React from "react"
import { Link } from "gatsby"

import { Router } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnAppPage from "../client-pages/AnAppPage"
import { AppGrid } from "../components/app-grid"
import { mapApp } from "../helpers/mappers"

const AppPage = () => {
  return (
    <Layout>
      <SEO title="Apps" />
      <Router basepath={"/apps"}>
        <AllApps path={"/"}></AllApps>
        <AnAppPage path={"/:appId"}></AnAppPage>
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
  return apps.map(app => mapApp(app))
}

const apps = [
  {
    name: "Facebook",
    description: "The world's leading social media platform",
    image: undefined,
    github_url: "http://www.github.com",
    app_url: "http://www.app.com",
    id: 1,
  },
  {
    name: "Facebook",
    description: "The world's leading social media platform",
    image: undefined,
    github_url: "http://www.github.com",
    app_url: "http://www.app.com",
    id: 1,
  },
  {
    name: "Facebook",
    description: "The world's leading social media platform",
    image: undefined,
    github_url: "http://www.github.com",
    app_url: "http://www.app.com",
    id: 1,
  },
  {
    name: "Facebook",
    description: "The world's leading social media platform",
    image: undefined,
    github_url: "http://www.github.com",
    app_url: "http://www.app.com",
    id: 1,
  },
]
