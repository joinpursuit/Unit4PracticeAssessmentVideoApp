import React from "react";
import "./App.css";
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
        <Route path={"/video/:videoId"}>
          <Video />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
