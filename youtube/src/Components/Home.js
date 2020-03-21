import React from "react";
import API_KEY from "../secrets";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Home.css";

class Home extends React.Component {
  state = { search: "", results: [] };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      let res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?maxResults=8&type=video&key=${API_KEY}&part=snippet&q=${this.state.search}`
      );
      //   console.log(res.data.items);
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
    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          height: 5
        }}
      />
    );
    return (
      <div className="home">
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Enter a Search"
              name="search"
              value={search}
              onChange={this.handleSearchChange}
              required
            />
            <br></br>
            <button type="submit" className="submitBtn">
              Search
            </button>
          </form>
        </div>
        <ColoredLine color="black" />
        <div className="searchContainer">
          {results.length === 0
            ? `No Search Results. Search for videos above!`
            : results.map(item => {
                return (
                  <Link to={`/video/${item.id.videoId}`} key={item.id.videoId}>
                    <div className="video">
                      <img
                        src={item.snippet.thumbnails.medium.url}
                        alt={item.snippet.title}
                      />
                      <p>{item.snippet.title}</p>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
    );
  }
}

export default Home;
