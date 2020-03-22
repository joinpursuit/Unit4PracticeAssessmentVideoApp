import React from 'react';
import VideoPage from './components/VideoPage'
import NavBar from '../src/components/NavBar.js'
import Home from './components/Hompage';
import About from './components/About'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>

            <Route exact path={'/'}>
                <Home />
            </Route>

            <Route path={'/video/:id'}>
              <VideoPage />
            </Route>

            <Route exact path={'/about'}>
                <About />
            </Route>

            <Route path='/youtube' component={()=>{
              window.location = 'https://youtube.com';
              return null;
            }} />


      </Switch>
    </div>
  );
}

export default App;
