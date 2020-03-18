import React from "react";

const Navbar = () => {
  return(
    <nav>
      <div className="navLogo">Youtube</div>
      <div className="navRight">
        <NavLink exact to="/" className="navAnchor">Home</NavLink>
        <NavLink to="/about" className="navAnchor">About</NavLink>
      </div>
    </nav>
  )
}
export default Navbar