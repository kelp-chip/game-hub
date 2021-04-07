import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../src/globalstyles.js';
import PlayerSignIn from './PlayerSignIn.jsx';
import GameIndex from './GameIndex.jsx';
import ConnectFour from './games/connectFour/ConnectFour.jsx';

const Header = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  /* background-color: aliceblue; */
`

const Logo = styled.div`
  font-size: 28px;
  display: flex;
  cursor: pointer;
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
  margin-top: 3%;
  width: max-content;
  height: max-content;
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
      mode: 'Classic',
      currentPage: 'PlayerSignIn',
      warning: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCheckChange(event) {
    this.setState({
      mode: event.target.value,
    });
  }

  redirect(event, page) {
    event.preventDefault()
    if(this.state.player1==='' || this.state.player2==='') {
      this.setState({
        warning: '* names cannot be left blank'
      });
    }else {
      this.setState({
        currentPage: page,
        warning: false
      });
    }

    // else if (this.state.mode===''){
    //   //   this.setState({
    //   //     warning: 'please choose mode'
    //   //   });
    //   // } 
    
  }

  render() {

    let pageMap = {
      'PlayerSignIn' : <PlayerSignIn 
      player1={this.state.player1} 
      player2={this.state.player2}
      mode={this.state.mode}
      redirect={this.redirect}
      handleChange={this.handleChange}
      handleCheckChange={this.handleCheckChange}
      warning={this.state.warning}
      />,
      'GameIndex' : <GameIndex redirect={this.redirect}/>,
      'ConnectFour': <ConnectFour/>
    }

    let currentPage = pageMap[this.state.currentPage]

    return (
      <>
        <GlobalStyle/>
        <Header>
        <Logo onClick={() => this.redirect(event, 'GameIndex')}>
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
        <main>
        <Modal>
        {currentPage}
        </Modal>
        </main>
      </>
    )
  }
}

export default App;