import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Platforms from './components/Platforms'
import Games from './components/Games'


class App extends Component {


  render() {

    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => (<Home />)} />
          <Route exact path='/platforms' render={() => (<Platforms />)} />
          <Route exact path='/games' render={() => (<Games />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
