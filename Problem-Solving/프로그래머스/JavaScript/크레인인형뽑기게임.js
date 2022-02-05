const findLastIdx = (board, index) => {
  let idx = -1;
  for (let i = 0; i < board.length; i++) {
    if (board[i][index] != 0) {
      idx = i;
      break;
    }
  }
  return idx;
};

const solution = (board, moves) => {
  let answer = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    let idx = findLastIdx(board, moves[i] - 1);

    if (idx === -1) {
      continue;
    }

    let current = board[idx][moves[i] - 1];

    board[idx][moves[i] - 1] = 0;

    if (basket.length !== 0) {
      let lastInsert = basket.pop();

      if (current === lastInsert) {
        answer += 2;
      } else {
        basket.push(lastInsert);
        basket.push(current);
      }
    } else {
      basket.push(current);
    }
  }

  return answer;
};
