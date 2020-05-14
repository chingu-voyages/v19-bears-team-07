import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

import { AppGrid } from "../components/app-grid"
import { AppCarousel } from "../components/app-carousel"

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
