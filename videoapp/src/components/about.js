import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from './home';


const Mainpage = () => {
    return (
      <div className="aboutus">
       <NavBar/>
    <p>You the the about page</p>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
  
  export default Mainpage;