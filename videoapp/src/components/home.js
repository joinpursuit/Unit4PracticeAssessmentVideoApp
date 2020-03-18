import React, {useEffect, useState} from "react";
import axios from "axios"
import SearchBar from "./helper/searchBar"
import NavBar from './NavBar';
import VideoDetail from './VideoDetail';



const Home = () => {

    const [videos, setVideos ] = useState([])
   const findYoutubeVid = async (search="") =>{
        try{
            let res = await axios.get("https://www.googleapis.com/youtube/v3/search", 
            {params: 
                {part:"snippet", 
                maxResults: 8, 
                key:"AIzaSyB9OJz-BcEMjRhIY45amWCPPG45uw4Ua0k", 
                q:search
            }
        })
            
            debugger
            let videoArr = res.data.items
            if(videoArr.length === 0 ){
                setVideos([{
                    snippet: {title:"No results found"}}])
            } else{

                setVideos(videoArr)
            }
            
        }catch(err){
            console.log(err)
            setVideos([])
        }
    }



    return (
      <div className="Mainpage">
      <NavBar/>
   

    <SearchBar findYoutubeVid ={findYoutubeVid} />
    <p>Home</p>
    <VideoDetail videos={videos}/>
      </div>
    );
  }
  
  export default Home;