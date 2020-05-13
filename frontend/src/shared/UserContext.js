import React, { createContext, useState, useEffect } from "react"
import { CHECK_LOGGED_IN_URL } from "./urls"

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
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
    <UserContext.Provider value={{ loggedIn }}>{children}</UserContext.Provider>
  )
}

const checkLoggedIn = () => {
  const req = new Request(CHECK_LOGGED_IN_URL, {
    method: "GET",
    credentials: "include",
  })
  return fetch(req)
}

export default UserContextProvider
