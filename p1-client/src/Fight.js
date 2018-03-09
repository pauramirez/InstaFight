import React, { Component } from "react";

class Fight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null
    };
  }

  componentWillReceiveProps() {
    this.props.SetWinner((e) => (this.setState({ winner: e })));
  }

  render() {
    let fighters;
    let winner;


    fighters = this.props.fighters[0] + "  VS  " + this.props.fighters[1];

    if (this.state.winner !== null) {
      const url = "https://www.instagram.com/" + this.state.winner.profile;
      winner = (
        <div>
          <h3>El winner con es:</h3>
          <h1>@{this.state.winner.profile} 
          <h3>Con este # de likes: {this.state.winner.tempLikes} </h3>
          <a href={url} target="_blank">
            <button className="btn btn-info">Ver perfil</button>
          </a>
          </h1> 
        </div>
      );
    }
    return (
      <div className="row justify-content-center">
        <h1>Ready to Fight:</h1>
            <h4>{fighters}</h4>
            <br />
            <div>{winner}</div>     
      </div>
    );
  }
}

export default Fight;
