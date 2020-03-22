import React, { useState, useEffect } from "react";
import Search from "./Search";
import DisplayResults from "./DisplayResults";
import { useInput } from "../util/customHooks.js";
import API_KEY from "../secrets";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../css/HomePage.css";

const HomePage = () => {
  let history = useHistory();
  const [videos, setVideos] = useState(null);
  const [isValidSearch, setIsValidSearch] = useState(false);
  const searchInputObj = useInput("");

  const handleSubmit = async e => {
    e.preventDefault();
    if (searchInputObj.value === "") {
      setIsValidSearch(false);
    } else {
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
      setIsValidSearch(true);
    }
  };

  const handleClick = e => {
    e.preventDefault();
    history.push(`/video/${e.target.id}`);
  };

  return (
    <div className="home">
      <Search handleSubmit={handleSubmit} searchInputObj={searchInputObj} />
      {!isValidSearch ? (
        <p>No results found yet, please type in a search!</p>
      ) : (
        <DisplayResults videos={videos} handleClick={handleClick} />
      )}
    </div>
  );
};

export default HomePage;
