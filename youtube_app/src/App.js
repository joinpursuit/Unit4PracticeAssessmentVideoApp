import React from 'react';
import About from '../src/components/About';
import Home from '../src/components/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path={"/about"}>
            <About/>
        </Route>
        <Route path={"/home"}>
            <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
