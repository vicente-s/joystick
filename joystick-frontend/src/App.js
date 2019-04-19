import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Platforms from './components/Platforms'
import Games from './components/Games'
import Game from './components/Game'


class App extends Component {

  state = {
    system: "",
    systems: ["Playstation", "Xbox", "Nintendo"],
    game : {
      id: 21
    }
  }

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
          <Route exact path='/' render={(props) => (<Home systems={this.state.systems} selectSystem={this.selectSystem}/>)} />
          <Route exact path='/platforms' render={(props) => (<Platforms />)} />
          <Route exact path='/games' render={(props) => (<Games />)} />
          <Route exact path='/games/23' render={(props) => (<Game />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
