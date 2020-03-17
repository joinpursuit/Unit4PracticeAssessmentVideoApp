import React from "react";
import Search from "./Search";
import DisplayResults from "./DisplayResults";
import { useInput } from "../util/customHooks.js";
import { useState } from "react";
import API_KEY from "../secrets";
import axios from "axios";

const HomePage = () => {
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
            q: searchInputObj.value
          }
        }
      );
      setVideos(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <Search handleSubmit={handleSubmit} searchInputObj={searchInputObj} />
      {!videos ? (
        <p>No Search Results Yet! Please submit a search above!</p>
      ) : (
        <DisplayResults videos={videos} />
      )}
    </div>
  );
};

export default HomePage;
