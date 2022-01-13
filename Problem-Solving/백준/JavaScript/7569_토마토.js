'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N, H] = input[0].trim().split(' ').map(Number);
const farm = [];
let index = 1;

for (let k = 0; k < H; k++) {
  const floor = [];
  for (let i = 0; i < N; i++) {
    const land = [];
    const current = input[index++].trim().split(' ').map(Number);
    for (let j = 0; j < M; j++) {
      land.push(current[j]);
    }
    floor.push(land);
  }
  farm.push(floor);
} //init settings

const di = [-1, 1, 0, 0, 0, 0];
const dj = [0, 0, -1, 1, 0, 0];
const dk = [0, 0, 0, 0, -1, 1];

const isIn = (k, i, j) => {
  if (k < 0 || k >= H) return false;
  if (i < 0 || i >= N) {
    return false;
  }
  if (j < 0 || j >= M) {
    return false;
  }
  return true;
};

const everythingGrow = (map) => {
  for (let k = 0; k < H; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[k][i][j] === 0) {
          return false;
        }
      }
    }
  }
  return true;
};

const BFS = (map) => {
  const queue = [];

  if (everythingGrow(map)) {
    return 0;
  }

  for (let k = 0; k < H; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[k][i][j] === 1) {
          queue.push([k, i, j]);
        }
      }
    }
  }

  let time = 1;
  let index = 0; //shift()연산 대체

  while (true) {
    let size = queue.length - index;

    if (size === 0) {
      //queue.empty와 같음
      break;
    }

    for (let i = 0; i < size; i++) {
      const current = queue[index++];

      for (let d = 0; d < 6; d++) {
        const mk = current[0] + dk[d];
        const mi = current[1] + di[d];
        const mj = current[2] + dj[d];

        if (!isIn(mk, mi, mj)) {
          continue;
        }

        if (map[mk][mi][mj] === 0) {
          map[mk][mi][mj] = 1;
          queue.push([mk, mi, mj]);
        }
      }
    }

    if (everythingGrow(map)) {
      return time;
    }

    time++;
  }

  return time;
};

let answer = BFS(farm);

if (!everythingGrow(farm)) {
  console.log(-1);
} else {
  console.log(answer);
}
