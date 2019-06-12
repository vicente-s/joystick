import React, {Component} from 'react'
import Game from './Game'


class Games extends Component {
  state = {
    games: [],
    game: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/games')
    .then(response => response.json())
    .then(json => this.setState({games: json}))
    console.log(this)
  }



  render() {

    let games = this.state.games.map(game =>
      <div key={game.id} className="container col">
          <div className="card-body">
            <h5 className="card-title">{game.name}</h5>
            <p className="card-text">{game.summary}</p>
            <p>Platforms:{game.platforms}</p>
            <a href={`/game/${game.id}`} className="btn btn-primary">More info</a>
          </div>
        <hr/>
      </div>
    )
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
