function solution(m, n, board) {
  const direction = [
    [-1, 0],
    [-1, -1],
    [0, -1],
  ];
  let answer = 0;

  board = board.map((row) => row.split(""));

  function isIn(currM, currN) {
    if (currM >= m || currM < 0 || currN >= n || currN < 0) {
      return false;
    }
    return true;
  }

  while (true) {
    let removeFlag = false;
    const remove = Array.from({ length: m }, () => Array(n).fill(false));

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === "X") {
          continue;
        }

        let removeCnt = 1;
        const removeMN = [];

        for (let d = 0; d < 3; d++) {
          const mi = i + direction[d][0];
          const mj = j + direction[d][1];

          if (!isIn(mi, mj)) {
            continue;
          }

          if (board[mi][mj] === board[i][j]) {
            removeCnt++;
            removeMN.push([mi, mj]);
          }
        }

        if (removeCnt === 4) {
          removeFlag = true;
          remove[i][j] = true;
          for (let k = 0; k < removeMN.length; k++) {
            remove[removeMN[k][0]][removeMN[k][1]] = true;
          }
        }
      }
    }

    if (!removeFlag) {
      break;
    } else {
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (remove[i][j]) {
            answer++;
            board[i][j] = "X";
          }
        }
      }

      for (let j = 0; j < n; j++) {
        for (let i = m - 1; i > 0; i--) {
          for (let k = i - 1; k >= 0 && board[i][j] === "X"; k--) {
            if (board[k][j] !== "X") {
              board[i][j] = board[k][j];
              board[k][j] = "X";
              break;
            }
          }
        }
      }
    }
  }

  return answer;
}
