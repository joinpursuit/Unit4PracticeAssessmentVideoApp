import React from 'react';
import API_KEY from './secrets';
import Search from './Search';
import Results from './Results'
import { useState } from 'react';
import { useInput } from '../components/Util/UserInput';
import axios from 'axios';
import { useHistory } from 'react-router-dom';




const Home = () =>{
    let searchHistory = useHistory();
    const [videos, setVideos] = useState(null)
    const searchObjInput = useInput('')

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/search`,{
                params: {
                    part: 'snippet',
                    maxResults: 8,
                    key: API_KEY,
                    type: "video",
                    q: searchObjInput.value
                }
            });
                setVideos(res.data.items)
        }catch(err){
            console.log(error)
        }
    }

    const handleClick = (e) =>{
        e.preventDefault();
        searchHistoty.push(`video/${e.target.id}`)
    }

    return(
        <div className="home">
        <Search handleSubmit={handleSubmit} searchObjInput={searchObjInput}/>
        {!videos ? (
            <p>No Search Results Yet! Please submit search above</p>
        ) : (
            <Results videos={videos} handleClick={handleClick} />
        )}
        </div>
    )
}

export default Home;