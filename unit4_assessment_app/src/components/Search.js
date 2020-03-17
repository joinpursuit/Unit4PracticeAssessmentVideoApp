import React from "react";

const Search = ({ handleSubmit, searchInputObj }) => {
  return (
    <form
      className="searchForm"
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <input
        id="searchInput"
        type="text"
        {...searchInputObj}
        placeholder="Search for video..."
      />
      <button id="searchBtn" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
