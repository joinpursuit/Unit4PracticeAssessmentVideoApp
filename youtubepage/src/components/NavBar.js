import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
    return(
        <nav>
            <h1>Youtube</h1>
            <NavLink className="links" exact to={"/"}>Home</NavLink>
            <NavLink className="links" to={"/about"}>About</NavLink>
        </nav>
    )
}

export default NavBar;