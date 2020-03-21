import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'


import NavBar from './Components/NavBar'
import AboutUs from './Components/AboutUs'
import Home from './Components/Home'


const YouTubeApp = () => {
    
 
    return (
    
      <>
      <NavBar />
      <Switch>
      <Route path={"./Components/Home"} >
          <Home/>
      </Route>
      <Route path={"./Components/AboutUs"}>
          <AboutUs />
      </Route>

      </Switch>
      </>
    )

}

export default YouTubeApp