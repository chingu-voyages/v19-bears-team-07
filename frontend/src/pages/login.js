import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { fetchLoggedInUser, BACKEND_HOST } from "../helpers/fetch"

const IndexPage = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      try {
        const userInfo = await fetchLoggedInUser()
        if (typeof userInfo.is_logged_in === "boolean") {
          setLoggedIn(userInfo.is_logged_in)
        } else {
          setLoggedIn(false)
        }
      } catch (error) {
        console.log(error)
        setLoggedIn(false)
      }
    })()
  }, [])

  return (
    <Layout>
      <SEO title="Login" />
      <h1>Login</h1>

      <div>
        <p>Am I already logged in?</p>
        <p>{loggedIn.toString()}</p>
      </div>

      <a href={SIGN_IN_URL}>
        <button onClick={() => {}}>Login Page</button>
      </a>

      <br></br>

      <button
        onClick={() => {
          logout()
        }}
      >
        Log out
      </button>
    </Layout>
  )
}

export default IndexPage

export const SIGN_IN_URL = `${BACKEND_HOST}/users/sign_in`

export const LOG_OUT_URL = `${BACKEND_HOST}/users/sign_out`

const logout = async () => {
  const req = new Request(LOG_OUT_URL, {
    method: "DELETE",
    credentials: "include",
  })

  return fetch(req)
}
