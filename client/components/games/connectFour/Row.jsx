import React from 'react';

function Row({ rowNum, dropPiece }) {


  return (
    <div className="row">
      <div className="square" data-space={String(rowNum) + 0} onClick={dropPiece}></div>
      <div className="square" data-space={String(rowNum) + 1} onClick={dropPiece}></div>
      <div className="square" data-space={String(rowNum) + 2} onClick={dropPiece}></div>
      <div className="square" data-space={String(rowNum) + 3} onClick={dropPiece}></div>
      <div className="square" data-space={String(rowNum) + 4} onClick={dropPiece}></div>
      <div className="square" data-space={String(rowNum) + 5} onClick={dropPiece}></div>
      <div className="square" data-space={String(rowNum) + 6} onClick={dropPiece}></div>
    </div>
  )

}

export default Row;