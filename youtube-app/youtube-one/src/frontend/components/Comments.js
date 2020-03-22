import React, { useState, useReducer } from 'react';
import comments from '../styles/Comments.css'

const Comments = () => {
    const [userComments, setUserComments] = useState([]);
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}), 
        {
            name: "",
            comment: ""
        }
    );

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value } = e.target;
        setUserInput({[name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, value} = e.target
        setUserInput({[name]: value})
        let date = new Date().toString()
        let newComment = { name : userInput.name, comment: userInput.comment, date: date };
        let newComments = [newComment, ...userComments]
        setUserComments(newComments)
    } 

    const displayComment = userComments.map(el =>{
        return (
            <div className="comments">
                <h2 className="name">{el.name}</h2>
                <h3 className="comment">{el.comment}</h3>
                <p className="date  ">{el.date}</p>
            </div>
        )
    })
     

    return (
        <section className="comments-section">
        <h1>Comments</h1>
        <div>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            {userInput.name}
            <br/>
            <input type="text" name="name" value={userInput.name} placeholder="UserName" required onChange={handleChange}/>
            <br></br>
            <label>Comment: </label>
            {userInput.comment}
            <br/>
            <input type="text" name="comment" value={userInput.comment} placeholder="Comment" required onChange={handleChange}/>
            <br/>
            <button type="submit" value="add comment">Submit</button>
        </form>
        </div>
        <div>
            {displayComment}
        </div>
        </section>
    )
    
}

export default Comments;