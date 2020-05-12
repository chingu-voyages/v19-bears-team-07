import React from "react"
import { Nav } from "reactstrap"
import { Link } from "gatsby"
import classNames from "classnames"

import { basicMenu, developerMenu } from "./menus"
import SubMenu from "./SubMenu"

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>
        <Link to="/">Our app</Link>
      </h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Dashboard</p>
        <SubMenu title="Basic" items={basicMenu} />
        <SubMenu title="Developer" items={developerMenu} />
      </Nav>
    </div>
  </div>
)

export default SideBar
