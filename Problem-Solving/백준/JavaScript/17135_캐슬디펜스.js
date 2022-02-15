'use strict';

let solution = 0;

const allEnemyKill = (map, N, M) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1) {
        return false;
      }
    }
  }
  return true;
};

const calcDistance = (r1, r2, c1, c2) => {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2);
};

const movingEnemy = (map, N, M) => {
  for (let i = N - 1; i > 0; i--) {
    for (let j = 0; j < M; j++) {
      map[i][j] = map[i - 1][j];
    }
  }

  for (let j = 0; j < M; j++) {
    map[0][j] = 0;
  }

  return map;
};

const attackEnemy = (map, D, N, M) => {
  let count = 0;
  const tempMap = map.map((el) => el.slice());
  const archer = [];

  for (let j = 0; j < M; j++) {
    if (tempMap[N][j] === 2) {
      archer.push(j);
    }
  }

  while (true) {
    const attack = [];

    for (let k = 0; k < 3; k++) {
      let minValue = 100000;

      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (tempMap[i][j] === 1) {
            let distance = calcDistance(i, N - 1, j, archer[k]);
            minValue = Math.min(minValue, distance);
          } //가장 최소값 먼저 찾기
        }
      }

      let flag = false;

      for (let j = 0; j < M; j++) {
        for (let i = N - 1; i >= 0; i--) {
          if (tempMap[i][j] === 1) {
            let distance = calcDistance(i, N - 1, j, archer[k]);
            if (distance < D && distance === minValue) {
              attack.push([i, j]);
              flag = true;
              break;
            }
          }
        }
        if (flag) {
          break;
        }
      }
    }

    for (let i = 0; i < attack.length; i++) {
      if (tempMap[attack[i][0]][attack[i][1]] === 1) {
        count++;
        tempMap[attack[i][0]][attack[i][1]] = 0;
      }
    }

    if (allEnemyKill(tempMap, N, M)) {
      return count;
    } else {
      movingEnemy(tempMap, N, M);
    }
  }
};

const puttingArcher = (map, N, M, cnt, index, D) => {
  if (cnt === 3) {
    let count = attackEnemy(map, D, N, M);
    solution = Math.max(count, solution);
    return;
  }

  for (let i = index; i < M; i++) {
    map[N][i] = 2;
    puttingArcher(map, N, M, cnt + 1, i + 1, D);
    map[N][i] = 0;
  }
};

const main = (function () {
  //0:빈 칸, 1: 적, 2: 궁수
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const [N, M, D] = input[0].trim().split(' ').map(Number);
  const map = [];

  for (let i = 0; i < N; i++) {
    const read = input[1 + i].trim().split(' ').map(Number);
    map.push(read);
  }

  map.push(Array.from({ length: M }, () => 0));

  puttingArcher(map, N, M, 0, 0, D);

  console.log(solution);
})();
