"use strict";
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);
const map = [];
const visit = [];
const di = [-1, 1, 0, 0, -1, 1, 1, -1];
const dj = [0, 0, -1, 1, -1, 1, -1, 1];
let flag = true;

for (let i = 0; i < N; i++) {
  const temp = input[1 + i].trim().split(" ");
  const tempMap = [];
  const tempVisit = [];
  for (let j = 0; j < M; j++) {
    tempMap.push(Number(temp[j]));
    tempVisit.push(false);
  }
  map.push(tempMap);
  visit.push(tempVisit);
} //init setting

const DFS = (i, j) => {
  visit[i][j] = true;
  for (let d = 0; d < 8; d++) {
    const mi = i + di[d];
    const mj = j + dj[d];

    if (mi < 0 || mj < 0 || mi >= N || mj >= M) {
      continue;
    }

    if (map[i][j] < map[mi][mj]) {
      flag = false;
    }

    if (!visit[mi][mj] && map[i][j] === map[mi][mj]) {
      DFS(mi, mj);
    }
  }
};

let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] > 0 && !visit[i][j]) {
      flag = true;
      DFS(i, j);
      if (flag) {
        result++;
      }
    }
  }
}

console.log(result);
