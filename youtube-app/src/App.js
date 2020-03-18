import React from 'react';
import {Route} from "react-router-dom"
import Navbar from './components/General/NavBar';
import './App.css';
// import '../components/CSS'

function App() {
  return (
    <div className="App">
      <switch>
      <Route exact path="/">
            <Home
              home={home}
              // error={error}
              // errorText={errorText}
              // searchValue={searchValue}
              //  setSearchValue={setSearchValue}
            />
          </Route>
      </switch>
    </div>
  );
}

export default App;
