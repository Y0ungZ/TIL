"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0].trim());
const num = [];
const dp = [];
const temp = input[1].trim().split(" ").map(Number);
for (let i = 0; i < N; i++) {
  num.push(temp[i]);
  dp.push(0);
}

let result = 0;
for (let i = 0; i < N; i++) {
  dp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (num[i] < num[j] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
    }
  }
  result = Math.max(result, dp[i]);
}

console.log(result);
