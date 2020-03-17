import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={"/"}>
          <HomePage />
        </Route>
        <Route path={"/video/:id"}>
          <VideoPage />
        </Route>
        <Route path={"/about"}>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
