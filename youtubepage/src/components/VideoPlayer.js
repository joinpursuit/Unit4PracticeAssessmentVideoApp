import React, {useEffect, useState} from "react";
import {useInputs} from "../utility/Hook";
import axios from "axios";
import API_KEY from "../secrets";
import YouTube from "react-youtube";
import "../css/VideoPlayer.css";

const VideoPlayer = (id) => {
    const [videoInfo, setVideoInfo] = useState({});
    const [allComments, setAllComments] = useState([]);
    const nameInput = useInputs("");
    const commentInput = useInputs("");
    let videoId = id.match.params.id;

    const currentVideo = async (id) =>{
        try {
            let res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&maxResults=8&key=${API_KEY}`);
            setVideoInfo(res.data.items[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        currentVideo(videoId)
    }, [])

    const submitComment = (e) => {
        e.preventDefault();
        if(nameInput.value !== "" && commentInput.value !== ""){
            setAllComments([...allComments, {
                name: `${nameInput.value}`,
                comment: `${commentInput.value}`
            }]);
            nameInput.value="";
            commentInput.value="";
        }
    }

    const printComments = allComments.map((post, index) => {
        return(
            <div key={index} className="posts">
                <h3 className="name">{post.name}</h3>
                <p className="comment">{post.comment}</p>
            </div> 
        )
    })

    return(
        <div className="feed">
            <div className="youtube">
                <YouTube videoId={videoInfo.id} />
            </div>
            <hr className="firstLine"/>
            <form className="videoForm" onSubmit={submitComment}>
                <label className="header">Name</label>
                <input type="text" placeholder="Name..." name="name" className="feedInputs" {...nameInput} required/>
                <label className="header">Comment</label>
                <input type="text" placeholder="..." name="comment" className="feedInputs" {...commentInput} required/>
                <input type="submit" className="commentButton"/>
            </form>
            <hr className="secondLine"/>
            <ul className="comments">
                {printComments}
            </ul>
        </div>
    )
} 

export default VideoPlayer;