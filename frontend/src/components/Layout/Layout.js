import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import SideBar from "./Sidebar/SideBar"
import Content from "./Content/Content"
import "./Layout.css"
import { useLocation } from "@reach/router"

const Layout = props => {
  const location = useLocation()
  const initialOpen =
    location.state && location.state.closeSidebar ? true : false
  const [sidebarIsOpen, setSidebarOpen] = useState(initialOpen)
  const toggleSidebar = () => setSidebarOpen(sidebarIsOpen => !sidebarIsOpen)

  React.useEffect(() => {
    if (initialOpen && sidebarIsOpen) {
      setSidebarOpen(false)
    }
  }, [])

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
