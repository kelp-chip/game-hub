const checkHorizontals = (board, play) => {
    let streak = 0;
    for (column of board) {
        if(column[play[0]]) {
          streak++
        } else {
          streak = 0;
        }
        if(streak === 4) {
            return true;
        }
    }
    return false
}

const checkVerticals = (board, play) => {
    let streak = 0;
    for(square of board[play[1]]) {
        if(square) {
          streak++
        } else {
          streak = 0;
        }
        if(streak === 4) {
            return true;
        }
    }
    return false;
}

const checkMinorDiagonal = (board, play) => {
  let row = 5 - play[1];
  let column = play[0];
  let smaller = row < column? row: column;
  if(smaller !== 0) {
    row = row - smaller;
    column = column - smaller;
  }

  let streak = 0;
  if(column === 0) {
    while(row < 6) {
      let inverseRow = Math.abs(row - 5);
      if(board[column][inverseRow]) {
        streak++
        if(streak === 4) return true;
      } else {
        streak = 0;
      }
      column++;
      row++;
    }
  } else if(column >= 1 && column < 4) {
    while(column < 7) {
      let inverseRow = Math.abs(row - 5);
      if(board[inverseRow][column]) {
        streak++
        if(streak === 4) return true;
      } else {
        streak = 0;
      }
      column++;
      row++;
    }
  }
  return false;
}

const checkMajorDiagonal = (board, play) => {
  let row = 5 - play[1];
  let column = 6 - play[0];
  let smaller = row < column? row: column;
  if(smaller !== 0) {
    row = row - smaller;
    column = column - smaller;
  }
  column = Math.abs(column - 6)
  row = Math.abs(row - 5)
  let streak = 0;
  if(column > 4) {
    while(row >= 0) {
      if(board[row][column]) {
        streak++
        if(streak === 4) return true;
      } else {
        streak = 0;
      }
      row--
      column--
    }

  } else if(column >= 3) {
    while(column >= 0) {
      if(board[row][column]) {
        streak++
        if(streak === 4) return true;
      } else {
        streak = 0;
      }
      row--
      column--
    }
  }
  return false
}

const checkDiagonals = (board, play) => {
  if(checkMinorDiagonal(board, play) || checkMajorDiagonal(board, play)) return true;
  return false;
}


module.exports = {
    checkBoard: (board, play)=>{
    if(checkDiagonals(board, play) || checkHorizontals(board, play) || checkVerticals(board, play)) {
      return true;
    }
    return false;
  }
}