// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"
import logo from "../assets/logo1.png"
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="navbarbg">
        <nav className="navbar">
      <div className="container">
        <div className="logo1">
          THE MED PORTAL
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>  
            <li>
              {/* <NavLink to="/about">About</NavLink> */}
              <AnchorLink href='#navtoaboutus'>About</AnchorLink>
            </li>
            <li>
              {/* <NavLink to="/contact">Contact</NavLink> */}
              <AnchorLink href='#navtofooter'>Contact</AnchorLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
  )
}

export default Navbar