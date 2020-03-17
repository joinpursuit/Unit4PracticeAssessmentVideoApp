import React from "react";

const DisplayResults = ({ videos, handleClick }) => {
  //   const displayVideos = () => {
  //     let showVideos = videos.map(video => {
  //       return (
  //         <div className="resultItem">
  //           <img
  //             key={video.id.videoId}
  //             src={video.snippet.thumbnails.medium.url}
  //           ></img>
  //           <h4></h4>
  //         </div>
  //       );
  //     });
  //     return showVideos;
  //   };

  let showVideos = videos.map(video => {
    return (
      <div className="resultItem" key={video.id.videoId}>
        <img
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
