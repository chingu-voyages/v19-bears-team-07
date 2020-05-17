import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import AppGrid from "../components/app-grid"
import { UserContext } from "../shared/UserContext"
import { fetchAllApps } from "../shared/fetch"
import { mapAppAuth } from "../shared/mappers"

const ManageAppsPage = () => {
  const { userId, loggedIn } = React.useContext(UserContext)
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    // Fetches all the apps that are authenticated for this user.
    ;(async () => {
      const apps = (await fetchAllApps()).map(mapAppAuth)
      setApps(apps)
    })()
  }, [userId])

  if (!userId || !loggedIn) {
    return (
      <Layout>
        <SEO title="Manage Apps" />
        <h1>You are not authorized</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="Manage Apps" />
      <h1>manage apps</h1>

      <AppGrid apps={apps}></AppGrid>
    </Layout>
  )
}

export default ManageAppsPage
