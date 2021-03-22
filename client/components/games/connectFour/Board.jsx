import React from 'react';
import Row from './Row.jsx';

function Board({dropPiece}) {
  var rows = [];
  for(var i = 5; i >= 0; i--) {
    rows.push(<Row key={i} rowNum={i} dropPiece={dropPiece}/>);
  }
  return rows;
}


export default Board;