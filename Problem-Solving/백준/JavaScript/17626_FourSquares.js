"use strict";

const fs = require("fs");

const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const num = Array.from({ length: 224 }, () => 0);
const dp = Array.from({ length: N + 1 }, () => 0);

dp[1] = 1;

for (let i = 0; i < 224; i++) {
  num[i] = i * i;
}

const MAX_VALUE = 10000;

for (let i = 2; i <= N; i++) {
  let calcDP = MAX_VALUE;

  for (let j = 1; num[j] <= i; j++) {
    let temp = i - num[j];
    calcDP = Math.min(calcDP, dp[temp]);
  }
  dp[i] = calcDP + 1;
}

console.log(dp[N]);
