import React, {useState} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'
// import Youtube from 'react-youtube'
const Video = ()=>{
    const {id}= useParams()
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
    {/* <YouTube */}
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
            <p>
            User should be able to access this page by any link to the specific video id
Shows the YouTube player to show that specific YouTube video. Use react-youtube for this.
Has a form below the video to submit a comment. The form will need:
A name input
A comment input
A submit button

            </p>
        </div>
    )
}

export default Video