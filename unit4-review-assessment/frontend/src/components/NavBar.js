import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export class NavBar extends Component {
    render(){
        return (
        <div className='navBar'>
            <p>NavBar is here</p>
            <NavLink exact to={'/home'}>Home</NavLink>
            <NavLink exact to={'/about'}>About</NavLink>
        </div>
        )
    }
}

export default NavBar;