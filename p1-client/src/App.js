import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstaUser from './InstaUser.js';
import Fight from './Fight.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user1: null,
      user2: null,
      winner: null,
    };
    this.SetProfiles = this.SetProfiles.bind(this);
  }

  UserProfile(user, response) {
    fetch("https://www.instagram.com/" + user + "/?__a=1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          window.alert("Ha habido un problema con la pelea, verifique que los contrincantes no tengan un @ y esten debidamente escritos es decir no sean privados");
        }
        else {
          const profile = { profiles: user, Templikes: 0 };
          var post = data.user.media.nodes;
          for (let i = 0; i < post.length; i++) {
            var likes = data.user.media.nodes[i].likes.count;
            profile.Templikes += likes;
          }
        }
      });
    response(profile);
  }

  SetProfiles(usuario1, usuario2) {
    this.setState({ user1: usuario1, user2: usuario2 });
  }

  SetWinner() {
    this.UserProfile(this.state.user1, (result1) => {
      this.UserProfile(this.state.user2, (result2) => {
        if (result1.Templikes >= result2.Templikes) {
          this.setState({ winner: this.state.user1 });
        } else {
          this.setState({ winner: this.state.user2 });
        }
      });
    });

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Instagram Showdown</h1>
        </header>

        <div className="row justify-content-center">
          <InstaUser
            SetUserProfiles={this.SetProfiles} />
          <Fight
            fighters={[this.state.user1, this.state.user2]}
            SetWinner={this.SetWinner} />
        </div>
      </div>
    );
  }
}

export default App;
