import React, { useState,useEffect } from 'react';
import Result from "./Result"

const Results = ({newList}) => {
    
    const vidList = newList.map((vid,i)=>{
        return(
            <div id={vid.id.videoId} key={vid.id.videoId}>
                <img src={vid.snippet.thumbnails.high.url} alt=""/>
                <p>{vid.snippet.title}</p>
            </div>
        )
    })



    return(
        <div>
            {vidList}
        </div>
    )
};

export default Results; 