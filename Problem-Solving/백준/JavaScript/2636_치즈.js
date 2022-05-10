const isRunOut = (map) => {
  for (let i = 0; i < map.length; i++) {
    const line = map[i];
    if (line.includes(1)) {
      return false;
    }
  }
  return true;
};

const meltingCheeze = (map, N, M) => {
  const di = [-1, 1, 0, 0];
  const dj = [0, 0, -1, 1];
  const queue = [];
  queue.push([0, 0]);

  const visited = Array.from(Array(N), () => Array(M).fill(false));
  visited[0][0] = true;

  let index = 0;

  while (true) {
    const size = queue.length - index;

    if (size === 0) {
      break;
    }

    for (let i = 0; i < size; i++) {
      const [currentI, currentJ] = queue[index++];

      for (let d = 0; d < 4; d++) {
        const moveI = currentI + di[d];
        const moveJ = currentJ + dj[d];

        if (moveI < 0 || moveI >= N || moveJ < 0 || moveJ >= M || visited[moveI][moveJ]) {
          continue;
        }

        if (map[moveI][moveJ] === 1) {
          map[moveI][moveJ] = 0;
          visited[moveI][moveJ] = true;
        } else {
          visited[moveI][moveJ] = true;
          queue.push([moveI, moveJ]);
        }
      }
    }
  }
};

const countCheeze = (map) => {
  let count = 0;
  for (let i = 0; i < map.length; i++) {
    const line = map[i];
    line.map((el) => {
      if (el) count++;
    });
  }
  return count;
};

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [N, M] = input[0].trim().split(' ').map(Number);
  const map = [];

  for (let i = 0; i < N; i++) {
    const line = input[1 + i].trim().split(' ').map(Number);
    map.push(line);
  }

  let answer = 0;
  let time = 0;

  while (true) {
    if (isRunOut(map)) {
      break;
    }

    answer = countCheeze(map);
    time++;
    meltingCheeze(map, N, M);
  }

  console.log(`${time}\n${answer}`);
})();
