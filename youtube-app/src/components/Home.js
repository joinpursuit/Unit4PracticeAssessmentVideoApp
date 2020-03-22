import React, {useState} from "react";
import axios from 'axios';
import API_KEY from '../secrets';
import Thumbnails from './Thumbnails'
import '../css/Home.css'


const Home = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&part=snippet&key=${API_KEY}`)
      setSearchResult(data.items)
    } catch (err) {
      setError(err);
    }
  }

  let errorDiv = null
  if (error) {
    errorDiv = <div className="homeErr"><div onClick={() => setError('')}> (X) </div> Sorry, something went wrong </div>
  }

  let results = `No Search Results. Search for videos above!`
  if (searchResult.length) {
    results = searchResult.map((result) => <div key={result.id.videoId}><Thumbnails video={result} width='400' className="resultHome"/></div>)
  }

  return(
    <div>
      <form onSubmit={handleSubmit} className="divHomeForm">
        <label className="label">  Search 
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="searchHome"/>
        </label>
  
        <input type="submit" value="Submit" className="homeButton"/>
      </form>
      {errorDiv}
      {results}
    </div>
  )
}


export default Home;