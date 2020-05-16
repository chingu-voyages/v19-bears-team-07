import React, { createContext, useState, useEffect } from "react"
import { checkLoggedInRequest, logoutRequest } from "./fetch"

export const UserContext = createContext({
  loggedIn: false,
  logout: () => {},
  userId: null,
})

export const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    checkLoggedIn()
  }, [])

  const checkLoggedIn = async () => {
    try {
      const parsedResponse = await checkLoggedInRequest()
      if (typeof parsedResponse.is_logged_in === "boolean") {
        console.log(parsedResponse)
        console.log("setting context")
        setLoggedIn(parsedResponse.is_logged_in)
        setUserId(parsedResponse.user_id.toString())
      } else {
        setLoggedOut()
      }
    } catch (error) {
      console.log(error)
      setLoggedOut()
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

  const setLoggedOut = () => {
    setLoggedIn(false)
    setUserId(null)
  }

  return (
    <UserContext.Provider value={{ loggedIn, logout, userId }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
