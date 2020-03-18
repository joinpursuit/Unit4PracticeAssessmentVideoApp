import React, { useState } from "react";
import { useInput } from '../Utilities/Input';
import axios from 'axios'
import API from '../secret'

const Search = ()=>{
    const searchVideos = useInput("")
    const [videos, setVideos]=useState([]);
    const getVideos = async()=>{
        const userVideos = (``)
        try{
            let res = await axios.get(userVideos)
            setVideos(res.data)
        }catch(error){
            setVideos([])
        }
        }
    
        // useEffect(()=>{
        //     getVideos()
           
        // }, [])

    return (
        <div className="Search">
            <label>
          <input
            type="text"
            placeholder="Search Videos"
            {...searchVideos}
        
          />
          <button className="searchButton" placeholder="SEARCH">SEARCH</button>
        </label>
        </div>
    )
}

export default Search