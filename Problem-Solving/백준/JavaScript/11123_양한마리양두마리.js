"use strict";

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().trim().split("\n");
const T = Number(input[0]);
input = input.splice(1);
let index = 0;
const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];

const isIn = (i, H, j, W) => {
  if (i < 0 || i >= H || j < 0 || j >= W) {
    return false;
  }
  return true;
};

const BFS = (start, visit, map, H, W) => {
  if (visit[start[0]][start[1]]) {
    return false;
  }

  let queue = [];
  queue.push(start);

  while (queue.length !== 0) {
    const current = queue.shift();

    if (!visit[current[0]][current[1]]) {
      visit[current[0]][current[1]] = true;

      for (let d = 0; d < 4; d++) {
        let mi = current[0] + di[d];
        let mj = current[1] + dj[d];

        if (!isIn(mi, H, mj, W)) {
          continue;
        }
        if (map[mi][mj] === ".") {
          continue;
        }

        queue.push([mi, mj]);
      }
    }
  }
  return true;
};

for (let t = 0; t < T; t++) {
  const [H, W] = input[index++].trim().split(" ");

  const map = [];
  const visit = [];
  const sheep = [];
  let result = 0;

  for (let i = 0; i < H; i++) {
    const current = input[index++];
    const mapTemp = [];
    const visitTemp = [];
    for (let j = 0; j < W; j++) {
      mapTemp.push(current[j]);
      visitTemp.push(false);
      if (current[j] === "#") {
        sheep.push([i, j]);
      }
    }
    map.push(mapTemp);
    visit.push(visitTemp);
  } //end initial setting

  for (let i = 0; i < sheep.length; i++) {
    if (BFS(sheep[i], visit, map, H, W)) {
      result++;
    }
  }

  console.log(result);
}
