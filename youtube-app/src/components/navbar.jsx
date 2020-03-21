import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/video"} className="logo">
        YouTube
      </NavLink>
      <NavLink exact to={"/"} className="navRight">
        Home
      </NavLink>
      <NavLink to={"/about"} className="navRight">
        About
      </NavLink>
    </nav>
  );
};
export default Navbar;
