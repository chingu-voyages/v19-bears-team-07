import React from "react"

import { Router } from "@reach/router"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo"
import SinglePortfolio from "./portfolios/single-portfolio"
import getAllUsers from "../shared/fetchActions/getAllUsers"
import UserGrid from "../components/UserGrid/UserGrid"
import { mapUser } from "../shared/mappers"

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="Portfolios" />
      <Router basepath={"/portfolios"}>
        <AllPortfolios path={"/"}></AllPortfolios>
        <SinglePortfolio path={"/:userId"}></SinglePortfolio>
      </Router>
    </Layout>
  )
}

export default PortfolioPage

const AllPortfolios = () => {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const users = await fetchUsers()
      setUsers(users)
    })()
  }, [])

  return <UserGrid users={users}></UserGrid>
}

async function fetchUsers() {
  const users = await getAllUsers()

  return users.map(mapUser)
}
