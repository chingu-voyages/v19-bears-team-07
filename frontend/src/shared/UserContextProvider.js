import React, { useEffect, useState } from "react"

import UserContext from "./UserContext"
import getLoggedInUser from "./fetchActions/getLoggedInUser"
import deleteLogout from "./fetchActions/deleteLogout"

const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    checkLoggedIn()
  }, [])

  const checkLoggedIn = async () => {
    try {
      const parsedResponse = await getLoggedInUser()
      if (typeof parsedResponse.is_logged_in === "boolean") {
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
      await deleteLogout()
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
