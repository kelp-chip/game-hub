import React from 'react';

function Row({ rowNum, dropPiece }) {

  return (
    <div className="row">
      <div className="square" data-space={0 + String(rowNum)} onClick={dropPiece}></div>
      <div className="square" data-space={1 + String(rowNum)} onClick={dropPiece}></div>
      <div className="square" data-space={2 + String(rowNum)} onClick={dropPiece}></div>
      <div className="square" data-space={3 + String(rowNum)} onClick={dropPiece}></div>
      <div className="square" data-space={4 + String(rowNum)} onClick={dropPiece}></div>
      <div className="square" data-space={5 + String(rowNum)} onClick={dropPiece}></div>
      <div className="square" data-space={6 + String(rowNum)} onClick={dropPiece}></div>
    </div>
  )

}

export default Row;