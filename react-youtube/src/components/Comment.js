import React, { Component } from 'react'

export class Comment extends Component {
    render() {
        return (
            <form>
            <label>Name</label>
            <input placeholder="Name"/>
            <label>Comment</label>
            <input placeholder="..."/>
               <button type="Submit">Submit</button> 
            </form>
        )
    }
}

export default Comment
