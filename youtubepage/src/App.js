import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import VideoPlayer from "./components/VideoPlayer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/about"} component={About}/>
        <Route path={"/video/:id"} component={VideoPlayer}/>
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
