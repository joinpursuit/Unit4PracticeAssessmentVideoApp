import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route exact path={'/about'}>
          <About />
        </Route>
</Switch>
    </div>
  );
}

export default App;
