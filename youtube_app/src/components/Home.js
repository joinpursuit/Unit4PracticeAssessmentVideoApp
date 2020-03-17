import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [search, setSearch] = useState("");

    const fetchData= async(url, setData)=>{
        let res = await axios.get(url)
        try {
            res.data.payload.map((el) => {
                return setData(prevState => [...prevState, el.tag_name])
            });
        } catch (error) {
            console.log(error)
        }
    };

    const handleSearch = (e) => {
        e.preventDefault() 
        window.location="../home"
        sessionStorage.searchTerm=e.target.elements[0].value
    };

    useEffect(()=>{
        fetchData("https://www.googleapis.com/youtube/v3/search", setSearch)
    }, [])

    return(
        <div className="homeDiv">
            <form className="searchForm" onSubmit={handleSearch}>
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