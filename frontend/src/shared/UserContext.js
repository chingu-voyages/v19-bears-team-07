import React, { createContext, useState, useEffect } from "react"
import { checkLoggedInRequest, logoutRequest } from "./fetch"

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    checkLoggedIn()
  }, [])

  const checkLoggedIn = async () => {
    try {
      const parsedResponse = await checkLoggedInRequest()
      if (typeof parsedResponse.is_logged_in === "boolean") {
        setLoggedIn(parsedResponse.is_logged_in)
      } else {
        setLoggedIn(false)
      }
    } catch (error) {
      console.log(error)
      setLoggedIn(false)
    }
  }

  const logout = async () => {
    try {
      await logoutRequest()
      checkLoggedIn()
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

export default UserContextProvider
