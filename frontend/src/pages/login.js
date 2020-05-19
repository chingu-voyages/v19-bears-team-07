import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo"

import UserContext from "../shared/UserContext"
import * as Url from "../shared/urls"

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

    <UserContext.Consumer>
      {({ logout }) => (
        <React.Fragment>
          <a href={Url.SIGN_IN}>
            <button onClick={() => {}}>Login Page</button>
          </a>
          <button
            onClick={() => {
              logout()
            }}
          >
            Log out
          </button>
        </React.Fragment>
      )}
    </UserContext.Consumer>
  </Layout>
)

export default LoginPage
