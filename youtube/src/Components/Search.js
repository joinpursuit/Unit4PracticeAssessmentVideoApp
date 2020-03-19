import React, { useState } from "react";
import { useInput } from '../Utilities/Input';
import axios from 'axios'


const Search = ()=>{
    const searchVideos = useInput("")
    const [videos, setVideos]=useState([]);
    const getVideos = async(event)=>{
        event.preventDefault()
        const userVideos = (`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchVideos.value}&key=AIzaSyDxAZlUJS2gTxAAT_bjnNZykoltmmbODhk&order=relevance&type=video`)
        
        try{
            let res = await axios.get(userVideos)
            debugger
            setVideos(res.data)
        }catch(error){
            setVideos([])
        }
        }
    
   

    return (
        <div className="Search">
        <form className="searchBar" onSubmit={getVideos}>

            <label>
            
          <input
            type="text"
            placeholder="Search Videos"
            {...searchVideos}
            
            />
          <button  type="submit"className="searchButton" placeholder="SEARCH">SEARCH</button>
        </label>
            </form>
        </div>
    )
}

export default Search