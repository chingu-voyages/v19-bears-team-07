import React from "react"
import { NavItem, NavLink, Nav } from "reactstrap"
import classNames from "classnames"
import { Link } from "gatsby"
import SubMenu from "./SubMenu"

const SideBar = props => (
  <div className={classNames("sidebar", { "is-open": props.isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={props.toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Our app</h3>
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

const basicMenu = [
  {
    title: "Favorite Apps",
    target: "favorite-apps",
  },
  {
    title: "Settings",
    target: "settings",
  },
]

const developerMenu = [
  {
    title: "Profile page",
    target: "profile-page",
  },
  {
    title: "Manage apps",
    target: "manage-apps",
  },
  {
    title: "+ New App",
    target: "new-app",
  },
]

export default SideBar
