import React from 'react';
import DisplayAbout from './Components/AboutPage/DisplayAbout'
import DisplayHome from './Components/HomePage/DisplayHome'
import DisplayVideo from './Components/VideoPage/DisplayVideo'
import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/home"}>
          <DisplayHome />
        </Route>
        
        <Route path={"/video"}>
          <DisplayVideo />
        </Route>

        <Route path={"/about"}>
          <DisplayAbout />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
