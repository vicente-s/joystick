import React, { Component } from 'react';
import './App.css';
import SystemColumn from './components/SystemColumn'
import {Link, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import SystemPage from './components/SystemPage'


class App extends Component {

  state = {
    system: {},
    systems: []
  }

  goToPage(e) {
    {/*window.location.href = */}
  }

  render() {
    let currentSystems = ["PlayStation", "Xbox", "Nintendo"]
    let systemsRow = currentSystems.map(system => <Link to={system}><SystemColumn className="col" goToPage={this.goToPage} key={currentSystems.indexOf(system) + 1} system={system}/></Link>)

    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => (<Home />)} />
          <Route exact path='/system' render={(props) => (<SystemPage />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
