import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">
        YouTube
      </h1>
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
