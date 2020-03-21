import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="logo">
        <h1>Youtube</h1>
      </div>
      <div className="nav">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
