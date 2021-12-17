'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0].trim());
const grape = [0];
const dp = Array.from({ length: N + 1 }, () => 0);

for (let i = 0; i < N; i++) {
  grape.push(Number(input[1 + i].trim()));
}

dp[0] = 0;
dp[1] = grape[1];
dp[2] = grape[1] + grape[2];

if (N > 2) {
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + grape[i], dp[i - 3] + grape[i - 1] + grape[i]);
  }
}

console.log(dp[N]);
