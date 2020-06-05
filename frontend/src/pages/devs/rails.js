import React from "react"

import Layout from "../../components/Layout/Layout"
import SEO from "../../components/Seo/Seo"

import UserGrid from "../../components/UserGrid/UserGrid"
import getAllUsers from "../../shared/fetchActions/getAllUsers"
import * as forFrontend from "../../shared/convertForFrontend"

const RailsPage = () => {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const usersData = await getAllUsers({
        skill: 1,
      })
      const users = usersData.map(forFrontend.convertUser)
      setUsers(users)
    })()
  }, [])

  return (
    <Layout>
      <SEO title="rails" />
      <h1>rails</h1>
      <UserGrid users={users} />
    </Layout>
  )
}

export default RailsPage
