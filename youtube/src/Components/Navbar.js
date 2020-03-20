import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
      <>
      <nav>
          YouTube
          <NavLink exact to={"/"}>HOMEPAGE</NavLink>
          <NavLink to={"/about"}>ABOUT</NavLink>
          <NavLink to={"/home"}>HOME</NavLink>
      </nav>
      </>
  )
}

export default NavBar; 