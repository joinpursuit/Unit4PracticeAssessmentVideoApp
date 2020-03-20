import React from 'react';
import API_KEY from "../secrets";
import axios from 'axios';

class Home extends React.Component {
    state = { search: "" }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.get(`https://www.googleapis.com/youtube/v3/search?maxResults=2&type=video&key=${API_KEY}&part=snippet&q=${this.state.search}`); 
        } catch (err) {
            console.log(err);
        }
    }

    handleSearchChange = (e) => {
        this.setState({search: e.target.value});
    }


    render() {
        console.log(this.state);
        let { search } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder="Enter a Search"
                    name="search"
                    value={search}
                    onChange={this.handleSearchChange}/>
                    <button type="submit">Search</button>
    
                </form>
            </div>
    
        )

    }
}

export default Home