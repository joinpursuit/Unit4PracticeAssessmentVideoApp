import React from 'react';
import "../css/NavBar.css"

import { NavLink} from 'react-router-dom';

const NavBar =()=>{
        return(
            <>
            <nav>
                <h1>YouTube</h1>
                <NavLink className="inactive" activeClassName="active" exact to={"/"}>Home</NavLink>
                <NavLink className="inactive" activeClassName="active" exact to={"/about"}>About</NavLink>
            </nav>
            </>
        )
}

export default NavBar;