"use strict";

const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
let index = 1;
let word = Array.from({ length: N }, () => input[index++].trim());

word = word.sort();

let result = 0;

for (let i = 0; i < N; i++) {
  const one = word[i];
  let flag = false;
  for (let j = i + 1; j < N; j++) {
    const two = word[j];
    if (two.startsWith(one)) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    result++;
  }
}

console.log(result);
