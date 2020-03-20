import React from "react";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Videos from "./components/Videos.js/Videos";
import "./App.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/videos">
        <Videos />
      </Route>
    </div>
  );
}

export default App;
