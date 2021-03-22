const checkHorizontals = (board, play) => {
    // console.log(board[play[0]])
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

const checkDiagonal = (board, play) => {

}

//0 - row
//1 - column


module.exports = {
    checkBoard: (board, play)=>{
    if(checkHorizontals(board, play) || checkVerticals(board, play)) {
        return true;
    }
    return false;
    
  }
}