"use strict";

const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const T = Number(input[0]);
let index = 1;
const dx = [-2, -2, 2, 2, -1, -1, 1, 1];
const dy = [-1, 1, -1, 1, -2, 2, -2, 2];

const BFS = (curX, curY, wantX, wantY, map, I) => {
  const queue = [];
  queue.push([curX, curY]);
  let level = 0;

  while (queue.length !== 0) {
    let size = queue.length;
    level++;

    for (let i = 0; i < size; i++) {
      let current = queue.shift();

      if (Number(current[0]) === Number(wantX) && Number(current[1]) === Number(wantY)) {
        return level;
      }

      if (map[current[0]][current[1]]) {
        continue;
      }

      map[current[0]][current[1]] = true;

      for (let d = 0; d < 8; d++) {
        let mx = Number(current[0]) + dx[d];
        let my = Number(current[1]) + dy[d];

        if (mx < 0 || mx >= I || my < 0 || my >= I) {
          continue;
        }

        if (map[mx][my]) {
          continue;
        }

        queue.push([mx, my]);
      }
    }
  }
};

for (let t = 0; t < T; t++) {
  const I = Number(input[index++]);

  const map = [];

  for (let i = 0; i < I; i++) {
    const tempMap = [];
    for (let j = 0; j < I; j++) {
      tempMap.push(false);
    }
    map.push(tempMap);
  }

  const [curX, curY] = input[index++].trim().split(" ");
  const [wantX, wantY] = input[index++].trim().split(" ");

  const result = BFS(curX, curY, wantX, wantY, map, I);

  console.log(result - 1);
}
