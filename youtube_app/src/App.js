import React from 'react';
import About from '../frontend/src/components/About';
import Home from '../frontend/src/components/Home';
import Video from '../frontend/src/components/Video';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path={"/"}>
            <About/>
        </Route>
        <Route path={"/signup"}>
            <Home/>
        </Route>
        <Route path={"/homepage"}>
            <Video/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
