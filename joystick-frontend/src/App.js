import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Systems from './components/Systems'
import SystemPage from './components/SystemPage'


class App extends Component {

  state = {
    system: "",
    systems: ["Playstation", "Xbox", "Nintendo"]
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
          <Route exact path='/systems' render={(props) => (<Systems />)} />
          <Route exact path={`/${this.state.systems[0]}`} render={(props) => (<SystemPage system={this.state.system}/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
