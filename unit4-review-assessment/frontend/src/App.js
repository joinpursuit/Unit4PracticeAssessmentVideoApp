import React from 'react';
import NavBar from '../src/components/NavBar.js'
import Home from './components/Hompage';
import About from './components/About'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />

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
