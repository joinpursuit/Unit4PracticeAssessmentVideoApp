import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';


const VideoPage = () =>{

    const { id } = useParams();

    const opts = {
        height: '300',
        width: '400',
        playerVars: {
            autoplay: 1
        }
    };

    const _onReady = (e) => {
        // access to player in all event handlers via event.target
        e.target.pauseVideo();
      }

    return(
        <div>
            <YouTube videoId={id} opts={opts} onReady={_onReady} />
        </div>
    )
    
};


export default VideoPage;