import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
//import "../CSS/NavBar.css"


const NavBar = () => {


    return (
        <nav className="navBar">
            <img src="../Images/YouTubeLogo" alt=""/>
            <NavLink to={"/Home"}>Home</NavLink>
            <NavLink to={"/AboutUs"}>About Us</NavLink>
        </nav>
    )

}

export default NavBar