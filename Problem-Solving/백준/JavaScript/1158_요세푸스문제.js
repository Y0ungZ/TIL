"use strict";

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();
const [N, K] = input.split(" ").map(Number);
const queue = [];
let result = "<";

for (let i = 0; i < N; i++) {
  queue.push(i + 1);
}
//shift연산은 시간 효율이 낮음.
while (queue.length !== 0) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }
  result += `${queue.shift()}, `;
}
result = result.slice(0, result.length - 2);
result += `>`;
console.log(result);
