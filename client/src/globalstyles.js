import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box;
  }

  main {
    /* background-color: red; */
    z-index: 10;
    height: 80vh;
    display: flex;
    justify-content: center;
  }

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


  .row {
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: auto auto auto auto auto auto auto;
  /* background-color: aliceblue; */
  width: max-content;
}
.square {
  width: 90px;
  height: 90px;
  border: black solid 2px;
  cursor: pointer;
}

#perimeter {
  border: black solid 2px;
  width: 634px;
}

.piece {
  background-color: red;
}

.overlay {
  z-index: 10;
  width: 634px;
  height: 540px;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  left: -10px;
  top: -10px;
  padding: 10px;
  padding-bottom: 15px;
  box-sizing: content-box;
  border-radius: 15px;
}

fieldset {
  border:none;
}
`;

export default GlobalStyle;