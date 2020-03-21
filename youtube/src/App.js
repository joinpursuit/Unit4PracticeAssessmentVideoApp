import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import HomePage from './Components/HomePage'
import About from './Components/About';
import Search from './Components/Search';
import Video from './Components/Video'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      YOUTUBE APP
     

      <NavBar/>
      <Switch>
        <Route exact path={"/"}>
          <Search/>
        </Route>
        {/* <Route path={"/video/:id"} >
          <Video/>
        </Route> */}
        <Route path={"/about"} >
          <About/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
