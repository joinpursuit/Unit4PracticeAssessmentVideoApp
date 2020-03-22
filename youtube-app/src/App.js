import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Video from './components/Video';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path={"/video/:id"}>
          <Video/>
        </Route>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/about"}>
          <About/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
