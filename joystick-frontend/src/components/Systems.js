import React, {Component} from 'react'

export default class System extends Component {
  state = {
    systems :  []
  }

  componentDidMount() {
    fetch('http://localhost:3000/systems')
    .then(resp => resp.json())
    .then(json => this.setState({systems:json}))
  }

  render() {
    let systemCards = this.state.systems.map(system => <button className="btn btn-default"> {system.name} </button>)
    console.log(this.state)
    return (
      <div>
        {systemCards}
      </div>
    )
  }
}
