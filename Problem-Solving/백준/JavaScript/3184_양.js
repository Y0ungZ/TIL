"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [R, C] = input[0].trim().split(" ");
const map = [];
const visit = [];
let wolf = [];
let sheepNum = 0;
let wolfNum = 0;
const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];

for (let i = 0; i < R; i++) {
  const current = input[1 + i].trim();
  let mapTemp = [];
  let visitTemp = [];
  for (let j = 0; j < C; j++) {
    mapTemp.push(current[j]);
    visitTemp.push(false);
    if (current[j] === "o") {
      sheepNum += 1;
    } else if (current[j] === "v") {
      wolf.push([i, j]);
      wolfNum += 1;
    }
  }
  map.push(mapTemp);
  visit.push(visitTemp);
}

const isIn = (i, j) => {
  if (i < 0 || i >= R || j < 0 || j >= C) {
    return false;
  }
  return true;
};

const BFS = (start) => {
  if (visit[start[0]][start[1]]) {
    return;
  }
  let queue = [];

  queue.push(start);
  let currentAreaWolf = 0;
  let currentAreaSheep = 0;

  while (queue.length !== 0) {
    const current = queue.shift();

    if (!visit[current[0]][current[1]]) {
      visit[current[0]][current[1]] = true;

      if (map[current[0]][current[1]] === "o") {
        currentAreaSheep += 1;
      } else if (map[current[0]][current[1]] === "v") {
        currentAreaWolf += 1;
      }
      for (let d = 0; d < 4; d++) {
        let mi = current[0] + di[d];
        let mj = current[1] + dj[d];

        if (!isIn(mi, mj)) {
          continue;
        }

        if (visit[mi][mj]) {
          continue;
        }

        if (map[mi][mj] === "#") {
          continue;
        }

        queue.push([mi, mj]);
      }
    }
  }

  if (currentAreaSheep === 0) {
    return;
  }

  if (currentAreaSheep > currentAreaWolf) {
    wolfNum -= currentAreaWolf;
  } else {
    sheepNum -= currentAreaSheep;
  }
};

for (let i = 0; i < wolf.length; i++) {
  BFS(wolf[i]);
}

console.log(`${sheepNum} ${wolfNum}`);
