import React, { useState, useEffect } from 'react'
import History from "./History"


const Comment =()=> {
    const [history, setHistory]=useState([])
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        e.persist()
        if(!history){
            setHistory({name : e.target.elements[0].value, comment:e.target.elements[1].value})
        }else{
            setHistory(history=>[...history,{name : e.target.elements[0].value, comment: e.target.elements[1].value}])
        }
        }
        
    console.log(history)
        return (
            <div className="commentSection">
            <form className="commentForm" onSubmit={handleSubmit}>
            <label>Name</label>
            <input placeholder="Name" required/>

            <label>Comment</label>
            <input placeholder="..." required/>

            <button type="Submit">Submit</button> 
            </form>

            <div className="PostedComment">
            <History history={history}/>
            </div>
            </div>
        )
    }


export default Comment
