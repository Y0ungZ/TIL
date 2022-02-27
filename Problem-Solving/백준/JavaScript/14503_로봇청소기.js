'use strict';

const rotateDegree = (idx) => {
  return Math.floor((idx + 3) % 4);
};

const backward = (idx) => {
  return Math.floor((idx + 2) % 4);
};

const isIn = (r, c, N, M) => {
  return r >= 0 && r < N && c >= 0 && c < M ? true : false;
};

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [N, M] = input[0].trim().split(' ').map(Number);
  const [r, c, d] = input[1].trim().split(' ').map(Number);
  const map = [];
  const di = [-1, 0, 1, 0]; //북,동,남,서
  const dj = [0, 1, 0, -1];
  let result = 1;

  for (let i = 0; i < N; i++) {
    const temp = input[2 + i].trim().split(' ').map(Number);
    map.push(temp);
  }

  const visit = map.map((el) => el.slice().fill(false));
  let ci = r,
    cj = c,
    cd = d;

  visit[ci][cj] = true;

  while (true) {
    let current = 0;
    for (let i = 0; i < 4; i++) {
      let mi = ci + di[i];
      let mj = cj + dj[i];

      if (!isIn(mi, mj, N, M)) {
        current++;
        continue;
      }

      if (map[mi][mj] === 1 || visit[mi][mj]) {
        current++;
      }
    }

    if (current === 4) {
      let md = backward(cd);
      let mi = ci + di[md];
      let mj = cj + dj[md];

      if (!isIn(mi, mj, N, M) || map[mi][mj] === 1) {
        break;
      } else {
        ci = mi;
        cj = mj;
      }
    } else {
      let md = rotateDegree(cd);
      let mi = ci + di[md];
      let mj = cj + dj[md];

      if (isIn(mi, mj, N, M)) {
        cd = md;

        if (map[mi][mj] === 0 && !visit[mi][mj]) {
          visit[mi][mj] = true;
          result++;
          ci = mi;
          cj = mj;
        }
      }
    }
  }

  console.log(result);
})();
