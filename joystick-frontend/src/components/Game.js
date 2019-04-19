import React, {Component} from 'react'

class Game extends Component {
  state = {
    system: "Playstation"
  }
  render() {
    return <h1> {this.state.system}'s Page </h1>
  }
}

export default Game
