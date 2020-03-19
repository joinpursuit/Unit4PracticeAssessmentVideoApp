import React from 'react';
import './App.css';
import {Route,Switch,useParams} from "react-router-dom"
import NavBar from "./components/NavBar"
import Video from "./components/Video"
import YouTubeAPI from "./components/YouTubeAPI.js"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path={"/"}>
          <YouTubeAPI/>
        </Route>
        <Route path={"/video/:id"} >
          <Video/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
