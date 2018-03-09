import React, { Component } from 'react';
import './InstaUser.css';

class InstaUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: null,
      user2: null
    };

    this.user1input = this.user1input.bind(this);
    this.user2input = this.user2input.bind(this);
    this.fight = this.fight.bind(this);
  }

  render() {
    return (
      <div className="row justify-content-center">
        <p>Fighter 1(@User1): <input id="inputBox" type="text"
          placeholder = "Username of the Fighter 1"
          onChange = {this.user1input}
         />
        </p>
        <p>Fighter 2(@User2): <input id="inputBox" type="text"
          placeholder = "Username of the Fighter 2"
          onChange = {this.user2input} />
        </p>
        <button id="boton" onClick={this.fight}>Fight</button>
      </div>
    );
  }

  user1input (e) {
    this.setState({ user1: e.target.value });
  }

  user2input (e) {
    this.setState({ user2: e.target.value });
  }

  fight () {
      this.props.SetUserProfiles(this.state.user1, this.state.user2);
  }

}

export default InstaUser;