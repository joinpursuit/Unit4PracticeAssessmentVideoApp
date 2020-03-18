import React from 'react';

import { NavLink} from 'react-router-dom';

const NavBar =()=>{
        return(
            <>
            <nav>
                <h1>YouTube</h1>
                <NavLink exact to={"/"}>Home</NavLink>
                <NavLink exact to={"/about"}>About</NavLink>
            </nav>
            </>
        )
}

export default NavBar;