import React, {useState} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'
import YouTube from 'react-youtube' 
const Video = ()=>{
    const { id } = useParams();
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

    return (
        <div className="Video">
    <p>
        Video
    </p>
    <YouTube
        videoId={id}
        opts={opts}
        onReady={this._onReady}
      />
            
        </div>
        
    )
    
}


export default Video