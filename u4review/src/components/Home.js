import React, { useState,useEffect } from 'react';
import Results from "./Results"
import apiSecret from "../Private/api"
import axios from "axios"

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [list, setList] = useState([])
    const [searching, setSearching] = useState(false)

    const handleSearch=(e)=>{
        e.preventDefault()

        if(searchQuery===""){
         setSearching(false)

        } else{
        setSearching(true)
        }
        handleSearchResults()

    }

    const handleSearchResults=async()=>{
        const url = `https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=8&q=${searchQuery}&key=${apiSecret}`
        try{
            console.log(apiSecret)
            let res = await axios.get(url)
            setList(res.data.items)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit"> Search</button>
            </form>
            {searching?<Results newList={list}/>:<p>No Search Results. Search for videos above!</p>}
        </div>
    )
};

export default Home; 