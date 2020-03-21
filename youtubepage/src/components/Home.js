import React, {useState} from "react";
import axios from "axios";
import API_KEY from "../secrets";
import {useInputs} from "../utility/Hook";
import {Link} from "react-router-dom";
import "../css/Home.css";

const Home = () => {
    const searchTerm = useInputs("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&maxResults=8&q=${searchTerm.value}`);
            setSearchResults(res.data.items);
        } catch (error) {
            console.log(error)
        }
    }

    const ShowResults = searchResults.map((video,index) => {
        let to = `/video/${video.id.videoId}`;
        return (
            <div key={index} className="video">
                <Link to={to} id={video.id.videoId}>
                    <img src={video.snippet.thumbnails.high.url} alt="" className="play"/>
                    <h3 className="videoTitle">{video.snippet.title}</h3>
                </Link>
            </div>
        ) 
    })

    return(
        <div>
            <form className="searchForm" onClick={handleSubmit}>
                <input type="text" placeholder="Search..." className="search" {...searchTerm}/>
                <input type="submit" value="Search" className="button"/>
            </form>
            <div className="results">
            {ShowResults}
            {searchResults.length ? ShowResults : <p className="noSearch">No Search Results Yet!, Please Submit A Search Above</p>}
            </div>
        </div>
    )
} 

export default Home;