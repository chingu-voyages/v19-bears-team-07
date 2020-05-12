import React from "react"
import { Link } from "gatsby"

import { Router } from "@reach/router"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import APortfolioPage from "../client-pages/APortfolioPage"

const PortfolioPage = () => {
  console.log(<APortfolioPage path={"/:userId"}></APortfolioPage>)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Router basepath={"/portfolio"}>
        <APortfolioPage path={"/:userId"}></APortfolioPage>
      </Router>
      <div>Hi there</div>
    </Layout>
  )
}

export default PortfolioPage
