import React from "react";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";

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
    </div>
  );
};

export default VideoPage;
