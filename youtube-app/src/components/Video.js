import React from "react"
import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";

// 👇 only inside of Video.js
// const myFunction = () => {
//     console.log('hello')
// }
//                          /video/:videoId
// http://sihamesproject.com/video/Xyase23
const ShowVideo = () => {
    let {videoId} = useParams();

    return(
        <div>

       
      <YouTube
        videoId={videoId}
        // opts={opts}
        // onReady={this._onReady}
      />
      <Form>

      </Form>
      </div>
    );
}

// what is this doing? 👇
// this is a default export: NOT a named export
export default ShowVideo