import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink to={"/"}>
            Home
            </NavLink>
            <NavLink to={"/video"}>
            Video
            </NavLink>
            <NavLink to={"/about"}>
            About
            </NavLink>
        </nav>

    )
}

export default NavBar