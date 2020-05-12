import React from "react"
import classNames from "classnames"
import { Container } from "reactstrap"
import NavBar from "./Navbar"

export default ({ isOpen, toggle, children }) => (
  <Container fluid className={classNames("content", { "is-open": isOpen })}>
    <NavBar toggle={toggle} />
    {children}
  </Container>
)
