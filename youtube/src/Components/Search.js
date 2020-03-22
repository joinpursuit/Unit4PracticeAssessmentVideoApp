import React, { useState } from "react";
import { useInput } from '../Utilities/Input';
import axios from 'axios'
import API from '../secret'


const Search = () => {
    const searchVideos = useInput("")
    const [videos, setVideos] = useState([]);

    const displayVideos = () => {
      return  videos.map(vid => {
            return (
                <div

                    className="videosContainer" key={vid.etag}>
                
                        {vid.snippet.title}
                      <img src={vid.snippet.thumbnails.high.url}id={vid.id.videoId}></img>

                </div>
            );
        })

    }

    const getVideos = async (event) => {
        event.preventDefault()
        const userVideos = (`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${searchVideos.value}&key=${API}&order=relevance&type=video`)

        try {
            let res = await axios.get(userVideos)
            // debugger
            setVideos(res.data.items)
        } catch (error) {
            setVideos([])
            console.log(error)
        }
    }



    return (
        <>
            <div className="Search">
                <form className="searchBar" onSubmit={getVideos}>

                    <label>

                        <input
                            type="text"
                            placeholder="Search Videos"
                            {...searchVideos}

                        />
                        <button type="submit" className="searchButton" placeholder="SEARCH">SEARCH</button>
                    </label>
                </form>
                <div className="videoContainer">{displayVideos()}</div>
            </div>
        </>
    )
}

export default Search