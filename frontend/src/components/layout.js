import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import SideBar from "./Sidebar/SideBar"
import Content from "./Content/Content"

export default props => {
  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)

  return (
    <div className="App wrapper">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Content toggle={toggle} isOpen={isOpen} {...props} />
    </div>
  )
}
