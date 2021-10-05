"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].trim().split(" ");
const map = [];

for (let i = 0; i < N; i++) {
  const current = input[1 + i].trim();
  const temp = [];
  for (let j = 0; j < M; j++) {
    temp.push(Number(current[j]));
  }
  map.push(temp);
} //init setting

const isOK = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j]) return false;
    }
  }
  return true;
};

const swap = (nextI, nextJ) => {
  for (let i = 0; i <= nextI; i++) {
    for (let j = 0; j <= nextJ; j++) {
      if (map[i][j]) {
        map[i][j] = 0;
      } else {
        map[i][j] = 1;
      }
    }
  }
};

let result = 0;

for (let i = N - 1; i >= 0; i--) {
  for (let j = M - 1; j >= 0; j--) {
    if (map[i][j]) {
      result++;
      swap(i, j);
    }
  }
}

console.log(result);
