import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Platforms from './components/Platforms'
import Platform from './components/Platform'
import Games from './components/Games'
import Game from './components/Game'


class App extends Component {

  selectSystem = (e) => {
    console.log(e.target.innerHTML)
    this.setState({
      system: e.target.innerHTML
    })
    console.log(this.state)
  }

  render() {

    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => (<Home selectSystem={this.selectSystem}/>)} />
          <Route exact path='/platforms' render={() => (<Platforms />)} />
          <Route exact path='/platform' render={() => <Platform />} />
          <Route exact path='/games' render={() => (<Games />)} />
          <Route exact path='/game' render={() => (<Game />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
