import React from 'react';
// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/home';
import About from './components/about';
// import Mainpage from './components/Mainpage';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path={"/"} component={Home}/>
      <Route path={"/about"} component={About}/>
      <Route component={Error} />
      <Route component={Home} />
    </Switch>
    </div>
  );
}

export default App;
