import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";

const NavBar = () => {
  //   let history = useHistory();
  return (
    <nav>
      <NavLink to={"/youtube"}>
        <h1>Youtube</h1>
      </NavLink>
      <NavLink exact to={"/"}>
        Home
      </NavLink>
      <NavLink to={"/about"}>About</NavLink>
    </nav>
  );
};

export default NavBar;
