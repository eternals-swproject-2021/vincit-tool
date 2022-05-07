import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements'
import LOGO from '../../assets/acheck_logo.png'
import './index.css'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img style={{ width: "120px", padding: "0px" }} src={LOGO} alt="web logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/document" activeStyle>
            Document
          </NavLink>
          <NavLink to="/about-us" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
            <a href="https://github.com/eternals-swproject-2021/vincit-tool" target="_blank">
            <button class="btn" className="github-btn">
              GitHub
              </button>
            </a>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar;