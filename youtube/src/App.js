import React from 'react';
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Video from "./Components/Video";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/video/:id"}>
          <Video />
        </Route>
        <Route path={"/about"}> 
          <About />
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
