import React from "react";

const DisplayResults = ({ videos }) => {
  //   const displayVideos = () => {
  //     let showVideos = videos.map(video => {
  //       return <image src={video.snippet.thumbnails.medium.url}></image>;
  //     });
  //     return showVideos;
  //   };

  let showVideos = videos.map(video => {
    return (
      <img
        key={video.id.videoId}
        src={video.snippet.thumbnails.medium.url}
      ></img>
    );
  });

  return <div className="displayResults">{showVideos}</div>;
};

export default DisplayResults;
