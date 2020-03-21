import React from 'react';

const Results = ({videos, handleClick}) =>{
    let show = videos.map(video =>{
        return(
            <div>
                <img
                src={video.snippet}
                id={video}
                onclick={e => {handleClick(e)}}>
                </img>
                <h3>{video}</h3>
            </div>
        )
    });

return <div>{show}</div>

}

export default Results