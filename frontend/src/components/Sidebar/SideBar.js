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
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            Contact
          </NavLink>
        </NavItem>
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

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
]

export default SideBar
