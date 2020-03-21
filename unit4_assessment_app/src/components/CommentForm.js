import React from "react";
import "../css/CommentForm.css";

const CommentForm = () => {
  return (
    <div className="commentContainer">
      <h4>Post a Comment</h4>
      <form id="commentForm">
        <label for="nameInput">Name:</label>
        <input
          className="commentInput"
          type="text"
          placeholder="Enter your name"
        ></input>
        <label for>Comment:</label>
        <input
          className="commentInput"
          type="text"
          placeholder="Enter a comment"
        ></input>
        <button id="submitCommentBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
