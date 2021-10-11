"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].trim().split(" ").map(Number);
const num = [];
const temp = input[1].trim().split(" ");

for (let i = 0; i < N; i++) {
  num.push(Number(temp[i]));
}

let result = -10000000;
let sum = 0;
let index = 0;
for (let i = 0; i < N; i++) {
  sum += num[i];
  index++;
  if (index === K) {
    result = Math.max(result, sum);
    sum -= num[i - K + 1];
    index--;
  }
}

console.log(result);
