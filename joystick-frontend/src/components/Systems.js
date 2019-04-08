import React, {Component} from 'react'

export default class System extends Component {
  render() {
    fetch('http://localhost:3000/systems').then(resp => resp.json()).then(console.log)
    return <h3> Show all your systems here!</h3>
  }
}
