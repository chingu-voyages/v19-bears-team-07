import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)

  React.useEffect(() => {
    checkLoggedIn()
      .then(response => {
        console.log("received response")
        console.log(response)
        return response.json()
      })
      .then(obj => {
        console.log("RESPONSE: " + JSON.stringify(obj))
        if (obj.is_logged_in !== undefined) {
          setLoggedIn(obj.is_logged_in)
        } else {
          setLoggedIn(false)
        }
      })
      .catch(reason => {
        console.log(reason)
        setLoggedIn(false)
      })
  }, [])

  return (
    <Layout>
      <SEO title="Login" />
      <h1>Login</h1>

      <div>
        <p>Am I already logged in?</p>
        <p>{loggedIn.toString()}</p>
      </div>

      <a href={signup}>
        <button onClick={() => {}}>Login Page</button>
      </a>
    </Layout>
  )
}

export default IndexPage

const backend_host = "http://localhost:3000"
const signup = `${backend_host}/users/sign_in`
const check = `${backend_host}/test_login/is_logged_in`

const checkLoggedIn = () => {
  const req = new Request(check, {
    method: "GET",
    credentials: "include",
  })
  return fetch(req)
}
