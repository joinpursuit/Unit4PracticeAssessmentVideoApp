import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navigation">
            <div></div>
            <div className="navbar-logo">Youtube</div>
            <div className="spacing-between"></div>
            <div className="navigation-items">
                <ul>
                <li><NavLink to={"/"} className="home">Home</NavLink></li>
                <li><NavLink to={"/About"} className="about">About</NavLink></li>
                <li><NavLink to={"/Video"} className="video">Video</NavLink></li>
                </ul>
            </div>
            </nav> 
        </div>
    )
}

export default Navbar;