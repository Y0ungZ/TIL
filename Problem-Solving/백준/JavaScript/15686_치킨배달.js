'use strict';
let result = 100000000;

const calcDistance = (r1, r2, c1, c2) => {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2);
};

const comb = (cnt, M, idx, chicken, select, house) => {
  if (cnt === M) {
    let sum = 0;
    for (let i = 0; i < house.length; i++) {
      const currentHouse = house[i];
      let min = 50;

      for (let s = 0; s < select.length; s++) {
        if (select[s]) {
          const currentChicken = chicken[s];

          min = Math.min(
            min,
            calcDistance(currentHouse[0], currentChicken[0], currentHouse[1], currentChicken[1])
          );
        }
      }
      sum += min;
    }

    result = Math.min(result, sum);
    return;
  }

  if (idx >= select.length) {
    return;
  }

  select[idx] = true;
  comb(cnt + 1, M, idx + 1, chicken, select, house);
  select[idx] = false;
  comb(cnt, M, idx + 1, chicken, select, house);
};

const main = (function () {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [N, M] = input[0].trim().split(' ').map(Number);
  const map = [];
  const house = [];
  const chicken = [];

  for (let i = 0; i < N; i++) {
    const temp = input[1 + i].trim().split(' ').map(Number);
    map.push(temp);
    for (let j = 0; j < N; j++) {
      if (temp[j] === 1) {
        house.push([i, j]);
      }
      if (temp[j] === 2) {
        chicken.push([i, j]);
      }
    }
  }
  comb(0, M, 0, chicken, Array(chicken.length).fill(false), house);
  console.log(result);
})();
