import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../src/globalstyles.js';
import PlayerSignIn from './playerSignIn.jsx';
import GameIndex from './gameIndex.jsx';

const Header = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  /* background-color: aliceblue; */
`

const Logo = styled.div`
  font-size: 28px;
  display: flex;
  img {
    margin: 0 20px;
  }
`

const Players = styled.div`
  
`

const LargeText = styled.span`
  font-weight: bold;
`

const Modal = styled.div`
  background-color: white;
  margin: 5% auto;
  width: max-content;
  border-radius: 20px;
  padding: 1em;
  box-sizing: border-box;
  box-shadow: 0px 0px 25px 6px rgba(0,0,0,0.16);
  text-align: center;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: '',
      currentPage: 'PlayerSignIn',
      warning: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  redirect(event, page) {
    event.preventDefault()
    if(this.state.player1==='' || this.state.player2==='') {
      this.setState({
        warning: true
      });
    } else {
      this.setState({
        currentPage: page,
        warning: false
      });
    }
    
  }

  render() {

    let pageMap = {
      'PlayerSignIn' : <PlayerSignIn 
      player1={this.state.player1} 
      player2={this.state.player2}
      redirect={this.redirect}
      handleChange={this.handleChange}
      warning={this.state.warning}
      />,
      'GameIndex' : <GameIndex/>
    }

    let currentPage = pageMap[this.state.currentPage]

    return (
      <>
        <GlobalStyle/>
        <Header>
        <Logo>
          <div><LargeText>Two Chairs</LargeText><br/>game-hub</div>
          <img src="./src/chairs.svg" width="100px"/>
        </Logo>
        {/* <Players>
          {this.state.player1} : 0<br/>
          {this.state.player2} : 0
        </Players> */}

        <a href="https://github.com/lexykio/two-chairs-game-hub">
          <img src="./src/github.svg" width="50px"/>
        </a>
        
        </Header>
        <Modal>
        {currentPage}
        </Modal>
      </>
    )
  }
}

export default App;