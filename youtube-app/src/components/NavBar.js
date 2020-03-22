import React from "react";
import { NavLink } from "react-router-dom";
import '../css/NavBar.css'

const NavBar = () => {
  return(
    <nav className="divForm">
      <NavLink to={"/video"} className="navLogo">Youtube</NavLink>
      <NavLink exact to={"/"} className="navRight">Home</NavLink>
      <NavLink to={"/about"} className="navRight">About</NavLink>
    </nav>   
  )
}
export default NavBar;