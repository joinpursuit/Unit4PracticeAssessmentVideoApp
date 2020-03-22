import React from 'react';
// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/home';
import About from './components/about';
import videoPage from './components/videoPage';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path={"/"} component={Home}/>
      <Route path={"/about"} component={About}/>
      <Route path={"/video/:id"} component={videoPage}/>
      <Route component={Error} />
      <Route component={Home} />
    </Switch>
    </div>
  );
}

export default App;
