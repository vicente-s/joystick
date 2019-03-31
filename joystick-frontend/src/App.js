import React, { Component } from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import SystemPage from './components/SystemPage'


class App extends Component {

  state = {
    system: {},
    systems: ["Playstation", "Xbox", "Nintendo"]
  }

  goToPage(e) {
    {/*window.location.href = */}
  }

  render() {

    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => (<Home systems={this.state.systems}/>)} />
          <Route exact path='/system' render={(props) => (<SystemPage />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
