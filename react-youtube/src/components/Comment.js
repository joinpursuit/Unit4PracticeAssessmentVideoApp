import React, { useState, useEffect } from 'react'
import History from "./History"


const Comment =()=> {
    const [name, setName]=useState("")
    const [comment, setComment]=useState("")
    const [history, setHistory]=useState([])

    const handleSubmit=(e)=>{
        e.preventDefault()
        e.persist()
        setName(e.target.elements[0].value)
        setComment(e.target.elements[1].value)
        if(!history){
            setHistory(e.target.elements[0].value)
        }else{
            setHistory(history=>[...history,e.target.elements[0].value])
        }
    }

    console.log(name,comment,history)
        return (
            <>
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
            </>
        )
    }


export default Comment
