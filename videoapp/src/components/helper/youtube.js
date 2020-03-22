import React from "react"
import "../css/thumbnail.css"
import { Link } from "react-router-dom"


const Youtube=({videos})=>{

  const displayResults = videos.map(video=>{
    // debugger
    return(
      <div className="thumbnail" key={video.id.videoId} >
      <Link to ={`/video/${video.id.videoId}`}><img src={video.snippet.thumbnails.default.url} ></img></Link> 
       <h3>{video.snippet.title}</h3>
      </div>
    )
})

return(
  <>
  {displayResults}
  </>
)
}


   

 export default Youtube;