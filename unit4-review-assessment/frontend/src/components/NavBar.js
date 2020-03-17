import React, {Component} from 'react';
import Home from './Hompage';
import About from './About';
import Video from './Video'
import {Route, Switch} from 'react-router-dom'

export class NavBar extends Component {
    render(){
        <div className='navBar'>
            <Switch>
            <Route exact path={'/'}>
                <Home />
            </Route>
            <Route path={'/video/:id'}>
                <Video />
            </Route>
            <Route path={'/about'}>
                <About />
            </Route>

            </Switch>
        </div>
    }
}