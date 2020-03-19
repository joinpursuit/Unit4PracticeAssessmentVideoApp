import React, { useState, useEffect } from 'react'
import {useInput} from "../util/CustomHooks"
import axios from "axios"
import API_KEY from "../secrets"
import Video from "./VideoList"


const SearchBar =()=> {
    let searchObj = useInput("")
    const [resultMessage, setResult]=useState("No search results Yet!, please submit a search above!")
    const [videoList, setList]=useState([])

    const handleSearch = async(e)=>{
        e.preventDefault()
        try {
            let res = await axios.get(`https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=8&q=${searchObj.value}&key=${API_KEY}&order=relevance&type=video`)
            if(res.data.items.length===0){
                return (setResult(`No search results for ${searchObj.value}`),setList([]))
            }else{
                return (setResult(null),setList(res.data.items))
            }
        } catch (error) {
           console.log(error)
        }
    }

    const ShowVideoList =videoList.map((video)=>{
           return(<><Video key={video.id.videoId} id={video.id.videoId} video={video.snippet}/></>)
        })
    

        console.log(searchObj.value)
        console.log(videoList)
        return (
            <>
            <form className="searchBar" onSubmit={handleSearch}>
                <input name="search" {...searchObj} placeholder="Search Video"/>
                <button type="submit">Search</button>
            </form>
            <div className="result">
                {resultMessage}
                {ShowVideoList}
            </div>
            </>
        )

}

export default SearchBar
