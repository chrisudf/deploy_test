import React from "react"
import { Link } from "gatsby"
import { Nav, Navbar } from "react-bootstrap"
import "../style/nav.css"

const LoaderLine = () => (
  <div className="loader">
    <span className="expand" />
  </div>
)

const Navigation = () => (
  <div>
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      bg="light"
      className="font-test"
    >
      <Navbar.Brand href="/">
        <img className="logo" alt="" src="/image/CohortGo_logo.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav active" variant="font">
        <Nav>
          <Link to="/guide" className="nav-link" activeClassName="active">
            guide
          </Link>
          <Link
            to="/api-reference"
            className="nav-link"
            activeClassName="active"
          >
            api reference
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <LoaderLine />
  </div>
)

export default Navigation
