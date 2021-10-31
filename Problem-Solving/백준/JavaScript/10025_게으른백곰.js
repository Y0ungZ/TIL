'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = input[0].trim().split(' ').map(Number);
const arr = Array.from({ length: 1000001 }, () => 0);

for (let i = 0; i < N; i++) {
  const [g, x] = input[1 + i].trim().split(' ').map(Number);
  arr[x] = g;
}

K = 2 * K + 1;

let sum = 0;
let result = 0;
for (let i = 0; i < 1000001; i++) {
  if (i >= K) {
    sum -= arr[i - K];
  }
  sum += arr[i];
  result = Math.max(result, sum);
}

console.log(result);
