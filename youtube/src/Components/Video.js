import React, { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Video = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [videoInfo, setVideoInfo] = useState([]);
  let { id } = useParams();
  // 👆 populated by the route/url

  //   const handleName = e => {
  //     setName(e.target.value);
  //   };

  //   const handleComment = e => {
  //     setComment(e.target.value);
  //   };

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
      <YouTube videoId={id} />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Comment:
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={e => setComment(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* render the contents of the `comments` array */}
      <div>
        {videoInfo.map(comment => {
          return (
            <div key={comment.timeStamp}>
              <p>{comment.name}</p>
              <p>{comment.comment}</p>
              <p>{comment.timeStamp}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Video;
