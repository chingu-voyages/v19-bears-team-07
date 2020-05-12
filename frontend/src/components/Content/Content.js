import React from "react"
import classNames from "classnames"
import { Container } from "reactstrap"
import Topbar from "./Topbar"

const Content = ({ isOpen, toggle, children }) => (
  <Container fluid className={classNames("content", { "is-open": isOpen })}>
    <Topbar toggle={toggle} />
    {children}
  </Container>
)

export default Content
