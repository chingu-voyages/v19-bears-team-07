import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import Profile from "../components/Profile/Profile"

const ProfilePage = () => (
  <Layout>
    <SEO title="Profile Page" />
    <h1>profile page</h1>
    <Profile />
  </Layout>
)

export default ProfilePage
