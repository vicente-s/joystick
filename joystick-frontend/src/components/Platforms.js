import React, {Component} from 'react'

export default class Platforms extends Component {
  state = {
    platforms :  []
  }

  componentDidMount() {
    fetch('http://localhost:3000/systems')
    .then(resp => resp.json())
    .then(json => this.setState({platforms:json}))
  }

  render() {
    let platformCards = this.state.platforms.map(platform =>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{platform.name}</h5>
            <p className="card-text">{platform.summary}</p>
            <a href="" class="btn btn-primary">More info</a>
          </div>
          <br/>
        </div>
    )
    return (
      <div>
        <div className="navbar sticky-top">
        Platforms
        </div>
        {platformCards}
      </div>
    )
  }

}
