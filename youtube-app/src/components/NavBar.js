import React from "react";
import { NavLink } from "react-router-dom";
import '../css/NavBar.css'

const NavBar = () => {
  return(
    
    <nav>
      <NavLink to={"/video"} className="navLogo">Youtube</NavLink>
      <NavLink exact to={"/"} className="navAnchor">Home</NavLink>
      <NavLink to={"/about"} className="navAnchor">About</NavLink>
    </nav>
       
  )
}
export default NavBar;