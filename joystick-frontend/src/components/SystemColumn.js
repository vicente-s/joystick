import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class SystemColumn extends Component {
    render() {
      return (
              <div className="col" >
                <button className="btn" onClick={this.props.selectSystem}>{this.props.system}</button>
              </div>)
            }
}

export default SystemColumn
