import React, {Component} from 'react'
// import { Link } from 'react-router-dom'

class SystemColumn extends Component {
    render() {
      console.log(this.props.system)
      return (
              <div className="col" >
                <a href={this.props.system}>{this.props.system}</a>
              </div>)
            }
}

export default SystemColumn
