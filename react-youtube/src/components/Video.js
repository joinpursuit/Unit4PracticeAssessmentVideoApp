import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import API_KEY from "../secrets"
import YouTube from "react-youtube"


const Video =async()=> {
    let { id } = useParams();
    // const [video, setVideo]=useState([])
    // let res = await axios.get(`https://www.googleapis.com/youtube/v3/videos/?part=snippet&id=${id}&key=${API_KEY}`)
    // setVideo(res.data.items[0].snippet)
    // // debugger
    //     return (
    //         <div>
    //             <p>{id}</p>
    //         </div>
    //     )
    
}

export default Video
