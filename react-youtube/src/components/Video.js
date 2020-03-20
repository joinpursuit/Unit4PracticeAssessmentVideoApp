import React from 'react';
import YouTube from 'react-youtube';
import {useParams} from "react-router-dom"
import Comment from "./Comment"
import "../css/VideoPage.css"

const Video =()=> {
    
    let { id } = useParams();
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };
    const onReady=(e)=> {
      e.target.mute();    
      e.target.playVideo();
    }
 
    return (
        <>
      <YouTube className="Youtube"
        videoId={id}
        opts={opts}
        onReady={onReady}
      />
      <Comment/>
      </>
    );

}
export default Video

