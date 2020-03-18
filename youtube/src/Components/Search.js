import React, { useState } from "react";
import { useInput } from '../Utilities/Input';


const Search = ()=>{
    const searchVideos = useInput("")

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