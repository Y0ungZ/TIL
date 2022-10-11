const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const SUDOKU_CNT = 9;
  const board = [];
  const isEmpty = [];

  for (let i = 0; i < SUDOKU_CNT; i++) {
    const line = input[i].trim().split(" ").map(Number);
    board.push(line);
    for (let j = 0; j < SUDOKU_CNT; j++) {
      if (line[j] === 0) {
        isEmpty.push([i, j]);
      }
    }
  }

  function rowCheck(row, number) {
    for (let c = 0; c < SUDOKU_CNT; c++) {
      if (board[row][c] === number) {
        return false;
      }
    }
    return true;
  }

  function colCheck(col, number) {
    for (let r = 0; r < SUDOKU_CNT; r++) {
      if (board[r][col] === number) {
        return false;
      }
    }
    return true;
  }

  function sectionCheck(row, col, number) {
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if (board[r][c] === number) {
          return false;
        }
      }
    }
    return true;
  }

  function playingSudoku(index) {
    if (index === isEmpty.length) {
      board.forEach((el) => console.log(el.join(" ")));
      process.exit(0);
    }

    const [currR, currC] = isEmpty[index];

    for (let n = 1; n < 10; n++) {
      if (!rowCheck(currR, n)) {
        continue;
      }
      if (!colCheck(currC, n)) {
        continue;
      }
      if (!sectionCheck(currR, currC, n)) {
        continue;
      }

      board[currR][currC] = n;
      playingSudoku(index + 1);
      board[currR][currC] = 0;
    }
  }

  playingSudoku(0);
})();
