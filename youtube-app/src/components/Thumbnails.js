import React from "react";
import {Link} from "react-router-dom";
import '../css/Thumbnails.css'

const Thumbnails = ({video}) => {
  return(
    <div className="videoThumb">
      <Link to={`/video/${video.id.videoId}`} >
    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
    <p className="title">{video.snippet.title}</p>
</Link>
</div>
  )
}

export default Thumbnails;