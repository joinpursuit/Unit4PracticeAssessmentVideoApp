import React from "react"
import YouTube from 'react-youtube';

const VideoDetails =({videos})=>{
  debugger
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  const onReady = (event) =>{
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

 
    const displayResults = videos.map(video=>{
        return(
            // <div className="video" key={video.id}>
            //     <h1>{video.snippet.title}</h1>
    
            // </div>
            <h1>{video.snippet.title}</h1>,
                <YouTube
                  videoId={video.id.videoId}
                  opts={opts}
                  onReady={onReady}
                />
              
        )
    })

    return(
        <>
        {displayResults}
        </>
    )

}
export default VideoDetails
