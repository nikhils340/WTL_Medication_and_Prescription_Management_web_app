// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"
import logo from "../assets/logo1.png"

const NavbarDoc = () => {
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
              <NavLink to="/addprescription">Add Prescription</NavLink>
            </li>
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
  )
}

export default NavbarDoc