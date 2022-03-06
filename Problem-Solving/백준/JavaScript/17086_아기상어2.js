'use strict';

const isIn = (i, j, N, M) => {
  return i < 0 || i >= N || j < 0 || j >= M ? false : true;
};

const getSafety = (map, N, M) => {
  let max = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      max = Math.max(max, map[i][j]);
    }
  }
  return max - 1;
};

const bfs = (map, shark, isShark, N, M) => {
  const queue = [];
  queue.push(shark);

  const di = [-1, 1, 0, 0, -1, 1, -1, 1];
  const dj = [0, 0, -1, 1, 1, -1, -1, 1];

  let index = 0;

  while (true) {
    let size = queue.length - index;

    if (size === 0) {
      break;
    }

    for (let s = 0; s < size; s++) {
      const current = queue[index++];

      for (let d = 0; d < 8; d++) {
        const mi = current[0] + di[d];
        const mj = current[1] + dj[d];
        if (!isIn(mi, mj, N, M)) {
          continue;
        }

        if (isShark[mi][mj]) {
          continue;
        }

        let safety = map[current[0]][current[1]] + 1;

        if (map[mi][mj] === 0 || map[mi][mj] > safety) {
          map[mi][mj] = safety;
          queue.push([mi, mj]);
        }
      }
    }
  }
};

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [N, M] = input[0].trim().split(' ').map(Number);

  const map = [];
  const shark = [];

  const isShark = Array.from(Array(N), () => Array(M).fill(false));

  for (let i = 0; i < N; i++) {
    const temp = input[1 + i].trim().split(' ').map(Number);
    map.push(temp);
    for (let j = 0; j < M; j++) {
      if (temp[j] === 1) {
        shark.push([i, j]);
        isShark[i][j] = true;
      }
    }
  }

  for (let s = 0; s < shark.length; s++) {
    bfs(map, shark[s], isShark, N, M);
  }

  console.log(getSafety(map, N, M));
})();
