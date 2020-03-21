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
            <div>
            <label>Name</label>
            </div>
            <div>
            <input placeholder="Name" required/>
            </div>
            <div>
            <label>Comment</label>
            </div>
            <div>
            <input placeholder="..." required/>
            </div>
            <div>
            <button type="Submit">Submit</button> 
            </div>
            <div className="PostedComment">
            <History history={history}/>
            </div>

            </form>
            
            </div>
        )
    }


export default Comment
