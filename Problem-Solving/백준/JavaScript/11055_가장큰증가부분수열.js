"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0].trim());
const dp = Array.from({ length: N }, () => 0);
const num = input[1].trim().split(" ").map(Number);
let result = 0;

for (let i = 0; i < N; i++) {
  dp[i] = num[i];
  for (let j = 0; j < i; j++) {
    if (num[i] > num[j] && dp[i] < dp[j] + num[i]) {
      dp[i] = dp[j] + num[i];
    }
  }
  result = Math.max(result, dp[i]);
}

console.log(result);
