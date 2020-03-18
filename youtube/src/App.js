import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import HomePage from './Components/HomePage'
import About from './Components/About';
import {Route, Switch} from 'react-dom'
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
   YOUTUBE APP
    <NavBar/>
   
  
    <HomePage/>

    <Home/>
  
    <About/>
    <Search/>
   
    </div>
  );
}

export default App;
