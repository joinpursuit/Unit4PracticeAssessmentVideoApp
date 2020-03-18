import React from "react"
import { useInputs } from "../utility/InputHooks";

const SearchBar=({findYoutubeVid})=>{
    const youtubesearch = useInputs("")
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log(youtubesearch)
        findYoutubeVid(youtubesearch.value)
        debugger
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder = "Search by Title"{...youtubesearch} />
        </form> 
    )
}


 export default SearchBar