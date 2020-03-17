import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch >
        <Route exact path={"/"}>
            <Home />
        </Route>
        <Route path={"/about"}>
            <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
