import React from "react"
import Navigation from "./nav"

const Layout = ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
)

export default Layout
