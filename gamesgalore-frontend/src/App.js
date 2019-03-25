import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let currentSystems = ["Playstation 4", "Xbox One", "Nintendo Switch", "Mobile"]
    let systemRow = currentSystems.map(system =>
      <div className="col">
        <button className="btn">{system}</button>
      </div>
    )

    return (
      <div className="App">
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <button className="btn btn-default">gamesGalore</button>
        </div>
        <div className="row">
            {systemRow}
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
