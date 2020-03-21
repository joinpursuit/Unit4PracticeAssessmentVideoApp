import React, { useState } from "react";
import { useInput } from "../util/customHooks";
import "../css/Comments.css";

const Comments = () => {
  const nameInputObj = useInput("");
  const commentInputObj = useInput("");
  const [comments, setComments] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    let newComment = {
      name: nameInputObj.value,
      body: commentInputObj.value
    };
    if (!comments) {
      setComments(newComment);
    } else {
      setComments(comments => [...comments, newComment]);
    }
  };

  let showComments = comments.map(comment => {
    return (
      <div className="commentItem">
        <h5>{comment.name} commented:</h5>
        <p>{comment.body}</p>
      </div>
    );
  });

  return (
    <div className="commentContainer">
      <h2>Post a Comment</h2>
      <form id="commentForm" onSubmit={handleSubmit}>
        <label for="nameInput">Name:</label>
        <input
          className="commentInput"
          type="text"
          placeholder="Enter your name"
          {...nameInputObj}
        />
        <label for>Comment:</label>
        <input
          className="commentInput"
          type="text"
          placeholder="Enter a comment"
          {...commentInputObj}
        />
        <button id="submitCommentBtn" type="submit">
          Submit
        </button>
      </form>
      <div className="showCommentsContainer">{showComments}</div>
    </div>
  );
};

export default Comments;
