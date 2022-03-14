'use strict';

let sharkI = 0,
  sharkJ = 0;
let sharkSize = 2,
  sharkEat = 0;
let answer = 0;

const eatingShark = (map, N) => {
  const di = [-1, 1, 0, 0];
  const dj = [0, 0, -1, 1];
  const queue = [[sharkI, sharkJ]];
  const visit = Array.from(Array(N), () => Array(N).fill(false));

  visit[sharkI][sharkJ] = true;

  let index = 0;
  let time = 0;

  while (true) {
    const size = queue.length - index;

    if (size === 0) {
      return false;
    }

    let ressI = N,
      ressJ = N;

    for (let s = 0; s < size; s++) {
      const current = queue[index++];

      for (let d = 0; d < 4; d++) {
        const moveI = current[0] + di[d];
        const moveJ = current[1] + dj[d];
        if (moveI < 0 || moveI >= N || moveJ < 0 || moveJ >= N) {
          continue;
        }
        if (visit[moveI][moveJ]) {
          continue;
        }
        if (map[moveI][moveJ] > sharkSize) {
          continue;
        }

        if (map[moveI][moveJ] !== 0 && map[moveI][moveJ] < sharkSize) {
          if (ressI > moveI) {
            ressI = moveI;
            ressJ = moveJ;
          } else if (ressI === moveI && ressJ > moveJ) {
            ressJ = moveJ;
          }
          visit[moveI][moveJ] = true;
        } else {
          queue.push([moveI, moveJ]);
          visit[moveI][moveJ] = true;
        }
      }
    }

    time += 1;

    if (ressI !== N && ressJ !== N) {
      //먹을 수 있는 상어가 존재
      map[ressI][ressJ] = 0;
      sharkEat++;
      sharkI = ressI;
      sharkJ = ressJ;
      if (sharkEat === sharkSize) {
        sharkSize++;
        sharkEat = 0;
      }
      answer += time; //먹었을 때만 더해줌.
      return true;
    }
  }
};

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const N = +input[0].trim();
  const map = [];
  const shark = [];

  for (let i = 0; i < N; i++) {
    const temp = input[1 + i].trim().split(' ').map(Number);
    for (let j = 0; j < N; j++) {
      if (temp[j] === 9) {
        shark.push([i, j]);
        sharkI = i;
        sharkJ = j;
      }
    }
    map.push(temp);
  }

  map[sharkI][sharkJ] = 0;

  while (eatingShark(map, N)) {}

  console.log(answer);
})();
