import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Video from "./components/Video";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/video/:id"}>
          <Video />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
