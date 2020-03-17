import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav>
            <NavLink to={"/home"} > <h1>HOME</h1> </NavLink>
            <NavLink to={"/video"} >  <h1>VIDEO</h1> </NavLink>
            <NavLink to={"/about"} >  <h1>ABOUT</h1> </NavLink>
        </nav>
    )
}

export default NavBar;