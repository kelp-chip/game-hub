import React, { Component } from 'react';
import styled from 'styled-components';

const Warning = styled.div`
  color: red;
  margin: 20px 0;
`

class PlayerSignIn extends Component {
  constructor(props) {
    super(props);

  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.redirect(event, 'GameIndex');
  }

  render() {
    return (
      <div>
        <h2>Welcome!</h2>
        players
        <form onSubmit={()=> this.props.redirect(event, "GameIndex")}>
          <input name="player1" type="text" placeholder="Player 1" value={this.props.player1} onChange={this.props.handleChange}/>
          <input name="player2" type="text" placeholder="Player 2" value={this.props.player2} onChange={this.props.handleChange}/>
          <Warning>{!this.props.warning || this.props.warning}</Warning>
          {/* <div> */}
          <fieldset onChange={() => this.props.handleCheckChange(event)}>
            <input type="radio" value="Classic" name="mode" defaultChecked/> Classic
            <input type="radio" value="Animal Party" name="mode"/> Animal Party
          </fieldset>
          {/* </div> */}

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default PlayerSignIn;