import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../css/NavBar.css';
const NavBar = () => {
    return(
        <nav>
            <NavLink exact to={"/"}>HOME</NavLink>
            <NavLink to={"/About"}>About</NavLink>
            {/* <NavLink to={"/video/:id"}>Form</NavLink> */}
        </nav>
    )
}

export default NavBar; 