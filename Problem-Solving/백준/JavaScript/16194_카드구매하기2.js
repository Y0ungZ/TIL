'use strict';

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0].trim());
const num = Array.from({ length: N + 1 }, () => 0);
const dp = Array.from({ length: N + 1 }, () => 0);
const temp = input[1].trim().split(' ');

for (let i = 1; i <= N; i++) {
  num[i] = Number(temp[i - 1]);
}

dp[1] = num[1];

for (let i = 2; i <= N; i++) {
  let calcDP = 1000000;

  for (let j = 1; j <= i; j++) {
    let temp = i - j;
    calcDP = Math.min(calcDP, dp[temp] + num[j]);
  }

  dp[i] = calcDP;
}

console.log(dp[N]);
