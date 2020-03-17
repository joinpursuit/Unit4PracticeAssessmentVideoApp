import React from 'react'
import Navbar from './Navbar'
import homestyles from '../styles/HomeStyles.css'


const Homepage = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
        <div>
            <input type="text" className="search" placeholder="Search..."></input>
            <button className="button">Search</button>
        </div>


        </div>
    )
}

export default Homepage