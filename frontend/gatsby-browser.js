/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Wrap each page in the context.
import React from "react"
import { UserContextProvider } from "./src/shared/UserContext"
export const wrapRootElement = ({ element }) => (
  <UserContextProvider>{element}</UserContextProvider>
)
