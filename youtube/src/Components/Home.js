import React from "react";
import API_KEY from "../secrets";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = { search: "", results: [] };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      let res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?maxResults=1&type=video&key=${API_KEY}&part=snippet&q=${this.state.search}`
      );
      // console.log(res.data.items);
      this.setState({ results: res.data.items });
    } catch (err) {
      console.log(err);
    }
  };

  handleSearchChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    console.log(this.state);
    let { search, results } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} required>
          <input
            type="text"
            placeholder="Enter a Search"
            name="search"
            value={search}
            onChange={this.handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
        <div>
          {results.map(item => {
            return (
              <Link to={`/video/${item.id.videoId}`} key={item.id.videoId}>
                <p>{item.snippet.title}</p>
                <img
                  src={item.snippet.thumbnails.medium.url}
                  alt={item.snippet.title}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
