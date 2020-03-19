import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import HomePage from './Components/HomePage'
import About from './Components/About';
import Search from './Components/Search';
import {Route, Switch} from 'react-dom'

function App() {
  return (
    <div className="App">
   YOUTUBE APP
    <NavBar/>
   {/* <Switch>
        <Route exact path={"/"}> */}
   
    <HomePage/>
  {/* </Route> */}

    <Home/>
  
    <About/>
    <Search/>
   {/* </Switch> */}
    </div>
  );
}

export default App;
