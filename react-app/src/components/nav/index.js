import React from 'react'
import { Nav,NavLink, Bars, NavMenu } from './NavbarElements'
import LOGO from '../../assets/vincit_logo_red.jpg'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink  to="/">
              <img style={{width: '100px'}} src={LOGO} alt="web logo"/>
            </NavLink>
            <Bars />
            <NavMenu>
              <NavLink to="/home" activeStyle>
                Home
              </NavLink>
              <NavLink to="/about" activeStyle>
                About
              </NavLink>
              <NavLink to="/services" activeStyle>
                Services
              </NavLink>
              <NavLink to="/document" activeStyle>
                Document
              </NavLink>
              <NavLink to="/contact" activeStyle>
                Contact
              </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar;