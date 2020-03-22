import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "../css/Video.css";
// import axios from "axios";
// import API_KEY from "../secrets";

const Video = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  // const [video, setVideo] = useState("");
  const [videoInfo, setVideoInfo] = useState([]);
  const { id } = useParams();
  // 👆 populated by the route/url

  //   const handleName = e => {
  //     setName(e.target.value);
  //   };

  //   const handleComment = e => {
  //     setComment(e.target.value);
  //   };

  // const getVideoInfo = async () => {
  //   try {
  //     let res = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${API_KEY}&part=snippet`
  //     );
  //     // debugger;
  //     let video = res.data.items[0].snippet.thumbnails.high.url;
  //     // let id = video.id;
  //     console.log(res);
  //     // setVideo(video);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getVideoInfo();
  // }, [id]); //the dependency array

  const handleSubmit = e => {
    e.preventDefault();
    // add name and comment to some comments array
    let timeStamp = new Date().toLocaleString();
    let commentInfo = { name, comment, timeStamp };
    setVideoInfo([commentInfo, ...videoInfo]);
    setName("");
    setComment("");
  };

  // console.log(name, comment);
  console.log(videoInfo);
  return (
    <>
      <div className="videoContainer">
        <YouTube videoId={id} />
        <form onSubmit={handleSubmit}>
          <label className="labels">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
          <br></br>
          <label className="labels">
            Comment
            <input
              type="text"
              name="comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
              required
            />
          </label>
          <br></br>
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
        {/* render the contents of the `comments` array */}
        <div className="videoComments">
          {videoInfo.map(comment => {
            return (
              <div key={comment.timeStamp}>
                <p>{comment.name}:</p>
                <p>{comment.comment}</p>
                <p>{comment.timeStamp}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Video;
