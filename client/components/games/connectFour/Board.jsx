import React from 'react';
import Row from './Row.jsx';

function Board({dropPiece}) {
  var rows = [];
  for(var i = 0; i < 6; i++) {
    rows.push(<Row key={i} rowNum={i} dropPiece={dropPiece}/>);
  }
  return rows;
}


export default Board;