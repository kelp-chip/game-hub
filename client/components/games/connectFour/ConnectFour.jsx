import React from 'react';
import Board from './Board.jsx';
import gameLogic from './gameLogic.js';
import styled from 'styled-components';

const GameContainer = styled.div`
  position: relative;
`

class ConnectFour extends React.Component {
  constructor(props) {
    super(props)
    this.dropPiece = this.dropPiece.bind(this);
    this.board = this.newBoard();
    this.p1Board = this.newBoard();
    this.p2Board = this.newBoard();

    this.state = {
      currentPlayer: 'p1'
    }
  }

  newBoard() {
    return [
      [false, false, false, false, false, false], //column
      [false, false, false, false, false, false], //column
      [false, false, false, false, false, false], //column
      [false, false, false, false, false, false], //column
      [false, false, false, false, false, false], //column
      [false, false, false, false, false, false], //column
      [false, false, false, false, false, false]  //column
    ]
  }

  dropPiece(event) {
    var space = event.target.getAttribute('data-space')
    var col = space[1];
    // console.log(`${this.state.currentPlayer}Board`)
    var column = this.board[col]
    var playerColumn = this[`${this.state.currentPlayer}Board`][col]
    for (var i = column.length - 1; i >= 0; i--) {
      if (!column[i]) {
        column[i] = true;
        playerColumn[i] = true;
        var spot = String(i) + String(col);
        var color = this.state.currentPlayer === 'p1' ? 'red' : 'blue';
        document.querySelector(`[data-space="${spot}"]`).style.backgroundColor = color;

        this.isItOver(this[`${this.state.currentPlayer}Board`], spot)

        // console.log('GAME: ', over)
        break
      }
    }

    var player = this.state.currentPlayer === 'p1' ? 'p2' : 'p1';
    this.setState({
      currentPlayer: player
    })

  }

  isItOver(board, play) {

    gameLogic.checkBoard(board, play);
    // console.log(board)
    // console.log(play)

    // alert('wins')

  }

  freezeBoard() {

  }

  render() {
    return (
      <GameContainer>
        <div id="perimeter"><Board dropPiece={this.dropPiece}/></div>
        {/* <div className="overlay"></div> */}
      </GameContainer>
    )
  }
}

export default ConnectFour;
