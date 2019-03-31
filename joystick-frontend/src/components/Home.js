import React, {Component} from 'react'
import SystemColumn from './SystemColumn'

class Home extends Component {

  render() {
    let systemsRow = this.props.systems.map(system => <SystemColumn system={system} selectSystem={this.props.selectSystem}/>)
    return (
      <div className="App">
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <button className="btn btn-default">joyStick</button>
        </div>
        <div className="row">
          {systemsRow}
        </div>
        <hr/>
        <div className="GameDisplay">
        </div>
      </div>
    )
  }
}

export default Home
