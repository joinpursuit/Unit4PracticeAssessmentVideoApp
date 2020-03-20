import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  //   let history = useHistory();
  return (
    <header>
      <nav>
        <NavLink to={"/youtube"}>
          <img
            id="youtubeIcon"
            src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/youtube_square_color-512.png"
            alt="Youtube"
          />
        </NavLink>
        <NavLink exact to={"/"}>
          Home
        </NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
