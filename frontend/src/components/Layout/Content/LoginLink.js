import React from "react"

import { NavLink } from "reactstrap"
import { Link } from "gatsby"

import UserContext from "../../../shared/UserContext"
import * as Url from "../../../shared/urls"

const LoginLink = () => (
  <UserContext.Consumer>
    {({ loggedIn, logout }) => {
      if (loggedIn) {
        return (
          <NavLink style={{ cursor: "pointer" }} onClick={() => logout()}>
            logout
          </NavLink>
        )
      }
      return <NavLink href={Url.SIGN_IN}>sign up / login</NavLink>
    }}
  </UserContext.Consumer>
)

export default LoginLink
