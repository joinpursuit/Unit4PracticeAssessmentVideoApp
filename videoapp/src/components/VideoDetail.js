import React from "react"
import YouTube from 'react-youtube';

const VideoDetails =({videoID})=>{
  debugger
  const opts = {
    height: '390',
    width: '640',
  };
 
  const onReady = (e) =>{
    e.target.pauseVideo();
  }

    return(
    <div className="video" key={videoID}  >
      <YouTube 
        videoId={videoID}
        opts={opts}
        onReady={onReady}
      />
    </div>
    )

}
export default VideoDetails
