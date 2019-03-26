import React, {Component} from 'react'

class SystemColumn extends Component {
    render() {
      return (
              <div className="col" onClick={this.props.goToPage}>
                <button className="btn" onClick={this.props.goToPage}>{this.props.system}</button>
              </div>)
            }
}

export default SystemColumn
