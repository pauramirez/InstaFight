import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstaUser from './InstaUser.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user1: null,
      user2: null,
    };
  }

  UserProfile(user, response) {
    fetch("https://www.instagram.com/" + user + "/?__a=1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.ProvideUserProfile(user, data, response);
      });
  }

  ProvideUserProfile(user, data, response) {
    const match = { profile: user, winner: null, total: 0 };
    let temp = 0;
    data.user.media.nodes.forEach((d) => {
      let profile = d.likes.count;
      match.total += profile;
      if (profile > temp) {
        match.winner = d.thumbnail_resources[1].src;
        temp = profile;
      }
    });
    response(match);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Instagram Showdown</h1>
        </header>

        <div className="row justify-content-center">
          <InstaUser />
        </div>
      </div>
    );
  }
}

export default App;
