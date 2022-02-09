'use strict';

const main = (function () {
  const fs = require('fs');
  const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

  const number = [];

  for (let i = 2; i <= N; i++) {
    number.push(false);
  }

  let lastNumber = 0;
  let current = 0;
  let flag = false;

  for (let i = 2; i <= N; i++) {
    for (let j = i; j <= N; j += i) {
      if (!number[j]) {
        number[j] = true;
        current++;
      }
      if (current === K) {
        lastNumber = j;
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }
  console.log(lastNumber);
})();
