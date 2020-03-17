import React from "react";
import Search from "./Search";
import DisplayResults from "./DisplayResults";
import { useInput } from "../util/customHooks.js";
import { useState } from "react";
import API_KEY from "../secrets";
import axios from "axios";

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const searchInputObj = useInput("");

  let youtube = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/`
    // params: {
    //   part: "snippet",
    //   maxResults: 8,
    //   key: API_KEY
    // }
  });

  const handleSubmit = async e => {
    e.preventDefault();
    debugger;
    try {
      const res = await youtube.get(`/search`, {
        params: {
          part: "snippet",
          maxResults: 8,
          key: API_KEY,
          q: searchInputObj.value
        }
      });
      debugger;
      setVideos([]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(videos);
  console.log(searchInputObj.value);
  return (
    <div className="home">
      <Search handleSubmit={handleSubmit} searchInputObj={searchInputObj} />
      <DisplayResults videos={videos} />
    </div>
  );
};

export default HomePage;
