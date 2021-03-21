import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url('./src/geometry.png');
    background-repeat: repeat;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  input {
    margin: 10px 0;
  }

  input[type=text] {
    font-size: 25px;
    padding: 15px;
    width: 80%;
    box-sizing: border-box;
  }
  input[type=submit] {
    font-size: 25px;
    padding: 10px 25px;
  }

  input[type=submit]:hover, input[type=radio]:hover {
    cursor: pointer;
  }

  input[type=radio] {
    margin: 0px 15px;
  }

  a {
    color: black;
  }

  a:hover {
    color: gray;
  }
`;

export default GlobalStyle;