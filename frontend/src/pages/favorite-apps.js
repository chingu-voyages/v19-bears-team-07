import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import MyFavoriteAppGrid from "../components/AppGrid/FavoriteAppGrid/MyFavoriteAppsGrid"

const FavoriteAppsPage = () => (
  <Layout>
    <SEO title="Favorite Apps" />
    <h1>favorite apps</h1>
    <MyFavoriteAppGrid></MyFavoriteAppGrid>
  </Layout>
)

export default FavoriteAppsPage
