import React from "react"
import { Link } from "gatsby"

import { Router } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnAppPage from "../client-pages/AnAppPage"
import { AppGrid } from "../components/app-grid"

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
  return apps
}

const apps = [
  {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  },
  {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  },
  {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  },
  {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  },
  {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  },
  {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  },
  {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  },
]
