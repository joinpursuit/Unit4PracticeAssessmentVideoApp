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

    const SingleVideo = async (video) =>{
            try {
                let res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${video.id.videoId}&maxResults=8&key=${API_KEY}`);
                console.log(res)
            } catch (error) {
                console.log(error)
            }
    }

    const ShowResults = searchResults.map((video,index) => {
        debugger
        return (
            <div key={index} className="video">
                <Link to="/video" SingleVideo={SingleVideo(video)}>
                    <img src={video.snippet.thumbnails.high.url}alt=""/>
                    <h3>{video.snippet.title}</h3>
                </Link>
            </div>
        ) 
    })

    return(
        <div>
            <form onClick={handleSubmit}>
                <input type="text" placeholder="Search..." className="search" {...searchTerm}/>
                <input type="submit" value="Search" className="button"/>
            </form>
            <div className="results">
                {ShowResults}
            </div>
        </div>
    )
} 

export default Home;