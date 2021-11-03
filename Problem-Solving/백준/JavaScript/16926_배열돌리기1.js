'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, R] = input[0].trim().split(' ').map(Number);
const di = [0, 1, 0, -1];
const dj = [1, 0, -1, 0];
const map = [];

for (let i = 0; i < N; i++) {
  const temp = input[1 + i].trim().split(' ');
  const tempMap = [];
  for (let j = 0; j < M; j++) {
    tempMap.push(temp[j]);
  }
  map.push(tempMap);
}

const count = Math.floor(Math.min(N, M) / 2);

for (let r = 0; r < R; r++) {
  for (let c = 0; c < count; c++) {
    let startI = c;
    let startJ = c;

    let start = map[startI][startJ];

    let direction = 0;
    while (direction < 4) {
      let mi = startI + di[direction];
      let mj = startJ + dj[direction];

      if (mi < c || mj < c || mi >= N - c || mj >= M - c) {
        direction++;
      } else {
        map[startI][startJ] = map[mi][mj];
        startI = mi;
        startJ = mj;
      }
    }
    map[c + 1][c] = start;
  }
}

let result = '';

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    result += `${map[i][j]} `;
  }
  result += `\n`;
}

console.log(result);
