import React, {Component} from 'react'

class GameCard extends Component {

  render() {
    console.log(this.props)
    return (
        <div className="card mb-3" stylename="max-width: 540px;">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="..." className="card-img" alt='Game Cover'/>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.game.name}</h5>
              <p className="card-text">{this.props.game.summary}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default GameCard
