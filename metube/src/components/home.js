import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../secrets';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            videos: [],
        }
    }

    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { userInput } = this.state;
        try {
            const params = `?part=snippet&type=video&key=${API_KEY}&q=${userInput}&maxResults=8`
            const url = `https://www.googleapis.com/youtube/v3/search${params}`
            let res = await axios.get(url)
            this.setState({
                videos: res.data.items
            })
        } catch (error) {

        }
    }

    render() {
        const { userInput, videos, attract } = this.state;
        return(
            <div className="Home">
                <form onSubmit={this.handleSubmit} className="Home-form">
                    <input 
                        type="text"
                        placeholder="Search for..."
                        onChange={this.handleUserInput}
                        value={userInput}
                        className="Home-input"
                    />
                    <input 
                        type="submit"
                        className="Home-button"
                    />
                </form>
                <div className="Home-gallery">{
                    videos.map((video, k) => {
                        return(
                            <Link to={`/video/${video.id.videoId}`} key={k} className="Home-thumbnail">
                                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                                <p className="Home-video-title">{video.snippet.title}</p>
                            </Link>
                        )
                    })
                }</div>
                <div>
                    <h3>Reveal the secrets of Secret Screening! Search now!</h3>
                </div>
            </div>
        )
    }
}

export default Home