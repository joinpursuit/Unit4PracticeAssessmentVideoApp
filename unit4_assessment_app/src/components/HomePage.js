import React from "react";
import Search from "./Search";
import DisplayResults from "./DisplayResults";
import { useInput } from "../util/customHooks.js";
import { useState } from "react";
import API_KEY from "../secrets";
import axios from "axios";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  let history = useHistory();
  const [videos, setVideos] = useState(null);
  const searchInputObj = useInput("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            maxResults: 8,
            key: API_KEY,
            type: "video",
            q: searchInputObj.value
          }
        }
      );
      setVideos(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = e => {
    e.preventDefault();
    history.push(`/video/${e.target.id}`);
  };

  return (
    <div className="home">
      <Search handleSubmit={handleSubmit} searchInputObj={searchInputObj} />
      {!videos ? (
        <p>No Search Results Yet! Please submit a search above!</p>
      ) : (
        <DisplayResults videos={videos} handleClick={handleClick} />
      )}
    </div>
  );
};

export default HomePage;
