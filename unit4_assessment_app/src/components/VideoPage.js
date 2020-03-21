import React from "react";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import Comments from "./Comments";

const VideoPage = () => {
  const { id } = useParams();
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1
    }
  };
  const _onReady = e => {
    // access to player in all event handlers via event.target
    e.target.pauseVideo();
  };

  return (
    <div>
      <Youtube videoId={id} opts={opts} onReady={_onReady} />
      <hr
        style={{ marginTop: "25px", border: "2px solid grey", width: "75%" }}
      ></hr>
      <Comments />
    </div>
  );
};

export default VideoPage;
