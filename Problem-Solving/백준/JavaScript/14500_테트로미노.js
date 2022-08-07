const isIn = (N, M, nextN, nextM) => {
  if (nextN < 0 || nextN >= N || nextM < 0 || nextM >= M) {
    return false;
  }
  return true;
};

const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [N, M] = input[0].trim().split(" ").map(Number);
  const paper = [];
  let answer = 0;

  for (let n = 0; n < N; n++) {
    const currentRow = input[1 + n].trim().split(" ").map(Number);
    paper.push(currentRow);
  }

  const polyomino = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, -1],
      [1, -2],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, -1],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, -1],
      [1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, -1],
      [2, -1],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, -1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, -1],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, 1],
    ],
  ];

  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      for (let p = 0; p < polyomino.length; p++) {
        let sum = 0;
        const currentPolyomino = polyomino[p];
        let placedCoordinates = 0;
        for (let c = 0; c < currentPolyomino.length; c++) {
          const nextN = n + currentPolyomino[c][0];
          const nextM = m + currentPolyomino[c][1];

          if (isIn(N, M, nextN, nextM)) {
            sum += paper[nextN][nextM];
            placedCoordinates++;
          } else {
            break;
          }
        }

        if (placedCoordinates === currentPolyomino.length) {
          answer = Math.max(answer, sum);
        }
      }
    }
  }

  console.log(answer);
})();
