import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import FavoriteAppGrid from "../components/FavoriteAppGrid/FavoriteAppGrid"

const FavoriteAppsPage = () => (
  <Layout>
    <SEO title="Favorite Apps" />
    <h1>favorite apps</h1>
    <FavoriteAppGrid></FavoriteAppGrid>
  </Layout>
)

export default FavoriteAppsPage
