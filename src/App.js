import React, { Component } from 'react';
import './App.css';
import Board from './Containers/Board/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Connect four</h1>
        </header>
        <p className="App-intro">
          To win the game, you have to connect four chess pieces horizontally,
          vertically, or diagonally. Enjoy!
        </p>

        <Board />

      </div>
    );
  }
}

export default App;
