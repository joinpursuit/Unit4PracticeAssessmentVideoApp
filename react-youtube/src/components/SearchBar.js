import React, { useState, useEffect } from 'react'
import {useInput} from "../util/CustomHooks"
import axios from "axios"
import API_KEY from "../secrets"


const SearchBar =()=> {
    let searchObj = useInput("")
    const [result, setResult]=useState("No search results Yet!, please submit a search above!")
    const [display, setDisplay]=useState(null)

    const handleSearch = async(e)=>{
        e.preventDefault()
        try {
            let res = await axios.get(`https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=8&q=${searchObj.value}&key=${API_KEY}&order=relevance&type=video`)
            res.data.items.length===0?setResult(`No search results for ${searchObj.value}`):setDisplay(res.data.items)
        } catch (error) {
           console.log(error)
        }
    }


  
        console.log(searchObj.value)
        console.log(display)
        return (
            <>
            <form className="searchBar" onSubmit={handleSearch}>
                <input name="search" {...searchObj} placeholder="Search Video"/>
                <button type="submit">Search</button>
            </form>
            <div className="result">
                {result}
            </div>
            </>
        )

}

export default SearchBar
