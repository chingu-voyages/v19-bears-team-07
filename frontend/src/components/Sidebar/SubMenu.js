import React, { useState } from "react"
import { Collapse, NavItem, NavLink } from "reactstrap"
import classNames from "classnames"
import { Link } from "gatsby"

const SubMenu = props => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleNavbar = () => setCollapsed(!collapsed)
  const { title, items } = props

  return (
    <div>
      <NavItem
        onClick={toggleNavbar}
        className={classNames({ "menu-open": !collapsed })}
      >
        <NavLink className="dropdown-toggle">{title}</NavLink>
      </NavItem>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames("items-menu", { "mb-1": !collapsed })}
      >
        {items.map((item, index) => (
          <NavItem key={index} className="pl-4">
            <NavLink tag={Link} to={item.target}>
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  )
}

export default SubMenu
