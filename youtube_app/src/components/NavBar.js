import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
    return(
        <nav>
            <h1>YouTube</h1>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
        </nav>
    );
};

export default NavBar;