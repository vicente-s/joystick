import React, { Component,} from 'react';
import './App.css';
import SystemColumn from './components/SystemColumn'
import {Link} from 'react-router-dom'

class App extends Component {

  state = {
    systems: []
  }

  goToPage(e) {
    {/*window.location.href = */}
  }

  render() {
    let currentSystems = ["PlayStation", "Xbox", "Nintendo"]
    let systemsRow = currentSystems.map(system => <Link to={system}><SystemColumn className="col" goToPage={this.goToPage} key={currentSystems.indexOf(system) + 1} system={system}/></Link>)

    return (
      <div className="App">
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <button className="btn btn-default">joyStick</button>
        </div>
        <div className="row">
          {systemsRow}
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
