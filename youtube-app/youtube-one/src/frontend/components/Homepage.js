import React from 'react'
import Navbar from './Navbar'
import homestyles from '../styles/HomeStyles.css'
import axios from 'axios'
import secrets from '../../secrets'

const Homepage = () => {
    
    const fetchSearch = async() => {
        let res = await axios.get("https://www.googleapis.com/youtube/v3/search?key=[]")
        debugger

    }
    fetchSearch()

    return (
        <div>
            <div>
                
            </div>
        <div>
            <input type="text" className="search" placeholder="Search..."></input>
            <button className="button">Search</button>
        </div>


        </div>
    )
}

export default Homepage