import React from 'react';
import axios from "axios";
import Search from './Search'
import API_KEY from "../secret";
import { useHistory } from "react-router-dom";
const HomePage = () => {


    return(

<div className="eightVideos">

<Search />
<p>
Shows a Search form with:
a search input Field
a search button
Initially show a message like No Search Results. Search for videos above! in the place where the search results would later appear.
Once the user enters a new search, they can press Search or Enter to get results.
</p>

</div>
    )
}

export default HomePage; 
