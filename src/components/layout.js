import React from "react"
import PropTypes from "prop-types"
import Topbar from "./Navbar/Topbar"
import Header from "./Navbar/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import "../assets/vendor/icofont/icofont.min.css"

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
