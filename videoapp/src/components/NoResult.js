import React from "react"

const NoResult =({results})=>{
    if(results){
        return(
            <div className="NoResult" key={results}>
            <p>No Search Results. Search for videos above!</p>
            </div>  
        )
    } else {
        return 
    }
        
    

}
export default NoResult