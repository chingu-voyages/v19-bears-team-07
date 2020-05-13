import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import UserContextProvider from "../../shared/UserContext"
import SideBar from "./Sidebar/SideBar"
import Content from "./Content/Content"
import "./Layout.css"

const Layout = props => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true)
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen)

  return (
    <div className="App wrapper">
      <UserContextProvider>
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content
          toggleSidebar={toggleSidebar}
          sidebarIsOpen={sidebarIsOpen}
          {...props}
        />
      </UserContextProvider>
    </div>
  )
}

export default Layout
