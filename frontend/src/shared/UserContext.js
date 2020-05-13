import React, { createContext, useState, useEffect } from "react"
import { CHECK_LOGGED_IN_URL, LOG_OUT_URL } from "./urls"

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

  const logout = async () => {
    try {
      await logout()
      const response = await checkLoggedIn()
      const parsedResponse = await response.json()
      if (typeof parsedResponse.is_logged_in === "boolean") {
        setLoggedIn(parsedResponse.is_logged_in)
      } else {
        setLoggedIn(false)
      }
      setLoggedIn(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ loggedIn, logout }}>
      {children}
    </UserContext.Provider>
  )
}

const checkLoggedIn = () => {
  const request = new Request(CHECK_LOGGED_IN_URL, {
    method: "GET",
    credentials: "include",
  })
  return fetch(request)
}

const logout = () => {
  const request = new Request(LOG_OUT_URL, {
    method: "DELETE",
    credentials: "include",
  })
  return fetch(request)
}

export default UserContextProvider
