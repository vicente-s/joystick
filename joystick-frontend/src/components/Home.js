import React, {Component} from 'react'


class Home extends Component {

  render() {
    return (
      <div className="App">
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <button className="btn btn-default">joyStick</button>
        </div>
        <div className="row">
          <div className="col">
            <a href="games">Games</a>
          </div>
          <div className="col">
            <a href="platforms">Platforms</a>
          </div>
        </div>
        <hr/>
        <div className="GameDisplay">
        </div>
      </div>
    )
  }
}

export default Home
