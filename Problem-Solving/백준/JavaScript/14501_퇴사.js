"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0].trim());
const T = [];
const P = [];
const dp = [];

for (let i = 0; i < N; i++) {
  const [t, p] = input[1 + i].trim().split(" ").map(Number);
  T.push(t);
  P.push(p);
  dp.push(0);
}

dp.push(0);

let result = 0;

for (let i = 0; i < N; i++) {
  if (i + T[i] <= N) {
    dp[i + T[i]] = Math.max(dp[i + T[i]], dp[i] + P[i]);
    result = Math.max(result, dp[i + T[i]]);
  }
  dp[i + 1] = Math.max(dp[i + 1], dp[i]);
  result = Math.max(result, dp[i + 1]);
}

console.log(result);
