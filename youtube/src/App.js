import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/Navbar';
import {Route, Switch} from 'react-dom'

function App() {
  return (
    <div className="App">
   YOUTUBE APP
    <NavBar/>
   
  
 

    <Home/>
  
    <About/>
   
    </div>
  );
}

export default App;
