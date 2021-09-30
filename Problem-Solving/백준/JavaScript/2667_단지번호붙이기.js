"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const map = [];
const visit = [];

for (let i = 0; i < N; i++) {
  const current = input[1 + i].trim();
  const tempMap = [];
  const tempVisit = [];
  for (let j = 0; j < N; j++) {
    tempMap.push(current[j]);
    tempVisit.push(false);
  }
  map.push(tempMap);
  visit.push(tempVisit);
}

const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];
const people = [];
let estate = 1;

const BFS = (i, j, estate) => {
  const queue = [];
  queue.push([i, j]);
  let num = 1;

  while (queue.length !== 0) {
    const current = queue.shift();

    if (visit[current[0]][current[1]]) {
      continue;
    }

    visit[current[0]][current[1]] = true;

    for (let d = 0; d < 4; d++) {
      let mi = current[0] + di[d];
      let mj = current[1] + dj[d];

      if (mi < 0 || mi >= N || mj < 0 || mj >= N) {
        continue;
      }

      if (visit[mi][mj]) {
        continue;
      }

      if (map[mi][mj] !== "1") {
        continue;
      }

      map[mi][mj] = estate;
      queue.push([mi, mj]);
      num++;
    }
  }

  return num;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === "0") {
      continue;
    }
    if (visit[i][j]) {
      continue;
    }
    people.push(BFS(i, j, estate++));
  }
}

people.sort((a, b) => Number(a) - Number(b));

let output = "";
output += `${estate - 1}\n`;

for (let i = 0; i < people.length; i++) {
  output += `${people[i]}\n`;
}

console.log(output);
