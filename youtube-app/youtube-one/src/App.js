import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Homepage from './frontend/components/Homepage'
import Aboutpage from './frontend/components/Aboutpage'
import Videopage from './frontend/components/Videopage'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Switch>
          <Route path={"/About"}>
            <Aboutpage/>
          </Route>
          <Route path={"/Video"}>
            <Videopage/>
          </Route>
          <Route path={"/"}>
            <Homepage/>
          </Route>
          <Route path="*" render={() => <div>Something Went Wrong</div>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
