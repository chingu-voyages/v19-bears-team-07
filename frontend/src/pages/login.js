import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

import { UserContext } from "../shared/UserContext"
import { SIGN_IN_URL } from "../shared/urls"

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <h1>Login</h1>

    <div>
      <p>Am I already logged in?</p>
      <UserContext.Consumer>
        {({ loggedIn }) => <p>{loggedIn.toString()}</p>}
      </UserContext.Consumer>
    </div>

    <a href={SIGN_IN_URL}>
      <button onClick={() => {}}>Login Page</button>
    </a>
  </Layout>
)

export default LoginPage
