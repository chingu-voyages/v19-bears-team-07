import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons"
import { Navbar, Button, Nav, NavItem, NavLink } from "reactstrap"
import { Link } from "gatsby"

export default ({ toggle }) => {
  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button color="info" onClick={toggle}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to={"/login"}>
            sign up / login
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
