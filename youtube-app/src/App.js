import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Video from "./components/Video";
import About from "./components/About";

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
        <Route path={"/about"}>
          <About />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
