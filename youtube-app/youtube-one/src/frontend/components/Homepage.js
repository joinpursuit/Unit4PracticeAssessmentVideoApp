import React from 'react'
import Navbar from './Navbar'
import homestyles from '../styles/HomeStyles.css'
import axios from 'axios'
import secrets from '../../secrets'
import Comments from './Comments.js'

const Homepage = () => {
    
    const fetchSearch = async() => {
        let res = await axios.get("https://www.googleapis.com/youtube/v3/search?maxResults=8&type=video&key=${secret.api_key}&part=snippet&q=${searchInput.value}")
        debugger

    }
    fetchSearch()

    return (
        <div>
            <div>
                
            </div>
        <div>
            <input type="text" className="search" placeholder="Search..."></input>
            <br/>
            <button className="button-home">Search</button>
        </div>
        </div>
    )
}

export default Homepage