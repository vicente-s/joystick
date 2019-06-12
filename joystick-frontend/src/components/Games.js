import React, {Component} from 'react'
import GameCard from './GameCard'


class Games extends Component {

  state = {
    games: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/games')
    .then(response => response.json())
    .then(json => this.setState({games: json}))
  }

  render() {
    let games = this.state.games.map(game => <GameCard key={game.id} game={game}/>)
    return (
      <div>
        <div className="navbar sticky-top">
        Games
        </div>
        {games}
      </div>
    )
  }
}

export default Games
