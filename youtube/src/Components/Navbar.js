import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
      <nav>
          NavBar
          <NavLink exact to={"/"}>HOME</NavLink>
          <NavLink to={"/about"}>ABOUT</NavLink>
      </nav>
  )
}

export default NavBar; 