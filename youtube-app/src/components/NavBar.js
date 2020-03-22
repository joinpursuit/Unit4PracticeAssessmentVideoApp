import React from "react";
import { NavLink } from "react-router-dom";
import '../css/NavBar.css'

const NavBar = () => {
  return(
    <nav className="divForm">
      <h2 className="navLogo">Youtube</h2>
      <NavLink exact to={"/"} className="navRight">Home</NavLink>
      <NavLink to={"/about"} className="navRight">About</NavLink>
    </nav>   
  )
}
export default NavBar;