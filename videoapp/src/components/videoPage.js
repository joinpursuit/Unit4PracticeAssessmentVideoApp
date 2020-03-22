import React from "react"
import VideoDetails from "./VideoDetail"
import NavBar from "./NavBar"
import Form from "./helper/form"

const VideoPage = ({match}) => {

    return(
     <div>
       <NavBar/>
       <VideoDetails videoID ={match.params.id}/>
        <Form/>
       
    </div>
    )
}



export default VideoPage