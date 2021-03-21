import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
`

const Game = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d2e1f0;
  margin: 20px;
  border-radius:8px;
  font-size: 20px;
  cursor: pointer;
`

function GameIndex() {
    return (
        <Container>
            <Game>Tic Tac Toe</Game>
            <Game>Connect Four</Game>
        </Container>
    )
}

export default GameIndex;