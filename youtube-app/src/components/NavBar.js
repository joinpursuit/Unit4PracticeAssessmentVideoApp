import React from "react";
// import { link } from "react-router-dom";
import '../css/NavBar.css'

const NavBar = () => {
  return(
    <div>
    <nav>
      <div className="navLogo">Youtube</div>
      
        <div className="navRight">
          <div className="navAnchor">Home</div>
          <div className="navAnchor">About</div>
          
          {/* <Link exact to="/" className="navAnchor">Home</Link><Link exact to="/" className="navAnchor">Home</Link> */}
          {/* <Link to="/about" className="navAnchor">About</Link> */}

      </div>

    </nav>
        <div className="divForm">
        <form
        onSubmit={e => {
          e.preventDefault();
          // onSearch(search.value);
        }}
        className="searchForm"
        >
        <input
          type="search"
          placeholder="Search..."
          className="search"
          // {...search}
        />
        <input type="submit" value="Search" className="button Search" />
        </form>
        </div>

    </div>
    
  )
}
export default NavBar;