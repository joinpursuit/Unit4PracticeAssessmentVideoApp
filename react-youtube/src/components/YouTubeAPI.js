import React, { Component } from 'react'
import NavBar from "./NavBar"
import SearchBar from './SearchBar'

export class YouTubeAPI extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <SearchBar/>
            </div>
        )
    }
}

export default YouTubeAPI
