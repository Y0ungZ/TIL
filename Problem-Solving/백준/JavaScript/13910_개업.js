"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].trim().split(" ").map(Number);
const temp = input[1].trim().split(" ");
const wok = [];
const cook = Array.from({ length: N + 1 }, () => false);
const dp = Array.from({ length: N + 1 }, () => 100000);
dp[0] = 0;
for (let i = 0; i < M; i++) {
  wok.push(Number(temp[i]));
}

for (let i = 0; i < M; i++) {
  let one = wok[i];
  if (one > N) {
    continue;
  }
  cook[one] = true;
  for (let j = i + 1; j < M; j++) {
    let two = one + wok[j];
    if (two > N) {
      continue;
    }
    cook[two] = true;
  }
}

for (let i = 1; i <= N; i++) {
  if (!cook[i]) {
    continue;
  }
  for (let j = i; j <= N; j++) {
    dp[j] = Math.min(dp[j], dp[j - i] + 1);
  }
}

if (dp[N] === 100000) {
  console.log(-1);
} else {
  console.log(dp[N]);
}
