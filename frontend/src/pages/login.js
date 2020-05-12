import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      try {
        const response = await checkLoggedIn()
        const parsedResponse = await response.json()
        if (typeof parsedResponse.is_logged_in === "boolean") {
          setLoggedIn(parsedResponse.is_logged_in)
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

      <a href={SIGNUP}>
        <button onClick={() => {}}>Login Page</button>
      </a>
    </Layout>
  )
}

export default IndexPage

export const BACKEND_HOST = "http://localhost:3000"
export const SIGNUP = `${BACKEND_HOST}/users/sign_in`
export const CHECK = `${BACKEND_HOST}/test_login/is_logged_in`

const checkLoggedIn = () => {
  const req = new Request(CHECK, {
    method: "GET",
    credentials: "include",
  })
  return fetch(req)
}
