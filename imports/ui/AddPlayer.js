import React from 'react';
import { Players } from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();

    if (playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0,
      });
    }
  }

  render() {
    return (
      <div className="item item--card">
        <form onSubmit={this.handleSubmit.bind(this)} className="form">
          <input
            className="form__input"
            type="text"
            name="playerName"
            placeholder="Enter player name"
          />
          <button className="button button--primary">Add Player</button>
        </form>
      </div>
    );
  }
}
