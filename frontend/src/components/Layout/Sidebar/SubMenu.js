import React, { useState } from "react"
import { Collapse, NavItem, NavLink } from "reactstrap"
import classNames from "classnames"
import { Link } from "gatsby"

const SubMenu = ({ closeSideBar, title, items }) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => setCollapsed(collapsed => !collapsed)

  return (
    <div>
      <NavItem
        onClick={toggle}
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
            <NavLink
              tag={Link}
              to={item.target}
              onClick={closeSideBar}
              state={{ closeSidebar: true }}
            >
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  )
}

export default SubMenu
