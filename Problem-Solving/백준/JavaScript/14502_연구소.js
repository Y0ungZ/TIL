'use strict';
let result = 0;

const isIn = (mi, mj, n, m) => {
  return mi < 0 || mi >= n || mj < 0 || mj >= m ? false : true;
};

const spreadVirus = (map) => {
  const di = [-1, 1, 0, 0];
  const dj = [0, 0, -1, 1];

  const virus = [];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === 2) {
        virus.push([i, j]);
      }
    }
  } //bfs init settings

  let index = 0;

  while (true) {
    let size = virus.length - index;

    if (size === 0) {
      break;
    }

    for (let i = 0; i < size; i++) {
      const current = virus[index++];

      for (let d = 0; d < 4; d++) {
        const mi = current[0] + di[d];
        const mj = current[1] + dj[d];

        if (!isIn(mi, mj, map.length, map[0].length)) {
          continue;
        }

        if (map[mi][mj] !== 0) {
          continue;
        }

        map[mi][mj] = 2;
        virus.push([mi, mj]);
      }
    }
  }

  return map;
};

const buildWall = (map, index, count, max) => {
  if (count === 3) {
    let tempMap = map.map((el) => el.slice());
    let resultMap = spreadVirus(tempMap);
    let sum = 0;

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (resultMap[i][j] === 0) {
          sum++;
        }
      }
    }

    result = Math.max(sum, result);

    return;
  }

  if (index >= max) {
    return;
  }

  let i = Math.floor(index / map[0].length);
  let j = index % map[0].length;

  if (map[i][j] === 0) {
    map[i][j] = 1;
    buildWall(map, index + 1, count + 1, max);
    map[i][j] = 0;
  }
  buildWall(map, index + 1, count, max);
};

const main = (function () {
  const fs = require('fs');

  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const [N, M] = input[0].trim().split(' ').map(Number);
  const map = [];

  for (let i = 0; i < N; i++) {
    const temp = input[1 + i].trim().split(' ').map(Number);
    map.push(temp);
  }

  buildWall(map, 0, 0, N * M);

  console.log(result);
})();
