import React from 'react';
import YouTube from 'react-youtube';
import {useParams} from "react-router-dom"
import Comment from "./Comment"

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
      <YouTube
        videoId={id}
        opts={opts}
        onReady={onReady}
      />
      <Comment />
      </>
    );

}
export default Video

// import React, { useState, useEffect } from 'react'
// import {useParams} from "react-router-dom"
// import axios from "axios"
// import API_KEY from "../secrets"
// import YouTube from "react-youtube"


// const Video =async()=> {
//     let { id } = useParams();
//     // const [video, setVideo]=useState([])
//     // let res = await axios.get(`https://www.googleapis.com/youtube/v3/videos/?part=snippet&id=${id}&key=${API_KEY}`)
//     // setVideo(res.data.items[0].snippet)
//     // // debugger
//     //     return (
//     //         <div>
//     //             <p>{id}</p>
//     //         </div>
//     //     )
    
// }

// export default Video
