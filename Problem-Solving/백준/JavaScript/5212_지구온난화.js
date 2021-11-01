'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [R, C] = input[0].trim().split(' ').map(Number);
const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];
const map = [];
const copyMap = [];

for (let i = 0; i < R; i++) {
  const temp = input[1 + i].trim();
  const tempMap = [];
  const tempMap2 = [];
  for (let j = 0; j < C; j++) {
    tempMap.push(temp[j]);
    tempMap2.push(temp[j]);
  }
  map.push(tempMap);
  copyMap.push(tempMap2);
}

const heatEarth = (i, j) => {
  let sum = 0;
  for (let d = 0; d < 4; d++) {
    let mi = i + di[d];
    let mj = j + dj[d];

    if (mi < 0 || mj < 0 || mi >= R || mj >= C) {
      sum += 1; //주의. 범위를 벗어난 곳은 모두 바다이다.
      continue;
    }

    if (map[mi][mj] === '.') {
      sum += 1;
    }
  }
  if (sum >= 3) {
    copyMap[i][j] = '.';
  }
};

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (map[i][j] === 'X') {
      heatEarth(i, j);
    }
  }
}

let startR = R;
let endR = 0;
let startC = C;
let endC = 0;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (copyMap[i][j] === 'X') {
      startR = Math.min(i, startR);
      endR = Math.max(i, endR);
      startC = Math.min(j, startC);
      endC = Math.max(j, endC);
    }
  }
}

let result = '';
for (let i = startR; i <= endR; i++) {
  for (let j = startC; j <= endC; j++) {
    result += copyMap[i][j];
  }
  result += '\n';
}

console.log(result);
