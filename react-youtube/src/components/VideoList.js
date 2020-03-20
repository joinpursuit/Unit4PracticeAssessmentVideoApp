import React from 'react'
// import "../css/VideoList.css"

const Video =({video,id})=> {

    const handleClick =()=>{
        window.location=`http://localhost:3000/video/${id}`
    }

    return (
           
            <div className="video" videoID={id}>
                <img src={video.thumbnails.medium.url} alt=" " onClick={(e)=>handleClick(id)}/> 
            <p className="videoTitle" onClick={(e)=>handleClick(id)}>{video.title}</p>
            </div>
            
        )
 
    }



export default Video;