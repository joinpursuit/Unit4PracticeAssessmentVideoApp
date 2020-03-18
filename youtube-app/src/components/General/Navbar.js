import React from "react";
import { link } from "react-router-dom";

const NavBar = () => {
  return(
    <nav>
      <div className="navLogo">Movie Youtube</div>
      <div className="navRight">
        <Link exact to="/" className="navAnchor">Home</Link>
        <Link to="/about" className="navAnchor">About</Link>
      </div>
    </nav>
  )
}
export default NavBar;