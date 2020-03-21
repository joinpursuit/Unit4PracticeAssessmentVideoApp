import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userInput: '',
            comments: [],
            video: null
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        this.setState({
            video: id
        })
    }

    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    handleUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { userInput, userName, comments } = this.state;
        const newComment = { userName, userInput };
        const updatedComments = comments
        updatedComments.push(newComment)
        this.setState({
            comments: updatedComments
        })
    }

    render() {
        const { video, userInput, userName, comments } = this.state;
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };

        return (
            <div className="Video">
                <YouTube
                    videoId={video}
                    opts={opts}
                    onReady={this._onReady}
                    className="Video-player"
                />
                <form onSubmit={this.handleSubmit} className="Video-form">
                    <p className="Video-label">Name</p>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={this.handleUserName}
                        value={userName}
                        className="Video-input"
                    />
                    <p className="Video-label">Comment</p>
                    <input
                        type="text"
                        placeholder="Leave a comment..."
                        onChange={this.handleUserInput}
                        value={userInput}
                        className="Video-input"
                    />
                    <input
                        type="submit"
                        className="Video-button"
                    />
                </form>
                <div className="Video-comments">{
                    comments.map((comment, k) => {
                        return(
                            <div key={k} className="Video-comment">
                                <h3 className="Video-comment-name">{comment.userName}</h3>
                                <p className="Video-comment-body">{comment.userInput}</p>
                            </div>
                        )
                    })
                }</div>
            </div>
        )
    }
}

export default Video;