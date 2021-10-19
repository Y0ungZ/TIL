"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].trim().split(" ").map(Number);
const table = Array.from({ length: N }, () => 0);
const eat = Array.from({ length: N }, () => false);
const temp = input[1].trim();

for (let i = 0; i < N; i++) {
  table[i] = temp[i];
}

let people = 0;
for (let i = 0; i < N; i++) {
  if (table[i] === "P") {
    for (let j = i - K; j <= i + K; j++) {
      if (j < 0 || j >= N) continue;
      if (!eat[j] && table[j] === "H") {
        eat[j] = true;
        people++;
        break;
      }
    }
  }
}

console.log(people);
