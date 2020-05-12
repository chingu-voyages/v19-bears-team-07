import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import SideBar from "./Sidebar/SideBar"
import Content from "./Content/Content"

const Layout = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true)
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen)

  return (
    <div className="App wrapper">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
    </div>
  )
}

export default Layout
