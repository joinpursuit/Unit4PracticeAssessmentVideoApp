import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
      <nav>
          YouTube
          <NavLink exact to={"/"}>HOME</NavLink>
          <NavLink to={"/about"}>ABOUT</NavLink>
          <NavLink to={"/search"}>SEARCH</NavLink>
      </nav>
  )
}

export default NavBar; 