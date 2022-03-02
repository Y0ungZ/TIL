'use strict';

const isIn = (i, j, maxI, maxJ) => {
  return i < 0 || i >= maxI || j < 0 || j >= maxJ ? false : true;
};

const calcSatisfaction = (classroom, order, likeStudents, di, dj, N) => {
  let sum = 0;

  for (let n = 0; n < N * N; n++) {
    let likeCount = 0;
    let currentStudent = order[n];
    let currentLikeStudent = likeStudents[n];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (classroom[i][j] !== currentStudent) {
          continue;
        }

        for (let d = 0; d < 4; d++) {
          let nextI = i + di[d];
          let nextJ = j + dj[d];

          if (!isIn(nextI, nextJ, N, N)) {
            continue;
          }

          if (currentLikeStudent.includes(classroom[nextI][nextJ])) {
            likeCount++;
          }
        }
      }
    }

    if (likeCount !== 0) {
      sum += Math.pow(10, likeCount - 1);
    }
  }
  return Math.floor(sum);
};

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const N = +input[0].trim();
  const order = [];
  const likeStudents = [];
  const classroom = Array.from(Array(N), () => Array(N).fill(0));
  const di = [-1, 1, 0, 0];
  const dj = [0, 0, -1, 1];

  for (let i = 0; i < N * N; i++) {
    const temp = input[1 + i].trim().split(' ').map(Number);
    order.push(temp[0]);
    likeStudents.push([temp[1], temp[2], temp[3], temp[4]]);
  }

  for (let n = 0; n < N * N; n++) {
    const currentStudent = order[n];
    const currentLikeStudent = likeStudents[n];

    let minI = N,
      minJ = N;

    let maxLike = 0,
      maxEmpty = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (classroom[i][j] !== 0) {
          continue;
        }

        let likeCount = 0;
        let emptyCount = 0;

        for (let d = 0; d < 4; d++) {
          let nextI = i + di[d];
          let nextJ = j + dj[d];

          if (!isIn(nextI, nextJ, N, N)) {
            continue;
          }

          if (currentLikeStudent.includes(classroom[nextI][nextJ])) {
            likeCount++;
          }

          if (classroom[nextI][nextJ] === 0) {
            emptyCount++;
          }
        }

        if (likeCount > maxLike) {
          maxLike = likeCount;
          minI = i;
          minJ = j;
          maxEmpty = emptyCount;
          continue;
        }

        if (likeCount === maxLike) {
          if (emptyCount > maxEmpty) {
            maxEmpty = emptyCount;
            minI = i;
            minJ = j;
            continue;
          } else if (emptyCount === maxEmpty) {
            if (minI > i || (minI === i && minJ > j)) {
              minI = i;
              minJ = j;
              continue;
            }
          }
        }
      }
    }
    classroom[minI][minJ] = currentStudent;
  }

  console.log(calcSatisfaction(classroom, order, likeStudents, di, dj, N));
})();
