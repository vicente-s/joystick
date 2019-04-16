import React, {Component} from 'react'

class Games extends Component {
  state = {
    games: []
  }
  componentDidMount() {
    fetch('http://localhost:3000/games')
    .then(response => response.json())
    .then(json => this.setState({games: json}))
  }

  render() {
    {/* make a function to make fetches*/}
    console.log(this.state)
    let games = this.state.games.map(game =>
      <div key={game.id} className="container">
        <div className="card-body">
          <h5 className="card-title">{game.name}</h5>
          <p className="card-text">{game.summary}</p>
          {/* needs to go to the games show page*/}
          <a href={`games/${game.id}`} className="btn btn-primary">More info</a>
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
