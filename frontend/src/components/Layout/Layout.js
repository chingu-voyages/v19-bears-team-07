import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import SideBar from "./Sidebar/SideBar"
import Content from "./Content/Content"
import "./Layout.css"

const Layout = props => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true)
  const toggleSidebar = () => setSidebarOpen(sidebarIsOpen => !sidebarIsOpen)

  return (
    <div className="App wrapper">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Content
        toggleSidebar={toggleSidebar}
        sidebarIsOpen={sidebarIsOpen}
        {...props}
      />
    </div>
  )
}

export default Layout
