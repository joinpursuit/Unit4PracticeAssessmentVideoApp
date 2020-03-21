import React from 'react';

const Results = ({videos, handleClick}) =>{
    let show = videos.map(video =>{
        return(
            <div>
                <img alt='videoImg'
                src={video.snippet.thumbnails.high.url}
                id={video.id.videoId}
                onclick={e => {handleClick(e)}}>
                </img>
                <h3>{video.snippet.title}</h3>
            </div>
        )
    });

return <div>{show}</div>

}

export default Results