import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube' 


const VideoPage = () =>{

    const { id } = useParams();

    const style = {
        height: '300',
        width: '400',
        playerVars: {
            autoplay: 1
        }
    }


    return(
        <div>
            <YouTube />
        </div>
    )
    
}

export default VideoPage;