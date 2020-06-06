import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import UserGrid from "../components/UserGrid/UserGrid"
import SinglePortfolio from "./portfolios/single-portfolio"

import getAllUsers from "../shared/fetchActions/getAllUsers"
import * as forFrontend from "../shared/convertForFrontend"
import RailsPage from "./portfolios/rails"
import VuePage from "./portfolios/vue"
import ReactPage from "./portfolios/react"

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="Portfolios" />
      <Router basepath={"/portfolios"}>
        <RenderAllPortfolios path={"/"} />
        <RailsPage path={"/rails"}></RailsPage>
        <VuePage path={"/vue"}></VuePage>
        <ReactPage path={"/react"}></ReactPage>
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
