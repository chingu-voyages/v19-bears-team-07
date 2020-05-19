import React from "react"

import { Router } from "@reach/router"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo"
import SinglePortfolio from "./portfolios/single-portfolio"
import getAllUsers from "../shared/fetchActions/getAllUsers"
import UserGrid from "../components/UserGrid/UserGrid"
import * as forFrontend from "../shared/convertForFrontend"

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
      const usersData = await getAllUsers()
      const users = usersData.map(forFrontend.convertUser)
      setUsers(users)
    })()
  }, [])

  return <UserGrid users={users}></UserGrid>
}
