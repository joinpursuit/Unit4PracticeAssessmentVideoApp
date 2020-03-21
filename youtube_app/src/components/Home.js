import React, { useState, useEffect } from 'react';
import Return from './Return';
import axios from 'axios';


const Home = () => {
    const [search, setSearch] = useState("");
    const [thumbnails, setThumbnails] = useState();

    const handleSearch = async (e) => {
        e.preventDefault() 
        // sessionStorage.searchTerm = e.target.elements[0].value
        // setSearch(sessionStorage.searchTerm);
        setSearch(e.target[0].value);
        try {
        let res = await axios.get(`https://www.googleapis.com/youtube/v3/search/`, 
            {
                params: {
                    part: 'snippet',
                    maxResults: 8,
                    key: 'AIzaSyD7UxKzpzlDzL6mhSZCPaepBzhXG1hQWnk',
                    type: 'video',
                    q: e.target[0].value
                    // q: search
                }
            });

        console.log(res);
        debugger;

        res.data.items.map((el) => {
            setThumbnails(el.snippet.thumbnails.default.url);
            console.log(thumbnails);
            debugger;
        });

        
            // res.data.payload.map((el) => {
            //     return setSearch(prevState => [...prevState, el.tag_name])
            // });
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <div className="homeDiv">
            <form className="searchForm" onSubmit={handleSearch}>
                <input type="search" placeholder="Search..."></input>
                <button type="button">Search</button>
            </form>
            <div className="resultsDiv">
                <p>No Search Results. Search for videos above!</p>
                <Return videos={thumbnails}/>
            </div>
        </div>
    );
};

export default Home;