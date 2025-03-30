const solution = n => {
  let answer = 0;
  const INIT_NUMBER = n + 1;

  const isPossible = (currRow, columnsInfo) => {
    // 같은 column에 이미 퀸이 존재하면 false를 리턴한다.
    for (let row = 0; row < n; row++) {
      if (currRow === row) {
        continue;
      }
      if (columnsInfo[currRow] === columnsInfo[row]) {
        return false;
      }
    }

    // 대각선 상에 이미 퀸이 존재하면 false를 리턴한다.
    for (let row = 0; row < n; row++) {
      if (row === currRow) {
        continue;
      }
      const rowDiff = currRow - row;
      const colDiff = Math.abs(columnsInfo[currRow] - columnsInfo[row]);

      if (rowDiff === colDiff) {
        return false;
      }
    }

    return true;
  };

  const nQueenMove = (row, columnsInfo) => {
    if (row === n) {
      answer += 1;
      return;
    }

    for (let col = 0; col < n; col++) {
      // 현재 col에 퀸을 놓아본다.
      const updateColumnsInfo = [...columnsInfo];
      updateColumnsInfo[row] = col;

      if (isPossible(row, updateColumnsInfo)) {
        // 가능하다면 다음 퀸을 놓는다.
        nQueenMove(row + 1, updateColumnsInfo);
      }
    }
  };

  nQueenMove(0, Array(n).fill(INIT_NUMBER));
  return answer;
};
