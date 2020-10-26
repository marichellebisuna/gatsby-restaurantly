import React from "react"
import PropTypes from "prop-types"
import Topbar from "./Navbar/Topbar"
import Header from "./Navbar/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
