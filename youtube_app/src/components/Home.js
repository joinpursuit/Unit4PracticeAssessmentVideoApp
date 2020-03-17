import React from 'react';

const Home = () => {

    return(
        <div className="homeDiv">
            <form className="searchForm">
                <input type="search" placeholder="Search..."></input>
                <button type="button">Search</button>
            </form>
            <div className="resultsDiv">
                <p>No Search Results. Search for videos above!</p>
            </div>
        </div>
    );
};

export default Home;