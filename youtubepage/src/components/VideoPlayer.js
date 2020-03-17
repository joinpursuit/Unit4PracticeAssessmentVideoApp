import React, {useEffect, useState} from "react";
import axios from "axios";
import API_KEY from "../secrets";
import YouTube from "react-youtube";

const VideoPlayer = (id) => {
    const [videoInfo, setVideoInfo] = useState({});
    let videoId = id.match.params.id;

    const currentVideo = async (id) =>{
        debugger
        try {
            let res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&maxResults=8&key=${API_KEY}`);
            setVideoInfo(res.data.items[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        currentVideo(videoId)
    }, [])


    return(
        <div>
            <YouTube
                videoId={videoInfo.id}                  // defaults -> null
            />
        </div>
    )
} 

export default VideoPlayer;