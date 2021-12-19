'use strict';

const fs = require('fs');

const N = Number(fs.readFileSync('/dev/stdin').toString().trim());
const d = Array.from({ length: N + 1 }, () => 1000000);

d[1] = 0;

for (let i = 2; i <= N; i++) {
  let temp = 1000000;
  if (i % 3 === 0 && d[i / 3] + 1 < temp) {
    temp = d[i / 3] + 1;
  }
  if (i % 2 === 0 && d[i / 2] + 1 < temp) {
    temp = d[i / 2] + 1;
  }
  if (d[i - 1] + 1 < temp) {
    temp = d[i - 1] + 1;
  }
  d[i] = temp;
}

console.log(d[N]);
