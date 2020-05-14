import React from "react"
import { Link } from "gatsby"

import { Router } from "@reach/router"

import Layout from "../components/Layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SinglePortfolio from "../client-pages/single-portfolio"
import { fetchAllApps, fetchAllUsers } from "../shared/fetch"
import { UserGrid } from "../components/user-grid"
import { mapUser } from "../shared/mappers"

const PortfolioPage = () => {
  console.log(<SinglePortfolio path={"/:userId"}></SinglePortfolio>)

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
  const users = await fetchAllUsers()

  return users.map(mapUser)
}
