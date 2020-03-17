import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/video/:id" component={Video} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
