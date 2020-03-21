import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to={"/video"} className="logo">
        YouTube
      </NavLink>
      <NavLink exact to={"/"} className="navAnchor">
        Home
      </NavLink>
      <NavLink to={"/about"} className="navAnchor">
        About
      </NavLink>
    </nav>
  );
};
export default NavBar;
