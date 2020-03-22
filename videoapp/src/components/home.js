import React, {useEffect, useState} from "react";
import axios from "axios"
import SearchBar from "./helper/searchBar"
import NavBar from './NavBar';
import Youtube from './helper/youtube';
import NoResult from './NoResult';

import "./css/video.css"



const Home = () => {

    const [videos, setVideos ] = useState([])
    const [results, setResults ] = useState([false])
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
            
            // debugger
            let videoArr = res.data.items
            if(search === "" ){
               setResults(true)
            } else{
                // 
                setVideos(videoArr)
                
            }
            
        }catch(err){
            console.log(err)
            setVideos([])

        }
    }

    useEffect(()=>{
        findYoutubeVid()
        // setResults(false)
    },[])



    return (
      <>
      <NavBar/>
        <SearchBar findYoutubeVid ={findYoutubeVid} />
       <NoResult results = {results}/>
    <div className="Mainpage">
        <Youtube videos={videos}/>
    </div>
      </>
    );
  }
  
  export default Home;