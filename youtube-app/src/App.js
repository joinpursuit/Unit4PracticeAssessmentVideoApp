import React from 'react';
// import { Route } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <switch>
      <Route exact path="/">
            <Home
              home={home}
              // error={error}
              // errorText={errorText}
              // searchValue={searchValue}
              //  setSearchValue={setSearchValue}
            />
          </Route> */}
      {/* </switch> */}
    </div>
  );
}

export default App;
