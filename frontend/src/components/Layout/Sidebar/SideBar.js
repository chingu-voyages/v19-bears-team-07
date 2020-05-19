import React from "react"
import { Nav } from "reactstrap"
import { Link } from "gatsby"
import classNames from "classnames"

import { asDeveloperMenus, asLoggedOutMenus } from "./menus"
import UserContext from "../../../shared/UserContext"
import SubMenu from "./SubMenu"

const RenderSubMenus = () => (
  <UserContext.Consumer>
    {({ loggedIn }) => {
      if (loggedIn) {
        return asDeveloperMenus.map((menu, index) => (
          <SubMenu key={index} title={menu.title} items={menu.items} />
        ))
      }
      return asLoggedOutMenus.map((menu, index) => (
        <SubMenu key={index} title={menu.title} items={menu.items} />
      ))
    }}
  </UserContext.Consumer>
)

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
        <RenderSubMenus />
      </Nav>
    </div>
  </div>
)

export default SideBar
