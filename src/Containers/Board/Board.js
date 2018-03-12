import React, { Component } from 'react';
import Row from '../../Components/Row';

import './Board.css';

const cellStyle = {
    display: 'table-cell',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    margin: '2px',
};

class Board extends Component {
  state = {
    row: 6,
    col: 7,
    board: null,
    currentPlayer: 1,
    pieces: 0,
    winner: 0,
  }


  // initialize the chess Board
  // 0 : empty
  // 1 : 1st player
  // 2 : 2nd plaer
  componentWillMount() {
    let board = [];
    for(let i = 0; i < this.state.row; i++) {
      board.push([]);
      const row = board[i];
      for(let j = 0; j < this.state.col; j++) {
        row.push(0);
      }
    }

    this.setState({board: board});
  }


  checkWin = (player) => {
    const board = this.state.board;
    // check horizontally
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length - 3; j++){
            if(board[i][j] === player && board[i][j + 1] === player && board[i][j + 2] === player && board[i][j + 3] === player){
              return true;
            }
        }
    }

    // check vertically
    for(let j = 0; j < board[0].length; j++){
        for(let i = 0; i < board.length - 3; i++){
            if(board[i][j] === player && board[i + 1][j] === player && board[i + 2][j] === player && board[i + 3][j] === player){
              return true;
            }
        }
    }

    // check diagonally
    for (let i = 3; i < board.length; i++){
        for (let j = 3; j < board[0].length; j++){
            if (board[i][j] === player && board[i-1][j-1] === player && board[i-2][j-2] === player && board[i-3][j-3] === player)
                return true;
        }
    }

    // check anti-diagonally
    for (let i = board.length - 4; i >= 0; i--){
        for (let j = 3; j < board[0].length; j++){
            if (board[i][j] === player && board[i + 1][j - 1] === player && board[i + 2][j - 2] === player && board[i + 3][j - 3] === player)
                return true;
        }
    }

    return false;
  }


  moveHandler = (row, col) => {

    console.log(row + ' ' + col);
    if(this.state.winner !== 0) {
      return;
    }

    const board = this.state.board;
    row = board.length - 1;
    for(; row >= 0; row--) {
      if(board[row][col] === 0) {
        board[row][col] = this.state.currentPlayer;
        break;
      }
    }

    if(row < 0) {
      alert('This column is full, please select anthoer column');
      return;
    }

    // change player
    const prevPlayer = this.state.currentPlayer
    let cur = prevPlayer;
    if(cur === 1) {
      cur = 2;
    } else if(cur === 2){
      cur = 1;
    }

    const pieces = this.state.pieces + 1;
    this.setState({board: board, pieces: pieces, currentPlayer: cur});

    console.log('prev player' + prevPlayer);
    // check winner
    if(this.checkWin(prevPlayer)) {
      this.setState({winner : prevPlayer});
    };
  }

  reset = () => {
    window.location.reload();
  }

  render () {

    let board = this.state.board;
    let chessBoard = null;
    if(board) {
      chessBoard = (
        <div className='board'>
          {
            board.map((row, rowNumber) => (
              <Row
                row={row}
                rowNumber={rowNumber}
                key={rowNumber}
                moved={this.moveHandler}
                cellStyle={cellStyle}/>
            ))
          }
        </div>

      );
    }

    let msg = null;
    if(this.state.winner !== 0) {
      msg = (
        <h2 style={{color: 'red'}}>{'Player ' + this.state.winner + ' wins! ' + this.state.pieces + ' pieces played.'}</h2>
      );
    }

    return (
      <div>
        <div className='info'>
            <div style={{...cellStyle, backgroundColor: '#FFEA00'}} />
            <p>Player 1</p>
            <div style={{...cellStyle, backgroundColor: '#76FF03'}} />
            <p>Player 2</p>
        </div>
        {msg}
        <button onClick={this.reset}>Reset</button>
        {chessBoard}
        <div className='belowbar'>
          <p>Next Turn</p>
          <div style={{...cellStyle, backgroundColor: this.state.currentPlayer === 1 ? '#FFEA00' : '#76FF03'}} />
        </div>
      </div>
    );
  }
}

export default Board;
