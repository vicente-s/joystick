import React, { Component, Ro } from 'react';
import './App.css';
import SystemColumn from './components/SystemColumn'

class App extends Component {

  goToPage(e) {
    {/*window.location.href = */}
    console.log(window.location.href + e.target.innerHTML)
  }

  render() {
    let currentSystems = ["PlayStation", "Xbox", "Nintendo"]
    let systemsRow = currentSystems.map(system => <SystemColumn goToPage={this.goToPage} key={currentSystems.indexOf(system) + 1} system={system}/>)

    return (
      <div className="App">
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <button className="btn btn-default">gamesGalore</button>
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
