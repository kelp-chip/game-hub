import React from 'react';
import Board from './Board.jsx';
import gameLogic from '../../../connectFourLogic.js';
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
      currentPlayer: 'p1',
      freezeBoard: false
    }
  }

    newBoard() {
    return [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ]
  }

  dropPiece(event) {
    let space = event.target.getAttribute('data-space');
    let column = space[0];
    for(let i = 5; i >= 0; i--) {
      if(!this.board[i][column]) {
        //Update board data
        this[`${this.state.currentPlayer}Board`][i][column] = true;
        this.board[i][column] = true;

        //Update board appearance
        let color = this.state.currentPlayer === 'p1' ? 'red' : 'blue';
        let row = Math.abs(i-5)
        document.querySelector(`[data-space="${column}${row}"]`).style.backgroundColor = color;
        let play = `${column}${i}`;

        //Check if current player has won
        this.isItOver(this[`${this.state.currentPlayer}Board`], play)
        break;
      }
    }

    // console.log(this[`${this.state.currentPlayer}Board`])

    let player = this.state.currentPlayer === 'p1' ? 'p2' : 'p1';
    this.setState({
      currentPlayer: player
    })

  }

  isItOver(board, play) {

    if(gameLogic.checkBoard(board, play)){
      this.setState({
        freezeBoard: true
      })
    }
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
        {this.state.freezeBoard && <div className="overlay"></div>}
      </GameContainer>
    )
  }
}

export default ConnectFour;
