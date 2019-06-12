import React, {Component} from 'react'

class Game extends Component {
  state = {
    game: "Stick Fighter II"
  }
  render() {
    return <h1> This is {this.state.game}'s' Page </h1>
  }
}

export default Game
