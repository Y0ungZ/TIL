'use strict';

const installed = function thisDistanceInstallCount(distance, house) {
  let count = 1;
  let beforeVisit = house[0];

  for (let i = 1; i < house.length; i++) {
    let current = house[i];

    if (current - beforeVisit >= distance) {
      count++;
      beforeVisit = current;
    }
  }

  return count;
};

(function Solution() {
  const fs = require('fs');

  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const [N, C] = input[0].trim().split(' ').map(Number);
  const house = [];

  for (let i = 0; i < N; i++) {
    house.push(+input[1 + i].trim());
  }

  house.sort((a, b) => a - b);

  let start = 1;
  let end = house[N - 1] - house[0];
  let result = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (installed(mid, house) < C) {
      //공유기 설치 수가 C보다 작으면 거리를 좁혀여함.
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }

  console.log(result);
})();
