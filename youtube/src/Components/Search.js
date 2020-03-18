import React, { useState } from "react";
import { useInput } from '../Utilities/Input';


const Search = ()=>{
    const searchVideos = useInput("")

    return (
        <div className="Search">
            <label>
          Search:
          <input
            type="text"
            placeholder="Search Videos"
            {...searchVideos}
          />
        </label>
        </div>
    )
}

export default Search