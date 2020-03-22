import React from "react";
import {Link} from "react-router-dom"

const Thumbnails = ({video}) => {
  return(
    <div>
      <Link to={`/video/${video.id.videoId}`} >
    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title}/>
    <p>{video.snippet.title}</p>
</Link>
</div>
  )
}

export default Thumbnails;