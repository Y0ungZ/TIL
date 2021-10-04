"use strict";
//https://url.kr/1sjrtm
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];

let index = 0;
let result = 1;
let N = Number(input[index++]);
const makeArray = (N, value) => Array.from(Array(N), () => Array(N).fill(value));
let map;
let dist;

const dijkstra = (map, dist, N) => {
  const pq = [];
  dist[0][0] = map[0][0];
  pq.push([0, 0, map[0][0]]);

  while (pq.length !== 0) {
    let smallIdx = 0;

    for (let i = 0; i < pq.length; i++) {
      if (pq[i][2] < pq[smallIdx][2]) {
        smallIdx = i;
      }
    }

    const current = pq.splice(smallIdx, 1)[0];

    if (current[0] === N - 1 && current[1] === N - 1) {
      return current[2];
    }

    const row = Number(current[0]);
    const col = Number(current[1]);

    for (let d = 0; d < 4; d++) {
      let mi = row + di[d];
      let mj = col + dj[d];

      if (mi < 0 || mi >= N || mj < 0 || mj >= N) continue;

      if (dist[mi][mj] > current[2] + map[mi][mj]) {
        dist[mi][mj] = current[2] + map[mi][mj];
        pq.push([mi, mj, Number(dist[mi][mj])]);
      }
    }
  }
};

while (N !== 0) {
  map = [];
  dist = makeArray(N, 10000);
  for (let i = 0; i < N; i++) {
    const current = input[index++].trim().split(" ");
    const tempMap = [];
    for (let j = 0; j < N; j++) {
      tempMap.push(Number(current[j]));
    }
    map.push(tempMap);
  } // init setting

  console.log(`Problem ${result++}: ${dijkstra(map, dist, N)}`);
  N = Number(input[index++]);
}
