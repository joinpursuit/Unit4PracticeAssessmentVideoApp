import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';


const Video = () => {
    const [name, setName] = useState();
    const [comment, setComment] = useState();
    const [comments, setComments] = useState([])
    let { id } = useParams();
    // 👆 populated by the route/url

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleComment = (e) => {
        setComment(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // add name and comment to some comments array
    
    }

    return (
    <>
    
        <YouTube
          videoId={id}
        />
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={handleName} />
            </label>
            <label>
                Comment:
                <input type="text" name="comment" value={comment} onChange={handleComment}/>
            </label>
            <button type="submit">Submit</button>
        </form>
        {/* render the contents of the `comments` array */}
    </>
    );
}

export default Video;