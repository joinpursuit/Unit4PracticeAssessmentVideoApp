import React, {useState} from "react"
import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";
​
const ShowVideo = () => {
    let {videoId} = useParams();
   const [name, setName] = useState();
   const [comment, setComment] = useState();
   const [userPosts, setUserPosts] = useState([]);
    const nameHandle= (e) => {
        setName(e.target.value)
    }
    const commentChange= (e) => {
        setComment(e.target.value) 
    }
​
    const handleSubmit = () => {
        setUserPosts([{name, comment}, ...userPosts]);
        setName("");
        setComment("");
    }
​
    return(
        <div>
            <YouTube
                videoId={videoId}
   />
​
      <form onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}>
        <label>
            Name:
        <input type="text" name="name" value={name} onChange={nameHandle}/>
        </label>
        <label>
            Comment:
        <input type="text" name="comment" value={comment} onChange={commentChange}/>
        </label>
        <input type="submit" value="Submit"/>
        </form>
        {userPosts.map(post=> {
            return(
                <div>
                    {post.name}
                    {post.comment}
                </div>
            )
        })}
        </div>
    );
}
export default ShowVideo