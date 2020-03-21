import React, {useState} from "react";
import axios from 'axios';
import API_KEY from '../secrets'
​
const Home = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState('');
​
​
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('SUBMIT')
    try {
      const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&part=snippet&key=${API_KEY}`)
      console.log(data)
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }
​
  let errorDiv = null
  if (error) {
    errorDiv = <div><div onClick={() => setError('')}> (X) </div> Sorry, something went wrong </div>
  }
​
  let result = `No Search Results. Search for videos above!`
  if (searchResult.length) {
    result = searchResult.map((video, index) => <div key={index}>index</div>)
  }
​
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search 
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </label>
       
        <input type="submit" value="Submit"/>
      </form>
      {errorDiv}
      {result}
    </div>
  )
}
​
​
export default Home;