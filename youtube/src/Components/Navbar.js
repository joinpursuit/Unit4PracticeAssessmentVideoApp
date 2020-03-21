import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(

      <>
            <nav>
                YouTube
                <NavLink exact to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </nav>
            </>
    
  )
}

export default NavBar; 