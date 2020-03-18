import React from "react"
import axios from "axios"
import { useInputs } from "../utility/InputHooks";

const Youtube=({})=>{
}
    const searchByKeyword = ()=> {
        let results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
      
        for(var i in results.items) {
          var item = results.items[i];
          Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
        }
      }



 export default Youtube;