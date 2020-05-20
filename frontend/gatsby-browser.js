/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Wraps every Gatsby Page in the User Context
import React from "react"
import UserContextProvider from "./src/shared/UserContextProvider"
export const wrapRootElement = ({ element }) => (
  <UserContextProvider>{element}</UserContextProvider>
)
