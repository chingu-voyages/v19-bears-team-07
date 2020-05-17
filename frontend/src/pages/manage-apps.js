import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import AppGrid from "../components/app-grid"
import { UserContext } from "../shared/UserContext"
import { fetchMyApps } from "../shared/fetch"
import { mapApp_authenticated } from "../shared/mappers"

const ManageAppsPage = () => {
  const { userId, loggedIn } = React.useContext(UserContext)
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    // Fetches all the apps that are authenticated for this user.
    ;(async () => {
      const appData = await fetchMyApps()
      console.log(appData)
      const apps = appData.map(mapApp_authenticated)
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
      {renderApps()}
    </Layout>
  )

  function renderApps() {
    if (apps && apps.length > 0) {
      return <AppGrid apps={apps} urlSelector={app => app.manageUrl}></AppGrid>
    } else {
      return <h2>You do not have any apps</h2>
    }
  }
}

export default ManageAppsPage
