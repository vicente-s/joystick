import React, {Component} from 'react'
import SystemColumn from './SystemColumn'

class Home extends Component {

  render() {

    return (
      <div className="App">
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <button className="btn btn-default">joyStick</button>
        </div>
        <div className="row">

        </div>
        <hr/>
        <div className="GameDisplay">
        </div>
      </div>
    )
  }
}

export default Home
