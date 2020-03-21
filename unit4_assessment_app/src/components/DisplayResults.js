import React from "react";

const DisplayResults = ({ videos, handleClick }) => {
  let showVideos = videos.map((video, i) => {
    return (
      <div className="resultItem" key={video.id.videoId}>
        <img
          className="thumbnail"
          src={video.snippet.thumbnails.high.url}
          id={video.id.videoId}
          onClick={e => {
            handleClick(e);
          }}
        ></img>
        <h4>{video.snippet.title}</h4>
      </div>
    );
  });

  return <div className="displayResults">{showVideos}</div>;
};

export default DisplayResults;
