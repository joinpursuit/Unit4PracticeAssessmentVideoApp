import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../css/NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBarDiv">
      <NavLink className="logo" to="/">
        YouTube
      </NavLink>
      <NavLink className="homeLink" to="/">
        Home
      </NavLink>
      <NavLink className="searchLink" exact to="/search">
        Search
      </NavLink>
      <NavLink className="videosLink" exact to="/videos">
        Videos
      </NavLink>
    </div>
  );
};

export default NavBar;
