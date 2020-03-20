import React from "react";
import "./../../css/Search.css";

const Search = () => {
  return (
    <div className="search">
      <form className="searchForm">
        <input className="searchInput" placeholder="Search..." type="text" />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>

      <div className="searchResults">
        <p className="searchP">No Search Results. Search for videos above!</p>
      </div>
    </div>
  );
};

export default Search;
