import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import UserGrid from "../components/UserGrid/UserGrid"
import SinglePortfolio from "./portfolios/single-portfolio"

import getAllUsers from "../shared/fetchActions/getAllUsers"
import * as forFrontend from "../shared/convertForFrontend"

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="Portfolios" />
      <Router basepath={"/portfolios"}>
        <RenderAllPortfolios path={"/"} />
        <SinglePortfolio path={"/:userId"} />
      </Router>
    </Layout>
  )
}

const RenderAllPortfolios = () => {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const usersData = await getAllUsers()
      const users = usersData.map(forFrontend.convertUser)
      setUsers(users)
    })()
  }, [])

  return <UserGrid users={users} />
}

export default PortfolioPage
